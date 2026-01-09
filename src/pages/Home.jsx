const Home = () => {
    return (
        <div className="hero min-h-[70vh] bg-base-100 rounded-3xl shadow-sm">
            <div className="hero-content text-center">
                <div className="max-w-2xl">
                    <h1 className="text-5xl font-black mb-4">Empowering Decisions with <span className="text-primary">PolicyInsight AI</span></h1>
                    <p className="py-6 text-lg opacity-70">
                        A dedicated platform for IP3 Consulting to analyze infrastructure policies, 
                        monitor data-driven public projects, and ensure high-quality software outcomes.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="btn btn-primary px-8">Get Started</button>
                        <button className="btn btn-outline">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;