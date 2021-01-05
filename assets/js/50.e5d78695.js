(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{476:function(t,e,v){t.exports=v.p+"assets/img/mmio-white.0ee7b5c7.png"},634:function(t,e,v){"use strict";v.r(e);var l=v(25),_=Object(l.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"исправление-slide-значении-kaslr"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#исправление-slide-значении-kaslr"}},[t._v("#")]),t._v(" Исправление Slide значений KASLR")]),t._v(" "),l("ul",[l("li",[t._v("Поддерживаемая версия: 0.6.5")])]),t._v(" "),l("p",[t._v('Этот раздел предназначен для пользователей, которые хотят понять и исправить ошибки "Couldn\'t allocate runtime area". Чаще всего это встречается на Z390, X99 и X299. Этот раздел также поддерживает Clover, поскольку информация для него также будет полезна.')]),t._v(" "),l("h2",{attrs:{id:"что-же-такое-kaslr"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#что-же-такое-kaslr"}},[t._v("#")]),t._v(" Что же такое KASLR?")]),t._v(" "),l("p",[t._v("Что ж, KASLR расшифровывается как Kernel adress space layout randomization (рус. - Рандомизация размещения/компоновки адресного пространства ядра), используется в целях безопасности. В частности, это делает более сложным определение расположения важных объектов в памяти, поскольку это всегда случайное значение как между компьютерами, так и между загрузками. "),l("a",{attrs:{href:"https://lwn.net/Articles/569635/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Более подробное описание KASLR"),l("OutboundLink")],1)]),t._v(" "),l("p",[t._v("Это становится проблемой, когда вы вводите (introduce) устройства либо с небольшими Memory Map, либо же просто вводите слишком много устройств. Вероятно, есть место для работы ядра, и также есть свободное место, куда ядро не помещается полностью. Здесь подходит "),l("code",[t._v("slide=xxx")]),t._v(". Вместо того, чтобы позволить macOS выбирать случайную область для работы при каждой загрузке, мы ограничим ее той областью, которая, как мы знаем, будет работать.")]),t._v(" "),l("h2",{attrs:{id:"и-для-кого-эта-информация"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#и-для-кого-эта-информация"}},[t._v("#")]),t._v(" И для кого эта информация?")]),t._v(" "),l("p",[t._v("Как уже упомяналось ранее, это для пользователей, у которых нет достаточного места для ядра или происходит перемещение в слишком маленькое место. Как правило, при загрузке вы столкнетесь с аналогичной ошибкой:")]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("Error allocating 0x1197b pages at 0x0000000017a80000 alloc type 2\nCouldn't allocate runtime area\n")])])]),l("p",[t._v("С различными вариациями:")]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("Only 244/256 slide values are usable!\n")])])]),l("p",[t._v("Или даже краш во время работы macOS:")]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("panic(cpu 6 caller 0xffffff801fc057ba): a freed zone element has been modified in zone kalloc.4096: expected 0x3f00116dbe8a46f6 but found 0x3f00116d00000000\n")])])]),l("p",[t._v("Веселая часть этих ошибок заключается в том, что они могут быть случайными, а также причина, почему 20-кратное включение и выключение питания вашего ПК также может решить проблему, но только временно.")]),t._v(" "),l("p",[t._v("Забавный факт: Поиск области для работы занимает около 31 мс, а ручная установка слайд значения может в среднем сократить время загрузки на 0.207%!!!")]),t._v(" "),l("h2",{attrs:{id:"так-как-же-мне-это-исправить"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#так-как-же-мне-это-исправить"}},[t._v("#")]),t._v(" Так как же мне это исправить?")]),t._v(" "),l("p",[t._v("Реальное решение этой проблемы довольно простое, процесс одинаков для пользователей Clover и OpenCore. Что вам понадобится:")]),t._v(" "),l("ul",[l("li",[l("p",[l("strong",[t._v("Пользователям Clover")]),t._v(":")]),t._v(" "),l("ul",[l("li",[t._v("Clover Shell(у большинства пользователей он уже есть, обычно называется shell64.efi или как-то по-другому)\n"),l("ul",[l("li",[t._v("Это можно найти в "),l("code",[t._v("EFI/CLOVER/tools")])]),t._v(" "),l("li",[t._v("Если у вас его нет, вы можете получить его из "),l("a",{attrs:{href:"https://github.com/CloverHackyColor/CloverBootloader/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("CLOVERV2-xxxx.zip"),l("OutboundLink")],1)])])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://github.com/CloverHackyColor/CloverBootloader/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[t._v("OcQuirks"),l("OutboundLink")],1),t._v(" начиная с Clover v5120, скачав CloverV2-xxxx.zip, он будет содержать его по пути /CloverV2/EFI/CLOVER/drivers/off/UEFI/MemoryFix/OcQuirks.efi, он должен быть вкупе с OpenRuntime.efi, который предоставляется по такому же пути\n(Не смешивайте AptioFix'ы и не используйте OsxAptioFixDrvX или AptioMemoryFix, в этом руководстве поддерживается только OcQuirks)\n"),l("ul",[l("li",[t._v("Убедитесь, что это находится в папке "),l("code",[t._v("EFI/CLOVER/drivers/UEFI")])])])]),t._v(" "),l("li",[t._v("OpenRuntime.efi(Идёт в комплекте с CloverV2)\n"),l("ul",[l("li",[t._v("Убедитесь, что это находится в папке "),l("code",[t._v("EFI/CLOVER/drivers/UEFI")])])])]),t._v(" "),l("li",[l("s",[t._v("OcQuirks.plist")]),t._v("(Входит в config.plist от Clover, в последнем разедел после "),l("code",[t._v("SystemParameters")]),t._v("). Чтобы изменить OpenRuntime квирки, проверьте в конце config-sample.plist из CloverV2-xxxx.zip, поскольку Slice объединил OcQuirks.plist от ReddestDream в config.plist Clover'а")])])]),t._v(" "),l("li",[l("p",[l("strong",[t._v("Пользователям OpenCore")]),t._v(":")]),t._v(" "),l("ul",[l("li",[l("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenRuntime"),l("OutboundLink")],1)]),t._v(" "),l("li",[l("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenShell"),l("OutboundLink")],1),t._v("(Не забудьте включить это в разделе "),l("code",[t._v("Root -> Misc -> Tools")]),t._v(")")])])])]),t._v(" "),l("p",[t._v("И нам также нужно настроить наш config.plist -> Booter(для OpenCore) или OcQuirks.plist(для Clover):")]),t._v(" "),l("ul",[l("li",[l("strong",[t._v("AvoidRuntimeDefrag")]),t._v(": YES\n"),l("ul",[l("li",[t._v("Исправляет рантайм сервисы UEFI, такие как дата, время, NVRAM, управление питанием, т.д.")])])]),t._v(" "),l("li",[l("strong",[t._v("DevirtualiseMmio")]),t._v(": YES\n"),l("ul",[l("li",[t._v("Уменьшает объем Stolen памяти, расширяет возможные значения для "),l("code",[t._v("slide=N")]),t._v(", и очень полезен при устранении проблем с выделением памяти (Memory Allocation) на Z390.")])])]),t._v(" "),l("li",[l("strong",[t._v("EnableSafeModeSlide")]),t._v(": YES\n"),l("ul",[l("li",[t._v("Позволяет использовать слайд значения в безопасном режиме")])])]),t._v(" "),l("li",[l("strong",[t._v("ProtectUefiServices")]),t._v(": NO\n"),l("ul",[l("li",[t._v("Защищает UEFI сервисы от переопределения прошивкой, в основном актуально для виртуальных машин, 300 серии и более новых систем, таких как Ice Lake и Comet Lake")])])]),t._v(" "),l("li",[l("strong",[t._v("ProvideCustomSlide")]),t._v(": YES\n"),l("ul",[l("li",[t._v("Это даёт уверенность, что ядро будет выбирать только хорошие регионы и избегать тех, которые могут привести к сбоям загрузки. Оно по-прежнему выбирает случайно, но не включает плохие регионы при рандомизации.")])])]),t._v(" "),l("li",[l("strong",[t._v("RebuildAppleMemoryMap")]),t._v(": YES\n"),l("ul",[l("li",[t._v("Создает Memory Map совместимую с macOS, может сломаться с некоторыми OEM прошивками ноутбуков, поэтому если вы получили сбой ранней загрузки - отключите это. Это гарантирует, что наша Memory Map будет соответствовать соответствовать тому, что ожидает ядро.")])])])]),t._v(" "),l("h2",{attrs:{id:"подготовка-bios"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#подготовка-bios"}},[t._v("#")]),t._v(" Подготовка BIOS")]),t._v(" "),l("p",[t._v("Причина, по которой нам нужно сбросить Memory Map, заключается в том, что мы хотим, чтобы она была более детерминированной, имеется ввиду, чтобы при каждой загрузке было меньше вариаций, поэтому у нас будет меньше крайних случаев (Memory Map не всегда согласованы при загрузке). Для подготовки:")]),t._v(" "),l("ul",[l("li",[t._v("Обновите BIOS(чрезвычайно важно, поскольку известно, что ранние версии BIOS имеют проблемы с Memory Map, в особенности Z390)")]),t._v(" "),l("li",[t._v("Сбросьте CMOS")]),t._v(" "),l("li",[t._v("Включите необходимые настройки в BIOS:\n"),l("ul",[l("li",[l("code",[t._v("Above4GDecoding")]),t._v(": Позволяет устройствам использовать области памяти размером более 4 ГБ, что означает, что в macOS будет больше места для размещения; может быть проблематичным на некоторых X99, X299, поэтому рекомендуется тестировать с и без.")]),t._v(" "),l("li",[l("code",[t._v("Boot Options -> Windows8.1/10 mode")]),t._v(": Это гарантирует, что не будет загружаться старый устаревший мусор. Интересный факт: "),l("code",[t._v("other OS")]),t._v(" разработан только для загрузки старых версий Windows, а не для других ОС")])])]),t._v(" "),l("li",[t._v("Отключите как можно больше ненужных устройств в BIOS (это означает, что при каждой загрузке будет меньше изменений в Memory Map, и поэтому меньше шансов на сбой загрузки). Общие настройки:\n"),l("ul",[l("li",[l("code",[t._v("CSM")]),t._v(": Для поддержки Legacy, добавляет кучу ненужного нам мусора. Это также может сломать Shell, и вы не сможете загрузиться в него.")]),t._v(" "),l("li",[l("code",[t._v("Intel SGX")]),t._v(": Software Guard Extensions, занимает много места и ничего не делает в macOS.")]),t._v(" "),l("li",[l("code",[t._v("Parallel Port")]),t._v(": macOS даже не видит параллельные порты.")]),t._v(" "),l("li",[l("code",[t._v("Serial Port")]),t._v(": Хотелось бы знать, насколько много тех, кто отлаживает ядро...")]),t._v(" "),l("li",[l("code",[t._v("iGPU")]),t._v(": В некоторых системах такие раздутые Memory Map, что iGPU просто не влезает.")]),t._v(" "),l("li",[l("code",[t._v("Thunderbolt")]),t._v(": У многих хаков нет рабочего Thunderbolt, платы, у которых нет Thunderbolt, но имеют эту опцию, просто тратят больше места.")]),t._v(" "),l("li",[l("code",[t._v("LED lighting")]),t._v(": Извини, приятель, время уходить.")]),t._v(" "),l("li",[l("code",[t._v("Legacy USB")]),t._v(": Больше Legacy Чепухи.")])])])]),t._v(" "),l("h2",{attrs:{id:"тестовая-загрузка"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#тестовая-загрузка"}},[t._v("#")]),t._v(" Тестовая загрузка")]),t._v(" "),l("p",[t._v("С нашими скорректированными настройками EFI, config.plist и BIOS, пришло время опробовать наши новые настройки. Если у вас все еще есть проблемы, похоже, нам нужно глубоко погрузиться и рассчитать значение нашего Slide")]),t._v(" "),l("h2",{attrs:{id:"нахождение-slide-значения"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#нахождение-slide-значения"}},[t._v("#")]),t._v(" Нахождение Slide значения")]),t._v(" "),l("p",[t._v("Теперь вам нужно открыть EFI Shell в выбранном вами менеджере загрузок и запустить "),l("code",[t._v("memmap")]),t._v(". Это даст вам список всех страниц и их размеров. Вот тут-то и начинается веселье.")]),t._v(" "),l("p",[t._v("Пример того, что вы увидите:")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Start")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("End")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("# Pages")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Attributes")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("RT_Data")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000000000")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000000FFF")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000000001")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("800000000000000F")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Available")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000001000")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000057FFF")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000000057")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Reserved")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000058000")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000058FFF")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000000001")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Available")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000059000")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000000008FFFF")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000000037")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("RT_Code")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000090000")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000090FFF")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000000001")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("800000000000000F")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Available")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000091000")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000000009DFFF")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000D")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Reserved")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000000009E000")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000000009FFFF")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000000002")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Available")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000100000")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000005B635FFF")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000000005B536")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("BS_Data")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000005B636000")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000005B675FFF")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000000040")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Available")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000005B676000")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000006AF77FFF")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000F902")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("LoaderCode")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000006AF78000")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000006B155FFF")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("00000000000001DE")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("BS_Data")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000006B156000")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000006B523FFF")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("00000000000003CE")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("ACPI_NVS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000006B524000")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000006B524FFF")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000000001")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("BS_Data")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000006B526000")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000006B625FFF")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000000100")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Available")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000006B626000")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000006B634FFF")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])])])]),t._v(" "),l("p",[t._v("Теперь вам может быть интересно, как, черт возьми, мы конвертируем это в значение слайда, ну, это довольно просто. Нас интересует самое наибольшее доступное значение в столбце "),l("code",[t._v("Start")]),t._v(". В этом примере мы видим, что "),l("code",[t._v("000000006B626000")]),t._v(" является нашим самым большим значением, обратите внимание, что они находятся в HEX, поэтому, если есть несколько значений, близких друг к другу, вам может потребоваться конвертировать их в десятичное значение. Для вычисления Slide значение (встроенный калькулятор macOS имеет функцию программирования, нажав ⌘ + 3):")]),t._v(" "),l("p",[l("code",[t._v("000000006B626000")]),t._v(" = "),l("code",[t._v("0x6B626000")])]),t._v(" "),l("p",[t._v("("),l("code",[t._v("0x6B626000")]),t._v(" - "),l("code",[t._v("0x100000")]),t._v(")/"),l("code",[t._v("0x200000")]),t._v(" = "),l("code",[t._v("0x35A")])]),t._v(" "),l("p",[t._v("И чтобы убедиться, что это правильно:")]),t._v(" "),l("p",[l("code",[t._v("0x100000")]),t._v(" + ("),l("code",[t._v("0x35A")]),t._v(" * "),l("code",[t._v("0x200000")]),t._v(") = "),l("code",[t._v("0x6B500000")])]),t._v(" "),l("p",[t._v("Всякий раз, когда возвращаемое значение "),l("strong",[t._v("не")]),t._v(" оригинальное ("),l("code",[t._v("0x6B500000")]),t._v(" против "),l("code",[t._v("0x6B626000")]),t._v("), просто добавьте +1 к конечному Slide значению. Это связано с округлением. Так, например, конвертированный в десятичное счисление "),l("code",[t._v("0x35A")]),t._v(" становится "),l("code",[t._v("858")]),t._v(", а +1 даст вам "),l("code",[t._v("slide=859")]),t._v(".")]),t._v(" "),l("blockquote",[l("p",[t._v("Но подождите, это же больше 256!")])]),t._v(" "),l("p",[t._v("Это верно. Это вызвано Memory Map включающими в себя сектора "),l("code",[t._v("Above4GDecoding")]),t._v(", которые не могут быть использованы. Поэтому вам нужно будет спускаться вниз по списку, пока вы не найдете небольшое достаточное значение(для нас, это будет "),l("code",[t._v("0000000000100000")]),t._v(")")]),t._v(" "),l("p",[t._v("И чтобы было немного яснее, вот формула:")]),t._v(" "),l("p",[t._v("(HEX - "),l("code",[t._v("0x100000")]),t._v(")/"),l("code",[t._v("0x200000")]),t._v(" = Значение Slide в HEX")]),t._v(" "),l("p",[l("code",[t._v("0x100000")]),t._v(" + (Значение Slide в HEX * "),l("code",[t._v("0x200000")]),t._v(") = Ваше изначальное HEX значение(если нет, то добавьте +1 к Slide значению)")]),t._v(" "),l("p",[t._v("Теперь перейдите в свой config.plist и добавьте своё слайд значение к остальным аргументам загрузки(для нас, это будет "),l("code",[t._v("slide=0")]),t._v(" при использовании "),l("code",[t._v("0x100000")]),t._v("). Если это значение по-прежнему выдаёт вам ошибки, вы можете перейти ко второму по велечине "),l("code",[t._v("Start")]),t._v(" значению и так далее.")]),t._v(" "),l("p",[t._v("Иногда вы можете обнаружить, что при вычислении слайда, вы получаете сверхмалые значения, такие как "),l("code",[t._v("slide=-0.379150390625")]),t._v(", когда это происходит, округлите это до "),l("code",[t._v("slide=0")]),t._v(".")]),t._v(" "),l("p",[t._v("А для пользователей, у которых возникают проблемы с поиском значения слайда, вы можете также ввести "),l("code",[t._v("$slide [вставьте наибольшее значение #Pages]")]),t._v(" в канале #Sandbox на "),l("a",{attrs:{href:"https://discord.gg/u8V7N5C",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discord-сервере r/Hackintosh"),l("OutboundLink")],1)]),t._v(" "),l("blockquote",[l("p",[t._v("Но это таааак тяжело")])]),t._v(" "),l("p",[t._v("Ну, не волнуйтесь, ведь есть более простое решение. После запуска "),l("code",[t._v("memmap")]),t._v(" в оболочке запустите:")]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("shell> fs0: //replace with your USB\n\nfs0:\\> dir //to verify this is the right directory, if not try fs1 and so on\n\nDirectory of fs0:\\\n01/01/01 3:30p   EFI\n\nfs0:\\> memmap > memmap.txt\n")])])]),l("p",[t._v("Это добавит файл "),l("code",[t._v("memmap.txt")]),t._v(" в корень вашего EFI, после чего вы сможете перетащить в канал #Sandbox Discord-сервера r/Hackintosh и написать "),l("code",[t._v("$slide [вставьте ссылку на memmap.txt]")])]),t._v(" "),l("h2",{attrs:{id:"использование-devirtualisemmio"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#использование-devirtualisemmio"}},[t._v("#")]),t._v(" Использование DevirtualiseMmio")]),t._v(" "),l("p",[t._v("DevirtualiseMmio - довольно интересный квирк, особенно в том, что он преодолевает огромное препятствие с многими системами PCI устройств, такими как некоторые Z390 платы и практические все HEDT платы, такие как X99 и X299. Как это происходит? Он берет MMIO области и удаляет рантайм атрибуты, позволяя тем самым использовать их в качестве пространства для удобного размещения ядра. В сочетании с квирком "),l("code",[t._v("ProvideCustomSlide")]),t._v(", мы можем сохранить функцию безопасности слайда, а также получить загружаемую машину.")]),t._v(" "),l("p",[t._v("Для чрезвычайно проблематичных систем, таких как Threadripper TRX40 19H, нам нужно найти определенные обрасти, которые не требуются для правильной работы. Вот тут-то и вступает в игру "),l("code",[t._v("MmioWhitelist")]),t._v(". Обратите внимание, что белый список не требуется для большинства систем.")]),t._v(" "),l("p",[t._v("Если вы запустите отладочную версию OpenCore со включенным DevirtualiseMmio, вы заметите в своих логах это:")]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("21:495 00:009 OCABC: MMIO devirt start\n21:499 00:003 OCABC: MMIO devirt 0x60000000 (0x10000 pages, 0x8000000000000001) skip 0\n21:503 00:003 OCABC: MMIO devirt 0xFE000000 (0x11 pages, 0x8000000000000001) skip 0\n21:506 00:003 OCABC: MMIO devirt 0xFEC00000 (0x1 pages, 0x8000000000000001) skip 0\n21:510 00:003 OCABC: MMIO devirt 0xFED00000 (0x1 pages, 0x8000000000000001) skip 0\n21:513 00:003 OCABC: MMIO devirt 0xFEE00000 (0x1 pages, 0x800000000000100D) skip 0\n21:516 00:003 OCABC: MMIO devirt 0xFF000000 (0x1000 pages, 0x800000000000100D) skip 0\n21:520 00:003 OCABC: MMIO devirt end, saved 278608 KB\n")])])]),l("ul",[l("li",[t._v("Примечание: См. "),l("RouterLink",{attrs:{to:"/troubleshooting/debug.html"}},[t._v("Отладка OpenCore")]),t._v(" о том, как включить логирование в файл")],1)]),t._v(" "),l("p",[t._v("Итак, у нас есть 6 регионов, через которые нам нужно пройти и посмотреть, какие из них плохие. Лучше всего заблокировать все MMIO области "),l("em",[t._v("кроме")]),t._v(" одного и попробовать каждый регион, чтобы получить список хороших регионов.")]),t._v(" "),l("p",[t._v("Теперь давайте возьмем вышеприведенный пример и создадим наш собственный MmioWhitelist, нам нужно сначала преобразовать адрес из шестнадцатеричного в десятичное значение:")]),t._v(" "),l("ul",[l("li",[t._v("MMIO devirt 0x60000000 -> 1610612736")]),t._v(" "),l("li",[t._v("MMIO devirt 0xFE000000 -> 4261412864")]),t._v(" "),l("li",[t._v("MMIO devirt 0xFEC00000 -> 4273995776")]),t._v(" "),l("li",[t._v("MMIO devirt 0xFED00000 -> 4275044352")]),t._v(" "),l("li",[t._v("MMIO devirt 0xFEE00000 -> 4276092928")]),t._v(" "),l("li",[t._v("MMIO devirt 0xFF000000 -> 4278190080")])]),t._v(" "),l("p",[t._v("Когда все сделано, должно выглядеть примерно так:")]),t._v(" "),l("p",[l("img",{attrs:{src:v(476),alt:""}})])])}),[],!1,null,null,null);e.default=_.exports}}]);