import { useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import ProjectPage from './components/pages/ProjectPage';
import Options from './components/pages/Options';
import './styles/App.scss';
import { AnimatePresence } from 'framer-motion';
import AnimatedCursor from 'react-animated-cursor';
import { initial } from 'lodash';
function App() {
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        if (window.innerWidth < 700) {
            setIsMobile(true);
        }
    }, []);

    return (
        <div className='hero'>
            {console.log(isMobile)}
            <AnimatedCursor
                innerSize={15}
                outerSize={25}
                color='229,56,59'
                outerAlpha={0.3}
                innerScale={1}
                outerScale={4}
            />

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
