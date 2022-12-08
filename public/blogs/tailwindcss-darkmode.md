---
title: Persisting Darkmode with Tailwindcss
date: 08 September, 2022
author: Luv Makin
excerpt: Tailwind is a utility-first css framework used to build custom user interfaces rapidly and efficiently. It is highly cusotmizable and uses classes instead of components which makes it very developer dependent.
imgSrc: /assets/blogs-cover/-pandacover-darkmode-cover.png
---

![image](/assets/blogs-cover/-pandacover-darkmode-cover.png)

### TailwindCSS ?

Tailwind is a utility-first css framework used to build custom user interfaces rapidly and efficiently. It is highly cusotmizable and uses classes instead of components which makes it very developer dependent.

### What do we mean by "Persisting" Dark Mode ?

It means that the dark mode will still persist even if you exit the browser untill and unless you don't hard reset the browser, i.e. clear all the history as well as browser storages.

### How do we proceed ?

So first of all, we are using TailwindCSS's class based dark mode. It basically lets us create a dark mode theme by adding a class to the "super" - parent element.

#### TailwindCSS setup

For starters please head over to [TailwindCSS](https://tailwindcss.com/docs/installation/framework-guides) framework guide.
It will guide you through the installation process.

All you need to do is

```js
yarn add -D tailwindcss postcss autoprefixer

yarn tailwindcss init -p
```

or if you use npm then

```js
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p
```

After the installation is done, head over to your `tailwind.config.js` file and add `darkMode` property to the object and set it's value to `class`.

```js
module.exports = {
	content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
	darkMode: "class",
	theme: {
		extend: {},
	},
	plugins: [],
};
```

Now add `dark` pseudo selector to apply darkmode styles to your webpage, like shown in [TailwindCSS DarkMode](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually). That's it, that is how you add darkmode to your website. But wait, that's not persisting. The darkmode will dissappear once you refresh your page. That's where the segment below comes into play.

### Persisting DarkMode !

I will be taking NextJs as a framework here. You're free to choose yours and translate accordingly. Please follow the code below.

First let's create `Navbar.js` and some JSX and styling to it

```js
export default function Navbar() {
	return (
		<header className='md:w-4/6 h-16 mx-auto flex px-2 items-center justify-between'>
			<div className='font-bold text-lg'>Tailwindcss Dark Mode</div>
			<nav>
				<button className='cursor-pointer hover:text-indigo-600'>
					Toggle Dark Mode
				</button>
			</nav>
		</header>
	);
}
```

Since tailwindcss uses utility classes, hence the styling are added through classes. Simple, right?

Anyways, let's import `useState` and `useEffect` hooks

```js
import { useState, useEffect } from "react";
```

We will look into what to actually do with the two hooks. For now let's move on and add a `onClick` event to our button.

```js
<button
	className='cursor-pointer hover:text-indigo-600'
	onClick={toggleDarkMode}
>
	Toggle Dark Mode
</button>
```

When the button is clicked, it will trigger the `onClick` event which in turn will call the `toggleDarkMode` function.
Now to put the called function to our code.

```js
const toggleDarkMode = (e) => {
	e.preventDefault();
};
```

A button when clicked triggers a default, page reload, behavior. To prevent that we use the `preventDefault` function available in the event (`e`) object. Now let's declare a boolean state to check whether the dark mode is toggled or not and initialize it as false.

```js
const [isEnabled, setIsEnabled] = useState(false);
```

Pretty self explanatory. Now when the button is clicked we need to update our state, store the updated information to localstorage and add/remove `dark` class from body depending on if it's already present or not. Here's how to do that.

```js
const toggleDarkMode = (e) => {
	setIsEnabled(!isEnabled);
	localStorage.setItem("darkmode", toString(!isEnabled));
	document.body.classList.toggle("dark");
};
```

Whenever the button is clicked, the state will update to inverse of it's current value, that means, if `isEnabled === true`, then on button clicked it will update to false and vice-versa. Now you might have a question, "Why are we setting inverse of already updated value to localstorage? Shouldn't it be just the updated value?". Well, the nature of a state in React could be [asynchronous](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous), which means it won't actually update immediately. And that is what will happen here. Therefore as a counter, we need to use the inverse value of the state, since we know that is what the updated state is going to be.

We are mostly done with the manual dark mode handling. Now for the actual stuff that's going to check if we were using dark mode before reloading / existing session. We will be using `useEffect` which will be triggered before the component paints any content to the screen, that is as of React 18. Before that it would trigger after the page is finished loading the DOM. Anyways, you don't have to worry about it since it works almost the same as it did in creation of this blog.

```js
useEffect(() => {
	const wasDarkMode = localStorage.getItem("darkMode");

	if (wasDarkMode === "true") {
		setIsEnabled(true);
		document.body.classList.add("dark");
	}
}, []);
```

If dark mode was already enabled then just updated everything to true. Here's the complete code.

```js
import { useState, useEffect } from "react";

export default function Navbar() {
	const [isEnabled, setIsEnabled] = useState(false);

	const toggleDarkMode = (e) => {
		setIsEnabled(!isEnabled);
		localStorage.setItem("darkmode", toString(!isEnabled));
		document.body.classList.toggle("dark");
	};

	useEffect(() => {
		const wasDarkMode = localStorage.getItem("darkMode");

		if (wasDarkMode === "true") {
			setIsEnabled(true);
			document.body.classList.add("dark");
		}
	}, []);

	return (
		<header className='md:w-4/6 h-16 mx-auto flex px-2 items-center justify-between'>
			<div className='font-bold text-lg'>Tailwindcss Dark Mode</div>
			<nav>
				<button className='cursor-pointer hover:text-indigo-600'>
					Toggle Dark Mode
				</button>
			</nav>
		</header>
	);
}
```

### Conclusion

There you have it. The darkmode in your webpage will persist as promised. There might be a lot of different ways to do this and this is how i did it. You're free to critisize my way, and I'm happy to hear it. Contact me if you want [here](https://luv-sage.vercel.app/contact). Check out more of my blogs [here](https://luv-sage.vercel.app/blogs). Thank you for hearing me out. Peace!
