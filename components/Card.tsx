
import React from 'react';

interface CardProps {
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md">
            {children}
        </div>
    );
};

export default Card;
