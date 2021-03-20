#!/bin/sh

#  Установка / Installation:
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#  !!!  Дополнение устанавливается на прошивку yi-hack-v3 0.1.4-beta2  !!!
#  !!! https://github.com/shadow-1/yi-hack-v3/releases/tag/0.1.4-beta2 !!!
#  Содержание скаченного архива поместить на SD-карту, включить или перезагрузить камеру,
#  если папка с установщиком была скопирована на sd-карту по ftp. Камера скопирует нужные файлы и
#  перезагрузится. После этого зайдите обычным обозревателем на адрес камеры, например:
#  http://192.168.1.123. Если дополнение не установилось — перезагрузите камеру еще раз.
#
#  !!!  The add-on is installed on the yi-hack-v3 0.1.4-beta2 firmware !!!
#  !!! https://github.com/shadow-1/yi-hack-v3/releases/tag/0.1.4-beta2 !!!
#  Put everything inside the downloaded archive on the SD-card, turn on or restart the camera
#  if the installer folder was copied to the sd card via ftp. The camera will copy the necessary files and
#  reboot. After that, go to the address of the camera with a normal browser, for example:
#  http://192.168.1.123. If the add — on is not installed, reboot the camera again.
#
# А.Б.Корниенко


 if [ -f "/tmp/sd/startup.sh" ]; then
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
 rs="vencrtsp_v2"

 sed -i '/.\/rmm /,$ d' $ta/init.sh
 cat $ta/init.sh $fr/app/_init.sh > $ta/_init.sh
 mv -f $ta/_init.sh $ta/init.sh
 chmod 0755 $ta/init.sh

 cp -f $fr/app/$rs $ta/
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
 rm -f $pr/startup.sh
 sync
reboot
