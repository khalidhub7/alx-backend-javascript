#!/bin/bash

# detect ubuntu version
VERSION_CODENAME=$(lsb_release -c | awk '{print $2}')

if [[ "$VERSION_CODENAME" == "noble" ]]; then
    echo "since you're using ubuntu 24.04 (Noble), 
we will install Node.js 18.x"
    curl -sL https://deb.nodesource.com/setup_18.x \
	-o nodesource_setup.sh
else
    echo "since you're using a different ubuntu version, 
we will install Node.js 12.x"
    curl -sL https://deb.nodesource.com/setup_12.x \
	-o nodesource_setup.sh
fi

# install Node.js silently
bash nodesource_setup.sh >/dev/null
sudo apt install nodejs -y >/dev/null

# install dependencies silently
npm install >/dev/null

: '
make sure these files in your project directory:
package.json, babel.config.js, .eslintrc.js
'

# capture the exit status of the last command
status=$?
echo "exit status $status"
echo "done"
