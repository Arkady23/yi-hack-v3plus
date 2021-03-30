#!/bin/sh

if [ $# -ne 1 ]; then
    exit
fi

case $1 in
    ''|*[!0-9]*) exit;;
    *) continue;;
esac

if [ $1 -gt 99 ]; then
    exit
fi
if [ $1 -lt 1 ]; then
    exit
fi

get_USED(){
	df $sd/ | grep mmc | awk '{print $5}' | tr -d '%'
}
USED_SPACE_LIMIT=$((100-$1))

if [ -d "/tmp/sd/record" ]; then
	sd="/tmp/sd"
else
	sd="/home/hd1"
fi

cd $sd/record
USED_SPACE=$(get_USED)

if [ -z "$USED_SPACE" ]; then
    exit
fi

while [ "$USED_SPACE" -gt "$USED_SPACE_LIMIT" ]
do
  OLD_DIR=$(ls -lt | grep -v tmp | tail -n1 | awk '{print $9}')
  if [ ! -z "$OLD_DIR" ]; then
	echo "Deleting dir $OLD_DIR"
	rm -rf $OLD_DIR
  else
	exit
  fi
  USED_SPACE=$(get_USED)
done
