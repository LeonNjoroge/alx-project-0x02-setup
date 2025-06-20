import React from "react";
import { type ButtonProps } from "@/interfaces";

const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({ size, shape, children, onClick }) =>{
    return (
        <button
            onClick={onClick}
            className={`${sizeClasses[size]} ${shape} bg-blue-300 text-white hover:bg-blue-700 transition`}
        >
            {children}
        </button>
    );
};
export default Button;