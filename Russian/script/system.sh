#!/bin/sh

if [ -d "/usr/yi-hack-v3" ]; then
        YI_HACK_V3_PREFIX="/usr/yi-hack-v3"
elif [ -d "/home/yi-hack-v3" ]; then
        YI_HACK_V3_PREFIX="/home/yi-hack-v3"
fi

get_config(){
	grep $1 $YI_HACK_V3_PREFIX/etc/system.conf | cut -d "=" -f2
}

if [ -d "/usr/yi-hack-v3" ]; then
	export LD_LIBRARY_PATH=/home/libusr:$LD_LIBRARY_PATH:/usr/yi-hack-v3/lib:/home/hd1/yi-hack-v3/lib
	export PATH=$PATH:/usr/yi-hack-v3/bin:/usr/yi-hack-v3/sbin:/home/hd1/yi-hack-v3/bin:/home/hd1/yi-hack-v3/sbin
elif [ -d "/home/yi-hack-v3" ]; then
	export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/home/lib:/home/yi-hack-v3/lib:/tmp/sd/yi-hack-v3/lib
	export PATH=$PATH:/home/base/tools:/home/yi-hack-v3/bin:/home/yi-hack-v3/sbin:/tmp/sd/yi-hack-v3/bin:/tmp/sd/yi-hack-v3/sbin
fi


if [ -n "$(cat $YI_HACK_V3_PREFIX/etc/hostname)" ] ; then
	hostname $(cat $YI_HACK_V3_PREFIX/etc/hostname)
fi

if [[ $(get_config HTTPD) == "yes" ]] ; then
	httpd -p 80 -h $YI_HACK_V3_PREFIX/www/
fi

if [[ $(get_config TELNETD) == "yes" ]] ; then
	telnetd
fi

if [[ $(get_config FTPD) == "yes" ]] ; then
	pure-ftpd -B
fi

if [[ $(get_config NTPD) == "yes" ]] ; then
# Wait until all the other processes have been initialized
	 sleep 5 && ntpd -p pool.ntp.org &
fi

if [ -f "/tmp/sd/yi-hack-v3/startup.sh" ]; then
	/tmp/sd/yi-hack-v3/startup.sh
elif [ -f "/home/hd1/yi-hack-v3/startup.sh" ]; then
	/home/hd1/yi-hack-v3/startup.sh
fi
