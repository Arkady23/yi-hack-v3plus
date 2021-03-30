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

 echo "Begin install. from=$fr to=$to" > $pr/install.log

 sed -i '/.\/rmm /,$ d' $ta/init.sh
 cat $ta/init.sh $fr/app/_init.sh > $ta/_init.sh
 mv -f $ta/_init.sh $ta/init.sh
 chmod 0755 $ta/init.sh

 echo "1. $ta/init.sh ready." >> $pr/install.log

 rm -f $to/bin/lwsws
 rm -f $to/bin/dropbearmulti
 rm -fr $to/etc/lwsws/
 rm -fr $to/etc/dropbear/
 rm -f $to/etc/dropbear/
 cp -fr $fr/etc/ $to/

 echo "2. $to/etc/ ready." >> $pr/install.log

 rm -fr $to/www/css/
 rm -fr $to/www/js/
 rm -f $to/www/*
 rm -f $to/lib/libwebsockets.so
 rm -f $to/lib/libuv.so
 rm -f $to/lib/libuv.so.1
 rm -f $to/lib/libuv.so.1.0.0

 echo "3. $to/www/ and lib/ clear." >> $pr/install.log

 cp -f $fr/app/rRTSPServer $ta/
 cp -f $fr/app/h264grabber $ta/
 cp -f $fr/app/libstdc++.so.6  /home/lib/
 chmod 0755 $ta/rRTSPServer
 chmod 0755 $ta/h264grabber
 chmod 0755 /home/lib/libstdc++.so.6

 echo "4. $ta/ ready." >> $pr/install.log

 cp -fr $fr/bin/ $to/
 chmod 0755 $to/bin/*

 echo "5. $to/bin/ ready." >> $pr/install.log

 ln -s $pr/record $to/www/record
 cp -fr $fr/www/ $to/
 chmod 0755 $to/www/cgi-bin/*

 echo "6. $to/www/ ready." >> $pr/install.log

 if [ ! -f "/etc/TZ" ]; then
	cp -f $fr/script/TZ /etc/
 fi
 cp -f $fr/script/system.sh $to/script/
 cp -f $fr/script/clean_records.sh $to/script/
 chmod 0755 $to/script/system.sh
 chmod 0755 $to/script/clean_records.sh

 echo "7. $to/script/ ready." >> $pr/install.log

 if [[ ! -s $to/etc/crontabs/root ]]; then
	mkdir -p $to/etc/crontabs
	echo "0 * * * * $to/script/clean_records.sh 2" >> $to/etc/crontabs/root
 fi

 echo "8. $to/etc/crontabs/ ready." >> $pr/install.log

 rm -fr $fr/

 echo "9. This install folder deleted." >> $pr/install.log

 sync

 echo "10. Rebooting..." >> $pr/install.log

reboot
