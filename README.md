# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


# Tutorial

## Prerequisites to host your page on github

1. An adequate version of [`Node.js`](https://nodejs.org/) is installed. Here's the adequate version I use:

    ```sh
    $ node --version
    v6.10.1
    ```

2. An adequate version of  [`npm`](https://nodejs.org/) is installed. Here's the adequate version I use:

    ```sh
    $ npm --version
    3.10.10
    ```
3. An adequate version of [`create-react-app`](https://github.com/facebookincubator/create-react-app) is installed. Here's the adequate version I use:

    ```sh
    $ create-react-app --version
    1.3.1
    ```

    In the case of `create-react-app`, you can either install it globally (i.e. `$ npm install -g create-react-app`) or install it locally (i.e. `$ npm install create-react-app`). If you choose the latter, you will have to specify its path whenever you invoke it (e.g. `path/to/node_modules/.bin/create-react-app`).

4. (**Optional**) An adequate version of [`sed`](http://www.gnu.org/software/sed/) is installed. Here's the adequate version I use:

   ```sh
   $ sed --version
   sed (GNU sed) 4.4
   ```

5. A [GitHub](https://www.github.com) account. :octocat:

6. A command-line Git client [setup according to GitHub](https://help.github.com/articles/set-up-git/).

## Procedure

1. **Create an *empty* repository on GitHub.** (2 minutes)

    * For this tutorial, I'll create a repository named `react-gh-pages`.
    * By *empty*, I mean *without* a `README.md` file, a `.gitignore` file, a `LICENSE` file, or any other files.

2. **Create a new React app on your computer.** (5 minutes)

    ```sh
    $ create-react-app react-gh-pages
    ```
    
    * This is the app you will deploy to GitHub Pages in step 7.
    * I opted to give the app the same name as my GitHub repository (i.e. `react-gh-pages`). However, you can name them differently from one another (e.g. you can name your app `app-123` and your GitHub Repository `repo-456`).
    * This will create a new folder named `react-gh-pages` (or whatever you named your app) on your computer.

3. **Install the `gh-pages` package as a "dev-dependency" of the app.** (1 minute)

    ```
    $ cd react-gh-pages
    $ npm install gh-pages --save-dev
    ```
    
    * The commands shown in the following steps can all be issued from within the app's folder.

4. **Add some properties to the app's `package.json` file.** (3 minutes)

    * At the top level, add a `homepage` property. Define its value to be the string `http://{username}.github.io/{repo-name}`, where `{username}` is your GitHub username, and `{repo-name}` is the name of the GitHub repository you created in step 1. Since my GitHub username is `gitname` and the name of my GitHub repository is `react-gh-pages`, I added the following property:
    
    ```js
    //...
    "homepage": "http://gitname.github.io/react-gh-pages"
    ```
    
    * In the existing `scripts` property, add a `predeploy` property and a `deploy` property, each having the values shown below:

    ```js
    "scripts": {
      //...
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
    ```
    
    * **Shortcut:** Instead of adding those properties using a text editor; if I have `sed` installed on my system, I can add the properties by issuing the following shell commands:
    
    ```sh
    $ sed -i '5i\  "homepage": "http://gitname.github.io/react-gh-pages",' ./package.json
    $ sed -i '15i\    "predeploy": "npm run build",' ./package.json
    $ sed -i '16i\    "deploy": "gh-pages -d build",' ./package.json
    ```
    
5. **Create a git repository in the app's folder.** (1 minute)

    ```
    $ git init
    Initialized empty Git repository in C:/path/to/react-gh-pages/.git/
    ```

6. **Add the GitHub repository as a "remote" in your local git repository.** (1 minute)

    ```
    $ git remote add origin https://github.com/gitname/react-gh-pages.git
    ```
    
    * This will make it so the `gh-pages` package knows where you want it to deploy your app in step 7.
    * It will also make it so git knows where you want it to push your source code (i.e. the commits on your `master` branch) in step 8.

7. **Generate a *production build* of your app, and deploy it to GitHub Pages.** (2 minutes)

    ```
    $ npm run deploy
    ```
    
    * That's it! Your app is now accessible at the URL you specified in step 4.
    * In my case, my app is now accessible at: https://gitname.github.io/react-gh-pages/
    * I recommend exploring the GitHub repository at this point. When I explored it, I noticed that, although a `master` branch did not exist, a `gh-pages` branch did exist. I noticed the latter contained the *built* app code, as opposed to the app's source code.

8. **Optionally, commit your source code to the "master" branch and push your commit to GitHub.** (1 minute)

    ```
    $ git add .
    $ git commit -m "Create a React app and publish it to GitHub Pages"
    $ git push origin master
    ```

    * I recommend exploring the GitHub repository once again at this point. When I did that, I noticed that a `master` branch now existed, and it contained the app's source code.
    * So, the `master` branch held the source code, and the `gh-pages` branch held the *built* app code.




























# Youtube video 

[![Subscribe](https://img.youtube.com/vi/mp3bfueGEEo/0.jpg)](https://youtu.be/mp3bfueGEEo)
