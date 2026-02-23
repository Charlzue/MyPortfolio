import { useState } from 'react';

export default function Header() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <header id="about" className="toph-section">
            <div className="toph-container">
                
                <div 
                    className="position-relative d-inline-block"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ cursor: "pointer" }}
                >
                    <img 
                        src="/assets/img/toph.png" 
                        className="toph-portrait" 
                        alt="Toph" 
                        style={{ 
                            transition: "opacity 0.5s ease-in-out", 
                            opacity: isHovered ? 0 : 1 
                        }}
                    />
                    <img 
                        src="/assets/img/tophtoph.png" 
                        className="toph-portrait position-absolute top-0 start-0" 
                        alt="Toph pointing" 
                        style={{ 
                            transition: "opacity 0.5s ease-in-out", 
                            opacity: isHovered ? 1 : 0
                        }}
                    />
                </div>
                
                <div className="toph-card charl-card">
                    <h1 className="main-title">Hello, I'm <span className="accent-orange">Toph</span>!</h1>
                    <h2 className="sub-title">Charl Christopher M. Peñada</h2>
                    <p className="description">
                        Currently a Computer Science student at Asia Pacific College specializing in Cybersecurity and Forensics, I focus on the vital intersection of technical innovation and strategic leadership. As the President of JPCS-APC, I have established myself as a resilient leader dedicated to executing high-quality initiatives for both the Asia Pacific College and tech community.
                    </p>
                    <p className="description">
                        I am eager to connect with like-minded professionals to explore tech leadership opportunities, a journey I am proud to share alongside my fiancé, Angelo Laus.
                    </p>
                    <div className="toph-socials">
                        <a href="https://www.linkedin.com/in/charlchristopher/" target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">LinkedIn</a>
                        <a href="https://www.facebook.com/profile.php?id=61564078963901" target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Facebook</a>
                        <a href="https://www.instagram.com/charl_christopher/" target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Instagram</a>
                    </div>
                </div>
            </div>
        </header>
    );
}