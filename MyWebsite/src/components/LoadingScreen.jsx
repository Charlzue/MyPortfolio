import { useState, useEffect } from 'react';

export default function LoadingScreen() {
    // Keeps track if we should show the loading screen
    const [showLoad, setShowLoad] = useState(true);

    useEffect(() => {
        // Check the exact time right now
        const timeNow = new Date().getTime();
        // Get the last time the user visited
        const lastVisit = localStorage.getItem('visitTime');
        const fiveMins = 5 * 60 * 1000;

        if (!lastVisit || (timeNow - lastVisit) > fiveMins) {
            // Show it, and save the new visit time
            localStorage.setItem('visitTime', timeNow);
            // Hide it after 20 seconds
            setTimeout(() => setShowLoad(false), 300000);
        } else {
            // Hide it immediately if it hasn't been 5 minutes
            setShowLoad(false);
        }
    }, []);

    if (showLoad) {
        return (
            <div style={{ position: 'fixed', inset: 0, background: '#fdfdfd', zIndex: 9999, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ fontSize: '4rem', animation: 'spin 2s linear infinite' }}>⏳</div>
                <style>{`
                    @keyframes spin { 
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); } 
                    }
                `}</style>
                <h1 style={{ color: '#f58220', fontWeight: 'bold', marginTop: '20px' }}>Loading Toph's Portfolio...</h1>
            </div>
        );
    }

    // Return nothing if loading is done
    return null;
}