(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{351:function(t,e,l){t.exports=l.p+"assets/img/populated-efi.8d46cc52.png"},442:function(t,e,l){t.exports=l.p+"assets/img/sample-location.f9079cbf.png"},443:function(t,e,l){t.exports=l.p+"assets/img/renamed.9b06868d.png"},444:function(t,e,l){t.exports=l.p+"assets/img/before-snapshot.f2dccade.png"},445:function(t,e,l){t.exports=l.p+"assets/img/after-snapshot.0dfaaf2b.png"},446:function(t,e,l){t.exports=l.p+"assets/img/duplicate.b628676a.png"},618:function(t,e,l){"use strict";l.r(e);var a=l(25),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"настроика-config-plist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#настроика-config-plist"}},[t._v("#")]),t._v(" Настройка config.plist")]),t._v(" "),a("p",[t._v("Теперь, когда у нас есть все наши кексты(.kext), SSDT(.aml) и драйверы прошивки, ваш USB должен выглядеть примерно так:")]),t._v(" "),a("p",[a("img",{attrs:{src:l(351),alt:"Populated EFI folder"}})]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Примечание")]),t._v(": Ваш USB "),a("strong",[t._v("будет выглядеть по-другому")]),t._v(", у каждой системы разные требования.")])]),t._v(" "),a("h2",{attrs:{id:"создание-вашего-config-plist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#создание-вашего-config-plist"}},[t._v("#")]),t._v(" Создание вашего config.plist")]),t._v(" "),a("p",[t._v("Для начала, нам нужно взять sample.plist из "),a("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenCorePkg"),a("OutboundLink")],1),t._v(", он будет находится в папке "),a("code",[t._v("Docs")]),t._v(":")]),t._v(" "),a("p",[a("img",{attrs:{src:l(442),alt:""}})]),t._v(" "),a("p",[t._v("Дальше, давайте переместим его на EFI раздел USB(будет называться BOOT в Windows) в "),a("code",[t._v("EFI/OC/")]),t._v(", и переименуем его в config.plist:")]),t._v(" "),a("p",[a("img",{attrs:{src:l(443),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"добавление-ваших-ssdt-кекстов-и-драиверов-прошивки"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#добавление-ваших-ssdt-кекстов-и-драиверов-прошивки"}},[t._v("#")]),t._v(" Добавление ваших SSDT, кекстов и драйверов прошивки")]),t._v(" "),a("p",[t._v("Для остальной части этого руководства, вам нужно будет как-то редактировать plist. И в нашем руководстве мы будем использовать ProperTree и GenSMBIOS, чтобы помочь автоматизировать часть утомительной работы:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/corpnewt/ProperTree",target:"_blank",rel:"noopener noreferrer"}},[t._v("ProperTree"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("Универсальный plist редактор")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/corpnewt/GenSMBIOS",target:"_blank",rel:"noopener noreferrer"}},[t._v("GenSMBIOS"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("Для генерации наших SMBIOS данных")])])])]),t._v(" "),a("p",[t._v("Далее, давайте откроем ProperTree и отредактируем наш config.plist:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("ProperTree.command")]),t._v(" "),a("ul",[a("li",[t._v("Для macOS")]),t._v(" "),a("li",[t._v("Подсказка: есть утилита "),a("code",[t._v("buildapp.command")]),t._v(" в папке "),a("code",[t._v("Scripts")]),t._v(", которая превратит ProperTree в отдельное приложение для macOS")])])]),t._v(" "),a("li",[a("code",[t._v("ProperTree.bat")]),t._v(" "),a("ul",[a("li",[t._v("Для Windows")])])])]),t._v(" "),a("p",[t._v("Когда запустите ProperTree, откройте ваш config.plist нажатием "),a("strong",[t._v("Cmd/Ctrl + O")]),t._v(" и выберите файл "),a("code",[t._v("config.plist")]),t._v(" на вашем USB.")]),t._v(" "),a("p",[t._v("После того как открыли конфиг, нажмите "),a("strong",[t._v("Cmd/Ctrl + Shift + R")]),t._v(' и выберите вашу EFI/OC папку, чтобы совершить "Clean Snapshot":')]),t._v(" "),a("ul",[a("li",[t._v("Это удалит все записи из config.plist и затем добавит все ваши SSDT, кексты и драйверы прошивки в конфиг")]),t._v(" "),a("li",[a("strong",[t._v("Cmd/Ctrl + R")]),t._v(" это другая опция, которая добавит все ваши файлы, но оставит записи отключенными, если они были настроены таким образом раньше, полезно при решении проблем, но нам сейчас не нужно")])]),t._v(" "),a("p",[a("img",{attrs:{src:l(444),alt:""}})]),t._v(" "),a("p",[t._v("Когда всё сделано, вы увидите ваши SSDT, кексты и драйверы прошивки заполненными в config.plist:")]),t._v(" "),a("p",[a("img",{attrs:{src:l(445),alt:""}})]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Примечание:")]),t._v(' Если у вас появится окно "Disable the following kexts with Duplicate CFBundleIdentifiers?", нажмите "Yes". Это делается для того, чтобы убедиться, что у вас не будут инжектироваться дублирующиеся кексты, поскольку некоторые кексты могут иметь одни и те же плагины(например, VoodooInput находящийся как в VoodooPS2, так и в VoodooI2C)')])]),t._v(" "),a("p",[a("img",{attrs:{src:l(446),alt:""}})]),t._v(" "),a("p",[t._v("Если вы хотите немного почистить файл, вы можете удалить записи "),a("code",[t._v("#WARNING")]),t._v(". Хотя они оставаясь там не вызывают проблем, поэтому это личное предпочтение.")]),t._v(" "),a("h2",{attrs:{id:"выбор-вашеи-платформы"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#выбор-вашеи-платформы"}},[t._v("#")]),t._v(" Выбор вашей платформы")]),t._v(" "),a("p",[t._v("Теперь наступает важная часть - выбор пути конфигурации. У каждой платформы есть свои уникальные особенности, которые вам необходимо учитывать, поэтому очень важно знать свое оборудование. Смотрите ниже, что делать дальше:")]),t._v(" "),a("h3",{attrs:{id:"настольные-intel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#настольные-intel"}},[t._v("#")]),t._v(" Настольные Intel")]),t._v(" "),a("ul",[a("li",[t._v("Примечание: Серия Intel NUC считается мобильным оборудованием, для этих ситуаций мы рекомендуем следовать "),a("a",{attrs:{href:"#intel-laptop"}},[t._v("разделу Intel ноутбуки")])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Кодовое название")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Серия")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Выход")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/config.plist/penryn.html"}},[t._v("Yonah, Conroe и Penryn")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("E8XXX, Q9XXX, "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Yonah_(microprocessor)",target:"_blank",rel:"noopener noreferrer"}},[t._v("etc 1"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Penryn_(microarchitecture)",target:"_blank",rel:"noopener noreferrer"}},[t._v("etc 2"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2006-2009 г.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/config.plist/clarkdale.html"}},[t._v("Lynnfield и Clarkdale")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("5XX-8XX")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2010 г.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/config.plist/sandy-bridge.html"}},[t._v("Sandy Bridge")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2XXX")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2011 г.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/config.plist/ivy-bridge.html"}},[t._v("Ivy Bridge")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3XXX")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2012 г.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/config.plist/haswell.html"}},[t._v("Haswell")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("4XXX")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2013-2014 г.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/config.plist/skylake.html"}},[t._v("Skylake")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("6XXX")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2015-2016 г.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/config.plist/kaby-lake.html"}},[t._v("Kaby Lake")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("7XXX")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2017 г.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/config.plist/coffee-lake.html"}},[t._v("Coffee Lake")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("8XXX-9XXX")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2017-2019 г.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/config.plist/comet-lake.html"}},[t._v("Comet Lake")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10XXX")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2020 г.")])])])]),t._v(" "),a("h3",{attrs:{id:"ноутбуки-intel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ноутбуки-intel"}},[t._v("#")]),t._v(" Ноутбуки Intel")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Кодовое название")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Серия")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Выход")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/config-laptop.plist/arrandale.html"}},[t._v("Clarksfield и Arrandale")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3XX-9XX")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2010 г.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/config-laptop.plist/sandy-bridge.html"}},[t._v("Sandy Bridge")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2XXX")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2011 г.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/config-laptop.plist/ivy-bridge.html"}},[t._v("Ivy Bridge")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3XXX")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2012 г.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/config-laptop.plist/haswell.html"}},[t._v("Haswell")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("4XXX")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2013-2014 г.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/config-laptop.plist/broadwell.html"}},[t._v("Broadwell")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("5XXX")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2014-2015 г.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/config-laptop.plist/skylake.html"}},[t._v("Skylake")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("6XXX")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2015-2016 г.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/config-laptop.plist/kaby-lake.html"}},[t._v("Kaby Lake и Amber Lake")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("7XXX")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2017 г.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/config-laptop.plist/coffee-lake.html"}},[t._v("Coffee Lake и Whiskey Lake")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("8XXX")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2017-2018 г.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/config-laptop.plist/coffee-lake-plus.html"}},[t._v("Coffee Lake Plus и Comet Lake")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("9XXX-10XXX")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2019-2020 г.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/config-laptop.plist/icelake.html"}},[t._v("Ice Lake")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10XXX")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2019-2020 г.")])])])]),t._v(" "),a("h3",{attrs:{id:"intel-hedt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intel-hedt"}},[t._v("#")]),t._v(" Intel HEDT")]),t._v(" "),a("p",[t._v("Этот раздел включает оборудование как для энтузиастов, так и серверное.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Кодовое название")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Серия")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Выход")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/config-HEDT/nehalem.html"}},[t._v("Nehalem и Westmere")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("9XX, X3XXX, X5XXX, "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Nehalem_(microarchitecture)",target:"_blank",rel:"noopener noreferrer"}},[t._v("etc 1"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Westmere_(microarchitecture)",target:"_blank",rel:"noopener noreferrer"}},[t._v("2"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2008-2010 г.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/config-HEDT/ivy-bridge-e.html"}},[t._v("Sandy/Ivy Bridge-E")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3XXX, 4XXX")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2011-2013 г.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/config-HEDT/haswell-e.html"}},[t._v("Haswell-E")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("5XXX")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2014 г.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/config-HEDT/broadwell-e.html"}},[t._v("Broadwell-E")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("6XXX")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2016 г.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/config-HEDT/skylake-x.html"}},[t._v("Skylake/Cascade Lake-X/W")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("7XXX, 9XXX, 10XXX")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2017-2019 г.")])])])]),t._v(" "),a("h3",{attrs:{id:"amd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amd"}},[t._v("#")]),t._v(" AMD")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Кодовое название")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Серия")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Выход")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/AMD/fx.html"}},[t._v("Bulldozer/Jaguar")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/List_of_AMD_processors#Bulldozer_architecture;_Bulldozer,_Piledriver,_Steamroller,_Excavator_(2011%E2%80%932017)",target:"_blank",rel:"noopener noreferrer"}},[t._v("Непонятно"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/List_of_AMD_processors#Bulldozer_architecture;_Bulldozer,_Piledriver,_Steamroller,_Excavator_(2011%E2%80%932017)",target:"_blank",rel:"noopener noreferrer"}},[t._v("AMD реально были плохи в названиях раньше"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/AMD/zen.html"}},[t._v("Zen")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1XXX, 2XXX, 3XXX, 5XXX")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2017-2020 г.")])])])]),t._v(" "),a("ul",[a("li",[t._v("Примечание: "),a("s",[t._v("Threadripper 3его поколения(39XX) не поддерживаются, однако 1ое и 2ое поколение поддерживается")]),t._v(" "),a("ul",[a("li",[t._v("Последние версии BIOS и OpenCore решили эту проблему, теперь поддерживаются все платформы на Threadripper")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);