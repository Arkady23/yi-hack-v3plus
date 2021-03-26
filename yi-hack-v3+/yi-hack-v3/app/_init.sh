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

L="yes"
L1="no"
L2="no"
if [[ $(get_config DISABLE_CLOUD) != "yes" ]] ; then
	L1="yes"
elif [[ $(get_config REC_WITHOUT_CLOUD) == "yes" ]] ; then
	L1="yes"
	L2="yes"
fi

cam=$(sed -n 1p $YI_HACK_PREFIX/yi-hack-v3/.hackinfo | sed -n '/.*=/s///p')
case $cam in
  *"17CN"*)
	L="no"
	cm="yi_home"
  ;;
  *"i Dom"*)
	L="no"
	cm="yi_dome_720p"
  ;;
  *"p Dom"*)
	cm="yi_dome"
  ;;
  *"utdoo"*)
	cm="yi_outdoor"
  ;;
  *)
	cm="yi_home_1080p"
  ;;
esac

if [ "$L1" == "yes" ] ; then
	./mp4record &
	./cloud &
	if [ "$L2" != "yes" ] ; then
		./p2p_tnp &
	fi

	if [ "$cm" != "yi_dome" ] ; then
		./oss &
	fi

	if [ "$RTSP" != "yes" ] ; then
		./watch_process &
		insmod /home/app/localko/watchdog.ko
	fi
fi

if [ "$RTSP" == "yes" ] ; then
	if [ "$L" == "yes" ] ; then
	  ./h264grabber -r low -m $cm -f &
	fi
	./h264grabber -r high -m $cm -f &
	sleep 1
	./rRTSPServer -r both &
fi
