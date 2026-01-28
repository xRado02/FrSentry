import { Button } from 'primereact/button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './welcome.css';

export const Welcome = () => {
    const fullText = "Finance Sentry";
    const [title, setTitle] = useState("");
    const navigate = useNavigate();

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
                className="mt-4 "
                onClick={() => navigate('/dashboard')}
            />
          
        </div>
        
    );
};