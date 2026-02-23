import { useState, useRef, useEffect } from 'react';

export default function MusicPlayer() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [showHint, setShowHint] = useState(false);
    const audioRef = useRef(null);

    const songs = [
        { title: "Tiramisu", file: "tiramisu.mp3", image: "tiramisu.png" },
        { title: "Dreamy Mode", file: "dreamymode.mp3", image: "dreamymode.png" },
        { title: "Honey Jam", file: "honeyjam.mp3", image: "honeyjam.png" }
    ];

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const selectSong = (index) => {
        setCurrentSongIndex(index);
        setIsPlaying(true);
    };

    // Auto-play when changing songs
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
            if (isPlaying) {
                setTimeout(() => audioRef.current.play(), 50);
            }
        }
    }, [currentSongIndex]);

    // Handle volume slider
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    // Pop-up music player hint timer
    useEffect(() => {
        const interval = setInterval(() => {
            setIsOpen((currentMenuState) => {
                // Only show hint if the menu is currently closed
                if (!currentMenuState) {
                    setShowHint(true);
                    setTimeout(() => setShowHint(false), 3000);
                }
                return currentMenuState;
            });
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '15px' }}>
            
            <audio 
                ref={audioRef} 
                src={`/assets/audio/${songs[currentSongIndex].file}`} 
                loop 
                onEnded={() => setIsPlaying(false)}
            />

            {/* The pop-up music menu */}
            {isOpen && (
                <div className="toph-card shadow-lg" style={{ padding: '20px', width: '280px', margin: 0 }}>
                    <div className="d-flex align-items-center gap-3 mb-3">
                        <img 
                            src={`/assets/img/${songs[currentSongIndex].image}`} 
                            alt={songs[currentSongIndex].title} 
                            style={{ width: '65px', height: '65px', objectFit: 'cover', borderRadius: '10px', border: '1px solid #eee' }}
                        />
                        <div>
                            <p style={{ margin: 0, fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Now Playing</p>
                            <h6 style={{ margin: 0, fontWeight: 'bold', fontSize: '1.1rem', color: '#1b3664' }}>{songs[currentSongIndex].title}</h6>
                        </div>
                    </div>

                    <button onClick={togglePlay} className="btn btn-dark w-100 mb-3" style={{ fontWeight: 'bold', borderRadius: '8px' }}>
                        {isPlaying ? '⏸️ Pause' : '▶️ Play'}
                    </button>

                    <div className="d-flex align-items-center gap-2 mb-3">
                        <span style={{ fontSize: '1.2rem' }}>🔉</span>
                        <input 
                            type="range" 
                            className="form-range" 
                            min="0" 
                            max="1" 
                            step="0.05" 
                            value={volume} 
                            onChange={(e) => setVolume(parseFloat(e.target.value))}
                        />
                    </div>

                    <hr style={{ borderColor: '#ddd' }} />

                    <p style={{ margin: '0 0 10px 0', fontSize: '0.9rem', fontWeight: 'bold', color: '#f58220' }}>Up Next</p>
                    <div className="d-flex flex-column gap-2">
                        {songs.map((song, index) => (
                            <div 
                                key={index} 
                                onClick={() => selectSong(index)}
                                style={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: '10px', 
                                    cursor: 'pointer',
                                    padding: '8px',
                                    borderRadius: '8px',
                                    backgroundColor: currentSongIndex === index ? '#f8f9fa' : 'transparent',
                                    border: currentSongIndex === index ? '1px solid #eee' : '1px solid transparent',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <img src={`/assets/img/${song.image}`} style={{ width: '35px', height: '35px', borderRadius: '6px', objectFit: 'cover' }} alt={song.title} />
                                <span style={{ fontSize: '0.9rem', fontWeight: currentSongIndex === index ? 'bold' : 'normal', color: '#333' }}>
                                    {song.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Music player hint animation */}
            <div style={{
                position: 'absolute',
                bottom: '75px',
                left: '0',
                backgroundColor: '#a03b29',
                color: 'white',
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                opacity: showHint ? 1 : 0,
                transform: showHint ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                pointerEvents: 'none',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
                🎵 Play some music!
                {}
                <div style={{
                    position: 'absolute',
                    bottom: '-6px',
                    left: '20px',
                    width: '0',
                    height: '0',
                    borderLeft: '6px solid transparent',
                    borderRight: '6px solid transparent',
                    borderTop: '6px solid #a03b29'
                }} />
            </div>

            {/* The floating toggle button */}
            <button 
                onClick={() => {
                    setIsOpen(!isOpen);
                    setShowHint(false); // Hide hint immediately if they click the button
                }} 
                className="btn btn-dark rounded-circle shadow-lg"
                style={{ 
                    width: '60px', 
                    height: '60px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontSize: '1.8rem',
                    transition: 'transform 0.2s ease-in-out',
                    alignSelf: 'flex-start',
                    border: '3px solid white'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                title="Open Music Player"
            >
                🎵
            </button>
        </div>
    );
}