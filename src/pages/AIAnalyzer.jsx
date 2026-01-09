import React, { useState } from 'react';

const AIAnalyzer = () => {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleAnalyze = () => {
        if (!input) return;
        setLoading(true);
        // এপিআই কল সিমুলেশন
        setTimeout(() => {
            setResult({
                score: 88,
                status: "High Compliance",
                risks: "Low",
                suggestions: [
                    "Improve data transparency in section 2.",
                    "Add environmental impact assessment.",
                    "Clarify budget allocation for rural areas."
                ]
            });
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-primary">AI Policy Analyzer</h1>
                <p className="opacity-70">Paste your policy draft below for an instant AI evaluation.</p>
            </div>

            <div className="card bg-base-100 shadow-xl p-6">
                <textarea 
                    className="textarea textarea-bordered h-40 w-full mb-4" 
                    placeholder="Enter policy text here..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                ></textarea>
                <button 
                    className={`btn btn-primary w-full ${loading && 'loading'}`}
                    onClick={handleAnalyze}
                    disabled={loading}
                >
                    {loading ? 'Analyzing with AI...' : 'Run Strategic Analysis'}
                </button>
            </div>

            {result && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="card bg-success text-success-content p-6 text-center">
                        <div className="stat-title text-white">Policy Score</div>
                        <div className="stat-value">{result.score}%</div>
                    </div>
                    <div className="card bg-base-100 shadow p-6 col-span-2">
                        <h3 className="font-bold text-lg mb-2">AI Recommendations:</h3>
                        <ul className="list-disc ml-5 space-y-1">
                            {result.suggestions.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AIAnalyzer;