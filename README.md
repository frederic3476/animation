# A (very) simple starting point to use ES6 & beyond features in the browser today with Webpack and Babel.

Out of the box includes features up to stage 0, tweak to your needs.

Also supports SASS, just create your `*.scss` file in `/app` and require it, or simply change the sample file provided.


## Setup

Install Node.js
- https://nodejs.org/en/


## Usage

If you don't have webpack installed globally do so by opening a terminal and running `npm install webpack -g`. 

Then type `cd` into the terminal and drag this project folder into the terminal and then press enter to switch the current working directory to the project folder.

Your terminal should now show the folder name with your username ready to run a command:
`myComputerName$:ES6-webpack-starter myUserName$`  (mac example)


Now run `npm install` to install dependencies. When completed, you can now run several commands to initialize webpack:

- `npm start` will start the live-reload dev server.
- `npm run build` will build the site for development use. By default site are output in the `dist/` folder
- `npm run production` will output a minified build for production use.
- `npm run clean` will remove the `/dist` folder.

## Example

Run: `npm run start`

Visit: `http://localhost:8080/webpack-dev-server/`