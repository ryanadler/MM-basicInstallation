#!/bin/bash

## This script installs magic mirror and it's recommended modules, along with updating software
## To enable SSH, please use the GUI menu/configuration tool

sudo apt-get update -y
sudo apt-get upgrade -y

echo "Upgrades and Updates of RaspianOS complete"
echo

apt-get install tree git vim nano -y

echo "anscillary software installed"
echo

cd bash -c  "$(curl -sL https://raw.githubusercontent.com/sdetweil/MagicMirror_scripts/master/raspberry.sh)"
cd ~/MagicMirror/modules/
git clone --depth=1 https://github.com/MMM-CalendarExt2/MMM-CalendarExt2
git clone --depth=1 https://github.com/MMRIZE/MMM-CalendarExt3
git clone https://github.com/cgillinger/MMM-WeatherEffects
git clone https://github.com/dathbe/MMM-MyScoreboard

## temp stop MM
pm2 stop MagicMirror

echo "magic mirror installation complete"

pm2 stop MagicMirror

echo 
echo "Pulling in base configuration"
echo

cd ~/MagicMirror/config
ts=$(date +%s)
mv config.js config_$ts

wget -O config.js "https://raw.githubusercontent.com/ryanadler/magicMirror/refs/heads/main/config.js"

cd ~/MagicMirror/css
echo "
.CX3 .cw  {
  visibility: hidden;
}
" >> custom.css

echo "Configuration has been loaded, please customize the configuration with your Google Calendar. Restarting Magic Mirror."
echo 
echo "
Command to restart Magic Mirror after you edit and save your config.js file making updates:
pm2 restart MagicMirror

Command to check configuration for errors post edit:
node --run config:check
Must be run from the MagicMirror directory (usually ~/MagicMirror)
"

echo
echo "Good Luck!"
echo
