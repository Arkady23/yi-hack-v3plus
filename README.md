# yi-hack-v3plus (russian and english versions)
Вкратце — в yi-hack-v3 теперь обновленный web-сервер, нужные настройки, RTSP-сервер (не платный). Похоже, что точный URL во многих случаях пока низвестен. Поэтому гарантировано RTPS подхватывается VLC-media плейером, т.к. это приложение само подбирает URL, можно даже указать: rtsp://ip-addres/

Вы можете установить это дополнение к вашей Yi камере, если у вас уже установлена прошивка yi-hack-v3.

По идее все появившиеся возможности должны быть совместимы с вашей камерой, если она совместима с yi-hack-v3.


ATTENTION!!!!
=============
To date, this add-on supports the following camera models:  
– Yi Home 17CN / 27US / 47US (rootfs_y18, home_y18) works with the vencrtsp_v2 RTSP-server,  
– Yi 1080p Home (rootfs_y20, home_y20) not tested,  
– Yi Dome (rootfs_v201, home_v201) not tested,  
– Yi 1080p Dome (rootfs_h20, home_h20) not tested,  
– Yi Outdoor (rootfs_h30, home_h30) works with the RTSP2303-server.  
If your camera model doesn't work after installation this add-on, then reinstall the firmware from the project https://github.com/shadow-1/yi-hack-v3. Then log in via ftp and copy the /usr/ and /home/ folders with everything that is there (there are no passwords in them) to your computer. Archive these folders and send them to me an email a(dog)kornienko.ru, please. After that, I can release a new version of this add-on for your camera model.  

ВНИМАНИЕ!!!
===========
На сегодняшний день дополнение поддерживает следующие модели камер:  
– Yi Home 17CN / 27US / 47US (rootfs_y18, home_y18) работает с vencrtsp_v2 RTSP-сервером,  
– Yi 1080p Home (rootfs_y20, home_y20) не проверялась,  
– Yi Dome (rootfs_v201, home_v201) не проверялась,  
– Yi 1080p Dome (rootfs_h20, home_h20) не проверялась,  
– Yi Outdoor (rootfs_h30, home_h30) работает с RTSP2303-сервером,  
Если ваша модель камеры не работает после установки этого дополнения, то переустановите прошивку из проекта https://github.com/shadow-1/yi-hack-v3. А затем войдите в систему через ftp и скопируйте папки /usr/ и /home/ со всем, что там есть (в них нет паролей) на свой компьютер. Заархивируйте эти папки и пришлите их мне по электронной почте a(собака)kornienko.ru. После этого я могу выпустить новую версию этого дополнения для вашей модели камеры.  
* * * * *

Дополнение включает:  
— обновленный web-сервер;  
— просмотр через http записей с sd-карты;  
— добавлен ряд настроек:  
             – отключение облака, работа в автономном режиме,  
             – установлен RTSP-сервер,  
             – служба сетевого времени и выбор временной зоны,  
             – безопасное отключение камеры.  

Дополнение проверено на камере Yi home 17CN и Yi Outdoor. В случае, если с другими моделями камер RTSP-сервер не будет работать, просьба сообщить данные вашей камеры прислав файл /home/yi-hack-v3/.hackinfo или /usr/yi-hack-v3/.hackinfo либо его содержание на email a(собака)kornienko.ru. В распоряжении имеются другие варианты RTSP-серверов, которые могут подойти для камер других моделей. Тем самым публикуемое дополнение может быть более универсальным.

Как и любое дополнение к yi-hack-v3 установка заключается в помещении папки с дополнением yi-hack-v3 на sd-карту и включению или перезагрузке камеры. После установки, камера дополнительно перезагрузится и вы сможете открыть новый web-сайт по IP-адресу камеры.

По предварительной информации поток RTSP открывается по URL rtsp://root@192.168.1.123:554/ch0_0.h264 и rtsp://root@192.168.1.123:554/ch0_1.h264, но точно не уверен, т.к. он открывается только в VLC-media плейере.

Ссылка на прошивку shadow-1 https://github.com/shadow-1/yi-hack-v3  
Использован модуль vencrtsp_v2 для RTSP-сервера из проекта Necromix. Ссылка https://github.com/Necromix/yi-vencrtsp_v2.  
Использованы модули httpd, ntpd, all.css, favicon.png для web- и ntpd- серверов из проекта TheCrypt0. Ссылка https://github.com/TheCrypt0/yi-hack-v4.  

![Просмотр папок с записями](https://github.com/Arkady23/yi-hack-v3plus/blob/main/Screenshots/image_2021_02_21T13_57_08_096Z.png?raw=true)

![Просмотр записей](https://github.com/Arkady23/yi-hack-v3plus/blob/main/Screenshots/image_2021_02_21T13_57_46_079Z.png?raw=true)

![Просмотр сведений о камере](https://github.com/Arkady23/yi-hack-v3plus/blob/main/Screenshots/image_2021_02_21T13_58_25_773Z.png?raw=true)

![Просмотр настроек 1 ч.](https://github.com/Arkady23/yi-hack-v3plus/blob/main/Screenshots/image_2021_02_21T13_59_08_416Z.png?raw=true)

![Просмотр настроек 2 ч.](https://github.com/Arkady23/yi-hack-v3plus/blob/main/Screenshots/image_2021_02_21T13_59_47_582Z.png?raw=true)

![Выключение/Перезагрузка](https://github.com/Arkady23/yi-hack-v3plus/blob/main/Screenshots/image_2021_02_21T14_00_09_418Z.png?raw=true)
