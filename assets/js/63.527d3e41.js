(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{603:function(t,e,a){"use strict";a.r(e);var l=a(25),n=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"converting-common-kernel-and-kext-patches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#converting-common-kernel-and-kext-patches"}},[t._v("#")]),t._v(" Converting common Kernel and Kext patches")]),t._v(" "),a("h2",{attrs:{id:"manually-converting-a-patch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manually-converting-a-patch"}},[t._v("#")]),t._v(" Manually converting a patch")]),t._v(" "),a("p",[t._v("When converting a kernel/kext patch into one for OpenCore, you'll need to remember a few things")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("InfoPlistPatch")]),t._v(" has no feature parity")]),t._v(" "),a("li",[a("code",[t._v("MatchOS")]),t._v(" is replaced with "),a("code",[t._v("MinKernel")]),t._v(" and "),a("code",[t._v("MaxKernel")])]),t._v(" "),a("li",[t._v("Both kernel and kext patches go under "),a("code",[t._v("Kernel -> Patch")]),t._v(", and you use "),a("code",[t._v("Identifier")]),t._v(" to say whether it's the kernel or a specific kext you want to patch")])]),t._v(" "),a("p",[t._v("Now lets look at this example:")]),t._v(" "),a("p",[a("strong",[t._v("KernelToPatch")]),t._v(":")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Key")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Comment")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("cpuid_set_cpufamily - force CPUFAMILY_INTEL_PENRYN")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("False")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("MatchBuild")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("18G95,18G103")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("MatchOS")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10.14.6")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Find")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Data")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("31db803d4869980006755c")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Replace")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Data")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("bbbc4fea78e95d00000090")])])])]),t._v(" "),a("p",[t._v("So to convert this patch, see below:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Comment")]),t._v(": Available both on Clover and OpenCore")]),t._v(" "),a("li",[a("code",[t._v("Disabled")]),t._v(": OpenCore uses "),a("code",[t._v("Enabled")]),t._v(" instead")]),t._v(" "),a("li",[a("code",[t._v("MatchBuild")]),t._v(": OpenCore uses "),a("code",[t._v("MinKernel")]),t._v(" and "),a("code",[t._v("MaxKernel")]),t._v(", see below for more info")]),t._v(" "),a("li",[a("code",[t._v("MatchOS")]),t._v(": OpenCore uses "),a("code",[t._v("MinKernel")]),t._v(" and "),a("code",[t._v("MaxKernel")]),t._v(", see below for more info")]),t._v(" "),a("li",[a("code",[t._v("Find")]),t._v(": Available both on Clover and OpenCore")]),t._v(" "),a("li",[a("code",[t._v("Replace")]),t._v(": Available both on Clover and OpenCore")]),t._v(" "),a("li",[a("code",[t._v("MaskFind")]),t._v(": OpenCore uses "),a("code",[t._v("Mask")]),t._v(" instead")]),t._v(" "),a("li",[a("code",[t._v("MaskReplace")]),t._v(": Available both on Clover and OpenCore")])]),t._v(" "),a("p",[t._v("So the above patch would become:")]),t._v(" "),a("p",[a("strong",[t._v("Kernel -> Patch")]),t._v(":")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Key")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Comment")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("cpuid_set_cpufamily - force CPUFAMILY_INTEL_PENRYN")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Enabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("True")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("MinKernel")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("18.7.0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("MaxKernel")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("18.7.0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Find")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Data")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("31db803d4869980006755c")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Replace")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Data")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("bbbc4fea78e95d00000090")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Identifier")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("kernel")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Limit")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Count")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Skip")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Mask")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Data")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ReplaceMask")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Data")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),a("p",[t._v("For Min and MaxKernel, we can use the below as for info, so 18G95 has the kernel version "),a("code",[t._v("18.7.0")]),t._v(" and 18G103 has "),a("code",[t._v("18.7.0")]),t._v("(both being the same kernel):")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/MacOS_Mojave#Release_history",target:"_blank",rel:"noopener noreferrer"}},[t._v("macOS Mojave: Release history"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("For Identifier, you'll either define "),a("code",[t._v("kernel")]),t._v(" or the kext you want to patch(ie. "),a("code",[t._v("com.apple.iokit.IOGraphicsFamily")]),t._v(" )")]),t._v(" "),a("p",[t._v("Regarding Limit, Count and Skip, they are set to "),a("code",[t._v("0")]),t._v(" so they apply to all instances. "),a("code",[t._v("Mask")]),t._v(" and "),a("code",[t._v("ReplaceMask")]),t._v(" can be left as blank as Clover doesn't support masking(until very recently but won't be covered here).")]),t._v(" "),a("h2",{attrs:{id:"common-patches-in-opencore-and-co"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-patches-in-opencore-and-co"}},[t._v("#")]),t._v(" Common patches in OpenCore and co")]),t._v(" "),a("p",[t._v("Little section mentioning common Kernel and Kexts patches that have been absorbed into OpenCore or other kexts. This list is not complete so any that may have been forgotten can be mentioned by opening a new "),a("a",{attrs:{href:"https://github.com/khronokernel/OpenCore-Vanilla-Desktop-Guide/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),a("OutboundLink")],1),t._v(". Any help is much appreciated")]),t._v(" "),a("h3",{attrs:{id:"kernel-patches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kernel-patches"}},[t._v("#")]),t._v(" Kernel Patches")]),t._v(" "),a("p",[t._v("For a full list of patches OpenCore supports, see "),a("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/blob/master/Library/OcAppleKernelLib/CommonPatches.c",target:"_blank",rel:"noopener noreferrer"}},[t._v("/Library/OcAppleKernelLib/CommonPatches.c"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("General Patches")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("MSR 0xE2 _xcpm_idle instant reboot")]),t._v(" (c) Pike R. Alpha\n"),a("ul",[a("li",[a("code",[t._v("Kernel -> Quirks -> AppleXcpmCfgLock")])])])])]),t._v(" "),a("p",[a("strong",[t._v("HEDT Specific Patches")]),t._v(":")]),t._v(" "),a("p",[t._v("All of the following patches are inside the "),a("code",[t._v("Kernel -> Quirk -> AppleXcpmExtraMsrs")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("_xcpm_bootstrap")]),t._v(" © Pike R. Alpha")]),t._v(" "),a("li",[a("code",[t._v("xcpm_pkg_scope_msrs")]),t._v(" © Pike R. Alpha")]),t._v(" "),a("li",[a("code",[t._v("_xcpm_SMT_scope_msrs")]),t._v(" 1 © Pike R. Alpha")]),t._v(" "),a("li",[a("code",[t._v("_xcpm_SMT_scope_msrs")]),t._v(" #2 (c) Pike R. Alpha")]),t._v(" "),a("li",[a("code",[t._v("_xcpm_core_scope_msrs")]),t._v(" © Pike R. Alpha")]),t._v(" "),a("li",[a("code",[t._v("_xcpm_ performance_patch")]),t._v(" © Pike R. Alpha")]),t._v(" "),a("li",[t._v("xcpm MSR Patch 1 and 2 @Pike R. Alpha")]),t._v(" "),a("li",[a("code",[t._v("/0x82D390/MSR_PP0_POLICY 0x63a xcpm support")]),t._v(" patch 1 and 2 Pike R. Alpha")])]),t._v(" "),a("h3",{attrs:{id:"kext-patches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kext-patches"}},[t._v("#")]),t._v(" Kext Patches")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Disable Panic Kext logging")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Kernel -> Quirks -> PanicNoKextDump")])])])]),t._v(" "),a("li",[t._v("AppleAHCIPort External Icon Patch1\n"),a("ul",[a("li",[a("code",[t._v("Kernel -> Quirks -> ExternalDiskIcons")])])])]),t._v(" "),a("li",[t._v("SSD Trim Enabler\n"),a("ul",[a("li",[a("code",[t._v("Kernel -> Quirks -> ThirdPartyDrives")])])])]),t._v(" "),a("li",[t._v("USB Port Limit Patches\n"),a("ul",[a("li",[a("code",[t._v("Kernel -> Quirks -> XhciPortLimit")])])])]),t._v(" "),a("li",[t._v("FredWst DP/HDMI patch\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/AppleALC/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("AppleALC"),a("OutboundLink")],1),t._v(" + "),a("a",{attrs:{href:"https://github.com/acidanthera/whatevergreen/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("WhateverGreen"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[t._v("IOPCIFamily Patch\n"),a("ul",[a("li",[a("code",[t._v("Kernel -> Quirks -> IncreasePciBarSize")])])])]),t._v(" "),a("li",[t._v("Disable board-ID check\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/whatevergreen/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("WhateverGreen"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[t._v("AppleHDA Patch\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/AppleALC/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("AppleALC"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[t._v("IONVMe Patches\n"),a("ul",[a("li",[t._v("Not required anymore on High Sierra and newer")]),t._v(" "),a("li",[t._v("For power management on Mojave and newer: "),a("a",{attrs:{href:"https://github.com/acidanthera/NVMeFix/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("NVMeFix"),a("OutboundLink")],1)])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);