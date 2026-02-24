import { useState } from 'react'; 

export default function Organizations() {
    const [selectedImage, setSelectedImage] = useState(null);

    const organizations = [
        { name: "JPCS – APC", roles: ["Chapter President (2025–Present)", "Director of External Relations (2024–2025)"], image: "jpcsapc.JPG" },
        { name: "CyberPH", roles: ["Assistant Vice President – External Growth (2025–Present)"], image: "cyberph.jpg" },
        { name: "APC – Microsoft Community", roles: ["Consultant (2025–Present)", "Documentation Associate (2024–2025)"], image: "apcmsc.jpg" },
        { name: "JISSA – APC", roles: ["Consultant (2025–Present)", "Secretariat Associate (2024–2025)"], image: "jissaapc.jpg" },
        { name: "APC – Gaming Genesis", roles: ["Consultant (2025–Present)", "Secretary Associate (2024–2025)"], image: "apcgg.jpg" },
        { name: "ICT Club – AU JAS", roles: ["President (2023–2024)"], image: "ictclub.jpg" }
    ];

    return (
        <section id="organizations" className="details-section">
            <h3 className="section-label">🤝 Organizations</h3>
            
            <div className="row g-4">
                {organizations.map((org, index) => (
                    <div key={index} className="col-md-4 col-sm-6">
                        
                        <div className="toph-card h-100 d-flex flex-column p-3" style={{ transition: "transform 0.2s ease" }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            
                            <img 
                                src={`/assets/img/${org.image}`} 
                                alt={org.name} 
                                className="ratio-3-2 mb-3 rounded shadow-sm" 
                                style={{ width: "100%", objectFit: "cover", border: "1px solid #eee", cursor: "zoom-in" }}
                                onClick={() => setSelectedImage(org.image)}
                            />
                            
                            <h5 className="fw-bold mt-2 text-center" style={{ color: "var(--jpcs-blue)" }}>{org.name}</h5>
                            
                            <ul className="text-start text-muted mb-0" style={{ fontSize: "0.9rem", paddingLeft: "1.2rem" }}>
                                {org.roles.map((role, rIndex) => (
                                    <li key={rIndex} className="mb-1">{role}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                ))}
            </div>

            {selectedImage && (
                <div 
                    style={{
                        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.85)', zIndex: 10000,
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                        cursor: 'zoom-out'
                    }}
                    onClick={() => setSelectedImage(null)}
                >
                    <img 
                        src={`/assets/img/${selectedImage}`} 
                        alt="Zoomed Organization" 
                        style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
                    />
                    <span style={{ position: 'absolute', top: '20px', right: '30px', color: 'white', fontSize: '2.5rem', fontWeight: 'bold' }}>
                        &times;
                    </span>
                </div>
            )}
        </section>
    );
}