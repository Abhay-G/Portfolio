import mumblePlan from '../assets/mumbleplan.png';
import gfindPlan from '../assets/gfindplan.png';
import sudokuPlan from '../assets/sudokuplan.png';
import formula from '../assets/formula.png';
import kryptoblazePlan from '../assets/kryptoblazeplan.png';

const projectsInfo = [
    {
        id: '1',
        name: 'Mumble',
        brief: 'This a a Full Stack web app which lets you share your secrets and other moments freely while being anonymous. You can share your post, share pictures, comment on other people posts, react on them and more. You can delete your post or edit them as you like. I have also implemented google Auth for hassle free login and email verification for our old schoolers.',
        date: '2021',
        location: 'Bhopal',
        images: [
            'https://res.cloudinary.com/doy1foyff/image/upload/v1625817510/mumble1_vryywa.png',
            'https://res.cloudinary.com/doy1foyff/image/upload/v1625818926/mumble2_ab2zoy.png',
            'https://res.cloudinary.com/doy1foyff/image/upload/v1625818936/mumble3_dd7f9r.png',
        ],
        projectPlan: mumblePlan,
        plandesc:
            'My process started with doing a SWOT analysis on a little bit similar webapp. My first activity was to set up a UI plan and then think of a strategy to implement the whole concept. After that I worked on the frontend and backend simultaneously.',
        categories: [
            'UI-Design',
            'Front-end Development',
            'Back-end Development',
            'Database-Management',
        ],
        codeSnippets: [
            'https://res.cloudinary.com/doy1foyff/image/upload/v1625832991/carbon_pvwpv4.png',
            'https://res.cloudinary.com/doy1foyff/image/upload/v1625832980/mumblecarbon2_srzygp.png',
        ],
        codedesc:
            'These are the mongodb database schema that I used in this project. The post schema and the user schema.',
        nextProject: 'GFind',
        nextId: '2',
    },
    {
        id: '2',
        name: 'GFind',
        brief: 'This is a react webapp that helps users to search github users and organizations by their name. GFind provides all the important informations such as name, location, hireable, bio, followers, gists, recent repos, and much more. You can also visit that persons original github profile if you want. I have made this while I was learning about react.',
        date: '2021',
        location: 'Bhopal',
        images: [
            'https://res.cloudinary.com/doy1foyff/image/upload/v1622824626/screely-1622387329039_loxgjz.png',
            'https://res.cloudinary.com/doy1foyff/image/upload/v1622824626/screely-1622387418999_irlh4t.png',
            'https://res.cloudinary.com/doy1foyff/image/upload/v1622824627/screely-1622387284453_d0timp.png',
        ],
        projectPlan: gfindPlan,
        plandesc:
            'I started by creating a low fidelity UI, and creating a skeleton project of React. After that I created react components, dealt with different types of hooks, state management using Context API and finally making it functional by interacting with Github Third party API.',
        categories: ['React', 'Context API', 'Third party API'],
        codeSnippets: [
            'https://res.cloudinary.com/doy1foyff/image/upload/v1625845982/gfindcode2_iubvgs.png',
            'https://res.cloudinary.com/doy1foyff/image/upload/v1625845981/gfindcode1_lu00ok.png',
        ],
        codedesc:
            'These are some code snippets that shows how I handled state in context API and how i used useReducer for complex state management to make it easier and compact',
        nextProject: 'Your Sudoku',
        nextId: '3',
    },

    {
        id: '3',
        name: 'Your Sudoku',
        brief: 'A DSA based project integrated with web development that gives solutions to your sudoku with backtracking and also lets you solve randomly generated sudokus and then practice on them.',
        date: '2021',
        location: 'Bhopal',
        images: [
            'https://res.cloudinary.com/doy1foyff/image/upload/v1625852589/yoursudoku2_zu7k8e.png',
            'https://res.cloudinary.com/doy1foyff/image/upload/v1625852588/yoursudoku_zwpmik.png',
        ],
        projectPlan: sudokuPlan,
        formula: formula,
        formuladesc:
            'I have not used table attribute of html to for tables instead I worked with flexbox and created the whole shudoku with that. So to assign the id and get the value and know which input is updated in the state, I have to use this formula to mark each row and column',
        plandesc:
            'My process started with creating wireframes for the project and writing the algorithm to solve a sudoku. Then I made sudoku table in react and added 81 input fields and maintained all of them through 2d Array state. Also I have to come up with a formula to identify each input id using blockId, columnId and rowId. After implementing the algorithm, I have finalized it and added animation using Framer motion',
        categories: ['React', 'Backtracking', 'Framer Motion'],
        codeSnippets: [
            'https://res.cloudinary.com/doy1foyff/image/upload/v1625856959/sudokucode_nbmycn.png',
            // 'https://res.cloudinary.com/doy1foyff/image/upload/v1625845981/gfindcode1_lu00ok.png',
        ],
        codedesc:
            'These are some code snippets that shows how I implemented the alogorithm. This part was the easiest out of all. ',
        nextProject: 'Kryptoblaze',
        nextId: '4',
    },
    {
        id: '4',
        name: 'Kryptoblaze',
        brief: 'It is a 2d top-down shooter game with a dark story and cartoonish characters. I used Unity for game development, Photoshop for designing characters and levels. This was a Team Project for project exhibition in college in second year of my college. It was my first project where I worked with a team and acted as a team lead. I assigned task to each member and gave my all also while motivating others to do the same.',
        date: '2019',
        location: 'Bhopal',
        images: [
            'https://res.cloudinary.com/doy1foyff/image/upload/v1625859301/kryptoblaze4_qgwrqu.png',
            'https://res.cloudinary.com/doy1foyff/image/upload/v1625859305/kryptoblaze2_c9sg3c.png',
            'https://res.cloudinary.com/doy1foyff/image/upload/v1625859305/kryptoblaze2_c9sg3c.png',
            'https://res.cloudinary.com/doy1foyff/image/upload/v1625859306/kryptoblaze3_swuqno.png',
        ],
        projectPlan: kryptoblazePlan,
        plandesc:
            'This project has two main components i.e Level and Character Designing and Scripting. We first came up with the game idea and theme. Then the next task was to design characters and levels. We designed the main character first and then scripted the movements, shooting controls etc. After making the game functional, we added and improved design in it and other holes that we found out while testing it.',
        formula:
            'https://res.cloudinary.com/doy1foyff/image/upload/v1625861928/kryptoblaze_l3tssj.png',

        formuladesc:
            'Some of the characters that we designed. These were all the enemy characters and have special powers and personality about them ranging from summoning other enemies to throwing ball bombs',

        categories: [
            'Unity',
            'Character-Design',
            'World Building',
            'Photoshop',
        ],
        codeSnippets: [
            'https://res.cloudinary.com/doy1foyff/image/upload/v1625856959/sudokucode_nbmycn.png',
        ],
        codedesc:
            'The code snippet of our character script that shows the implementation of movement of the character and the damage it takes.',
        nextProject: 'Home',
        nextId: '5',
    },
];
export default projectsInfo;
