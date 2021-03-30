#!/bin/sh

if [ -d "/usr/yi-hack-v3" ]; then
        YI_HACK_V3_PREFIX="/usr/yi-hack-v3"
elif [ -d "/home/yi-hack-v3" ]; then
        YI_HACK_V3_PREFIX="/home/yi-hack-v3"
fi

get_config(){
	grep -w $1 $YI_HACK_V3_PREFIX/etc/system.conf | cut -d "=" -f2
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
	tcpsvd -vE 0.0.0.0 21 ftpd -w &
fi

if [[ $(get_config LED) == "yes" ]] ; then
	x="on"
else
	x="off"
fi
led -l$x

if [[ $(get_config MUTE) == "yes" ]] ; then
	x="1"
else
	x="0"
fi
/home/hisiko/demo_config.sh 9 $x

if [[ $(get_config NTPD) == "yes" ]] ; then
# Wait until all the other processes have been initialized
	 sleep 5 && ntpd -p pool.ntp.org &
fi

if [ -d "/tmp/sd" ]; then
	sd="/tmp/sd"
else
	sd="/home/hd1"
fi

if [ -f "$sd/etc/wpa_supplicant.conf" ]; then
	cp -f $sd/etc/wpa_supplicant.conf /tmp/
fi
if [ -f "$sd/yi-hack-v3/startup.sh" ]; then
	$sd/yi-hack-v3/startup.sh
fi

if [[ $(get_config DISABLE_CLOUD) == "yes" ]] ; then
  if [[ $(get_config REC_WITHOUT_CLOUD) == "yes" ]] ; then
	sleep 20
	i=0
	while [ $i -lt 50 ] ; do
		if [ -f "$sd/record/tmp.mp4.tmp" ]; then
			killall cloudAPI
			killall cloud
			killall dispatch
			i=50
		fi
		sleep 8
		i=$(( $i + 1 ))
	done
	if [ $i -gt 50 ] ; then
		crond -c $YI_HACK_V3_PREFIX/etc/crontabs
	fi
  fi
fi
