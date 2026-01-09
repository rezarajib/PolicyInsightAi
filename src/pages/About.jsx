import React from 'react';

const About = () => {
    const skills = [
        { category: "Frontend Development", items: ["React.js", "Tailwind CSS", "DaisyUI", "React Router"], icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
        { category: "Backend & AI Integration", items: ["FastAPI (Basics)", "API Integration", "Prompt Engineering"], icon: "M13 10V3L4 14h7v7l9-11h-7z" },
        { category: "SQA & Testing", items: ["Unit Testing", "Debugging", "Edge Case Analysis"], icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
        { category: "Developer Tools", items: ["Git & GitHub", "VS Code", "Postman"], icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" }
    ];

    return (
        <div className="max-w-6xl mx-auto py-12 px-4 space-y-16 animate-in fade-in duration-700">
            
            {/* ১. প্রোফাইল কার্ড (Hero Section) */}
            <section className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                <div className="relative card lg:card-side bg-white shadow-2xl rounded-[2.5rem] border border-slate-100 overflow-hidden">
                    <figure className="lg:w-2/5 bg-gradient-to-br from-slate-900 to-slate-800 p-12 flex flex-col items-center justify-center text-white relative overflow-hidden">
                        {/* গ্রাফিক ডেকোরেশন */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        
                        <div className="avatar placeholder mb-6 z-10">
                            <div className="bg-white/10 backdrop-blur-md text-white rounded-full w-40 h-40 ring ring-primary ring-offset-base-100 ring-offset-4 shadow-2xl">
                                <span className="text-6xl font-black tracking-tighter">RR</span>
                            </div>
                        </div>
                        <h2 className="text-3xl font-black z-10">Md. Rajib Reza</h2>
                        <p className="text-primary font-bold tracking-widest uppercase text-xs mt-2 z-10">Software Engineer</p>
                        
                        <div className="mt-8 flex gap-3 z-10">
                             <div className="badge badge-primary badge-outline text-white/70 px-4 py-3">React Enthusiast</div>
                             <div className="badge badge-primary badge-outline text-white/70 px-4 py-3">QA Specialist</div>
                        </div>
                    </figure>

                    <div className="card-body lg:w-3/5 p-8 md:p-12">
                        <div className="flex justify-between items-start">
                            <h2 className="text-4xl font-black text-slate-800 mb-6">Professional Summary</h2>
                            <span className="badge badge-success badge-sm animate-pulse px-3 py-2 text-white font-bold">Available for Internship</span>
                        </div>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Passionate Software Engineering graduate from <span className="text-slate-900 font-bold underline decoration-primary decoration-2 underline-offset-4">Daffodil International University</span>. 
                            Focused on building scalable web applications with a strong emphasis on 
                            <span className="text-primary font-semibold"> AI integration</span> and <span className="text-primary font-semibold">Software Quality Assurance (SQA)</span>. 
                            I thrive on solving complex problems and ensuring product excellence through a testing-first mindset.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white rounded-2xl shadow-sm text-primary">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg> */}
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-slate-400">Education</p>
                                    <p className="text-sm font-bold text-slate-700 leading-tight">B.Sc. in Software Engineering</p>
                                    <p className="text-[11px] italic text-slate-500">DIU (Class of 2025)</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white rounded-2xl shadow-sm text-primary">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> */}
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-slate-400">Contact</p>
                                    <p className="text-sm font-bold text-slate-700">01819976046</p>
                                    <p className="text-[11px] text-slate-500">rajib35-1830@diu.edu.bd</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ২. টেকনিক্যাল স্কিলস (Modern Grid) */}
            <section>
                <div className="flex flex-col items-center mb-12">
                    <h3 className="text-3xl font-black text-slate-800 mb-2 tracking-tight text-center">Technical Expertise</h3>
                    <div className="h-1.5 w-20 bg-primary rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="card bg-white hover:bg-slate-50 border border-slate-100 shadow-xl shadow-slate-200/50 transition-all duration-300 group overflow-hidden">
                            <div className="card-body p-6">
                                <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-500 mb-4">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={skill.icon} />
                                    </svg> */}
                                </div>
                                <h4 className="font-black text-slate-800 text-lg mb-4">{skill.category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skill.items.map((item, i) => (
                                        <span key={i} className="badge bg-slate-100 border-none text-slate-600 font-bold text-[10px] px-3 py-2 uppercase tracking-wide">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ৩. ইন্টারভিউ স্পেশাল: Commitment Section */}
            <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-black text-primary mb-4 italic tracking-tight">Mission Statement</h3>
                        <p className="text-xl md:text-2xl font-medium leading-relaxed italic opacity-90">
                            "I am ready to contribute to the strategic goals of <span className="text-primary font-black">IP3 Consulting</span> by developing reliable AI-driven tools and maintaining rigorous testing standards during my 4-month internship."
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <a 
                            href="mailto:rajib35-1830@diu.edu.bd" 
                            className="btn btn-primary btn-lg rounded-full px-12 text-white border-none shadow-xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all"
                        >
                            Hire Me Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;