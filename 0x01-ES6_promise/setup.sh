#!/bin/bash

# Detect Ubuntu version
VERSION_CODENAME=$(lsb_release -c | awk '{print $2}')

# Install Node.js based on Ubuntu version
if [[ "$VERSION_CODENAME" == "noble" ]]; then
    echo "Using Ubuntu 24.04 (Noble), installing Node.js 18.x"
    curl -fsSL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh
else
    echo "Using a different Ubuntu version, installing Node.js 12.x"
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
fi

# Install Node.js and dependencies silently
sudo bash nodesource_setup.sh >/dev/null 2>&1
sudo apt install nodejs -y >/dev/null 2>&1
node -v >/dev/null 2>&1 && npm -v >/dev/null 2>&1
npm install >/dev/null 2>&1

# Commented response format for utils.js
: '
*** Response data format in "utils.js" file ***

uploadPhoto returns a Promise: {
  "status": 200,
  "body": "photo-profile-1"
}

createUser returns a Promise: {
  "firstName": "Guillaume",
  "lastName": "Salva"
}
'

echo "done"
