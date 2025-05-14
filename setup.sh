# Install Prettier for automatic code formatting
npm install --save-dev prettier    
npx prettier --write js/main.ts  # Auto-fix with Prettier

# Install compatible ESLint version for linting
npm install eslint@6.8.0 --no-save
npx eslint js/main.ts  # Check for linting errors
npx eslint js/main.ts --fix  # Auto-fix linting issues

# Compile and run TypeScript
tsc js/main.ts && node js/main.js

# Install dependencies and run scripts
npm install    
npm run start-dev  # Start the development server
npm run build      # Build the project
npm test           # Run tests

# Ensure initial config files are in the current directory:
# package.json, .eslintrc.js, tsconfig.json, webpack.config.js

# Make config files read-only to prevent npm from modifying them
sudo chattr +i package.json .eslintrc.js tsconfig.json webpack.config.js

# To see the output, navigate to: 'http://localhost:8080/'

# To run task_4 (combine TypeScript files and execute)
tsc --outFile merged.js ./js/subjects/*.ts js/main.ts
node merged.js
