export default function Hobbies() {
    // List of my hobbies
    const myHobbies = [
        "📢 Student Leadership",
        "🤝 Events Volunteering",
        "💻 Tech & Leadership Events",
        "👕 Thrifting",
        "🎬 Movies & Series",
        "🚶 Walking"
    ];

    return (
        <section id="hobbies" className="details-section">
            <h3 className="section-label">✨ Hobbies</h3>
            <div className="hobbies-wrap">
                {myHobbies.map((item, index) => (
                    <span key={index} className="hobby-pill">{item}</span>
                ))}
            </div>
        </section>
    );
}