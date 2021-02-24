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


HOST = $(cat $YI_HACK_PREFIX/hostname)
TZ = $(cat /etc/TZ)

QUERY=$(echo "$QUERY_STRING" | cut -d'=' -f1)
N2=$(echo "${QUERY}" | awk '{print length}')
VAL=$(echo "$QUERY_STRING" | cut -c ${N2}-)

if [ "$HOST" != "$QUERY" ] ; then
	echo "${QUERY:8}" > $YI_HACK_PREFIX/hostname
fi

if [ "$TZ" != "$VAL" ] ; then
	echo "${VAL:2}" > /etc/TZ
fi

N = "no"
Y = "yes"
CONFIG = "$YI_HACK_PREFIX/system.conf"

if [ ${QUERY:0:1} == "1" ]; then  VAL=$Y; else VAL=$N; fi
sed -i "s/^\(DISABLE_CLOUD\s*=\s*\).*$/\1$VAL/" $CONFIG
if [ ${QUERY:1:1} == "1" ]; then  VAL=$Y; else VAL=$N; fi
sed -i "s/^\(REC_WITHOUT_CLOUD\s*=\s*\).*$/\1$VAL/" $CONFIG
if [ ${QUERY:2:1} == "1" ]; then  VAL=$Y; else VAL=$N; fi
sed -i "s/^\(PROXYCHAINSNG\s*=\s*\).*$/\1$VAL/" $CONFIG
if [ ${QUERY:3:1} == "1" ]; then  VAL=$Y; else VAL=$N; fi
sed -i "s/^\(RTSP\s*=\s*\).*$/\1$VAL/" $CONFIG
if [ ${QUERY:4:1} == "1" ]; then  VAL=$Y; else VAL=$N; fi
sed -i "s/^\(FTPD\s*=\s*\).*$/\1$VAL/" $CONFIG
if [ ${QUERY:5:1} == "1" ]; then  VAL=$Y; else VAL=$N; fi
sed -i "s/^\(TELNETD\s*=\s*\).*$/\1$VAL/" $CONFIG
if [ ${QUERY:6:1} == "1" ]; then  VAL=$Y; else VAL=$N; fi
sed -i "s/^\(NTPD\s*=\s*\).*$/\1$VAL/" $CONFIG
if [ ${QUERY:7:1} == "1" ]; then  VAL=$Y; else VAL=$N; fi
sed -i "s/^\(HTTPD\s*=\s*\).*$/\1$VAL/" $CONFIG
