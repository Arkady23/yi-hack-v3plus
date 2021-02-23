#!/bin/sh

printf "Content-Type: text/html\r\n\r\n"

if [ "$QUERY_STRING" ]; then

  printf "\tfolder\t%s" "$QUERY_STRING"

  for f in `ls -r /tmp/sd/record/$QUERY_STRING | grep mp4`; do
    if [ ${f: -4} == ".mp4" ]; then
        printf "\t%s" "$f"
    fi
  done

else

  for f in `ls -r /tmp/sd/record | grep H`; do
    if [ ${#f} == 14 ]; then
        printf "\t%s" "${f:8:2}-${f:5:2}-${f:0:4} ${f:11:2}:00"
        printf "\t%s\n" "<a href=\"javascript:go('cgi-bin/sdcard.sh?${f}')\">${f}</a>"
    fi
  done

fi
