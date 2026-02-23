import { useState } from 'react';

export default function Gallery() {
    // What category is clicked
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Leadership', 'Personal'];
    
    // List of my photos
    const myPhotos = [
        { src: 'college_circle.jpg', ratioClass: 'ratio-16-9', category: 'Personal', alt: 'College activities' },
        { src: 'jpcs-1.jpg', ratioClass: 'ratio-16-9', category: 'Leadership', alt: 'JPCS session' },
        { src: 'jpcs-2.jpg', ratioClass: 'ratio-2-1', category: 'Leadership', alt: 'JPCS members' },
        { src: 'toph-2.jpg', ratioClass: 'ratio-3-4', category: 'Personal', alt: 'Toph portrait' },
        { src: 'toph-4.jpg', ratioClass: 'ratio-3-4', category: 'Personal', alt: 'Toph candid' },
        { src: 'charlgelo.jpg', ratioClass: 'ratio-4-5', category: 'Personal', alt: 'Charl and Angelo' },
        { src: 'jpcs.jpg', ratioClass: 'ratio-3-2', category: 'Leadership', alt: 'JPCS board' },
        { src: 'socit.jpg', ratioClass: 'ratio-3-2', category: 'Leadership', alt: 'SoCIT community' },
        { src: 'charlgelo-2.jpg', ratioClass: 'ratio-3-2', category: 'Personal', alt: 'Charl and Angelo casual' },
        { src: 'toph-1.jpg', ratioClass: 'ratio-3-2', category: 'Personal', alt: 'Tech seminar' },
        { src: 'shs_circle.jpg', ratioClass: 'ratio-3-2', category: 'Personal', alt: 'SHS circle' },
        { src: 'charlgelo-1.jpg', ratioClass: 'ratio-4-3', category: 'Personal', alt: 'Leadership event' },
        { src: 'jhs_circle.jpg', ratioClass: 'ratio-4-3', category: 'Personal', alt: 'JHS circle' }
    ];

    // Show only the photos that match the clicked category
    const filteredPhotos = filter === 'All' ? myPhotos : myPhotos.filter(p => p.category === filter);

    return (
        <section id="gallery" className="details-section pb-5">
            <h3 className="section-label">Gallery</h3>
            <div>
                <div className="filter-controls mb-4 d-flex flex-wrap gap-2">
                    {categories.map(cat => (
                        <button 
                            key={cat} 
                            onClick={() => setFilter(cat)}
                            className={`btn btn-sm ${filter === cat ? 'btn-dark' : 'btn-outline-dark'}`}
                            type="button"
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="collage-grid">
                    {filteredPhotos.map((photo, index) => (
                        <img 
                            key={index} 
                            src={`/assets/img/${photo.src}`} 
                            className={photo.ratioClass} 
                            alt={photo.alt} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}