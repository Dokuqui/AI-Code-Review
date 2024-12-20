const AnalysisResults = ({ results }: { results: string }) => {
    return (
        <div className="mt-4 p-4 border rounded">
            <h2 className="font-bold">Analysis Results:</h2>
            <pre>{results}</pre>
        </div>
    );
};

export default AnalysisResults;