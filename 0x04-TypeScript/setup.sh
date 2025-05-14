# install prettier for automatic code formatting
npm install --save-dev prettier    
npx prettier --write js/main.ts  # auto-fix with prettier

# install compatible eslint version for linting
npm install eslint@6.8.0 --no-save
npx eslint js/main.ts  # check for linting errors
npx eslint js/main.ts --fix  # auto-fix linting issues

# compile and run typescript
tsc js/main.ts && node js/main.js

# install dependencies and run scripts
npm install    
npm run start-dev  # start the development server
npm run build      # build the project
npm test           # run tests

# ensure initial config files are in the current directory:
# package.json, .eslintrc.js, tsconfig.json, webpack.config.js

# make config files read-only to prevent npm from modifying them
sudo chattr +i package.json .eslintrc.js tsconfig.json webpack.config.js

# to see the output, navigate to: 'http://localhost:8080/'

# to run task_4 (combine typescript files and execute)
tsc --outFile merged.js ./js/subjects/*.ts js/main.ts
node merged.js
