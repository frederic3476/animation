# A Starting point to use ES6 & beyond features in the browser today with Webpack and Babel.

Out of the box includes features up to stage 0, tweak to your needs.

Also supports SASS, just create your `*.scss` file in `/app` and require it, or simply change the sample file provided.


## Setup

Install Node.js
- https://nodejs.org/en/


## Usage

1) If you don't have webpack installed globally do so by opening a terminal and running:

`npm install webpack -g`

2) Then type `cd` into the terminal and drag this project folder into the terminal and then press enter to switch the current working directory to the project folder.

Your terminal should now show the folder name with your username ready to run a command:

`myComputerName$:ES6-webpack-starter myUserName$`  (mac example)

3) Now run `npm install` to install dependencies.  When completed, you can run several commands to initialize webpack:

- `npm start` will start the live-reload dev server.
- `npm run build` will build the site for development use.
- `npm run production` will output a minified build for production use.
- `npm run clean` will remove the `/dist` folder.

## Example

Run: `npm run start`

Visit: `http://localhost:8080/webpack-dev-server/`

- The `app` folder is where you should make changes to your css and javascript.
- The `dist` folder is the compiled output that will be overwritten each time you make changes.

## index.js

`index.js` can import "scss" files such as your primary `style.scss` and other javascript libraries such as jquery installed by npm: 

#### jQuery: 

jQuery is already installed, but here's how you would add it:

Run `npm install jquery`

Then in `index.js` add `window.$ = window.jQuery = require('jquery');`

## style.css

`style.css` can import other css files installed by npm: 

#### Animate.css:

Animate.css is already installed, but here's how you would add it:

Run `npm install animate.css`

Then add `@import '~animate.css';` to `style.scss`