#!/bin/sh

/home/app/script/killapp.sh
killall5
sync
umount -lr /dev/mmcblk0p1

if [ "$QUERY_STRING" ]; then
  reboot
fi
