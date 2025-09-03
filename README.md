# magicMirror
tutorial on setting up magic mirror (basic install)


First things first, get your raspberry pi ready:

log in
make sure you are connected to a network
elevate to root : 
sudo su
run updates and install proper applications:
apt-get update -y
apt-get upgrade -y
apt-get install tree git 
exit

back down at your regular user level go to your home directory
cd

pull magic mirror installation (this may take 15-30 minutes depending on your network connection and pi)
bash -c  "$(curl -sL https://raw.githubusercontent.com/sdetweil/MagicMirror_scripts/master/raspberry.sh)"

this will place a `MagicMirror` directory at home. next, get your modules:
cd ~/MagicMirror/modules/
git clone --depth=1 https://github.com/MMM-CalendarExt2/MMM-CalendarExt2
git clone --depth=1 https://github.com/MMRIZE/MMM-CalendarExt3
git clone https://github.com/cgillinger/MMM-WeatherEffects
git clone https://github.com/dathbe/MMM-MyScoreboard

You'll notice there are two calendar extensions. I like ext3 personally, but having both allows for additional flexibility

weatehr effects and scoreboard are optional, and provide fun extras depending on the vibe you are going for.


