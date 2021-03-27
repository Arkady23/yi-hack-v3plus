#!/bin/sh

printf "Content-Type: text/html\r\n\r\n"
printf "\t%s" "set_conf"

if [ -d "/usr/yi-hack-v3" ]; then
	YI_HACK_PREFIX="/usr/yi-hack-v3/etc"
elif [ -d "/home/yi-hack-v3" ]; then
	YI_HACK_PREFIX="/home/yi-hack-v3/etc"
fi

#read POST_DATA
#PARAMS=$(echo "$POST_DATA" | tr "&" " ")
#for S in $PARAMS ; do
#done

confs=$(cat $YI_HACK_PREFIX/system.conf)

QUERY=$(echo "$QUERY_STRING" | cut -d'=' -f1)
N2=$(echo "$QUERY" | awk '{print length}')
VAL=$(echo "$QUERY_STRING" | cut -c ${N2}-)


if [ $(cat $YI_HACK_PREFIX/hostname) != ${QUERY:8} ] ; then
	echo "${QUERY:10}" > $YI_HACK_PREFIX/hostname
fi

if [ $(cat /etc/TZ) != ${VAL:2} ] ; then
	echo "${VAL:2}" > /etc/TZ
fi

get_config(){
	echo "$confs" | grep $1 | cut -d "=" -f2
}

YES(){
  if [ $1 == "1" ]; then V="yes"; else V="no"; fi
  if [ $(get_config $2) != "$V" ] ; then
	sed -i "s/^\($2\s*=\s*\).*$/\1$V/" $YI_HACK_PREFIX/system.conf
  fi
}

YES ${QUERY_STRING:0:1} "DISABLE_CLOUD"
YES ${QUERY_STRING:1:1} "REC_WITHOUT_CLOUD"
YES ${QUERY_STRING:2:1} "LED"
YES ${QUERY_STRING:3:1} "MUTE"
YES ${QUERY_STRING:4:1} "RTSP"
YES ${QUERY_STRING:5:1} "FTPD"
YES ${QUERY_STRING:6:1} "TELNETD"
YES ${QUERY_STRING:7:1} "NTPD"
YES ${QUERY_STRING:8:1} "HTTPD"
YES ${QUERY_STRING:9:1} "PROXYCHAINSNG"
