#!/bin/bash
if [ -z "$STY" ]; then exec screen -dm -S Portafolio /bin/bash "$0"; fi
node index.js
