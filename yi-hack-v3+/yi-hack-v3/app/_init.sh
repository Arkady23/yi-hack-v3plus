./rmm &
sleep 3

if [ -d "/usr/yi-hack-v3" ]; then
	YI_HACK_PREFIX="/usr"
elif [ -d "/home/yi-hack-v3" ]; then
	YI_HACK_PREFIX="/home"
fi

get_config(){
	grep $1 $YI_HACK_PREFIX/yi-hack-v3/etc/system.conf | cut -d "=" -f2
}

RTSP=$(get_config RTSP)

if [[ $(get_config DISABLE_CLOUD) != "yes" ]] ; then
	./mp4record &
	./cloud &
	./p2p_tnp &
	if [[ $(cat /home/app/.camver) != "yi_dome" ]] ; then
	  ./oss &
	fi
	if [ "$RTSP" != "yes" ] ; then
	  ./watch_process &
	  insmod /home/app/localko/watchdog.ko
	fi
elif [[ $(get_config REC_WITHOUT_CLOUD) == "yes" ]] ; then
	./mp4record &
	./cloud &
fi

if [ "$RTSP" == "yes" ] ; then
	./rtsp2303 &
	sleep 1
fi
