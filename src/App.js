import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './styles/App.scss';
function App() {
    return (
        <Router>
            <div className='hero'>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/projects/:projectId' component={Home} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
