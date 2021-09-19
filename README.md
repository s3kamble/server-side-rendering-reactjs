# <i><u>App Description</u></i>
- This app displays data of multiple companies by navigating on links provided.
- [Preview app](https://cranky-franklin-a0b132.netlify.app/)

<br>

<details open="open">
<summary> <b> Table of Contents</b> </summary>
<ol> 
    <li>
        <a href="#overview">Overview</a>
        <ul>
          <li> <a href="#prerequisites">Prerequisites</a></li>
          <li> <a href="#built-with">Built with</a></li>
          <li> <a href="#keywords">Keywords</a></li>
        </ul>
    </li>
    <li>
        <a href="#getting-started">Getting started</a>
        <ul>
          <li> <a href="#dependencies">Dependencies</a></li>
          <li> <a href="#installation">Installation</a></li>
        </ul>
    </li>
    <li>
      <a  href="#usage">Usage</a>
    </li>
    <li>
      <a  href="#directory-tree">Directory-tree</a>
    </li>

</ol>
</details>

<br>

# <i><u>Overview</u></i>

# <b>Prerequisites</b>
- Knowledge Of Javascript(ES5,ES6)
- React

# <b>Built with</b>
- Next. js is a React Framework used for front-end development that enables us to use functionalities such as generating static websites and server-side rendering for React-based web applications.
- [Read more](https://nextjs.org/docs/getting-started)


# <b>Keywords</b>
- React Framework
- Next.js
- Server side rendering
- Static generation

<br>

# <i><u>Getting started</u></i>

# <b> Dependencies </b>
- This front-end app does not require any backend dependency to be installed or run locally.
-It fetches JSON data from a static page hosted on github


# Installation

1. Open a new terminal window,navigate to the folder where you want the front-end apllication sub-folder to be created

2. Type the following command:
```sh
  git clone https://github.com/s3kamble/server-side-rendering-reactjs
   ```
3. On successful clone, navigate to the currently created folder(frontend folder) and type the following command to install all the required packages.
```sh
  npm install
   ```
4. Once the packages are installed,to start the frontend react application ,type the following command:
```sh
 npm run build
   ```
5. On successful build,type the following command in the terminal.
```sh
 npm start
   ```
6. Open the browser of you choice and type.
```sh
  http://localhost:3000/
   ```

<br>

# <i><u>Usage</u></i>
- Navbar contains the links to different companies,clink on the link to views details of the company 
  <br>

# <i><u>Directory tree</u></i>
```
.
├── companyData.json
├── components
│   ├── Footer
│   │   ├── Footer.jsx
│   │   └── Footer.module.css
│   ├── Hamburger
│   │   ├── Hamburger.jsx
│   │   └── Hamburger.module.css
│   └── Navigation
│       ├── Navigation.jsx
│       └── Navigation.module.css
├── next.config.js
├── package.json
├── package-lock.json
├── pages
│   ├── _app.js
│   ├── contentstack.js
│   ├── index.js
│   ├── raweng.js
│   └── surfboard.js
├── public
│   ├── favicon.ico
│   ├── TECH.png
│   └── vercel.svg
├── README.md
└── styles
    ├── Contentstack.module.css
    ├── globals.css
    ├── Home.module.css
    ├── RawEngg.module.css
    └── Surfboard.module.css

```