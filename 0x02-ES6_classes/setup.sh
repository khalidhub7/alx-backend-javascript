# 🛠️ Setup Instructions

# from your home directory
# install NodeJS 12.11.xi
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
✅ Verify installation:
nodejs -v && npm -v # should output v12.11.1 / 6.11.3


# ⚠️ ubuntu 24.04 (Noble) Users ‼️
# node.js 12.x is not supported. use Node.js 18.x instead
curl -fsSL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
node -v && npm -v


# 📦 Install Dependencies
npm install  # installs Jest, Babel, ESLint (via package.json)


📄 package.json
📄 babel.config.js
📄 .eslintrc.js
