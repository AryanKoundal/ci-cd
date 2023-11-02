#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v21.1.0/bin

cd ci-cd
 git pull origin main
 cd server
 pm2 kill
 pm2 start index.js
