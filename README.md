# yi-hack-v3+ и yi-hack-v3-
In the latest version from 03.03.2021 and later, the interface language is selected automatically according to the browser language.  

Вкратце — в yi-hack-v3 теперь обновленный web-сервер, нужные настройки, RTSP-сервер (безплатный). После установки дополнения камера будет поддерживаться платформой Home Assistant. Один из полезных проектов на базе Home Assistant: https://github.com/AlexxIT/HassWP.

Вы можете установить это дополнение к вашей Yi камере, если у вас уже установлена прошивка yi-hack-v3.  
По идее все появившиеся возможности должны быть совместимы с вашей камерой, если она совместима с yi-hack-v3.


ATTENTION!!!!
=============
To date, this add-on supports the following camera models:  
– Yi Home 17CN / 27US / 47US (rootfs_y18, home_y18),  
– Yi 1080p Home (rootfs_y20, home_y20) not tested,  
– Yi Dome (rootfs_v201, home_v201) not tested,  
– Yi 1080p Dome (rootfs_h20, home_h20) not tested,  
– Yi Outdoor (rootfs_h30, home_h30) not tested.  


ВНИМАНИЕ!!!
===========
На сегодняшний день дополнение поддерживает следующие модели камер:  
– Yi Home 17CN / 27US / 47US (rootfs_y18, home_y18),  
– Yi 1080p Home (rootfs_y20, home_y20) не проверялась,  
– Yi Dome (rootfs_v201, home_v201) не проверялась,  
– Yi 1080p Dome (rootfs_h20, home_h20) не проверялась,  
– Yi Outdoor (rootfs_h30, home_h30) не проверялась.  


* * * * *

Дополнение включает:  
— обновленный web-сервер;  
— просмотр через http записей с sd-карты;  
— добавлен ряд настроек:  
             – отключение облака, работа в автономном режиме,  
             – установлен RTSP-сервер,  
             – служба сетевого времени и выбор временной зоны,  
             – безопасное отключение камеры.  

Дополнение проверено на камере Yi home 17CN. В случае, если с другими моделями камер RTSP-сервер не будет работать, просьба сообщить данные вашей камеры прислав файл /home/yi-hack-v3/.hackinfo или /usr/yi-hack-v3/.hackinfo либо его содержание на email a(собака)kornienko.ru.

Поток RTSP открывается по URL rtsp://root@192.168.1.123:554/ch0_0.h264 и rtsp://root@192.168.1.123:554/ch0_1.h264 для HD и SD режимов соответственно.

Ссылка на прошивку shadow-1 https://github.com/shadow-1/yi-hack-v3  
Использованы модули httpd, ntpd, all.css, favicon.png для web- и ntpd- серверов из проекта TheCrypt0. Ссылка https://github.com/TheCrypt0/yi-hack-v4.  
Ну и самое главное — огромная благодарность за RTSP Roleo https://github.com/roleoroleo!!! Он первый за много лет сделал RTSP-сервер для старых камер с 720p, таких как Yi home 17CN. Благодаря его разработке эта линейка камер теперь включает полноценный функционал IP-камер.

![Просмотр папок с записями](https://github.com/Arkady23/yi-hack-v3plus/blob/main/Screenshots/image_2021_02_21T13_57_08_096Z.png?raw=true)

![Просмотр записей](https://github.com/Arkady23/yi-hack-v3plus/blob/main/Screenshots/image_2021_02_21T13_57_46_079Z.png?raw=true)

![Просмотр сведений о камере](https://github.com/Arkady23/yi-hack-v3plus/blob/main/Screenshots/image_2021_02_21T13_58_25_773Z.png?raw=true)

![Просмотр настроек 1 ч.](https://github.com/Arkady23/yi-hack-v3plus/blob/main/Screenshots/image_2021_02_21T13_59_08_416Z.png?raw=true)

![Просмотр настроек 2 ч.](https://github.com/Arkady23/yi-hack-v3plus/blob/main/Screenshots/image_2021_02_21T13_59_47_582Z.png?raw=true)

![Выключение/Перезагрузка](https://github.com/Arkady23/yi-hack-v3plus/blob/main/Screenshots/image_2021_02_21T14_00_09_418Z.png?raw=true)
