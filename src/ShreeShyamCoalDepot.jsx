import React, { useState, useEffect } from 'react';
import axios from "axios"
import { Check } from 'lucide-react';
import { API_URL } from "./config";
import { Loader } from 'lucide-react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";


export default function ShreeShyamCoalDepot() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [location, setLocation] = useState("")
    const [details, setDetails] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    useEffect(() => {
        if (error?.toLowerCase().includes("success")) {
            const timer = setTimeout(() => {
                setError(""); // or however you clear the error state
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, [error]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 70;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
            setMobileMenuOpen(false);
        }
    };


    const sendFeedback = async (e) => {
        e.preventDefault();
        setIsLoading(true)

        if (!name.trim() || !phone || !location.trim() || !details.trim());

        try {
            const res = await axios.post(`${API_URL}/api/send`, {
                name,
                phone,
                location,
                details,
            })
            setError("Feedback Sent Successfully ");
            console.log("Success:", res.data);
            setName("");
            setPhone("");
            setLocation("");
            setDetails("");
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong");
            console.log("Error:", err.response?.data?.message);
        }
        setIsLoading(false)
    }

    return (
        <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-950 to-black text-gray-50">
            {/* Header */}
            <header className="sticky top-0 z-20 backdrop-blur-xl bg-linear-to-b from-slate-900/98 via-slate-900/85 to-transparent border-b border-gray-800/85">
                <div className="max-w-[1120px] mx-auto px-5">
                    <nav className="flex items-center justify-between py-3.5 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-[38px] h-[38px] rounded-2xl bg-linear-to-br from-amber-400 via-amber-500 to-amber-900 flex items-center justify-center shadow-lg shadow-amber-500/55 font-extrabold text-gray-900">
                                SS
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="text-base font-bold">Shree Shyam Coal Depot</span>
                                <span className="text-[0.74rem] text-gray-400 uppercase tracking-wider">
                                    Coal & Imported Coal Trading · Delhi
                                </span>
                            </div>
                        </div>

                        <button
                            className="lg:hidden text-xl text-gray-50"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            ☰
                        </button>

                        <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} lg:flex fixed lg:relative inset-x-0 top-14 lg:top-0 bg-slate-900/98 lg:bg-transparent border-b lg:border-0 border-gray-800 p-5 lg:p-0 flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-6 text-sm`}>
                            <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-gray-50 transition-colors relative pb-0.5">
                                About
                            </button>
                            <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-gray-50 transition-colors relative pb-0.5">
                                Products & Services
                            </button>
                            <button onClick={() => scrollToSection('why-us')} className="text-gray-400 hover:text-gray-50 transition-colors relative pb-0.5">
                                Why Us
                            </button>
                            <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-gray-50 transition-colors relative pb-0.5">
                                Contact
                            </button>
                        </div>

                        <div className="hidden lg:flex items-center gap-3">
                            <div className="text-right text-xs text-gray-400">
                                <span className="block">Call for supply</span>
                                <strong className="block text-gray-50 text-sm">+91-98184-25881</strong>
                            </div>
                            <button onClick={() => scrollToSection('contact')} className="px-6 py-2.5 rounded-full border border-gray-700 bg-transparent text-gray-50 hover:bg-slate-900/90 transition-all text-xs font-semibold">
                                Request a Quote
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            <section className="py-16" id="home">
                <div className="max-w-[1120px] mx-auto px-5">
                    <div className="grid lg:grid-cols-11 gap-10 items-center">
                        <div className="lg:col-span-6">
                            <span className="inline-flex px-3 py-1 rounded-full border border-gray-50/12 text-xs tracking-wider uppercase text-gray-400 bg-slate-900/80 backdrop-blur-sm">
                                Coal & Imported Coal Traders · Delhi-NCR
                            </span>
                            <h1 className="text-4xl lg:text-5xl font-bold mt-3 mb-2.5 tracking-tight">
                                Reliable <span className="bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Coal & Imported Coal</span> Supply for Brick Kilns & Industries.
                            </h1>
                            <p className="text-gray-400 max-w-xl">
                                <strong className="text-gray-300">Shree Shyam Coal Depot</strong> supplies screened Indian coal and high-calorific imported coal (including USA origin) to brick kilns and industrial customers across Delhi-NCR and nearby Haryana – with transparent deals and timely delivery.
                            </p>

                            <div className="flex flex-wrap gap-3 mt-6 items-center">
                                <a href="tel:+919818425881" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-linear-to-r from-amber-500 to-orange-600 text-gray-900 font-semibold text-sm shadow-lg shadow-amber-500/35 hover:shadow-amber-500/45 hover:-translate-y-0.5 transition-all">
                                    📞 Call Now for Rates
                                </a>
                                <button onClick={() => scrollToSection('services')} className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-700 bg-transparent text-gray-50 hover:bg-slate-900/90 transition-all text-sm font-semibold">
                                    View Products & Services
                                </button>
                            </div>

                            <div className="flex flex-wrap gap-3 mt-5">
                                <div className="text-xs text-gray-400 inline-flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                    Live supply to Delhi-NCR & nearby Haryana
                                </div>
                                <div className="text-xs text-gray-400 inline-flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                    Online / RTGS / Cheque payments accepted
                                </div>
                            </div>
                        </div>

                        <aside className="lg:col-span-5 rounded-3xl p-5 bg-linear-to-br from-amber-500/22 via-transparent to-blue-600/22 bg-slate-900/90 border border-gray-700/90 shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-br from-gray-50/12 via-transparent to-slate-900/80 opacity-35 mix-blend-soft-light pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-center mb-3.5">
                                    <div className="text-sm font-semibold flex items-center gap-1.5">
                                        📊 Supply Snapshot
                                        <span className="text-[0.7rem] px-2 py-0.5 rounded-full bg-slate-900/90 border border-gray-700/90 text-gray-400 uppercase tracking-wider">
                                            Brick Kiln & Industrial Grade
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-3.5">
                                    <div className="rounded-2xl p-3 bg-slate-900/82 border border-gray-700/85 text-xs">
                                        <h4 className="text-sm mb-0.5">Key Products</h4>
                                        <ul className="text-xs text-gray-400 space-y-1 mt-1">
                                            <li className="before:content-['•'] before:mr-1.5 before:text-amber-400">Indian Steam / Thermal Coal</li>
                                            <li className="before:content-['•'] before:mr-1.5 before:text-amber-400">Imported High CV Coal (USA, others)</li>
                                            <li className="before:content-['•'] before:mr-1.5 before:text-amber-400">Screened & Sized Coal for Bhattas</li>
                                        </ul>
                                    </div>
                                    <div className="rounded-2xl p-3 bg-slate-900/82 border border-gray-700/85 text-xs">
                                        <h4 className="text-sm mb-0.5">Service Areas</h4>
                                        <ul className="text-xs text-gray-400 space-y-1 mt-1">
                                            <li className="before:content-['•'] before:mr-1.5 before:text-amber-400">Delhi & Delhi-NCR</li>
                                            <li className="before:content-['•'] before:mr-1.5 before:text-amber-400">Nearby Haryana (incl. brick kiln hubs)</li>
                                            <li className="before:content-['•'] before:mr-1.5 before:text-amber-400">Direct supply from trusted sources</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mt-4 text-xs text-gray-400">
                                    <span>GSTIN: <strong className="text-gray-300">07CNKPV4605D1ZW</strong></span>
                                    <span>Shree Shyam Coal Depot · New Delhi</span>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="py-16" id="about">
                <div className="max-w-[1120px] mx-auto px-5">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <div className="text-xs uppercase tracking-widest text-gray-400 mb-1">About Us</div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Trusted Coal Partner for Delhi & Surrounding Markets</h2>
                            <p className="text-gray-400 text-sm">
                                Shree Shyam Coal Depot is based in Delhi, India and focuses on supplying consistent-quality coal to brick kilns and industrial customers. We understand that for bhattas and factories, <strong className="text-gray-300">quality, CV and timely delivery</strong> matters more than anything.
                            </p>
                            <p className="mt-4 text-sm text-gray-400">
                                We work with trusted suppliers and importers to source both domestic and imported coal – including USA high CV coal – and supply it as per your requirements, ensuring proper documentation, GST billing and transparent weight and quality.
                            </p>

                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-900/90 border border-gray-700 text-xs text-gray-400">
                                    <span className="w-2 h-2 rounded-full bg-green-500 shadow-lg shadow-green-500/25"></span>
                                    Focus on brick kiln needs
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-900/90 border border-gray-700 text-xs text-gray-400">
                                    🧾 GST invoice & documentation
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-900/90 border border-gray-700 text-xs text-gray-400">
                                    🚚 Flexible delivery arrangements
                                </span>
                            </div>
                        </div>

                        <div className="rounded-2xl p-5 bg-linear-to-br from-amber-500/18 via-transparent to-transparent bg-slate-900/98 border border-gray-700 shadow-2xl text-sm text-gray-400 space-y-2.5">
                            <div className="flex justify-between gap-4 flex-wrap text-xs">
                                <div className="flex flex-col gap-0.5 min-w-[120px]">
                                    <span className="text-[0.7rem] uppercase tracking-wider text-gray-400">Location</span>
                                    <strong className="text-base text-gray-50">Delhi, India</strong>
                                    <span>V.P.O Ujwa, Near Prachin Shiv Mandir, New Delhi – 110073</span>
                                </div>
                                <div className="flex flex-col gap-0.5 min-w-[120px]">
                                    <span className="text-[0.7rem] uppercase tracking-wider text-gray-400">Business Type</span>
                                    <strong className="text-base text-gray-50">Coal & Imported Coal Trading</strong>
                                    <span>Retail & bulk supply for bhattas and industries.</span>
                                </div>
                            </div>
                            <div className="flex justify-between gap-4 flex-wrap text-xs pt-3">
                                <div className="flex flex-col gap-0.5 min-w-[120px]">
                                    <span className="text-[0.7rem] uppercase tracking-wider text-gray-400">GSTIN</span>
                                    <strong className="text-base text-gray-50">07CNKPV4605D1ZW</strong>
                                    <span>Registered for coal trading in Delhi.</span>
                                </div>
                                <div className="flex flex-col gap-0.5 min-w-[120px]">
                                    <span className="text-[0.7rem] uppercase tracking-wider text-gray-400">Contact</span>
                                    <strong className="text-base text-gray-50">+91-98184-25881</strong>
                                    <span>Also: +91-93102-06763</span>
                                </div>
                            </div>
                            <p className="pt-1">
                                For rates, samples and detailed CV / GCV specifications for imported coal, connect with us on call or email. We discuss your kiln / plant requirement and match the right grade.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products & Services */}
            <section className="py-16" id="services">
                <div className="max-w-[1120px] mx-auto px-5">
                    <div className="text-center mb-11">
                        <div className="text-xs uppercase tracking-widest text-gray-400 mb-1">Products & Services</div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-3">Coal Grades & Solutions We Provide</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm">
                            From domestic steam coal for brick kilns to high CV imported coal for special requirements, we can tailor supply to your use case and budget.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="rounded-2xl p-6 bg-linear-to-br from-gray-900/96 to-slate-900 border border-gray-800/95 shadow-2xl relative overflow-hidden group hover:border-gray-700/50 transition-all">
                            <div className="absolute inset-0 bg-linear-to-br from-amber-500/12 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                            <div className="relative z-10">
                                <div className="text-xs uppercase tracking-wider text-gray-400 mb-0.5">Domestic Coal</div>
                                <h3 className="text-base font-bold mb-1.5">Indian Steam / Thermal Coal</h3>
                                <p className="text-sm text-gray-400">
                                    Consistent Indian coal for brick kilns and small industries, supplied with proper billing and clear quality communication.
                                </p>
                                <ul className="mt-2.5 text-xs text-gray-400 space-y-1">
                                    <li className="before:content-['›'] before:mr-1.5 before:text-amber-400">Grades suitable for brick kilns (bhattas)</li>
                                    <li className="before:content-['›'] before:mr-1.5 before:text-amber-400">Screening & sizing options as per requirement</li>
                                    <li className="before:content-['›'] before:mr-1.5 before:text-amber-400">Ideal for Delhi-NCR & nearby Haryana markets</li>
                                </ul>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-gray-700 text-xs text-gray-400">
                                        Suitable for bhattas
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-gray-700 text-xs text-gray-400">
                                        Consistent supply
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-linear-to-br from-gray-900/96 to-slate-900 border border-gray-800/95 shadow-2xl relative overflow-hidden group hover:border-gray-700/50 transition-all">
                            <div className="absolute inset-0 bg-linear-to-br from-amber-500/12 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                            <div className="relative z-10">
                                <div className="text-xs uppercase tracking-wider text-gray-400 mb-0.5">Imported Coal</div>
                                <h3 className="text-base font-bold mb-1.5">High CV Imported Coal (incl. USA)</h3>
                                <p className="text-sm text-gray-400">
                                    Imported high calorific value coal for clients needing higher CV & more efficient burning – ideal for specific kiln / industrial uses.
                                </p>
                                <ul className="mt-2.5 text-xs text-gray-400 space-y-1">
                                    <li className="before:content-['›'] before:mr-1.5 before:text-amber-400">USA origin and other imported coal options</li>
                                    <li className="before:content-['›'] before:mr-1.5 before:text-amber-400">Suitable for high CV requirement customers</li>
                                    <li className="before:content-['›'] before:mr-1.5 before:text-amber-400">Detailed CV / specifications shared on request</li>
                                </ul>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-gray-700 text-xs text-gray-400">
                                        High CV options
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-gray-700 text-xs text-gray-400">
                                        Documents & CV details
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-linear-to-br from-gray-900/96 to-slate-900 border border-gray-800/95 shadow-2xl relative overflow-hidden group hover:border-gray-700/50 transition-all">
                            <div className="absolute inset-0 bg-linear-to-br from-amber-500/12 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                            <div className="relative z-10">
                                <div className="text-xs uppercase tracking-wider text-gray-400 mb-0.5">Services</div>
                                <h3 className="text-base font-bold mb-1.5">End-to-End Supply Coordination</h3>
                                <p className="text-sm text-gray-400">
                                    We help manage the entire cycle – from sourcing and rate finalisation to delivery coordination and payment terms.
                                </p>
                                <ul className="mt-2.5 text-xs text-gray-400 space-y-1">
                                    <li className="before:content-['›'] before:mr-1.5 before:text-amber-400">Rate discussion & customised quotes</li>
                                    <li className="before:content-['›'] before:mr-1.5 before:text-amber-400">Flexible advance / credit terms (as mutually decided)</li>
                                    <li className="before:content-['›'] before:mr-1.5 before:text-amber-400">Online / RTGS / cheque payment support</li>
                                </ul>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-gray-700 text-xs text-gray-400">
                                        Transparent deals
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-gray-700 text-xs text-gray-400">
                                        Flexible terms
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="py-16" id="why-us">
                <div className="max-w-[1120px] mx-auto px-5">
                    <div className="text-center mb-11">
                        <div className="text-xs uppercase tracking-widest text-gray-400 mb-1">Why Choose Us</div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-3">Straightforward Coal Business, Zero Confusion</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm">
                            We focus on clear communication, honest rates and long-term relationships with brick kiln and industrial buyers.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="rounded-2xl p-6 bg-linear-to-br from-gray-900/96 to-slate-900 border border-gray-800/95 shadow-2xl relative overflow-hidden group hover:border-gray-700/50 transition-all">
                            <div className="absolute inset-0 bg-linear-to-br from-amber-500/12 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                            <div className="relative z-10">
                                <span className="inline-flex items-center justify-center gap-1.5 px-2 py-1 rounded-full border border-gray-700/90 text-[0.7rem] text-gray-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                                    Quality & Clarity
                                </span>
                                <h3 className="text-base font-bold mt-1.5 mb-1.5">Transparent Quality</h3>
                                <p className="text-sm text-gray-400">
                                    We clearly share expected CV / quality range and discuss what suits your kiln / plant before finalising the deal.
                                </p>
                                <ul className="mt-2.5 text-xs text-gray-400 space-y-1">
                                    <li className="before:content-['›'] before:mr-1.5 before:text-amber-400">Honest discussion about coal quality</li>
                                    <li className="before:content-['›'] before:mr-1.5 before:text-amber-400">Focus on performance in bhattas</li>
                                    <li className="before:content-['›'] before:mr-1.5 before:text-amber-400">No hidden terms</li>
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-linear-to-br from-gray-900/96 to-slate-900 border border-gray-800/95 shadow-2xl relative overflow-hidden group hover:border-gray-700/50 transition-all">
                            <div className="absolute inset-0 bg-linear-to-br from-amber-500/12 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                            <div className="relative z-10">
                                <span className="inline-flex items-center justify-center gap-1.5 px-2 py-1 rounded-full border border-gray-700/90 text-[0.7rem] text-gray-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                                    Documentation
                                </span>
                                <h3 className="text-base font-bold mt-1.5 mb-1.5">Proper GST Billing</h3>
                                <p className="text-sm text-gray-400">
                                    Every supply is backed by clear documentation – GST invoices, payment proofs and deal terms agreed via written communication.
                                </p>
                                <ul className="mt-2.5 text-xs text-gray-400 space-y-1">
                                    <li className="before:content-['›'] before:mr-1.5 before:text-amber-400">GST-compliant invoices</li>
                                    <li className="before:content-['›'] before:mr-1.5 before:text-amber-400">Online / RTGS / NEFT / cheque payments</li>
                                    <li className="before:content-['›'] before:mr-1.5 before:text-amber-400">Paper-trail for comfort & trust</li>
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-linear-to-br from-gray-900/96 to-slate-900 border border-gray-800/95 shadow-2xl relative overflow-hidden group hover:border-gray-700/50 transition-all">
                            <div className="absolute inset-0 bg-linear-to-br from-amber-500/12 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                            <div className="relative z-10">
                                <span className="inline-flex items-center justify-center gap-1.5 px-2 py-1 rounded-full border border-gray-700/90 text-[0.7rem] text-gray-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                                    Support
                                </span>
                                <h3 className="text-base font-bold mt-1.5 mb-1.5">Long-Term Relationship</h3>
                                <p className="text-sm text-gray-400">
                                    We aim to be your regular coal partner, not just a one-time seller – so we give importance to service and reliability.
                                </p>
                                <ul className="mt-2.5 text-xs text-gray-400 space-y-1">
                                    <li className="before:content-['›'] before:mr-1.5 before:text-amber-400">Dedicated contact for your account</li>
                                    <li className="before:content-['›'] before:mr-1.5 before:text-amber-400">Consistent communication on deliveries</li>
                                    <li className="before:content-['›'] before:mr-1.5 before:text-amber-400">Support for future planning & requirements</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="py-16" id="contact">
                <div className="max-w-[1120px] mx-auto px-5">
                    <div className="text-center mb-11">
                        <div className="text-xs uppercase tracking-widest text-gray-400 mb-1">Contact</div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-3">Call or Write to Discuss Your Requirement</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm">
                            Share your kiln / industrial requirement, location and monthly consumption – we'll get back with suitable grades, rates and supply options.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-11 gap-7">
                        <div className="lg:col-span-6 rounded-2xl p-6 bg-linear-to-br from-blue-600/20 via-transparent to-transparent bg-slate-900/96 border border-gray-800/95 shadow-2xl text-sm text-gray-400">
                            <h3 className="text-base font-bold mb-1.5 text-gray-50">Business Address & Details</h3>
                            <div className="space-y-3.5 text-sm">
                                <div>
                                    <span className="text-xs uppercase tracking-wider text-gray-400">Business Name</span><br />
                                    Shree Shyam Coal Depot
                                </div>
                                <div>
                                    <span className="text-xs uppercase tracking-wider text-gray-400">Address</span><br />
                                    V.P.O Ujwa, Near Prachin Shiv Mandir,<br />
                                    New Delhi – 110073, India
                                </div>
                                <div>
                                    <span className="text-xs uppercase tracking-wider text-gray-400">GSTIN</span><br />
                                    07CNKPV4605D1ZW
                                </div>
                                <div>
                                    <span className="text-xs uppercase tracking-wider text-gray-400">Phone</span><br />
                                    <a href="tel:+919818425881" className="underline decoration-gray-600 underline-offset-2 hover:text-gray-200">+91-98184-25881</a> /
                                    <a href="tel:+919310206763" className="underline decoration-gray-600 underline-offset-2 hover:text-gray-200"> +91-93102-06763</a>
                                </div>
                                <div>
                                    <span className="text-xs uppercase tracking-wider text-gray-400">Email</span><br />
                                    <a href="mailto:shreeshyamcoaldepot@gmail.com" className="underline decoration-gray-600 underline-offset-2 hover:text-gray-200">
                                        shreeshyamcoaldepot@gmail.com
                                    </a>
                                </div>
                            </div>
                            <p className="mt-4">
                                For fastest response, please call or send your requirements on WhatsApp with: location, type of use (bhatti / industry) and approx. monthly coal requirement.
                            </p>
                        </div>

                        <div className="lg:col-span-5 rounded-2xl p-6 bg-linear-to-br from-blue-600/20 via-transparent to-transparent bg-slate-900/96 border border-gray-800/95 shadow-2xl text-sm text-gray-400">
                            <h3 className="text-base font-bold mb-1.5 text-gray-50">Quick Enquiry Form</h3>
                            <p className="text-sm mb-4">
                                This is a static form design. You can later connect it with your email, WhatsApp or backend. For now, customers can use the details on the left to contact you.
                            </p>
                            <form onSubmit={sendFeedback} className="space-y-3">
                                <div className="space-y-1">
                                    <label htmlFor="name" className="text-xs text-gray-400">Name</label>
                                    <input value={name} onChange={(e) => setName(e.target.value)}
                                        id="name"
                                        type="text"
                                        placeholder="Your full name"
                                        className="w-full rounded-xl border border-gray-700 px-3 py-2 bg-slate-900/95 text-gray-50 text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/40 transition-all placeholder:text-gray-500"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="phone" className="text-xs text-gray-400">Phone / WhatsApp</label>
                                    <input
                                        value={phone} onChange={(e) => setPhone(e.target.value)}
                                        id="phone"
                                        type="tel"
                                        placeholder="+91-"
                                        className="w-full rounded-xl border border-gray-700 px-3 py-2 bg-slate-900/95 text-gray-50 text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/40 transition-all placeholder:text-gray-500"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="location" className="text-xs text-gray-400">Location</label>
                                    <input value={location} onChange={(e) => setLocation(e.target.value)}
                                        id="location"
                                        type="text"
                                        placeholder="City / Area (e.g., Kheri, Jhajjar, Haryana)"
                                        className="w-full rounded-xl border border-gray-700 px-3 py-2 bg-slate-900/95 text-gray-50 text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/40 transition-all placeholder:text-gray-500"
                                    />
                                </div>
                                <div className="space-y-1 ">
                                    <label htmlFor="requirement" className="text-xs text-gray-400">Requirement Details</label>
                                    <textarea
                                        value={details} onChange={(e) => setDetails(e.target.value)}
                                        id="requirement"
                                        placeholder="Type of coal, approx. quantity per month, any special requirement"
                                        rows="4"
                                        className="w-full rounded-xl border border-gray-700 px-3 py-2 bg-slate-900/95 text-gray-50 text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/40 transition-all placeholder:text-gray-500 resize-y min-h-[110px]"
                                    ></textarea>
                                    {error?.toLowerCase().includes("success") ? (
                                        <button className="bg-green-500 w-full text-center justify-center text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg animate-pulse ">
                                            <Check className="w-5 h-5" />
                                            Feedback Submitted
                                        </button>
                                    ) : (
                                        <span className="text-red-500 text-sm">{error}</span>
                                    )}

                                </div>
                                {isLoading ? <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="inline-flex cursor-pointer items-center justify-center px-6 py-3 rounded-full bg-linear-to-r from-amber-500 to-orange-600 text-gray-900 font-semibold text-sm shadow-lg shadow-amber-500/35 hover:shadow-amber-500/45 hover:-translate-y-0.5 transition-all mt-1 w-full"
                                >    <AiOutlineLoading3Quarters className="animate-spin" />
                                </button> : <button
                                    type="submit"
                                    className="inline-flex cursor-pointer items-center justify-center px-6 py-3 rounded-full bg-linear-to-r from-amber-500 to-orange-600 text-gray-900 font-semibold text-sm shadow-lg shadow-amber-500/35 hover:shadow-amber-500/45 hover:-translate-y-0.5 transition-all mt-1 w-full"
                                >
                                    ✉️ Submit Enquiry
                                </button>}

                                <div className="text-[0.73rem] text-gray-400 mt-1">
                                    Note: This button is for display only. Ask your web developer to connect this form with your preferred email or WhatsApp API.
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-800/95 py-8 text-xs text-gray-400">
                <div className="max-w-[1120px] mx-auto px-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>© {currentYear} Shree Shyam Coal Depot · Delhi, India. All rights reserved.</div>
                        <div className="flex flex-wrap gap-3">
                            <button onClick={() => scrollToSection('home')} className="text-[0.78rem] text-gray-400 hover:text-gray-50 transition-colors">
                                Back to top
                            </button>
                            <a href="tel:+919818425881" className="text-[0.78rem] text-gray-400 hover:text-gray-50 transition-colors">
                                Call: +91-98184-25881
                            </a>
                            <a href="mailto:shreeshyamcoaldepot@gmail.com" className="text-[0.78rem] text-gray-400 hover:text-gray-50 transition-colors">
                                Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}