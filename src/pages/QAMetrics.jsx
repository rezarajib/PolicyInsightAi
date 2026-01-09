const QAMetrics = () => {
    const testCases = [
        { id: "TC-001", feature: "AI Analysis API", status: "Passed", coverage: "98%" },
        { id: "TC-002", feature: "User Authentication", status: "Passed", coverage: "100%" },
        { id: "TC-003", feature: "Data Visualization", status: "In-Progress", coverage: "75%" },
        { id: "TC-004", feature: "Export to PDF", status: "Passed", coverage: "92%" },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold border-l-4 border-primary pl-3">Software Quality Metrics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="stat bg-base-100 shadow rounded-box">
                    <div className="stat-title">Unit Tests</div>
                    <div className="stat-value text-primary">124</div>
                    <div className="stat-desc">Passed 100%</div>
                </div>
                <div className="stat bg-base-100 shadow rounded-box">
                    <div className="stat-title">Bug Density</div>
                    <div className="stat-value text-secondary">0.02</div>
                    <div className="stat-desc">Low Risk</div>
                </div>
            </div>

            <div className="overflow-x-auto card bg-base-100 shadow-xl">
                <table className="table w-full">
                    <thead>
                        <tr className="bg-base-200">
                            <th>ID</th>
                            <th>Module/Feature</th>
                            <th>Test Status</th>
                            <th>Code Coverage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {testCases.map((tc) => (
                            <tr key={tc.id} className="hover">
                                <td className="font-mono text-sm">{tc.id}</td>
                                <td className="font-semibold">{tc.feature}</td>
                                <td>
                                    <span className={`badge ${tc.status === 'Passed' ? 'badge-success' : 'badge-warning'}`}>
                                        {tc.status}
                                    </span>
                                </td>
                                <td>
                                    <progress className="progress progress-primary w-20 mr-2" value={parseInt(tc.coverage)} max="100"></progress>
                                    {tc.coverage}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default QAMetrics;