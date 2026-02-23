import MusicPlayer from './components/MusicPlayer';
import FreedomWall from './components/FreedomWall';
import LoadingScreen from './components/LoadingScreen';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Organizations from './components/Organizations';
import Hobbies from './components/Hobbies';
import Goals from './components/Goals';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
    return (
        <>
            <LoadingScreen />
            <Background />
            <MusicPlayer />
            <Navbar />
            <Header />
            <main className="container">
                <Education />
                <Experience />
                <Organizations />
                <Hobbies />
                <Goals />
                <FreedomWall />
                <Gallery />
            </main>
            <Footer />
        </>
    );
}