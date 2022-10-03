import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className="btn border-none uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">{children}</button>
        </div>
    );
};

export default PrimaryButton;