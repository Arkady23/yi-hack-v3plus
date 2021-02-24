#!/bin/sh

 fr="/tmp/sd/yi-hack-v3"
 to="/home/yi-hack-v3"
 ta="/home/app"


 if [ -d "/usr/yi-hack-v3" ]; then
        YI_HACK_PREFIX="/usr/yi-hack-v3"
 elif [ -d "/home/yi-hack-v3" ]; then
        YI_HACK_PREFIX="/home/yi-hack-v3"
 fi
 CAMERA_MODEL=$(sed -n 1p $YI_HACK_PREFIX/.hackinfo | sed -n '/.*=/s///p')
 if [ $CAMERA_MODEL == "Yi Outdoor" ]; then
	cp -f $fr/app/init_Yi_Outdoor.sh $ta/init.sh
 else
	cp -f $fr/app/init_Yi_Home_17CN.sh $ta/init.sh
 fi
 cp -f $fr/app/vencrtsp_v2 $ta/
 chmod 0755 $ta/vencrtsp_v2
 chmod 0755 $ta/init.sh

 cp -fr $fr/bin/ $to/
 chmod 0755 $to/bin/*

 rm -fr $to/etc/lwsws/
 rm -fr $to/etc/dropbear/
 cp -fr $fr/etc/ $to/

 rm -f $to/lib/*
 cp -fr $fr/lib/ $to/
 chmod 0755 $to/lib/*

 rm -fr $to/www/css/
 rm -fr $to/www/js/
 rm -f $to/www/*
 ln -s /tmp/sd/record /home/yi-hack-v3/www/record
 cp -fr $fr/www/ $to/
 chmod 0755 $to/www/cgi-bin/*

 cp -f $fr/script/system.sh $to/script/
 chmod 0755 $to/script/system.sh

 rm -fr $fr/
 sync
 reboot
