# yi-hack-v3+
This add-on supports the following camera models:  
– Yi Home 17CN / 27US / 47US (rootfs_y18, home_y18) tested,  
– Yi 1080p Home (rootfs_y20, home_y20) not tested,  
– Yi Dome (rootfs_v201, home_v201) not tested,  
– Yi 1080p Dome (rootfs_h20, home_h20) not tested,  
– Yi Outdoor (rootfs_h30, home_h30) tested.  

In the latest version from 03.03.2021 and later, the interface language is selected automatically according to the browser language.  

Дополнение поддерживает следующие модели камер:  
– Yi Home 17CN / 27US / 47US (rootfs_y18, home_y18) проверено,  
– Yi 1080p Home (rootfs_y20, home_y20) не проверялось,  
– Yi Dome (rootfs_v201, home_v201) не проверялась,  
– Yi 1080p Dome (rootfs_h20, home_h20) не проверялось,  
– Yi Outdoor (rootfs_h30, home_h30) проверено.  

Вы можете установить это дополнение на вашу Yi камеру, если у вас уже установлена стоковая прошивка yi-hack-v3, либо произвести установку одновременно со стоковой прошивкой, поместив на карту 2 файла rootfs_XXX, home_XXX и папку с дополнением yi-hack-v3.  

Дополнение включает:  
— обновленный web-сервер;  
— просмотр через http записей с sd-карты;  
— добавлен ряд настроек:  
             – отключение облака, работа в автономном режиме,  
             – включение RTSP-сервера (бесплатно),  
             – включение службы сетевого времени и выбор временной зоны,  
             – безопасное отключение камеры.  

После установки дополнения камера будет поддерживаться платформой Home Assistant. Один из полезных проектов на базе Home Assistant: https://github.com/AlexxIT/HassWP. 

Дополнение проверено на камерах Yi Home 17CN и Yi Outdoor. В случае, если что-то не так работает, просьба задавать вопросы в разделе дискуссий, показав журнал установки дополнения, находячийся по адресу /tnp/sd/yi-hack-v3+.log или /home/hd1/yi-hack-v3+.log.  

Ссылка на стоковую прошивку shadow-1 https://github.com/shadow-1/yi-hack-v3/releases/tag/0.1.6.  
В дополнении использованы модули httpd, ntpd, all.css, favicon.png для web- и ntpd- серверов из проекта TheCrypt0. Ссылка https://github.com/TheCrypt0/yi-hack-v4.  
Ну и самое главное — огромная благодарность за RTSP Roleo https://github.com/roleoroleo!!! Он первый за много лет сделал RTSP-сервер для старых камер с 720p, таких как Yi home 17CN. Благодаря его разработке эта линейка камер теперь включает полноценный функционал IP-камер.  
А я сделал эту скромную сборку для себя. Если она кому-то пригодится — буду только рад.  
  
![Просмотр папок с записями](https://github.com/Arkady23/yi-hack-v3plus/blob/main/Screenshots/image_2021_02_21T13_57_08_096Z.png?raw=true)

![Просмотр записей](https://github.com/Arkady23/yi-hack-v3plus/blob/main/Screenshots/image_2021_02_21T13_57_46_079Z.png?raw=true)

![Просмотр сведений о камере](https://github.com/Arkady23/yi-hack-v3plus/blob/main/Screenshots/image_2021_02_21T13_58_25_773Z.png?raw=true)

![Просмотр настроек 1 ч.](https://github.com/Arkady23/yi-hack-v3plus/blob/main/Screenshots/image_2021_02_21T13_59_08_416Z.png?raw=true)

![Просмотр настроек 2 ч.](https://github.com/Arkady23/yi-hack-v3plus/blob/main/Screenshots/image_2021_02_21T13_59_47_582Z.png?raw=true)

![Выключение/Перезагрузка](https://github.com/Arkady23/yi-hack-v3plus/blob/main/Screenshots/image_2021_02_21T14_00_09_418Z.png?raw=true)
