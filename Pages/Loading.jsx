import React, { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Loginlogo from "../assets/Loginlogo.png";
import '../styles/loading.css';

const Loading = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const targetRoute = location.state?.targetRoute || '/home';

    useEffect (() => {
        const timer = setTimeout(() => {
            navigate(targetRoute);
        }, 1500);

        return () => clearTimeout(timer);
    }, [navigate, targetRoute ]);

    return (
        <div className="loading-container">
            <img src={Loginlogo} alt="Dairy Fresh" className="blinking-logo" />
        </div>
    );
};

export default Loading;