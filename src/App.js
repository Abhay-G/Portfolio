import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import ProjectPage from './components/pages/ProjectPage';
import Options from './components/pages/Options';
import './styles/App.scss';
import { AnimatePresence } from 'framer-motion';
function App() {
    const location = useLocation();
    return (
        <div className='hero'>
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.key}>
                    <Route exact path='/' component={Home} />
                    <Route
                        exact
                        path='/projects/:projectId'
                        component={ProjectPage}
                    />
                    <Route exact path='/more/:optionId' component={Options} />
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;
