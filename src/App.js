import VectorBG from './components/VectorBG';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Info from './components/Info';
import './styles/App.scss';
function App() {
    return (
        <div className='hero'>
            <VectorBG />
            <Navbar />
            <Banner />
            <Info />
        </div>
    );
}

export default App;
