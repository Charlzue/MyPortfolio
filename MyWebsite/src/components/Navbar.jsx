export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#about">TOPH</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#tophNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="tophNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
                        <li className="nav-item"><a className="nav-link" href="#experience">IT Experience</a></li>
                        <li className="nav-item"><a className="nav-link" href="#organizations">Organizations</a></li>
                        <li className="nav-item"><a className="nav-link" href="#hobbies">Hobbies</a></li>
                        <li className="nav-item"><a className="nav-link" href="#goals">Goals</a></li>
                        <li className="nav-item"><a className="nav-link" href="#gallery">Gallery</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}