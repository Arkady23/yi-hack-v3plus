#!/bin/sh

printf "Content-Type: text/html\r\n\r\n"

if [ -d "/usr/yi-hack-v3" ]; then
        YI_HACK_PREFIX="/usr/yi-hack-v3"
elif [ -d "/home/yi-hack-v3" ]; then
        YI_HACK_PREFIX="/home/yi-hack-v3"
fi

PS=$(ps)
CAM=$(cat /home/base/init.sh | grep if=/home/home_ | sed -e 's/.*home_\(.*\) of=.*/\1/')
if [ $CAM == y18m ]; then
	CAMERA_MODEL="Yi Home"
else
	CAMERA_MODEL=$(sed -n 1p $YI_HACK_PREFIX/.hackinfo | sed -n '/.*=/s///p')
fi
CAMERA_MODEL="$CAMERA_MODEL $(od -j36 -N4 -An -c /etc/back.bin | sed 's/[\s ]//g')"
CPU=$(grep -e Processor -e Hardware /proc/cpuinfo | awk '{print $3}')
FW_VERSION=$(sed -n 2,2p $YI_HACK_PREFIX/.hackinfo | sed -n '/.*=/s///p')
HOME_VERSION=$(cat /home/app/.appver)
DISP=$(echo "$PS" | grep -q './dispatch' && echo $?)
CLOUD=$(echo "$PS" | grep -q './cloud' && echo $?)

LOCAL_TIME=$(date)
UPTIME=$(cat /proc/uptime | cut -d ' ' -f1)
LOAD_AVG=$(cat /proc/loadavg | cut -d ' ' -f1-3)
TOTAL_MEMORY=$(free -k | awk 'NR==2{print $2}')
FREE_MEMORY=$(free -k | awk 'NR==2{print $4+$6+$7}')

HOSTNAME=$(cat $YI_HACK_PREFIX/etc/hostname)
LOCAL_IP=$(ifconfig wlan0 | awk '/inet addr/{print substr($2,6)}')
NETMASK=$(ifconfig wlan0 | awk '/inet addr/{print substr($4,6)}')
GATEWAY=$(route -n | awk 'NR==3{print $2}')
MAC_ADDR=$(ifconfig wlan0 | awk '/HWaddr/{print substr($5,1)}')
WLAN_ESSID=$(iwconfig wlan0 | grep ESSID | cut -d\" -f2)
WLAN_STRENGTH=$(cat /proc/net/wireless | awk 'END { print $3 }' | sed 's/\.$//')

printf "\t%s" "status"
printf "\t%s" "$CAMERA_MODEL"
printf "\t%s" "$CPU"
printf "\t%s" "$CAM"
printf "\t%s" "$FW_VERSION"
printf "\t%s" "$HOME_VERSION"
printf "\t%s" "$DISP"
printf "\t%s" "$CLOUD"
printf "\t%s" "$LOCAL_TIME"
printf "\t%s" "$UPTIME"
printf "\t%s" "$LOAD_AVG"
printf "\t%s" "$FREE_MEMORY"
printf "\t%s" "$TOTAL_MEMORY"

printf "\t%s" "$HOSTNAME"
printf "\t%s" "$LOCAL_IP"
printf "\t%s" "$NETMASK"
printf "\t%s" "$GATEWAY"
printf "\t%s" "$MAC_ADDR"
printf "\t%s" "$WLAN_ESSID"
printf "\t%s" "$WLAN_STRENGTH%"
