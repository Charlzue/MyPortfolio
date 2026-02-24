import { useState } from 'react'; 

export default function Hobbies() {
    const [selectedImage, setSelectedImage] = useState(null);

    const myHobbies = [
        { name: "Student Leadership", image: "leadership.jpg" },
        { name: "Events Volunteering", image: "volunteering.jpg" },
        { name: "Tech & Leadership Events", image: "techevents.jpg" },
        { name: "Thrifting", image: "thrifting.jpg" },
        { name: "Movies & Series", image: "movies.jpg" },
        { name: "Walking", image: "walk.jpg" }
    ];

    return (
        <section id="hobbies" className="details-section">
            <h3 className="section-label">✨ Hobbies</h3>
            
            <div className="row g-4">
                {myHobbies.map((hobby, index) => (
                    <div key={index} className="col-md-4 col-sm-6">
                        
                        <div className="toph-card h-100 text-center d-flex flex-column align-items-center p-3" style={{ transition: "transform 0.2s ease" }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            
                            <img 
                                src={`/assets/img/${hobby.image}`} 
                                alt={hobby.name} 
                                className="ratio-16-9 mb-3 rounded shadow-sm" 
                                style={{ width: "100%", objectFit: "cover", border: "1px solid #eee", cursor: "zoom-in" }}
                                onClick={() => setSelectedImage(hobby.image)}
                            />
                            
                            <h5 className="fw-bold mt-2" style={{ color: "var(--jpcs-blue)", fontSize: "1.1rem" }}>{hobby.name}</h5>
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
                        alt="Zoomed Hobby" 
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