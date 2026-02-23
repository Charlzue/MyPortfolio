import { useState } from 'react';

export default function Education() {
    // My schools list
    const schools = [
        { level: "College", name: "Asia Pacific College (2024–Present)", details: ["BS Computer Science – Cybersecurity & Forensics", "Honor Student, 1st Year", "SoCIT Avatar (2024)"] },
        { level: "Senior High School", name: "Arellano University – JAS (2022–2024)", details: ["ICT Strand", "Graduated Class Rank 1, Strand Rank 1, Overall Rank 8", "ICT Week Quiz Bee – Champion (2023)", "CS/IT Quiz Bee – 6th Place (2024)"] },
        { level: "Junior High School", name: "Pasay City East High School (2018–2022)", details: ["Grade 7 – With Honors", "Grade 8 – With Honors", "Grade 9 – With High Honors", "Grade 10 – With High Honors"] },
        { level: "Elementary", name: "Timoteo Paez Elementary School (2012–2018)", details: [] }
    ];

    // Track what school is showing
    const [step, setStep] = useState(0);

    // Go to the next school
    const clickNext = () => {
        setStep((step + 1) % schools.length);
    };

    const activeSchool = schools[step];

    return (
        <section id="education" className="details-section">
            <h3 className="section-label">🎓 Education</h3>
            <div className="toph-card text-center mx-auto" style={{ maxWidth: "600px" }}>
                <h4>{activeSchool.level}</h4>
                <p><strong>{activeSchool.name}</strong></p>
                {activeSchool.details.length > 0 && (
                    <ul className="text-start d-inline-block">
                        {activeSchool.details.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                )}
                <br />
                <button onClick={clickNext} className="btn btn-dark mt-4">Next Level ➡️</button>
            </div>
        </section>
    );
}