sdcard();
function go2(){
  let tbody,row,htm,i;
  x=req.responseText;
  var dl=x.lastIndexOf("\t");
  if(dl<0){
    d=["",""];
  }else{
    d=x.split("\t");
    dl=d.length-1;
  }
  switch(d[1]){
  case 'folder':
    tbody=document.getElementById("container");
    tbody.innerHTML="";
    tbody.className="pl";
    if(dl>1){
      let fldr=d[2],pat="/record/"+d[2]+"/",
        htm="<h3 class='container'>Записи&nbsp;в&nbsp;папке&nbsp;"+d[2]+"</h3><hr class='tiny-margin'>\r\n"+
        "<video id=\"video\" style=\"position:fixed;left:450px;top:170px;width:720px\" controls autoplay></video>\r\n"+
        "<table><tr><th width=120 class=\"tc\">Время<br>(минута)<th width=120>Имя файла<th width=100>Сохранить<br>файл\r\n";
      for(i=3;i<dl;){
        htm+="<tr>\r\n"+
          "<td class=\"tc\">"+d[++i].substring(0,2)+
          "<td><a href=\"javascript:document.getElementById('video').setAttribute('src','"+pat+d[i]+"')\">"+d[i]+"</a>\r\n"+
          "<td><a href=\""+pat+d[i]+"\" class=\"f18\">&#128190;</a>";
      }
      htm+="</table>";
      tbody.innerHTML=htm;
    }
    break;
  case 'test':
    fstatus("Камера работает");
    break;
  case 'status':
    document.getElementById('camera_model').innerHTML=d[2];
    document.getElementById('proc_model').innerHTML=d[3];
    document.getElementById('suf_model').innerHTML=d[4];
    document.getElementById('fw_version').innerHTML=d[5];
    document.getElementById('home_version').innerHTML=d[6];
    document.getElementById('local_time').innerHTML=d[7];
    document.getElementById('uptime').innerHTML=d[8];
    document.getElementById('load_avg').innerHTML=d[9];
    document.getElementById('memory').innerHTML=d[10]+"/"+d[11];
    document.getElementById('hostname').innerHTML=d[12];
    document.getElementById('local_ip').innerHTML=d[13];
    document.getElementById('netmask').innerHTML=d[14];
    document.getElementById('gateway').innerHTML=d[15];
    document.getElementById('mac_addr').innerHTML=d[16];
    document.getElementById('wlan_essid').innerHTML=d[17];
    document.getElementById('wlan_str').innerHTML=d[18];
    break;
  case 'get_conf':
    let aTZ=[
	"Africa/Abidjan","GMT0",
	"Africa/Accra","GMT0",
	"Africa/Addis Ababa","EAT-3",
	"Africa/Algiers","CET-1",
	"Africa/Asmara","EAT-3",
	"Africa/Bamako","GMT0",
	"Africa/Bangui","WAT-1",
	"Africa/Banjul","GMT0",
	"Africa/Bissau","GMT0",
	"Africa/Blantyre","CAT-2",
	"Africa/Brazzaville","WAT-1",
	"Africa/Bujumbura","CAT-2",
	"Africa/Casablanca","WET0",
	"Africa/Ceuta","CET-1CEST,M3.5.0,M10.5.0/3",
	"Africa/Conakry","GMT0",
	"Africa/Dakar","GMT0",
	"Africa/Dar es Salaam","EAT-3",
	"Africa/Djibouti","EAT-3",
	"Africa/Douala","WAT-1",
	"Africa/El Aaiun","WET0",
	"Africa/Freetown","GMT0",
	"Africa/Gaborone","CAT-2",
	"Africa/Harare","CAT-2",
	"Africa/Johannesburg","SAST-2",
	"Africa/Kampala","EAT-3",
	"Africa/Khartoum","EAT-3",
	"Africa/Kigali","CAT-2",
	"Africa/Kinshasa","WAT-1",
	"Africa/Lagos","WAT-1",
	"Africa/Libreville","WAT-1",
	"Africa/Lome","GMT0",
	"Africa/Luanda","WAT-1",
	"Africa/Lubumbashi","CAT-2",
	"Africa/Lusaka","CAT-2",
	"Africa/Malabo","WAT-1",
	"Africa/Maputo","CAT-2",
	"Africa/Maseru","SAST-2",
	"Africa/Mbabane","SAST-2",
	"Africa/Mogadishu","EAT-3",
	"Africa/Monrovia","GMT0",
	"Africa/Nairobi","EAT-3",
	"Africa/Ndjamena","WAT-1",
	"Africa/Niamey","WAT-1",
	"Africa/Nouakchott","GMT0",
	"Africa/Ouagadougou","	GMT0",
	"Africa/Porto-Novo","WAT-1",
	"Africa/Sao Tome","GMT0",
	"Africa/Tripoli","EET-2",
	"Africa/Tunis","CET-1",
	"Africa/Windhoek","WAT-1WAST,M9.1.0,M4.1.0",
	"America/Adak","HAST10HADT,M3.2.0,M11.1.0",
	"America/Anchorage","AKST9AKDT,M3.2.0,M11.1.0",
	"America/Anguilla","AST4",
	"America/Antigua","AST4",
	"America/Araguaina","BRT3",
	"America/Argentina/Buenos Aires","ART3",
	"America/Argentina/Catamarca","ART3",
	"America/Argentina/Cordoba","ART3",
	"America/Argentina/Jujuy","ART3",
	"America/Argentina/La Rioja","ART3",
	"America/Argentina/Mendoza","ART3",
	"America/Argentina/Rio Gallegos","ART3",
	"America/Argentina/Salta","ART3",
	"America/Argentina/San Juan","ART3",
	"America/Argentina/Tucuman","ART3",
	"America/Argentina/Ushuaia","ART3",
	"America/Aruba","AST4",
	"America/Asuncion","PYT4PYST,M10.1.0/0,M4.2.0/0",
	"America/Atikokan","EST5",
	"America/Bahia","BRT3",
	"America/Barbados","AST4",
	"America/Belem","BRT3",
	"America/Belize","CST6",
	"America/Blanc-Sablon","AST4",
	"America/Boa Vista","AMT4",
	"America/Bogota","COT5",
	"America/Boise","MST7MDT,M3.2.0,M11.1.0",
	"America/Cambridge Bay","MST7MDT,M3.2.0,M11.1.0",
	"America/Campo Grande","AMT4AMST,M10.3.0/0,M2.3.0/0",
	"America/Cancun","CST6CDT,M4.1.0,M10.5.0",
	"America/Caracas","VET4:30",
	"America/Cayenne","GFT3",
	"America/Cayman","EST5",
	"America/Chicago","CST6CDT,M3.2.0,M11.1.0",
	"America/Chihuahua","MST7MDT,M4.1.0,M10.5.0",
	"America/Costa Rica","CST6",
	"America/Cuiaba","AMT4AMST,M10.3.0/0,M2.3.0/0",
	"America/Curacao","AST4",
	"America/Danmarkshavn","GMT0",
	"America/Dawson","PST8PDT,M3.2.0,M11.1.0",
	"America/Dawson Creek","MST7",
	"America/Denver","MST7MDT,M3.2.0,M11.1.0",
	"America/Detroit","EST5EDT,M3.2.0,M11.1.0",
	"America/Dominica","AST4",
	"America/Edmonton","MST7MDT,M3.2.0,M11.1.0",
	"America/Eirunepe","AMT4",
	"America/El Salvador","CST6",
	"America/Fortaleza","BRT3",
	"America/Glace Bay","AST4ADT,M3.2.0,M11.1.0",
	"America/Goose Bay","AST4ADT,M3.2.0/0:01,M11.1.0/0:01",
	"America/Grand Turk","EST5EDT,M3.2.0,M11.1.0",
	"America/Grenada","AST4",
	"America/Guadeloupe","AST4",
	"America/Guatemala","CST6",
	"America/Guayaquil","ECT5",
	"America/Guyana","GYT4",
	"America/Halifax","AST4ADT,M3.2.0,M11.1.0",
	"America/Havana","CST5CDT,M3.2.0/0,M10.5.0/1",
	"America/Hermosillo","MST7",
	"America/Indiana/Indianapolis","EST5EDT,M3.2.0,M11.1.0",
	"America/Indiana/Knox","CST6CDT,M3.2.0,M11.1.0",
	"America/Indiana/Marengo","EST5EDT,M3.2.0,M11.1.0",
	"America/Indiana/Petersburg","EST5EDT,M3.2.0,M11.1.0",
	"America/Indiana/Tell City","CST6CDT,M3.2.0,M11.1.0",
	"America/Indiana/Vevay","EST5EDT,M3.2.0,M11.1.0",
	"America/Indiana/Vincennes","EST5EDT,M3.2.0,M11.1.0",
	"America/Indiana/Winamac","EST5EDT,M3.2.0,M11.1.0",
	"America/Inuvik","MST7MDT,M3.2.0,M11.1.0",
	"America/Iqaluit","EST5EDT,M3.2.0,M11.1.0",
	"America/Jamaica","EST5",
	"America/Juneau","AKST9AKDT,M3.2.0,M11.1.0",
	"America/Kentucky/Louisville","EST5EDT,M3.2.0,M11.1.0",
	"America/Kentucky/Monticello","EST5EDT,M3.2.0,M11.1.0",
	"America/La Paz","BOT4",
	"America/Lima","PET5",
	"America/Los Angeles","PST8PDT,M3.2.0,M11.1.0",
	"America/Maceio","BRT3",
	"America/Managua","CST6",
	"America/Manaus","AMT4",
	"America/Marigot","AST4",
	"America/Martinique","AST4",
	"America/Matamoros","CST6CDT,M3.2.0,M11.1.0",
	"America/Mazatlan","MST7MDT,M4.1.0,M10.5.0",
	"America/Menominee","CST6CDT,M3.2.0,M11.1.0",
	"America/Merida","CST6CDT,M4.1.0,M10.5.0",
	"America/Mexico City","CST6CDT,M4.1.0,M10.5.0",
	"America/Miquelon","PMST3PMDT,M3.2.0,M11.1.0",
	"America/Moncton","AST4ADT,M3.2.0,M11.1.0",
	"America/Monterrey","CST6CDT,M4.1.0,M10.5.0",
	"America/Montevideo","UYT3UYST,M10.1.0,M3.2.0",
	"America/Montreal","EST5EDT,M3.2.0,M11.1.0",
	"America/Montserrat","AST4",
	"America/Nassau","EST5EDT,M3.2.0,M11.1.0",
	"America/New York","EST5EDT,M3.2.0,M11.1.0",
	"America/Nipigon","EST5EDT,M3.2.0,M11.1.0",
	"America/Nome","AKST9AKDT,M3.2.0,M11.1.0",
	"America/Noronha","FNT2",
	"America/North Dakota/Center","CST6CDT,M3.2.0,M11.1.0",
	"America/North Dakota/New Salem","CST6CDT,M3.2.0,M11.1.0",
	"America/Ojinaga","MST7MDT,M3.2.0,M11.1.0",
	"America/Panama","EST5",
	"America/Pangnirtung","EST5EDT,M3.2.0,M11.1.0",
	"America/Paramaribo","SRT3",
	"America/Phoenix","MST7",
	"America/Port of Spain","AST4",
	"America/Port-au-Prince","EST5",
	"America/Porto Velho","AMT4",
	"America/Puerto Rico","AST4",
	"America/Rainy River","CST6CDT,M3.2.0,M11.1.0",
	"America/Rankin Inlet","CST6CDT,M3.2.0,M11.1.0",
	"America/Recife","BRT3",
	"America/Regina","CST6",
	"America/Rio Branco","AMT4",
	"America/Santa Isabel","PST8PDT,M4.1.0,M10.5.0",
	"America/Santarem","BRT3",
	"America/Santo Domingo","AST4",
	"America/Sao Paulo","BRT3BRST,M10.3.0/0,M2.3.0/0",
	"America/Scoresbysund","EGT1EGST,M3.5.0/0,M10.5.0/1",
	"America/Shiprock","MST7MDT,M3.2.0,M11.1.0",
	"America/St Barthelemy","AST4",
	"America/St Johns","NST3:30NDT,M3.2.0/0:01,M11.1.0/0:01",
	"America/St Kitts","AST4",
	"America/St Lucia","AST4",
	"America/St Thomas","AST4",
	"America/St Vincent","AST4",
	"America/Swift Current","CST6",
	"America/Tegucigalpa","CST6",
	"America/Thule","AST4ADT,M3.2.0,M11.1.0",
	"America/Thunder Bay","EST5EDT,M3.2.0,M11.1.0",
	"America/Tijuana","PST8PDT,M3.2.0,M11.1.0",
	"America/Toronto","EST5EDT,M3.2.0,M11.1.0",
	"America/Tortola","AST4",
	"America/Vancouver","PST8PDT,M3.2.0,M11.1.0",
	"America/Whitehorse","PST8PDT,M3.2.0,M11.1.0",
	"America/Winnipeg","CST6CDT,M3.2.0,M11.1.0",
	"America/Yakutat","AKST9AKDT,M3.2.0,M11.1.0",
	"America/Yellowknife","MST7MDT,M3.2.0,M11.1.0",
	"Antarctica/Casey","WST-8",
	"Antarctica/Davis","DAVT-7",
	"Antarctica/DumontDUrville","DDUT-10",
	"Antarctica/Macquarie","MIST-11",
	"Antarctica/Mawson","MAWT-5",
	"Antarctica/McMurdo","NZST-12NZDT,M9.5.0,M4.1.0/3",
	"Antarctica/Rothera","ROTT3",
	"Antarctica/South Pole","NZST-12NZDT,M9.5.0,M4.1.0/3",
	"Antarctica/Syowa","SYOT-3",
	"Antarctica/Vostok","VOST-6",
	"Arctic/Longyearbyen","CET-1CEST,M3.5.0,M10.5.0/3",
	"Asia/Aden","AST-3",
	"Asia/Almaty","ALMT-6",
	"Asia/Anadyr","ANAT-11ANAST,M3.5.0,M10.5.0/3",
	"Asia/Aqtau","AQTT-5",
	"Asia/Aqtobe","AQTT-5",
	"Asia/Ashgabat","TMT-5",
	"Asia/Baghdad","AST-3",
	"Asia/Bahrain","AST-3",
	"Asia/Baku","AZT-4AZST,M3.5.0/4,M10.5.0/5",
	"Asia/Bangkok","ICT-7",
	"Asia/Beirut","EET-2EEST,M3.5.0/0,M10.5.0/0",
	"Asia/Bishkek","KGT-6",
	"Asia/Brunei","BNT-8",
	"Asia/Choibalsan","CHOT-8",
	"Asia/Chongqing","CST-8",
	"Asia/Colombo","IST-5:30",
	"Asia/Damascus","EET-2EEST,M4.1.5/0,M10.5.5/0",
	"Asia/Dhaka","BDT-6",
	"Asia/Dili","TLT-9",
	"Asia/Dubai","GST-4",
	"Asia/Dushanbe","TJT-5",
	"Asia/Gaza","EET-2EEST,M3.5.6/0:01,M9.1.5",
	"Asia/Harbin","CST-8",
	"Asia/Ho Chi Minh","ICT-7",
	"Asia/Hong Kong","HKT-8",
	"Asia/Hovd","HOVT-7",
	"Asia/Irkutsk","IRKT-8IRKST,M3.5.0,M10.5.0/3",
	"Asia/Jakarta","WIT-7",
	"Asia/Jayapura","EIT-9",
	"Asia/Kabul","AFT-4:30",
	"Asia/Kamchatka","PETT-11PETST,M3.5.0,M10.5.0/3",
	"Asia/Karachi","PKT-5",
	"Asia/Kashgar","CST-8",
	"Asia/Kathmandu","NPT-5:45",
	"Asia/Kolkata","IST-5:30",
	"Asia/Krasnoyarsk","KRAT-7KRAST,M3.5.0,M10.5.0/3",
	"Asia/Kuala Lumpur","MYT-8",
	"Asia/Kuching","MYT-8",
	"Asia/Kuwait","AST-3",
	"Asia/Macau","CST-8",
	"Asia/Magadan","MAGT-11MAGST,M3.5.0,M10.5.0/3",
	"Asia/Makassar","CIT-8",
	"Asia/Manila","PHT-8",
	"Asia/Muscat","GST-4",
	"Asia/Nicosia","EET-2EEST,M3.5.0/3,M10.5.0/4",
	"Asia/Novokuznetsk","NOVT-6NOVST,M3.5.0,M10.5.0/3",
	"Asia/Novosibirsk","NOVT-6NOVST,M3.5.0,M10.5.0/3",
	"Asia/Omsk","OMST-7",
	"Asia/Oral","ORAT-5",
	"Asia/Phnom Penh","ICT-7",
	"Asia/Pontianak","WIT-7",
	"Asia/Pyongyang","KST-9",
	"Asia/Qatar","AST-3",
	"Asia/Qyzylorda","QYZT-6",
	"Asia/Rangoon","MMT-6:30",
	"Asia/Riyadh","AST-3",
	"Asia/Sakhalin","SAKT-10SAKST,M3.5.0,M10.5.0/3",
	"Asia/Samarkand","UZT-5",
	"Asia/Seoul","KST-9",
	"Asia/Shanghai","CST-8",
	"Asia/Singapore","SGT-8",
	"Asia/Taipei","CST-8",
	"Asia/Tashkent","UZT-5",
	"Asia/Tbilisi","GET-4",
	"Asia/Tehran","IRST-3:30IRDT,80/0,264/0",
	"Asia/Thimphu","BTT-6",
	"Asia/Tokyo","JST-9",
	"Asia/Ulaanbaatar","ULAT-8",
	"Asia/Urumqi","CST-8",
	"Asia/Vientiane","ICT-7",
	"Asia/Vladivostok","VLAT-10VLAST,M3.5.0,M10.5.0/3",
	"Asia/Yakutsk","YAKT-9YAKST,M3.5.0,M10.5.0/3",
	"Asia/Yekaterinburg","YEKT-5YEKST,M3.5.0,M10.5.0/3",
	"Asia/Yerevan","AMT-4AMST,M3.5.0,M10.5.0/3",
	"Atlantic/Azores","AZOT1AZOST,M3.5.0/0,M10.5.0/1",
	"Atlantic/Bermuda","AST4ADT,M3.2.0,M11.1.0",
	"Atlantic/Canary","WET0WEST,M3.5.0/1,M10.5.0",
	"Atlantic/Cape Verde","CVT1",
	"Atlantic/Faroe","WET0WEST,M3.5.0/1,M10.5.0",
	"Atlantic/Madeira","WET0WEST,M3.5.0/1,M10.5.0",
	"Atlantic/Reykjavik","GMT0",
	"Atlantic/South Georgia","GST2",
	"Atlantic/St Helena","GMT0",
	"Atlantic/Stanley","FKT4FKST,M9.1.0,M4.3.0",
	"Australia/Adelaide","CST-9:30CST,M10.1.0,M4.1.0/3",
	"Australia/Brisbane","EST-10",
	"Australia/Broken Hill","CST-9:30CST,M10.1.0,M4.1.0/3",
	"Australia/Currie","EST-10EST,M10.1.0,M4.1.0/3",
	"Australia/Darwin","CST-9:30",
	"Australia/Eucla","CWST-8:45",
	"Australia/Hobart","EST-10EST,M10.1.0,M4.1.0/3",
	"Australia/Lindeman","EST-10",
	"Australia/Lord Howe","LHST-10:30LHST-11,M10.1.0,M4.1.0",
	"Australia/Melbourne","EST-10EST,M10.1.0,M4.1.0/3",
	"Australia/Perth","WST-8",
	"Australia/Sydney","EST-10EST,M10.1.0,M4.1.0/3",
	"Europe/Amsterdam","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Andorra","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Athens","EET-2EEST,M3.5.0/3,M10.5.0/4",
	"Europe/Belgrade","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Berlin","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Bratislava","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Brussels","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Bucharest","EET-2EEST,M3.5.0/3,M10.5.0/4",
	"Europe/Budapest","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Chisinau","EET-2EEST,M3.5.0/3,M10.5.0/4",
	"Europe/Copenhagen","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Dublin","GMT0IST,M3.5.0/1,M10.5.0",
	"Europe/Gibraltar","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Guernsey","GMT0BST,M3.5.0/1,M10.5.0",
	"Europe/Helsinki","EET-2EEST,M3.5.0/3,M10.5.0/4",
	"Europe/Isle of Man","GMT0BST,M3.5.0/1,M10.5.0",
	"Europe/Istanbul","EET-2EEST,M3.5.0/3,M10.5.0/4",
	"Europe/Jersey","GMT0BST,M3.5.0/1,M10.5.0",
	"Europe/Kaliningrad","EET-2EEST,M3.5.0,M10.5.0/3",
	"Europe/Kiev","EET-2EEST,M3.5.0/3,M10.5.0/4",
	"Europe/Lisbon","WET0WEST,M3.5.0/1,M10.5.0",
	"Europe/Ljubljana","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/London","GMT0BST,M3.5.0/1,M10.5.0",
	"Europe/Luxembourg","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Madrid","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Malta","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Mariehamn","EET-2EEST,M3.5.0/3,M10.5.0/4",
	"Europe/Minsk","EET-2EEST,M3.5.0,M10.5.0/3",
	"Europe/Monaco","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Moscow","MSK-4",
	"Europe/Oslo","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Paris","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Podgorica","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Prague","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Riga","EET-2EEST,M3.5.0/3,M10.5.0/4",
	"Europe/Rome","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Samara","SAMT-3SAMST,M3.5.0,M10.5.0/3",
	"Europe/San Marino","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Sarajevo","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Simferopol","EET-2EEST,M3.5.0/3,M10.5.0/4",
	"Europe/Skopje","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Sofia","EET-2EEST,M3.5.0/3,M10.5.0/4",
	"Europe/Stockholm","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Tallinn","EET-2EEST,M3.5.0/3,M10.5.0/4",
	"Europe/Tirane","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Uzhgorod","EET-2EEST,M3.5.0/3,M10.5.0/4",
	"Europe/Vaduz","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Vatican","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Vienna","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Vilnius","EET-2EEST,M3.5.0/3,M10.5.0/4",
	"Europe/Volgograd","VOLT-3VOLST,M3.5.0,M10.5.0/3",
	"Europe/Warsaw","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Zagreb","CET-1CEST,M3.5.0,M10.5.0/3",
	"Europe/Zaporozhye","EET-2EEST,M3.5.0/3,M10.5.0/4",
	"Europe/Zurich","CET-1CEST,M3.5.0,M10.5.0/3",
	"Indian/Antananarivo","EAT-3",
	"Indian/Chagos","IOT-6",
	"Indian/Christmas","CXT-7",
	"Indian/Cocos","CCT-6:30",
	"Indian/Comoro","EAT-3",
	"Indian/Kerguelen","TFT-5",
	"Indian/Mahe","SCT-4",
	"Indian/Maldives","MVT-5",
	"Indian/Mauritius","MUT-4",
	"Indian/Mayotte","EAT-3",
	"Indian/Reunion","RET-4",
	"Pacific/Apia","WST11",
	"Pacific/Auckland","NZST-12NZDT,M9.5.0,M4.1.0/3",
	"Pacific/Chatham","CHAST-12:45CHADT,M9.5.0/2:45,M4.1.0/3:45",
	"Pacific/Efate","VUT-11",
	"Pacific/Enderbury","PHOT-13",
	"Pacific/Fakaofo","TKT10",
	"Pacific/Fiji","FJT-12",
	"Pacific/Funafuti","TVT-12",
	"Pacific/Galapagos","GALT6",
	"Pacific/Gambier","GAMT9",
	"Pacific/Guadalcanal","SBT-11",
	"Pacific/Guam","ChST-10",
	"Pacific/Honolulu","HST10",
	"Pacific/Johnston","HST10",
	"Pacific/Kiritimati","LINT-14",
	"Pacific/Kosrae","KOST-11",
	"Pacific/Kwajalein","MHT-12",
	"Pacific/Majuro","MHT-12",
	"Pacific/Marquesas","MART9:30",
	"Pacific/Midway","SST11",
	"Pacific/Nauru","NRT-12",
	"Pacific/Niue","NUT11",
	"Pacific/Norfolk","NFT-11:30",
	"Pacific/Noumea","NCT-11",
	"Pacific/Pago Pago","SST11",
	"Pacific/Palau","PWT-9",
	"Pacific/Pitcairn","PST8",
	"Pacific/Ponape","PONT-11",
	"Pacific/Port Moresby","PGT-10",
	"Pacific/Rarotonga","CKT10",
	"Pacific/Saipan","ChST-10",
	"Pacific/Tahiti","TAHT10",
	"Pacific/Tarawa","GILT-12",
	"Pacific/Tongatapu","TOT-13",
	"Pacific/Truk","TRUT-10",
	"Pacific/Wake","WAKT-12",
	"Pacific/Wallis","WFT-12"
    ];
    htm="";
    for(i=0;i<aTZ.length;){
      htm+="<option ";
      if(aTZ[i+1]==d[3]) htm+="selected ";
      htm+="value='"+aTZ[i+1]+"'>"+aTZ[i++]+" "+aTZ[i++]+"</option>\r\n";
    }
    document.getElementById('HOSTNAME').value=d[2];
    document.getElementById('TZ').innerHTML=htm;
    document.getElementById('DISABLE_CLOUD').checked=d[4]=="yes";
    document.getElementById('REC_WITHOUT_CLOUD').checked=d[5]=="yes";
    document.getElementById('PROXYCHAINSNG').checked=d[6]=="yes";
    document.getElementById('RTSP').checked=d[7]=="yes";
    document.getElementById('FTPD').checked=d[8]=="yes";
    document.getElementById('TELNETD').checked=d[9]=="yes";
    document.getElementById('NTPD').checked=d[10]=="yes";
    document.getElementById('HTTPD').checked=d[11]=="yes";
    break;
  case 'set_conf':
    document.getElementById('save-status').innerHTML="Сохранено";
    break;
  default:
    tbody=document.getElementById("container").getElementsByTagName("TBODY")[0];
    if(dl<2){
      row=document.createElement("TR");
      row.innerHTML="<TD colspan='2' class='tc'>Записей нет";
      tbody.appendChild(row);
    }else{
      for(i=0;i<dl;){
        row=document.createElement("TR");
        row.innerHTML="<TD>"+d[++i]+'<TD>'+d[++i];
        tbody.appendChild(row);
      }
    }
  }
}

function delst(){
  document.getElementById('save-status').innerHTML="";
}
function fstatus(txt){
  document.getElementById("STATUS").value=txt;
}
function set_conf(){
  delst();
  x=document.getElementById('DISABLE_CLOUD').checked?"1":"0";
  x+=document.getElementById('REC_WITHOUT_CLOUD').checked?"1":"0";
  x+=document.getElementById('PROXYCHAINSNG').checked?"1":"0";
  x+=document.getElementById('RTSP').checked?"1":"0";
  x+=document.getElementById('FTPD').checked?"1":"0";
  x+=document.getElementById('TELNETD').checked?"1":"0";
  x+=document.getElementById('NTPD').checked?"1":"0";
  x+=document.getElementById('HTTPD').checked?"1":"0";
  x+=document.getElementById('HOSTNAME').value;
  x+="="+document.getElementById('TZ').value;
  go("cgi-bin/set_conf.sh?"+x);
}
function power(off){
  tbody=document.getElementById("STATUS");
  if(off=="off"){
    go('cgi-bin/poweroff.sh');
    tbody.value="Камера завершает работу...";
    setTimeout(function(){fstatus("Камера готова к отключению питания")},15000);
  }else{
    go('cgi-bin/poweroff.sh?reset');
    tbody.value="Камера перезагружается...";
    setTimeout(function(){go('cgi-bin/test.sh')},23000);
  }
}

function sdcard(){
  let fo=document.getElementById("container");
  fo.className="container";
  fo.innerHTML="<h3>Записи&nbsp;sd-карты&nbsp;камеры</h3><hr class='tiny-margin'>\r\n"+
	"<table>\r\n"+
	"<tr><th width=250>Дата и время<th width=250>Папка\r\n"+
	"</table>\r\n";
  go('cgi-bin/sdcard.sh');
}
function status(){
  let fo=document.getElementById("container");
  fo.className="container";
  fo.innerHTML="<div class='row'><div class='twelf columns'>\r\n"+
	"<h3 class='no-margin' id='header'>Сведения</h3><hr class='tiny-margin'>\r\n"+
	"<h5 class='tiny-margin strong'>Система</h5><hr class='no-margin'>\r\n"+
	"<table class='u-full-width padded-table'>\r\n"+
	"<tr class='row'><td>Модель камеры<td id='camera_model'>\r\n"+
	"<tr class='row'><td>Модель процессора<td id='proc_model'>\r\n"+
	"<tr class='row'><td>Суффикс модели<td id='suf_model'>\r\n"+
	"<tr><td>Версия прошивки<td id='fw_version'>\r\n"+
	"<tr><td>Базовая версия<td id='home_version'>\r\n"+
	"<tr><td>Местное время<td id='local_time'>\r\n"+
	"<tr><td>Время работы<td id='uptime'>\r\n"+
	"<tr><td>Средняя нагрузка<td id='load_avg'>\r\n"+
	"<tr><td>Свободная/Общая память<td id='memory'>\r\n"+
	"</table>\r\n"+
	"<h5 class='tiny-margin strong'>Локальная сеть</h5><hr class='no-margin'>\r\n"+
	"<table class='u-full-width padded-table'>\r\n"+
	"<tr class='row'><td>Имя хоста<td id='hostname'>\r\n"+
	"<tr><td>IP-адрес<td id='local_ip'>\r\n"+
	"<tr><td>Сетевая маска<td id='netmask'>\r\n"+
	"<tr><td>Шлюз<td id='gateway'>\r\n"+
	"<tr><td>MAC-адрес<td id='mac_addr'>\r\n"+
	"<tr><td>WiFi-идентификатор<td id='wlan_essid'>\r\n"+
	"<tr><td>Уровень сигнала<td id='wlan_str'>\r\n"+
	"</table>\r\n"+
	"</div></div>\r\n";
  go('cgi-bin/status.sh');
}
function configs(){
  let fo=document.getElementById("container");
  fo.className="container";
  fo.innerHTML="<div class='row'><div class='twelve columns'>\r\n"+
	"<div class='row'><div class='twelve columns'>\r\n"+
	"<h3 class='no-margin inline-block' id='header'>Настройки</h3>\r\n"+
	"<h6 id='loading-status' class='u-pull-right loading-text'>\r\n"+
	"</div></div>\r\n"+
	"<hr class='tiny-margin'>\r\n"+
	"<div class='row'><p>На этой странице вы можете включать и отключать службы, изменять имя хоста камеры, отключать облачные функции и многое другое.<br></p>\r\n"+
	"</div>\r\n"+
	"<h4 class='no-margin'>Основные</h4><hr class='tiny-margin'>\r\n"+
	"<div class='row'><div class='twelve columns configs-switch'>\r\n"+
	"<table class='u-full-width padded-table config-table'>\r\n"+
	"<tr class='row'><td>Имя хоста</td><td><input class='u-full-width' type='text' placeholder='' id='HOSTNAME' onchange='delst()'><span class='switch-description'>Имя хоста камеры в локальной сети.</span>\r\n"+
	"<tr class='row'><td>Часовой пояс</td><td><select class='u-full-width' id='TZ' onchange='delst()'>\r\n"+
	"</select><span class='switch-description'>Временная зона, учитываемая службой сетевого времени.</span>\r\n"+
	"<tr class='row'><td>Отключить облако</td><td><label class='switch small'><input type='checkbox' id='DISABLE_CLOUD' onchange='delst()'><span class='slider round'><span class='switch-text'></label><span class='switch-description'>Отключиние приложения Yi и всех облачных функций (он же автономный режим).</span>\r\n"+
	"<tr class='row'><td>Запись без облака<td><label class='switch small'><input type='checkbox' id='REC_WITHOUT_CLOUD' onchange='delst()'><span class='slider round'><span class='switch-text'></label><span class='switch-description'>Включение записи на SD-карту даже при отключенных облачных функциях (вступает в силу только при включенной опции \"Отключить облако\").</span>\r\n"+
	"<tr class='row'><td>Proxychains-ng<td><label class='switch small'><input type='checkbox' id='PROXYCHAINSNG' onchange='delst()'><span class='slider round'><span class='switch-text'></label><span class='switch-description'>Proxychains-ng &ndash; это способ обойти региональные ограничения, наложенные Yi при использовании китайской камеры за пределами Китая.</span>\r\n"+
	"</table>\r\n"+
	"</div></div>\r\n"+
	"<h4 class='no-margin'>Дополнительные</h4><hr class='tiny-margin'>\r\n"+
	"<div class='row'><div class='twelve columns configs-switch'>\r\n"+
	"<table class='u-full-width padded-table config-table'>\r\n"+
	"<tr class='row'><td>RTSP</td><td><label class='switch small'><input type='checkbox' id='RTSP' onchange='delst()'><span class='slider round'><span class='switch-text'></label><span class='switch-description'>Включить или отключить RTSP-сервер.</span>\r\n"+
	"<tr class='row'><td>FTP</td><td><label class='switch small'><input type='checkbox' id='FTPD' onchange='delst()'><span class='slider round'><span class='switch-text'></label><span class='switch-description'>Включить или отключить FTP-сервер.</span>\r\n"+
	"<tr class='row'><td>Telnet<td><label class='switch small'><input type='checkbox' id='TELNETD' onchange='delst()'><span class='slider round'><span class='switch-text'></label><span class='switch-description'>Включить или отключить Telnet сервер.<br><span class='strong'>ПРЕДУПРЕЖДЕНИЕ: Telnet не является безопасным протоколом, и его следует избегать. Включать только в том случае, если это действительно необходимо.</span></span>\r\n"+
	"<tr class='row'><td>NTPD<td><label class='switch small'><input type='checkbox' id='NTPD' onchange='delst()'><span class='slider round'><span class='switch-text'></label><span class='switch-description'>Включить или отключить службу сетевого времени. Это необходимо для синхронизации времени на камере, если облачные функции отключены.</span>\r\n"+
	"<tr class='row'><td>HTTPD<td><label class='switch small'><input type='checkbox' id='HTTPD' onchange='delst()'><span class='slider round'><span class='switch-text'></label><span class='switch-description'>Включить или отключить веб-сервер.<br><span class='strong'>ПРЕДУПРЕЖДЕНИЕ: Если отключить, то у вас не будет доступа к этой странице.</span></span>\r\n"+
	"</table>\r\n"+
	"</div></div>\r\n"+
	"<div class='align-right'><span class='strong'>Изменения вступают в силу после сохранения настроек и перезагрузки камеры.</span>\r\n"+
	"</div><br>\r\n"+
	"<div class='u-pull-right'><div class='padded-right save-text' id='save-status'></div><input class='button-primary' type='button' id='button-save' value='Сохранить настройки' onclick=\"set_conf()\">\r\n"+
	"</div>\r\n"+
	"</div></div>\r\n";
  go('cgi-bin/get_conf.sh');
}
function reboot(){
  let fo=document.getElementById("container");
  fo.className="container";
  fo.innerHTML="<div class='row'><div class='twelf columns'>\r\n"+
	"<h3 class='no-margin' id='header'>Перезагрузка или выключение камеры</h3><hr class='tiny-margin'>\r\n"+
	"<div class='row'><div class='twelve columns configs-switch'>\r\n"+
	"<table class='u-full-width padded-table config-table'>\r\n"+
	"<tr class='row'><td>Статус<td><input class='u-full-width' type='text' placeholder='' readonly='' data-key='STATUS' id='STATUS' value='Камера включена'>\r\n"+
	"</table>\r\n"+
	"</div></div><br>\r\n"+
	"<div class='u-pull-right pl'>\r\n"+
	"<input class='button-primary' type='button' id='button-off' value='Выключение камеры' onclick=\"power('off')\">\r\n"+
	"</div>\r\n"+
	"<div class='u-pull-right'>\r\n"+
	"<input class='button-primary' type='button' id='button-reboot' value='Перезагрузка' onclick=\"power('reset')\">\r\n"+
	"</div>\r\n"+
	"</div></div>\r\n";
}
