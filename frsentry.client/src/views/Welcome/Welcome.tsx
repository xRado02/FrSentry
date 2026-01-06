import { Button } from 'primereact/button';
import { useState, useEffect } from 'react';
import './welcome.css';

export const Welcome = () => {
    const fullText = "Finance Sentry";
    const [title, setTitle] = useState("");

    useEffect(() => {

        if (title.length === fullText.length) return;
       
        const timer = setTimeout(() => {
            setTitle(title + fullText[title.length]);
        }, 150);

        return () => clearTimeout(timer);
    }, [title]);

    return (
        <div className="welcome-container flex flex-column justify-content-center align-items-center">
            <h1 className="welcome-title">{title}</h1>
            <Button
                label="Login"
                className="mt-4"
            />
        </div>
    );
};