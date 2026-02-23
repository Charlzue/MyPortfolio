import { useState } from 'react';

export default function Experience() {
    const projects = [
        { category: "Client-Based", name: "Arise PH (2025)", role: "Quality Assurance Tester", image: "arise.png" },
        { category: "Academic", name: "FitLife Gym Polyglot Web Application (2026)", role: "Documentation, Back-end and Database Consultant", image: "fitlife.png" },
        { category: "Academic", name: "Personal Website (2025)", role: "Programmer & UI/UX Designer", image: "personal_website.png" },
        { category: "Academic", name: "SteveJobs (2025)", role: "Quality Assurance Tester", image: "stevejobs.png" },
        { category: "Academic", name: "Consumission (2025)", role: "QA Tester & UI Designer", image: "consumission.png" },
        { category: "Academic", name: "BotoMatiko (2023–2024)", role: "Project Manager, UI/UX Designer, QA", image: "botomatiko.png" }
    ];

    const [step, setStep] = useState(0);

    const clickNextProject = () => {
        setStep((step + 1) % projects.length);
    };

    const activeProject = projects[step];

    const iconStyle = {
        width: "24px",
        height: "24px",
        objectFit: "contain",
        backgroundColor: "#ffffff",
        borderRadius: "4px",
        padding: "3px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
    };

    const skillItemStyle = "d-flex align-items-center gap-2 me-3 mb-2";

    return (
        <section id="experience" className="details-section">
            <h3 className="section-label">💻 IT Experience</h3>
            
            <style>{`
                @keyframes fadeScaleIn {
                    from { opacity: 0; transform: scale(0.98); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-project {
                    animation: fadeScaleIn 0.4s ease-out forwards;
                }
            `}</style>

            <div className="row g-4">
                <div className="col-md-5">
                    <div className="toph-card h-100">
                        <h4 className="fw-bold mb-4">Technical Skills</h4> 
                        
                        <h6 className="text-secondary tracking-wider small text-uppercase mb-2">Languages</h6>
                        <div className="d-flex flex-wrap mb-3">
                            <span className={skillItemStyle}><img src="/assets/img/python.png" alt="Python" style={iconStyle} /> Python</span>
                            <span className={skillItemStyle}><img src="/assets/img/javascript.png" alt="JavaScript" style={iconStyle} /> JavaScript</span>
                            <span className={skillItemStyle}><img src="/assets/img/sql.png" alt="SQL" style={iconStyle} /> SQL</span>
                            <span className={skillItemStyle}><img src="/assets/img/html.png" alt="HTML" style={iconStyle} /> HTML</span>
                            <span className={skillItemStyle}><img src="/assets/img/css.png" alt="CSS" style={iconStyle} /> CSS</span>
                        </div>
                        
                        <h6 className="text-secondary tracking-wider small text-uppercase mb-2">Databases</h6>
                        <div className="d-flex flex-wrap mb-3">
                            <span className={skillItemStyle}><img src="/assets/img/mysql.png" alt="MySQL" style={iconStyle} /> MySQL</span>
                            <span className={skillItemStyle}><img src="/assets/img/firebase.png" alt="Firebase" style={iconStyle} /> Firebase</span>
                        </div>
                        
                        <h6 className="text-secondary tracking-wider small text-uppercase mb-2">Tools</h6>
                        <div className="d-flex flex-wrap mb-3">
                            <span className={skillItemStyle}><img src="/assets/img/github.png" alt="GitHub" style={iconStyle} /> GitHub</span>
                            <span className={skillItemStyle}><img src="/assets/img/vscode.png" alt="VS Code" style={iconStyle} /> VS Code</span>
                            <span className={skillItemStyle}><img src="/assets/img/frappe.png" alt="Frappe" style={iconStyle} /> Frappe</span>
                        </div>
                        
                        <h6 className="text-secondary tracking-wider small text-uppercase mb-2">Creative</h6>
                        <div className="d-flex flex-wrap mb-3">
                            <span className={skillItemStyle}><img src="/assets/img/canva.png" alt="Canva" style={iconStyle} /> Canva</span>
                            <span className={skillItemStyle}><img src="/assets/img/figma.png" alt="Figma" style={iconStyle} /> Figma</span>
                        </div>
                        
                        <h6 className="text-secondary tracking-wider small text-uppercase mb-2">AI</h6>
                        <div className="d-flex flex-wrap mb-0">
                            <span className={skillItemStyle}><img src="/assets/img/gemini.png" alt="Google Gemini" style={iconStyle} /> Google Gemini</span>
                            <span className={skillItemStyle}><img src="/assets/img/chatgpt.png" alt="ChatGPT" style={iconStyle} /> ChatGPT</span>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-7">
                    <div key={activeProject.name} className="toph-card h-100 text-center animate-project d-flex flex-column align-items-center justify-content-center">
                        <img 
                            src={`/assets/img/${activeProject.image}`} 
                            alt={activeProject.name} 
                            className="ratio-16-9 mb-3 rounded" 
                            style={{ width: "100%", maxWidth: "450px", objectFit: "cover", border: "1px solid #eee" }}
                        />
                        <span className="badge bg-secondary mb-2">{activeProject.category}</span>
                        <h5 className="fw-bold mb-1">{activeProject.name}</h5>
                        <p className="text-muted mb-4">{activeProject.role}</p>
                        
                        <button onClick={clickNextProject} className="btn btn-dark mt-auto">Next Project ➡️</button>
                    </div>
                </div>
            </div>
        </section>
    );
}