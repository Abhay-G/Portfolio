import VectorBG from './components/VectorBG';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import './styles/App.scss';
function App() {
    return (
        <div className='hero'>
            <VectorBG />
            <Navbar />
            <Banner />
        </div>
    );
}

export default App;
