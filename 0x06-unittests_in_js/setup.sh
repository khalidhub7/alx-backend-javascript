# run tests
npm test -- ./0-calcul.test.js

# fix lint issues
npm run lint -- --fix ./0-calcul.*

# format config files
npx prettier --write package.json .eslintrc.js

# lock files from changes
sudo chattr +i package.json .eslintrc.js
