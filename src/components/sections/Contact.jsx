import { useTranslation } from "react-i18next";
import { PROFILE_DATA } from "../../utils/constants";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16" data-aos="fade-up">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">{t('contact.title')}</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-center">{t('contact.subtitle')}</h3>
                    <div className="w-20 h-1.5 bg-primary rounded-full mt-6"></div>
                </div>

                <div className="max-w-6xl mx-auto shadow-2xl rounded-[3rem] overflow-hidden bg-white border border-gray-100">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-2/5 bg-primary p-12 lg:p-16 text-white flex flex-col justify-between">
                            <div>
                                <h4 className="text-3xl font-bold mb-6">Contact Information</h4>
                                <p className="opacity-80 mb-10 leading-relaxed text-lg">
                                    Fill out the form and I will get back to you within 24 hours.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-center gap-6 group cursor-pointer">
                                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-60 font-bold uppercase tracking-widest mb-1">{t('contact.email')}</p>
                                            <p className="font-bold text-lg">{PROFILE_DATA.email}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6 group cursor-pointer">
                                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-60 font-bold uppercase tracking-widest mb-1">Locate Me</p>
                                            <p className="font-bold text-lg">Bojonegoro, Indonesia</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 flex gap-4">
                                {PROFILE_DATA.socials.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
                                    >
                                        <span className="sr-only">{social.name}</span>
                                        <img src={social.icon} alt={social.name} className="w-6 h-6  " />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-3/5 p-12 lg:p-16">
                            <form className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">{t('contact.form.name')}</label>
                                        <input type="text" placeholder="John Doe" className="input input-bordered w-full bg-gray-50 border-none focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all rounded-2xl p-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">{t('contact.form.email')}</label>
                                        <input type="email" placeholder="john@example.com" className="input input-bordered w-full bg-gray-50 border-none focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all rounded-2xl p-6" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Subject</label>
                                    <input type="text" placeholder="Project Inquiry" className="input input-bordered w-full bg-gray-50 border-none focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all rounded-2xl p-6" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">{t('contact.form.message')}</label>
                                    <textarea placeholder="Tell me about your project..." className="textarea textarea-bordered w-full bg-gray-50 border-none focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all rounded-2xl p-6 min-h-[150px]"></textarea>
                                </div>
                                <button type="button" className="btn btn-primary btn-lg w-full rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
                                    {t('contact.form.submit')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
