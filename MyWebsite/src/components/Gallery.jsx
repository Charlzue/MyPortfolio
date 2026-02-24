import { useState, useRef, useEffect } from 'react';

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);
    
    const scrollRef = useRef(null);
    const resumeTimeoutRef = useRef(null);

    const images = [
        "charlgelo.jpg", "charlgelo-1.jpg", "charlgelo-2.jpg", 
        "college_circle.jpg", "jhs_circle.jpg", "jpcs.jpg", 
        "jpcs-1.jpg", "jpcs-2.jpg", "shs_circle.jpg", 
        "socit.jpg", "toph-1.jpg", "toph-2.jpg", "toph-4.jpg"
    ];

    const displayImages = [...images, ...images];

    // Handles the continuous horizontal auto-scrolling
    useEffect(() => {
        let animationFrameId;
        const scroll = () => {
            if (isAutoScrolling && scrollRef.current) {
                scrollRef.current.scrollLeft += 3; 
                
                // If we reach the end of the first set of images, snap silently back to the start for an infinite loop
                if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
                    scrollRef.current.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isAutoScrolling]);

    // This function detects manual scrolling and pauses the auto-scroll, resuming after 3 seconds of inactivity
    const handleUserInteraction = () => {
        setIsAutoScrolling(false);
        if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
        
        resumeTimeoutRef.current = setTimeout(() => {
            setIsAutoScrolling(true);
        }, 3000);
    };

    return (
        <section id="gallery" className="details-section">
            <h3 className="section-label">📸 Gallery</h3>
            
            <div 
                ref={scrollRef}
                className="gallery-track d-flex gap-3 mt-4"
                onWheel={handleUserInteraction}
                onTouchMove={handleUserInteraction}
                onMouseDown={handleUserInteraction}
            >
                {displayImages.map((img, index) => (
                    <img 
                        key={index}
                        src={`/assets/img/${img}`} 
                        alt={`Gallery ${index}`} 
                        className="gallery-item rounded shadow-sm"
                        onClick={() => setSelectedImage(img)}
                    />
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
                        alt="Zoomed Gallery" 
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