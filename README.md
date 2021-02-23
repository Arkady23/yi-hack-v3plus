# yi-hack-v3plus (russian and english versions)
Вкратце — в yi-hack-v3 теперь обновленный web-сервер, нужные настройки, обычный RTSP-сервер (не платный).

Вы можете установить это дополнение к вашей Yi home камере, если у вас уже установлена прошивка yi-hack-v3.

По идее все появившиеся возможности должны быть совместимы с вашей камерой, если она совместима с yi-hack-v3.

Дополнение включает:  
— обновленный web-сервер;  
— просмотр через http записей с SD-карты;  
— добавлен ряд настроек:  
             – отключение облака, работа в автономном режиме,  
             – установлен RTSP-сервер,  
             – служба сетевого времени и выбор временной зоны,  
             – безопасное отключение камеры.  

Дополнение проверено на камере Yi home 17CN. В случае, если с другими моделями камер RTSP-сервер не будет работать, просьба сообщить данные вашей камеры прислав файл /home/yi-hack-v3/.hackinfo или /usr/yi-hack-v3/.hackinfo либо его содержание на email a(собака)kornienko.ru. В распоряжении имеются другие варианты RTSP-серверов, которые могут подойти для камер других моделей. Тем самым публикуемое дополнение может быть более универсальным.

Как и любое дополнение к yi-hack-v3 установка заключается в помещении папки с дополнением yi-hack-v3 на SD-карту и перезагрузке камеры. После установки, камера перезагрузится и вы сможете открыть новый web-проект по IP-адресу камеры.

Поток RTSP открывается по URL rtsp://192.168.1.123/ch0_0.h264 и rtsp://192.168.1.123/ch0_1.h264.

Ссылка на прошивку shadow-1/yi-hack-v3 https://github.com/shadow-1/yi-hack-v3  
Использован модуль vencrtsp_v2 для RTSP-сервера из проекта Necromix. Ссылка https://github.com/Necromix/yi-vencrtsp_v2.  
Использованы модули httpd, camhash, ntpd, all.css, favicon.png для Web-сервера и Ntpd-сервера из проекта TheCrypt0. Ссылка https://github.com/TheCrypt0/yi-hack-v4.  

![Просмотр папок с записями](https://github.com/Arkady23/yi-hack-v3plus/blob/main/Screenshots/image_2021_02_21T13_57_08_096Z.png?raw=true)

![Просмотр записей](https://github.com/Arkady23/yi-hack-v3plus/blob/main/Screenshots/image_2021_02_21T13_57_46_079Z.png?raw=true)

![Просмотр сведений о камере](https://github.com/Arkady23/yi-hack-v3plus/blob/main/Screenshots/image_2021_02_21T13_58_25_773Z.png?raw=true)

![Просмотр настроек 1 ч.](https://github.com/Arkady23/yi-hack-v3plus/blob/main/Screenshots/image_2021_02_21T13_59_08_416Z.png?raw=true)

![Просмотр настроек 2 ч.](https://github.com/Arkady23/yi-hack-v3plus/blob/main/Screenshots/image_2021_02_21T13_59_47_582Z.png?raw=true)

![Выключение/Перезагрузка](https://github.com/Arkady23/yi-hack-v3plus/blob/main/Screenshots/image_2021_02_21T14_00_09_418Z.png?raw=true)
