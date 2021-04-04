./rmm &
sleep 3

if [ -d "/tmp/sd" ]; then
	pr=/tmp/sd
else
	pr=/home/hd1
fi
if [ -d "/usr/yi-hack-v3" ]; then
	YI_HACK_PREFIX=/usr
elif [ -d "/home/yi-hack-v3" ]; then
	YI_HACK_PREFIX=/home
fi

LOGFILE=$pr/yi-hack-v3+.log

get_config(){
	grep -w $1 $YI_HACK_PREFIX/yi-hack-v3/etc/system.conf | cut -d "=" -f2
}

log(){
  time=$(date +"%y-%m-%d %T")
  echo "$time $@" >> $LOGFILE
}

if [ -f "$LOGFILE" ]; then
  L=1
  N=$(ls -l $LOGFILE | awk '{ print $5 }')
  if [ $N -le 10000 ]; then
	exec 2>> $LOGFILE
	log "Starting init.sh"
  else
	rm -f $LOGFILE
  fi
else
  L=0
fi

RTSP=$(get_config RTSP)

L1=no
L2=no
if [[ $(get_config DISABLE_CLOUD) != "yes" ]] ; then
	L1=yes
elif [[ $(get_config REC_WITHOUT_CLOUD) == "yes" ]] ; then
	L1=yes
	L2=yes
fi

cm=yi_home_1080p

if [ $L1 == yes ] ; then
	./mp4record &
	./cloud &
	if [ $L2 != yes ] ; then
		./p2p_tnp &
		./oss &
	fi
	if [ $RTSP != yes ] ; then
		./watch_process &
		insmod /home/app/localko/watchdog.ko
	fi
fi

if [ $RTSP == yes ] ; then
  res=$(get_config RTSP_STREAM)
  if [ $res != high ] ; then
	./h264grabber -r low -m $cm -f &
  fi
  if [ $res != low ] ; then
	./h264grabber -r high -m $cm -f &
  fi
  sleep 1
  ./rRTSPServer -r $res &
fi

if [ $L == 1 ] ; then
	log "End of init.sh"
fi
