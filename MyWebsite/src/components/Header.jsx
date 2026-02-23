import { useState } from 'react';

export default function Header() {
    // Tracks if the mouse is hovering over the picture
    const [isHovered, setIsHovered] = useState(false);

    return (
        <header id="about" className="row align-items-center mb-5 details-section">
            <div className="col-md-5 text-center mb-4 mb-md-0"
            >
                {/* Image Container with Hover Effects */}
                <div 
                    className="position-relative d-inline-block"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ width: "100%", maxWidth: "350px", cursor: "pointer" }}
                >
                    <img 
                        src="/assets/img/toph.png" 
                        alt="Toph" 
                        className="img-fluid rounded"
                        style={{ 
                            transition: "opacity 0.5s ease-in-out", 
                            opacity: isHovered ? 0 : 1 
                        }}
                    />
                    <img 
                        src="/assets/img/tophtoph.jpg" 
                        alt="Toph pointing" 
                        className="position-absolute top-0 start-0 img-fluid w-100 h-100 rounded"
                        style={{ 
                            transition: "opacity 0.5s ease-in-out", 
                            opacity: isHovered ? 1 : 0,
                            objectFit: "contain"
                        }}
                    />
                </div>
                
            </div>
            <div className="col-md-7">
                <div className="toph-card p-4 p-md-5">
                    <h1 className="fw-bold" style={{ color: '#1b3664', fontSize: '3.5rem' }}>Hello, I'm Toph!</h1>
                    <h4 style={{ color: '#a03b29' }}>Charl Christopher M. Peñada</h4>
                    <p className="mt-4">
                        Currently a Computer Science student at Asia Pacific College specializing in Cybersecurity and Forensics, I focus on the vital intersection of technical innovation and strategic leadership. As the President of JPCS-APC, I have established myself as a resilient leader dedicated to executing high-quality initiatives for both the Asia Pacific College and tech community.
                    </p>
                    <p>
                        I am eager to connect with like-minded professionals to explore tech leadership opportunities, a journey I am proud to share alongside my fiancé, Angelo Laus.
                    </p>
                    <div className="d-flex gap-2 mt-4">
                        <a href="https://www.linkedin.com/in/charlchristopher/" className="btn btn-dark rounded-pill px-4">LinkedIn</a>
                        <a href="https://www.facebook.com/profile.php?id=61564078963901" className="btn btn-dark rounded-pill px-4">Facebook</a>
                        <a href="https://www.instagram.com/charl_christopher/" className="btn btn-dark rounded-pill px-4">Instagram</a>
                    </div>
                </div>
            </div>
        </header>
    );
}