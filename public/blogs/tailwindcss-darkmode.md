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

After the installation is done, head over to your `tailwind.config.js` file and add `darkMode` property to the object and set it's value to `class`.

```js
module.exports = {
    content: [...],
    darkMode: "class",
    ...
}
```

Now add `dark` pseudo selector to apply darkmode styles to your webpage, like shown in [TailwindCSS DarkMode](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually). That's it, that is how you add darkmode to your website. But wait, that's not persisting. The darkmode will dissappear once you refresh your page. That's where the segment below comes into play.

### Persisting DarkMode !

I will be taking NextJs as a framework here. You're free to choose yours and translate accordingly. Please follow the code below.

```
import { useState, useEffect } from "react";
// useState is a react hook with which we can manipulate states
// useEffect is a react hook which helps with lifecycle of the react app

export default function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false)
    // to store the darkmode state

    const toggleDarkMode = (e) => {
        setIsDarkMode(!isDarkMode) // change the state to the opposite of itself (toggle)
        localStorage.setItem("isDarkMode", toString(!isDarkMode)); // set the darkmode state to the localStorage
        document.querySelector("body").classList.toggle("dark") // add the `dark` class to the body of the html page
    }

    useEffect(() => {
        const isDarkModeToggled = localStorage.getItem("isDarkMode") // checks if the page used darkmode before refresh
        const body = document.querySelector("body")

        if(isDarkModeToggled === "true") { // if the page was set to use darkmode before refresh then add the darkmode to the current refreshed page as well
            setIsDarkMode(true);
            body.classList.add("dark");
        }
    }, [])
    return (
        <header>
            <div>TailwindCSS DarkMode</div>
            <nav>
                <button onClick={e => toggleDarkMode(e)}>Toggle Dark Mode</button>
                {/* toggle darkmode on click */}
            </nav>
        </header>
    )
}
```

> The parts needed explanation has been explained through comments.

### Conclusion

There you have it. The darkmode in your webpage will persist as promised. There might be a lot of different ways to do this and this is how i did it. You're free to critisize my way, and I'm happy to hear it. Contact me if you want [here](https://luv-sage.vercel.app/contact). Check out more of my blogs [here](https://luv-sage.vercel.app/blogs). Thank you for hearing me out. Peace!
