#!/bin/bash

# detect ubuntu version
VERSION_CODENAME=$(lsb_release -c | awk '{print $2}')

if [[ "$VERSION_CODENAME" == "noble" ]]; then
	echo "Since you're using Ubuntu 24.04 (Noble), 
we will install Node.js 18.x"
	curl -fsSL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh
else
	echo "Since you're using a different Ubuntu version, 
we will install Node.js 12.x"
	curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
fi

# install Node.js silently
sudo -s bash nodesource_setup.sh >/dev/null 2>&1
sudo apt install nodejs -y >/dev/null 2>&1
node -v >/dev/null 2>&1 && npm -v >/dev/null 2>&1

# install dependencies silently
npm install >/dev/null 2>&1
echo "
done"
