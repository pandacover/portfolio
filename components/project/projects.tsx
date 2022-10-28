type ProjectType = {
	[key: string]: {
		id: string;
		name: string;
		details: string;
		live: string;
		source: string;
		tech: string[];
		image: string;
		desc: string;
	};
};
const Projects: ProjectType = {
	"Void List": {
		id: "1",
		name: "Void List",
		details:
			"Void List is a todo-list web application created with MERN stack and tailwindcss. You can create, edit and delete a task. When you authenticate for the first time, you are given a customize avatar which is randamized.",
		live: "https://voidtodo.herokuapp.com/",
		source: "https://github.com/pandacover/void-todo",
		tech: [
			"React.js",
			"Node.js",
			"Express.js",
			"MongoDb",
			"Redux",
			"Tailwindcss",
		],
		desc: "A todo list app with user authentication and user friendly UI",
		image: "/assets/-pandacover-voidlist.png",
	},
	"Goal Setter": {
		id: "2",
		name: "Goal Setter",
		details:
			"GoalSetter is a personal goal setting application created with MERN stack. GoalSetter lets you create, edit, update and delete your personal goals only while keeping you and others away from manipulating else's goals.",
		live: "https://goalsetterluv.herokuapp.com/",
		source: "https://github.com/pandacover/goalsetter",
		tech: ["React.js", "Node.js", "Express.js", "MongoDb", "Redux"],
		desc: "A goal setting app with user authentication and goal tracking feature.",
		image: "/assets/-pandacover-goalsetter.png",
	},
	"Expense Tracker": {
		id: "3",
		name: "Expense Tracker",
		details:
			"A React.js expense tracker to keep note of your credits and debits. It can also calculate your overall savings.",
		live: "https://tracker-expense-pandacover.netlify.app/",
		source: "https://github.com/pandacover/expense-tracker-react.git",
		desc: "An app that track your expenses so you don't have to.",
		tech: ["React.js", "Context API"],
		image: "/assets/-pandacover-tracker.png",
	},
	"Swiggy Clone": {
		id: "4",
		name: "Swiggy Clone",
		details: "A clone of Swiggy's website landing page made in React.js",
		live: "https://swiggy-clone-edyst.netlify.app/",
		source: "https://github.com/edyst/swiggy-landing-page-reactjs-pandacover",
		desc: "Swiggy website's homepage clone website.",
		image: "/assets/-pandacover-swiggy.png",
		tech: ["React.js"],
	},
	Sudoku: {
		id: "4",
		name: "Sudoku",
		details:
			"Sudoku game created with JavaScript, Html and Css. The game has 3 difficulty levels ranging from Easy to Hard. Do you have what it takes to solve the puzzle?",
		live: "https://sudoku-pandacover.netlify.app/",
		source: "https://github.com/edyst/sudoku-edyst-pandacover",
		image: "/assets/-pandacover-sudoku.png",
		desc: "A simple sudoku game with validation option.",
		tech: ["HTML", "CSS", "JavaScript"],
	},
	"Pokemon Wiki": {
		id: "5",
		name: "Pokemon Wiki",
		details:
			"A Wiki page for the famous T.V. show and game Pokémon. Created with Html and Css. The website is fully responsive with mobiles too.",
		live: "https://pokemon-wiki-pandacover.netlify.app/",
		source: "https://github.com/edyst/pokemon-wiki-edyst-pandacover",
		tech: ["HTML", "CSS"],
		desc: "Pokemon wiki website.",
		image: "/assets/-pandacover-pokemon.png",
	},
};

export default Projects;
