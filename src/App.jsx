import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import AIAnalyzer from "./pages/AIAnalyzer";
import QAMetrics from "./pages/QAMetrics";
import About from "./pages/About";

// ৪-০-৪ পেজ (যদি কোনো লিঙ্ক কাজ না করে, তবে এটি প্রফেশনালিজম দেখাবে)
const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 className="text-9xl font-black text-primary/20">404</h1>
    <p className="text-2xl font-bold -mt-10">Oops! Page not found.</p>
    <a href="/" className="btn btn-primary mt-5 rounded-full">Back to Home</a>
  </div>
);

function App() {
  return (
    <Router>
      {/* মেইন কন্টেইনার: হালকা গ্রে ব্যাকগ্রাউন্ড যা চোখের জন্য আরামদায়ক */}
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-primary selection:text-white">
        
        {/* নেভিবার */}
        <Navbar />

        {/* মেইন কন্টেন্ট এরিয়া */}
        <main className="container mx-auto px-4 py-8 lg:py-12">
          
          {/* কন্টেন্ট কার্ড: ড্যাশবোর্ড লুক দেওয়ার জন্য হোয়াইট কার্ড ও শ্যাডো */}
          <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden min-h-[75vh] transition-all duration-500">
            
            {/* ট্রানজিশন ইফেক্ট এর জন্য ছোট প্যাডিং */}
            <div className="p-2 md:p-6 lg:p-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ai-prototype" element={<AIAnalyzer />} />
                <Route path="/qa-dashboard" element={<QAMetrics />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>

          </div>
        </main>

        {/* সিম্পল এবং ক্লিন ফুটার */}
        <footer className="footer footer-center p-10 bg-transparent text-slate-400 text-sm">
          <aside>
            <p>Copyright © 2026 - All rights reserved by Md. Rajib Reza</p>
            <p className="font-bold text-primary/60 italic">Built for IP3 Consulting Excellence</p>
          </aside>
        </footer>
      </div>
    </Router>
  );
}

export default App;