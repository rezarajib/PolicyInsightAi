import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    // স্ট্যান্ডার্ড অ্যাক্টিভ লিঙ্ক স্টাইল (Capsule Design)
    const navLinkStyles = ({ isActive }) => 
        `px-6 py-2 text-[12px] font-black tracking-[0.1em] uppercase transition-all duration-300 rounded-full ${
            isActive 
            ? "bg-slate-900 text-white shadow-xl scale-105" 
            : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
        }`;

    const navLinks = (
        <>
            <li><NavLink to="/" className={navLinkStyles}>Home</NavLink></li>
            <li><NavLink to="/ai-prototype" className={navLinkStyles}>AI Analyzer</NavLink></li>
            <li><NavLink to="/qa-dashboard" className={navLinkStyles}>QA Metrics</NavLink></li>
            <li><NavLink to="/about" className={navLinkStyles}>About</NavLink></li>
        </>
    );

    return (
        <header className="sticky top-0 z-[100] w-full px-4 py-6">
            <nav className="mx-auto max-w-7xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm rounded-[2rem] navbar px-8 h-20">
                
                {/* ১. লোগো টেক্সট (Left) */}
                <div className="navbar-start">
                    <Link to="/" className="group flex flex-col">
                        <span className="text-2xl font-black tracking-tighter text-slate-900 leading-none">
                            POLICYINSIGHT<span className="text-primary">.AI</span>
                        </span>
                        <span className="text-[9px] font-bold text-slate-400 tracking-[0.4em] uppercase mt-1 transition-all group-hover:text-primary">
                            Strategic Intelligence
                        </span>
                    </Link>
                </div>

                {/* ২. মেনু - একদম মাঝখানে (Center) */}
                <div className="navbar-center hidden lg:flex">
                    <div className="bg-slate-50 p-1.5 rounded-full border border-slate-100">
                        <ul className="flex items-center gap-1 list-none px-1">
                            {navLinks}
                        </ul>
                    </div>
                </div>

                {/* ৩. পোর্টফোলিও বাটন (Right) */}
                <div className="navbar-end">
                    {/* মোবাইল মেনু বাটন (আইকন ছাড়া শুধু টেক্সট) */}
                    <div className="dropdown lg:hidden mr-4">
                        <label tabIndex={0} className="text-xs font-black uppercase tracking-widest text-slate-600 cursor-pointer hover:text-primary">
                            MENU
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-6 z-[1] p-4 shadow-2xl bg-white rounded-3xl w-64 gap-3 border border-slate-100 -left-20">
                            {navLinks}
                        </ul>
                    </div>

                    <Link 
                        to="/about" 
                        className="btn btn-outline border-slate-900 text-slate-900 btn-md rounded-full px-8 hover:bg-slate-900 hover:text-white transition-all text-xs font-black tracking-widest"
                    >
                        PORTFOLIO
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;