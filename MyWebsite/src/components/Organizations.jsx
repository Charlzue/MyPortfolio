export default function Organizations() {
    // List of my orgs
    const myOrgs = [
        { name: "JPCS – APC", roles: ["Chapter President (2025–Present)", "Director of External Relations (2024–2025)"] },
        { name: "CyberPH", roles: ["Assistant Vice President – External Growth (2025–Present)"] },
        { name: "APC – Microsoft Community", roles: ["Consultant (2025–Present)", "Documentation Associate (2024–2025)"] },
        { name: "JISSA – APC", roles: ["Consultant (2025–Present)", "Secretariat Associate (2024–2025)"] },
        { name: "APC – Gaming Genesis", roles: ["Consultant (2025–Present)", "Secretary Associate (2024–2025)"] },
        { name: "ICT Club – AU JAS", roles: ["President (2023–2024)"] },
        { name: "APC – Pet Society", roles: ["Member (2025–Present)"] }
    ];

    return (
        <section id="organizations" className="details-section">
            <h3 className="section-label">🤝 Organizations</h3>
            <div className="row g-4">
                {myOrgs.map((org, index) => (
                    <div key={index} className="col-md-6 col-lg-4">
                        <div className="toph-card">
                            <h4><strong>{org.name}</strong></h4>
                            <ul>
                                {org.roles.map((role, i) => <li key={i}>{role}</li>)}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}