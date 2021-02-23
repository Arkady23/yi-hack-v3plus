#!/bin/sh

/home/app/script/killapp.sh
killall5
sync
umount -lr /tmp/sd

if [ "$QUERY_STRING" ]; then
  reboot
fi
