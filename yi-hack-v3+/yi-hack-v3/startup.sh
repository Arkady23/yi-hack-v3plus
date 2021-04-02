#!/bin/sh

 if [ -f "/tmp/sd/yi-hack-v3/startup.sh" ]; then
	pr=/tmp/sd
 else
	pr=/home/hd1
 fi
 if [ -d "/usr/yi-hack-v3" ]; then
	to=/usr/yi-hack-v3
 else
	to=/home/yi-hack-v3
 fi
 fr=$pr/yi-hack-v3
 ta=/home/app
 log=$pr/yi-hack-v3+.log
 exec 2>> $log

 echo "Begin install from $fr to $to" > $log

 cam=$(sed -n 1p $to/.hackinfo | sed -n '/.*=/s///p')

 echo "Your camera: $cam" >> $log

 case $cam in
  *"17CN"*)
	cm=yi_home
  ;;
  *"i Dom"*)
	cm=yi_dome_720p
  ;;
  *"p Dom"*)
	cm=yi_dome
  ;;
  *"utdoo"*)
	cm=yi_outdoor
  ;;
  *)
	cm=yi_home_1080p
  ;;
 esac

 echo "Camera prefix: $cm" >> $log

 rm -f $to/bin/lwsws
 rm -f $to/bin/dropbearmulti
 rm -fr $to/etc/lwsws/
 rm -fr $to/etc/dropbear/
 rm -f $to/etc/dropbear/
 cd /tmp/
 tar -x -f $fr/yi-hack-v3+ app/

 if [ "$cm" != "yi_home_1080p" ]; then
	sed -i "s/yi_home_1080p/$cm/" /tmp/app/_init.sh
 fi
 if [ "$cm" == "yi_dome" ]; then
	sed -i '/[^\s]\.\/oss/s/^/#/' /tmp/app/_init.sh
 fi

 N=$(ls -l /tmp/view | awk '{ print $5 }')

 echo "View file Length: $N" >> $log

 if [ $N == 781120 ]; then
	sed -i "s/-r low -m \$cm -f \&/-r low -m \$cm -f --buf_size $N --stream_offset 531264 \&/" /tmp/app/_init.sh
 fi
 sed -i '/.\/rmm /,$ d' $ta/init.sh
 cat $ta/init.sh /tmp/app/_init.sh > $ta/_init.sh
 mv -f $ta/_init.sh $ta/init.sh
 chmod 0755 $ta/init.sh

 echo "1. $ta/init.sh ready." >> $log

 cd app/
 mv -f rRTSPServer h264grabber $ta/
 mv -f libstdc++.so.6  /home/lib/
 chmod 0755 $ta/rRTSPServer
 chmod 0755 $ta/h264grabber
 chmod 0755 /home/lib/libstdc++.so.6

 echo "2. $ta/ ready." >> $log

 cd /tmp/
 tar -x -f $fr/yi-hack-v3+ etc/
 mv -f etc/system.conf $to/etc/

 echo "3. $to/etc/ ready." >> $log

 rm -fr $to/www/css/
 rm -fr $to/www/js/
 rm -f $to/www/*
 rm -f $to/lib/libwebsockets.so
 rm -f $to/lib/libuv.so
 rm -f $to/lib/libuv.so.1
 rm -f $to/lib/libuv.so.1.0.0

 echo "4. $to/www/ and lib/ clear." >> $log

 tar -x -f $fr/yi-hack-v3+ bin/
 cd bin/
 mv -f led crond httpd ntpd $to/bin/
 chmod 0755 $to/bin/*

 echo "5. $to/bin/ ready." >> $log

 cd /tmp/
 tar -x -f $fr/yi-hack-v3+ www/
 ln -s $pr/record $to/www/record
 cd www/
 mv -f index.html.gz $to/www/
 mv -f i/favicon.png.gz $to/www/i/
 mv -f j/s.js.gz j/o.js.gz j/all.css.gz $to/www/j/
 cd cgi-bin/
 mv -f status.sh set_conf.sh get_conf.sh poweroff.sh test.sh sdcard.sh $to/www/cgi-bin/
 chmod 0755 $to/www/cgi-bin/*

 echo "6. $to/www/ ready." >> $log

 cd /tmp/
 tar -x -f $fr/yi-hack-v3+ script/
 if [ ! -f "/etc/TZ" ]; then
	mv -f script/TZ /etc/
 fi
 mv -f script/system.sh $to/script/
 mv -f script/clean_records.sh $to/script/
 chmod 0755 $to/script/system.sh
 chmod 0755 $to/script/clean_records.sh

 echo "7. $to/script/ ready." >> $log

 if [[ ! -s $to/etc/crontabs/root ]]; then
	mkdir -p $to/etc/crontabs
	echo "0 * * * * $to/script/clean_records.sh 2" >> $to/etc/crontabs/root
 fi

 echo "8. $to/etc/crontabs/ ready." >> $log

 rm -fr $fr/

 echo "9. This install folder deleted." >> $log

 sync

 echo "10. Rebooting..." >> $log

/home/app/script/killapp.sh
killall5
sync
reboot
