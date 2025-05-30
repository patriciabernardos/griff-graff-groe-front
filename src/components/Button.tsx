import React from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: string;
    children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ to, children, className, ...rest }) => {
    if (to) {
        return (
            <Link to={to} className={className}>
                    {children}
            </Link>
        );
    }
    return (
        <button className={className} {...rest}>
            {children}
        </button>
    );
};

export default Button;