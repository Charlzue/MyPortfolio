import { useState, useRef } from 'react';

export default function MusicPlayer() {
    // Keep track of whether music is playing or paused
    const [isPlaying, setIsPlaying] = useState(false);
    // Reference to the actual audio element
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 1000 }}>
            {/* The hidden audio player (loops automatically!) */}
            <audio ref={audioRef} loop>
                <source src="/assets/audio/bg-music.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            
            {/* The floating button */}
            <button 
                onClick={togglePlay} 
                className="btn btn-dark rounded-circle shadow"
                style={{ 
                    width: '55px', 
                    height: '55px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontSize: '1.5rem',
                    transition: 'transform 0.2s ease-in-out'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                title="Play/Pause Background Music"
            >
                {isPlaying ? '⏸️' : '🎵'}
            </button>
        </div>
    );
}