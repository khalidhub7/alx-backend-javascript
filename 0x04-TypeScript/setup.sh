# install prettier
npm install --save-dev prettier    
npx prettier --write js/main.ts  # auto-fix with prettier

# install compatible eslint version
npm install eslint@6.8.0 --no-save
npx eslint js/main.ts  # check
npx eslint js/main.ts --fix  # auto-fix

# compile and run typescript
tsc js/main.ts && node js/main.js

# install dependencies and run scripts
npm install    
npm run start-dev  # start dev server
npm run build      # build project
npm test           # run tests

# make sure "initial config files" are in the current directory
# package.json, .eslintrc.js, tsconfig.json, webpack.config.js

# make files read-only to prevent npm changes
sudo chattr +i package.json .eslintrc.js tsconfig.json webpack.config.js

# to see output, go to 'http://localhost:8080/'

# to run task_4
tsc --outFile merged.js ./js/subjects/*.ts js/main.ts
node merged.js
