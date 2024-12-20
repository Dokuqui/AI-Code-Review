import { useState } from "react";

const CodeInput = ({ onCodeSubmit }: { onCodeSubmit: (code: string) => void }) => {
    const [code, setCode] = useState('');

    const handleSubmit = () => {
        onCodeSubmit(code);
        setCode('');
    };

    return (
        <div className="flex flex-col items-center">
            <textarea
                className="border p-2 w-full h-40"
                placeholder="Enter code here"
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />
            <button onClick={handleSubmit} className="mt-4 bg-blue-500 text-white p-2 rounded">
                Analyze Code
            </button>
        </div>
    );
};

export default CodeInput;