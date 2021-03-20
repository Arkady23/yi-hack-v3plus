#!/bin/sh

printf "Content-Type: text/html\r\n\r\n"
printf "\t%s" "get_conf"

if [ -d "/usr/yi-hack-v3" ]; then
	YI_HACK_PREFIX="/usr/yi-hack-v3/etc"
elif [ -d "/home/yi-hack-v3" ]; then
	YI_HACK_PREFIX="/home/yi-hack-v3/etc"
fi

confs=$(cat $YI_HACK_PREFIX/system.conf)

get_config(){
	echo "$confs" | grep $1 | cut -d "=" -f2
}

printf "\t%s" $(cat $YI_HACK_PREFIX/hostname)
printf "\t%s" $(cat /etc/TZ)
printf "\t%s" $(get_config DISABLE_CLOUD)
printf "\t%s" $(get_config REC_WITHOUT_CLOUD)
printf "\t%s" $(get_config PROXYCHAINSNG)
printf "\t%s" $(get_config RTSP)
printf "\t%s" $(get_config FTPD)
printf "\t%s" $(get_config TELNETD)
printf "\t%s" $(get_config NTPD)
printf "\t%s" $(get_config HTTPD)
