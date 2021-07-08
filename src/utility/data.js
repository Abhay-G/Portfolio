import Mumble from '../assets/mumble.png';
import GFind from '../assets/gfind.png';
import YourSudoku from '../assets/yoursudoku.png';
import Kryptoblaze from '../assets/kryptoblaze.png';
const projects = [
    {
        id: 1,
        name: 'Mumble',
        description:
            'A web application that lets you share your secrets and embarrassing moments with the public anonymously. It is a CRUD web app with many different functionalities. I have used Cloudinary for cloud-based image management and MongoDB for database,',
        techStack:
            'Nodejs, Express, MongoDB, Cloudinary, EJS, HTML, CSS, GSAP, Bootstrap',
        img: Mumble,
        category: 'WebApp',
    },
    {
        id: 2,
        name: 'GFind',
        description:
            'Github finder helps you to find users in Github. It also gives you brief information about that user’s profile, which includes name, location, hireable, bio, followers, gists, recent repos, and much more. I have worked with Github API and used React Framework for this project.',
        techStack: 'React, Context API, Javascript, HTML, CSS',
        img: GFind,
        category: 'WebApp',
    },
    {
        id: 3,
        name: 'Your Sudoku',
        description:
            'A DSA based project integrated with web development that gives solutions to your sudoku with backtracking and also lets you solve randomly generated sudokus and then practice on them.',
        techStack: 'React, Sass, Backtracking, Framer Motion',
        img: YourSudoku,
        category: 'React App',
    },
    {
        id: 4,
        name: 'Kryptoblaze',
        description:
            'A 2d top-down shooter game with a dark story and cartoonish characters. I used Unity for game development, Photoshop for designing characters and levels. Acted as a team lead and learned a lot about teamwork',
        techStack: 'Unity, Photoshop',
        img: Kryptoblaze,
        category: 'Game',
    },
];
export default projects;
