#!/bin/sh

 if [ -f "/tmp/sd/yi-hack-v3/startup.sh" ]; then
	pr="/tmp/sd/"
 elif [ -f "/home/hd1/yi-hack-v3/startup.sh" ]; then
	pr="/home/hd1"
 fi
 if [ -d "/usr/yi-hack-v3" ]; then
        to="/usr/yi-hack-v3"
 elif [ -d "/home/yi-hack-v3" ]; then
        to="/home/yi-hack-v3"
 fi
 fr="$pr/yi-hack-v3"
 ta="/home/app"

 sed -i '/.\/rmm /,$ d' $ta/init.sh
 cat $ta/init.sh $fr/_init.sh > $ta/_init.sh
 mv -f $ta/_init.sh $ta/init.sh
 chmod 0755 $ta/init.sh

 cp -f $fr/app/vencrtsp_v2 $ta/
 chmod 0755 $ta/vencrtsp_v2

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
