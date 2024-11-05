
'use client'

import React from 'react';

interface LoginPromptProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginPrompt: React.FC<LoginPromptProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ml-20 ">
        <div className="bg-black p-6 rounded-lg shadow-md w-[570px] h-[250px] flex flex-col items-center justify-center">
            <h2 className="text-lg mb-4 text-center">Please log in to continue</h2>
            <button onClick={onClose} className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition duration-200">
                Close
            </button>
        </div>
    </div>
    
    );
};

export default LoginPrompt;
