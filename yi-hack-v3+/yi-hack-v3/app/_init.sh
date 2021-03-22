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

L="no"
L2="no"
if [[ $(get_config DISABLE_CLOUD) != "yes" ]] ; then
	L="yes"
elif [[ $(get_config REC_WITHOUT_CLOUD) == "yes" ]] ; then
	L="yes"
	L2="yes"
fi

if [ "$L" == "yes" ] ; then
	./mp4record &
	./cloud &
	if [ "$L2" != "yes" ] ; then
		./p2p_tnp &
	fi

	cm=$(sed -n 1p $YI_HACK_PREFIX/yi-hack-v3/.hackinfo | sed -n '/.*=/s///p')
	case $cm in
	  *"Yi Dom"*)
	  ;;
	  *)
		./oss &
	  ;;
	esac

	if [ "$RTSP" != "yes" ] ; then
		./watch_process &
		insmod /home/app/localko/watchdog.ko
	fi
fi

if [ "$RTSP" == "yes" ] ; then
	./rtsp2303 &
	sleep 1
fi
