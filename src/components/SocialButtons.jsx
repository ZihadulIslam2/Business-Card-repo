import React from "react";
import { Mail, Linkedin } from 'lucide-react';

const SocialButtons = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:zihadul708@gmail.com';
    };

    const handleLinkedinClick = () => {
        window.open('https://www.linkedin.com/in/zihadul-islam-a0a356267/', '_blank');
    };

    return (
        <div className="flex space-x-4">
            <button 
                onClick={handleEmailClick}
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
                <Mail className="mr-2" size={20} />
                Email
            </button>

            <button 
                onClick={handleLinkedinClick}
                className="flex items-center px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors"
            >
                <Linkedin className="mr-2" size={20} />
                LinkedIn
            </button>
        </div>
    );
};

export default SocialButtons;