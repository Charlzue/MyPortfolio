export default function Experience() {
    return (
        <section id="experience" className="details-section">
            <h3 className="section-label">💻 IT Experience</h3>
            <div className="row g-4">
                <div className="col-md-5">
                    <div className="toph-card">
                        <h4 className="fw-bold mb-3">Technical</h4> 
                        <p>Languages: Python, JavaScript, SQL, HTML, CSS</p>
                        <p>Databases: MySQL, Firebase</p>
                        <p>Tools: GitHub, VS Code, Frappe</p>
                        <p>Creative: Canva, Figma</p>
                        <p>AI: Google Gemini, ChatGPT</p>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="toph-card">
                        <h4 className="fw-bold mb-3">Projects</h4> 
                        <p className="text-uppercase small tracking-wider text-secondary mb-2">Client-Based</p>
                        <ul className="mb-4">
                            <li>Arise PH (2025) – Quality Assurance Tester</li>
                        </ul>
                        <p className="text-uppercase small tracking-wider text-secondary mb-2">Academic</p>
                        <ul>
                            <li>Personal Website (2025) – Programmer & UI/UX Designer</li>
                            <li>SteveJobs (2025) – Quality Assurance Tester</li>
                            <li>Consumission (2025) – QA Tester & UI Designer</li>
                            <li>BotoMatiko (2023–2024) – Project Manager, UI/UX Designer, QA</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}