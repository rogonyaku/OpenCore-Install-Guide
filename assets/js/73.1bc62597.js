(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{649:function(t,v,_){"use strict";_.r(v);var r=_(25),e=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"терминология"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#терминология"}},[t._v("#")]),t._v(" Терминология")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Термин")]),t._v(" "),_("th",[t._v("Описание")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("strong",[t._v("macOS")])]),t._v(" "),_("td",[t._v('Собственная ОС Apple базирующуюся на UNIX; используется для компьютеров Mac, и это то "что делает Мак Маком".')])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("Windows")])]),t._v(" "),_("td",[t._v("Проприетарная ОС Microsoft, которая используется и поддерживается на широком спектре устройств (оставайтесь с этой ОС, если не хотите головной боли).")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("Linux")])]),t._v(" "),_("td",[t._v("Семейство open source UNIX-подобных ОС базирующихся на базе ядра Linux; ядро ОС было впервые выпущено 17 сентября 1991 Линусом Торвальдсом. Linux обычно входит в состав Linux дистрибутива. Обратите внимание, что хоть macOS и Linux могут быть основаны на UNIX, они сильно отличаются.")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("Дистрибутив")])]),t._v(" "),_("td",[t._v("Дистрибутивы Linux - это то, как Linux распространяется. Однако, когда дело доходит до macOS, дистрибутивы представляют собой смешанные установщики macOS с кучей инструментов не от Apple. "),_("strong",[t._v("Не используйте macOS дистрибутивы.")])])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("Хакинтош")])]),t._v(" "),_("td",[t._v("Процесс установки macOS на ПК; обратите внимание, что "),_("strong",[t._v("Хакинтош ЭТО НЕ ОС")]),t._v(', это также может относиться к компьютеру, который был "взломан", чтобы запустить на нём macOS. К примеру: '),_("em",[t._v('Я установил macOS на этот компьютер с Windows, поэтому у меня есть Хакинтош. Но я НЕ устанавлиавл "Хакинтош".')])])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("Загрузчик")])]),t._v(" "),_("td",[t._v("Часть ПО, которая загружает ОС; обычно создаётся создателями ОС. OpenCore технически не является загрузчиком как таковым (см. объяснение о Boot Manager ниже). Boot.efi от Apple фактически будет загрузчиком на Mac или Хакинтош.")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("Boot Manager")])]),t._v(" "),_("td",[t._v("Часть ПО, которая управляет загрузчиками; у нас их много: Clover, systemd-boot, OpenCore, rEFInd, rEFIt... Они обычно рассматриваются как подготовка системы к фактическому загрузчику.")])])])]),t._v(" "),_("hr"),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Термин")]),t._v(" "),_("th",[t._v("Описание")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("strong",[t._v("OpenCore")])]),t._v(" "),_("td",[t._v("Новый свежий загрузчик на Хакинтош сцене, сделанный с учетом безопасности "),_("a",{attrs:{href:"https://github.com/acidanthera",target:"_blank",rel:"noopener noreferrer"}},[t._v("командой Acidanthera"),_("OutboundLink")],1),t._v(", быстрее загружается и меньше весит, чем Clover. Больше настраивать, но более нативно поддерживает многие вещи, чем Clover (например, гибернацию, FileVault 2, горячие клавиши загрузки...)")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("Clover")])]),t._v(" "),_("td",[t._v("Загрузчик считающийся теперь устаревшим с выходом OpenCore. Это руководство не будет охватывать его использование.")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("ACPI")])]),t._v(" "),_("td",[t._v("Расширенный интерфейс управления конфигурацией и питанием (Advanced Configuration and Power Interface; аббр. ACPI) - предоставляет открытый стандарт, который ОС может использовать для обнаружения и настройки аппаратных компонентов компьютера; об этом будет более подробно рассказано дальше в руководстве.")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v(".AML")])]),t._v(" "),_("td",[t._v("Скомпилированный файл формата ACPI, который будет выполнять ваш компьютер. "),_("code",[t._v(".DAT")]),t._v(" - ещё одно расширение с таким же использованием.")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v(".DSL")])]),t._v(" "),_("td",[t._v("Исходный код ACPI - это то, что вы редактируете и компилируете для вашего компьютера. "),_("strong",[t._v("НЕ")]),t._v(" смешиваете этот формат файла с "),_("code",[t._v(".ASL")])])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("Кексты")])]),t._v(" "),_("td",[t._v("Также известны как "),_("strong",[t._v("K")]),t._v("ernel "),_("strong",[t._v("Ext")]),t._v("ensions (расширения ядра; Kexts), это драйвера macOS. Они используются для выполнения различных задач, таких как драйвера для устройств или для других целей (в Хакинтошинге) как патчинг ОС, инжектирование информации или выполнения задач. Кексты - не единственная часть хорошего Хакинтоша, поскольку они обычно сочетаются с патчами ACPI и фиксами.")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("BIOS")])]),t._v(" "),_("td",[t._v("Базовая система ввода/вывода (Basic Input/Output System) - микропрограммное обеспечение, используемое для выполнения инициализации оборудования в процессе загрузки (запуск при включении питания) и предоставления служб среды выполнения (runtime) для ОС и программ. Прошивка BIOS предустановленна на системной плате компьютера, и это первое программное обеспечение которое запускается при включении компьютера (источник: Википедия). Это устаревшая часть ПО, сделанное ещё в 70-х годах и используется по сей день из-за своей зрелости.")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("UEFI")])]),t._v(" "),_("td",[t._v("Унифицированный расширяемый микропрограммный интерфейс (Unified Extensible Firmware Interface; аббр. UEFI) - спецификация, определяющая программный интерфейс между операционной системой и микропрограммной платформы. UEFI заменяет устаревшую систему базового ввода/вывода (BIOS) первоначально присутствующую на всех IBM PC-совместимых персональных компьютерах, причём большинство реализаций прошивки UEFI обеспечивают поддержку устаревших служб BIOS. UEFI может поддерживать удаленную диагностику и ремонт компьютеров, даже без установленной операционной системы. (источник: Википедия)")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("Драйверы UEFI")])]),t._v(" "),_("td",[t._v("Как и другая ОС, UEFI имеет драйверы, и они загружаются Clover'ом или OpenCore'ом. Они также предназначены для загрузки устройств или выполнения других задач, таких как загрузка Apple HFS дисков с помощью HfsPlus.efi, патчинга boot.efi macOS и так далее. Вы можете найти их как "),_("code",[t._v("драйверы Clover")]),t._v(" или "),_("code",[t._v("драйверы OpenCore")]),t._v(" - это всё UEFI драйверы. (Примечание: используйте драйверы, которые только предназначены для конкретного Boot Manager. Больше информации можно найти на "),_("a",{attrs:{href:"https://github.com/dortania/OpenCore-Install-Guide/tree/master/clover-conversion",target:"_blank",rel:"noopener noreferrer"}},[t._v("странице конверсии Clover"),_("OutboundLink")],1),t._v(")")])])])]),t._v(" "),_("hr"),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Термин")]),t._v(" "),_("th",[t._v("Описание")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("strong",[t._v("EFI")])]),t._v(" "),_("td",[t._v("Может обозначать две вещи: "),_("br"),t._v('- Микропрограммное обеспечение компьютеров Mac, такое же как UEFI, но довольно модифицированное только для компьютеров Mac, поэтому оно не такое уж и "универсальное".'),_("br"),t._v("- Раздел на вашем жёстком диске, в котором хранится ПО читаемое UEFI для загрузки ОС (к примеру, загрузчик Windows) или приложения UEFI (как OpenCore), раздел отформатирован в FAT32 и имеет тип идентификатора EF00 (в HEX [шестнадцатиричный формат]). Он может быть назван ESP или System, и он обычно размером от 100 до 400 МБ, но размер ни о чём не говорит.")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("MBR")])]),t._v(" "),_("td",[t._v("Главная загрузочная запись (Master Boot Record) - это особый тип загрузочного сектора в самом начале секционирования компьютерных запоминающих устройств, таких как фиксированные диски или съёмные носители, предназначенные для использования с IBM PC-совместимыми системами и не только. Концепция MBR публично представлена была в 1983 году с PC DOS 2.0. MBR содержит информацию о том, как логические разделы, содержащие файловые системы, организованы на этом носителе. MBR также содержит исполняемый код для функционирования в качестве загрузчика для установленной операционной системы - обычно путем передачи управления второй ступени загрузчика, или в сочетании с загрузочной записью каждого раздела (VBR). Этот MBR код обычно называют загрузчиком (источник: Википедия). Этот формат используется в BIOS/Legacy. MBR поддерживает максимальный размер до 2 Тб и не более 4 основных разделов.")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("GPT")])]),t._v(" "),_("td",[t._v("Таблица разделов GUID (GUID Partition Table; аббр. GPT) - стандарт для компоновки таблиц разделов физического запоминающего устройства, такого как жёсткий диск или твердотельный накопитель, с использование универсальных уникальных идентификаторов, которые ещё известны как глобаные уникальные идентификаторы (GUIDs). Являясь частью UEFI стандарта, также используется в некоторых BIOS системах из-за ограничений таблиц разделов MBR, которые используют 32 бита для адресации логического блока (LBA) традиционных 512-байтовых секторов диска (источник: Википедия). Обычно это тот формат диска, который вы хотите использовать в UEFI системе.")])])])]),t._v(" "),_("hr"),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Термин")]),t._v(" "),_("th",[t._v("Описание")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("strong",[t._v("EC")])]),t._v(" "),_("td",[t._v("Встроенный контроллер (Embedded Controller) обменивается данными между основной платой и встроенными периферийными устройствами, такими как порты или аккумулятор.")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("PLUG")])]),t._v(" "),_("td",[t._v("Позволяет подключать XCPM и Apple XNU Power Mananagement, что обеспечивает лучшее управление процессором. Поддерживается только на Haswell и новее.")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("AWAC")])]),t._v(" "),_("td",[t._v("ACPI Wake Alarm Counter Clock - внутренние часы материнской платы. Отличаются от Real-Time Clock (RTC). macOS не может взаимодействовать с часами AWAC, поэтому они должны быть пропатчены.")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("PMC")])]),t._v(" "),_("td",[t._v("Контроллер управления питанием (Power Management Controller). OEM-производители забыли сделать map этого региона на материнских платах B360, B365, H310, H370 и Z390, поэтому нужен SSDT-PMC, чтобы избежать Page Fault")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("PNLF")])]),t._v(" "),_("td",[t._v("Дисплей с внутренней подсветкой. macOS использует это PNLF устройство для отправления и получения информация для управления яркостью")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("XOSI/_OSI")])]),t._v(" "),_("td",[_("code",[t._v("_OSI")]),t._v(" используется для определения загружаемой ОС. Переименование в XOSI позволяет обмануть оборудование и заставить его думать, что мы загружаем другую ОС")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("HPET")])]),t._v(" "),_("td",[t._v("Таймер событий высокой точности (High Precision Event Timer). Операционные системы используют его для определения способа коммуникации с устройствами (IRQ). macOS может быть очень требовательной к настройке устройств, поэтому нам иногда приходится патчить HPET.")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("RHUB")])]),t._v(" "),_("td",[t._v("Корневой USB-концентратор (Root USB Hub) в котором определены USB-порты. USB-порты могут не работать в macOS, если здесь отсутствуют некоторые определения.")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("IMEI")])]),t._v(" "),_("td",[t._v("Интерфейс Intel Management Engine выполняет различные задачи. Apple в macOS использует IMEI для ускорения Intel GPU. При использовании неизвестного ID, например чипсет 7 серии с процессором Sandy Bridge, macOS не сможет ускорить графический процессор.")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("UNC")])]),t._v(" "),_("td",[t._v("Uncore Bridge, также как и северный мост, выполняет множество операций связанных с кешем. Многие OEM-производители определяют это устройство, но не делают его функционирующим. macOS не в состоянии решить такие ситуации.")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("SMBS")])]),t._v(" "),_("td",[t._v("System Managment Bus позволяет устройствам легко обмениваться данными между собой.")])])])])])}),[],!1,null,null,null);v.default=e.exports}}]);