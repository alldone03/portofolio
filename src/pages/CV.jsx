import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { PROFILE_DATA } from "../utils/constants";

const CV = () => {
    const { t } = useTranslation();
    const experiences = t('experience.items', { returnObjects: true });
    const education = t('education.items', { returnObjects: true });
    const organizations = t('organization.items', { returnObjects: true });
    const hardSkills = t('skills.hard', { returnObjects: true });
    const softSkills = t('skills.soft', { returnObjects: true });
    const projects = t('projects.items', { returnObjects: true });
    const certifications = t('certifications.items', { returnObjects: true });

    return (
        <div className="bg-white min-h-screen text-black font-sans p-8 md:p-16 print:p-0 leading-tight">
            <Helmet>
                <title>CV | {t('profile.name')}</title>
            </Helmet>

            {/* Print Controls - Hidden when printing */}
            <div className="fixed bottom-8 right-8 print:hidden z-50">
                <button
                    onClick={() => window.print()}
                    className="btn btn-primary shadow-lg rounded-full px-6 flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Save as PDF
                </button>
            </div>

            <div className="max-w-4xl mx-auto bg-white print:max-w-none">
                {/* Header */}
                <header className="border-b-2 border-gray-800 pb-6 mb-6">
                    <h1 className="text-4xl font-bold uppercase tracking-wider mb-2">{t('profile.name')}</h1>
                    <h2 className="text-xl font-medium text-gray-700 mb-4">{t('profile.role')}</h2>

                    <div className="flex flex-wrap gap-1 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                            <span className="font-bold">Email:</span>
                            <a href={`mailto:${PROFILE_DATA.email}`}>{PROFILE_DATA.email}</a>
                        </div>
                        {PROFILE_DATA.socials.map((social, index) => (
                            <div key={index} className="flex items-center gap-1">
                                <span className="font-bold">{social.name}:</span>
                                <a href={social.url} className="hover:underline">{social.url}</a>
                            </div>
                        ))}
                    </div>
                </header>

                {/* Summary */}
                <section className="mb-6">
                    <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-3 pb-1">{t('cv.summary')}</h3>
                    <p className="text-sm leading-relaxed text-justify text-gray-800">
                        {t('profile.description')}
                    </p>
                </section>

                {/* Experience */}
                <section className="mb-6  ">
                    <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 pb-1">{t('cv.experience')}</h3>
                    <div className="space-y-5">
                        {experiences.map((exp, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h4 className="font-bold text-gray-900">{exp.role}</h4>
                                    <span className="text-sm font-medium text-gray-600 whitespace-nowrap ml-4">{exp.period}</span>
                                </div>
                                <div className="text-sm font-semibold text-gray-700 mb-2">{exp.company}</div>
                                {Array.isArray(exp.description) ? (
                                    <ul className="list-disc list-inside text-sm text-gray-800 leading-relaxed space-y-1">
                                        {exp.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">
                                        {exp.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                {education && (
                    <section className="mb-6">
                        <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 pb-1">{t('cv.education')}</h3>
                        <div className="space-y-4">
                            {education.map((edu, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="font-bold text-gray-900">{edu.school}</h4>
                                        <span className="text-sm font-medium text-gray-600 whitespace-nowrap ml-4">{edu.period}</span>
                                    </div>
                                    <div className="text-sm text-gray-800">
                                        <span className="font-semibold">{edu.degree}</span>
                                        {edu.gpa && <span> • GPA: {edu.gpa}</span>}
                                    </div>
                                    <p className="text-sm text-gray-700 mt-1 italic">{edu.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Organization Experience */}
                {organizations && (
                    <section className="mb-6">
                        <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 pb-1">{t('cv.organization')}</h3>
                        <div className="space-y-4">
                            {organizations.map((org, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="font-bold text-gray-900">{org.name}</h4>
                                        <span className="text-sm font-medium text-gray-600 whitespace-nowrap ml-4">{org.period}</span>
                                    </div>
                                    <div className="text-sm font-semibold text-gray-700 mb-1">{org.role}</div>
                                    <p className="text-sm text-gray-800 leading-relaxed">
                                        {org.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Skills */}
                <section className="mb-6">
                    <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 pb-1">{t('cv.skills')}</h3>
                    <div className="grid grid-cols-1 gap-y-2">
                        <div>
                            <span className="font-bold text-sm text-gray-900">{t('cv.skills_hard')}: </span>
                            <span className="text-sm text-gray-800">{hardSkills.join(", ")}</span>
                        </div>
                        <div>
                            <span className="font-bold text-sm text-gray-900">{t('cv.skills_soft')}: </span>
                            <span className="text-sm text-gray-800">{softSkills.join(", ")}</span>
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section className="mb-6" style={{ pageBreakInside: 'avoid' }}>
                    <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 pb-1">{t('cv.projects')}</h3>
                    <div className="space-y-4">
                        {projects.slice(0, 4).map((project, index) => (
                            <div key={index}>
                                <h4 className="font-bold text-sm text-gray-900 mb-1">
                                    {project.title} {project.year && <span>({project.year})</span>} <span className="font-normal text-gray-600 text-xs">| {project.tags.join(", ")}</span>
                                </h4>
                                <p className="text-sm text-gray-800 leading-snug">
                                    {project.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certifications (Compact) */}
                <section className="mb-6" style={{ pageBreakInside: 'avoid' }}>
                    <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 pb-1">{t('cv.certifications')}</h3>
                    <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                        {certifications.map((cert, index) => (
                            <li key={index}>
                                <span className="font-bold inline-flex items-center gap-1 align-bottom">
                                    {cert.title}
                                    {cert.link && cert.link !== "#" && (
                                        <a href={cert.link} target="_blank" rel="noopener noreferrer" title="View Certificate">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 hover:text-blue-700 transition-colors" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    )}
                                </span> - {cert.issuer} ({cert.year})
                            </li>
                        ))}
                    </ul>
                </section>

            </div>
        </div>
    );
};

export default CV;
