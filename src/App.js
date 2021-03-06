import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import ProjectPage from './components/pages/ProjectPage';
import Options from './components/pages/Options';
import './styles/App.scss';
import { AnimatePresence } from 'framer-motion';
import AnimatedCursor from 'react-animated-cursor';
function App() {
    const location = useLocation();
    console.log(
        `%c 
██╗  ██╗███████╗██╗     ██╗      ██████╗     ██╗    ██╗ ██████╗ ██████╗ ██╗     ██████╗
██║  ██║██╔════╝██║     ██║     ██╔═══██╗    ██║    ██║██╔═══██╗██╔══██╗██║     ██╔══██╗
███████║█████╗  ██║     ██║     ██║   ██║    ██║ █╗ ██║██║   ██║██████╔╝██║     ██║  ██║
██╔══██║██╔══╝  ██║     ██║     ██║   ██║    ██║███╗██║██║   ██║██╔══██╗██║     ██║  ██║
██║  ██║███████╗███████╗███████╗╚██████╔╝    ╚███╔███╔╝╚██████╔╝██║  ██║███████╗██████╔╝
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝      ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝ `,
        `font-family: monospace`
    );
    console.log(
        'Hi there, I see you are a man of culture as well. Lets Connect, I love working with like minded people.'
    );
    return (
        <div className='hero'>
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
