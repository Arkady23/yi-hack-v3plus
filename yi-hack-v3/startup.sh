#!/bin/sh

 if [ -f "/tmp/sd/yi-hack-v3/startup.sh" ]; then
	pr="/tmp/sd"
 else
	pr="/home/hd1"
 fi
 if [ -d "/usr/yi-hack-v3" ]; then
	to="/usr/yi-hack-v3"
 else
	to="/home/yi-hack-v3"
 fi
 fr="$pr/yi-hack-v3"
 ta="/home/app"
 rs="rtsp2303"
 cm=$(sed -n 1p $to/.hackinfo | sed -n '/.*=/s///p')

 case $cm in
   *"17CN"*)
	sed -i "s/.\/$rs/startOFS=19264 repeatOFS=399798 readsPMON=-1 .\/$rs/" $fr/app/_init.sh
	;;
   *)
	;;
 esac

 sed -i '/.\/rmm /,$ d' $ta/init.sh
 cat $ta/init.sh $fr/app/_init.sh > $ta/_init.sh
 mv -f $ta/_init.sh $ta/init.sh
 chmod 0755 $ta/init.sh

 cp -f $fr/app/$rs $ta/
 cp -f $fr/app/libstdc++.so.6  /home/lib/
 chmod 0755 /home/lib/libstdc++.so.6
 chmod 0755 $ta/$rs

 cp -fr $fr/bin/ $to/
 chmod 0755 $to/bin/*

 rm -fr $to/etc/lwsws/
 rm -fr $to/etc/dropbear/
 rm -f $to/etc/dropbear/
 cp -fr $fr/etc/ $to/

 rm -fr $to/www/css/
 rm -fr $to/www/js/
 rm -f $to/www/*
 ln -s $pr/record $to/www/record
 cp -fr $fr/www/ $to/
 chmod 0755 $to/www/cgi-bin/*

 if [ ! -f "/etc/TZ" ]; then
	cp -f $fr/script/TZ /etc/
 fi
 cp -f $fr/script/system.sh $to/script/
 chmod 0755 $to/script/system.sh

 rm -f $to/bin/dropbearmulti
 rm -f $to/bin/lwsws
 rm -f $to/lib/libwebsockets.so
 rm -f $to/lib/libuv.so.1.0.0
 rm -fr $fr/
 sync
reboot
