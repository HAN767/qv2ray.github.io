(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{387:function(a,r,t){"use strict";t.r(r);var v=t(25),e=Object(v.a)({},(function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"faq-常见疑问与答疑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq-常见疑问与答疑"}},[a._v("#")]),a._v(" FAQ - 常见疑问与答疑")]),a._v(" "),t("h2",{attrs:{id:"v2ray-核心无法启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v2ray-核心无法启动"}},[a._v("#")]),a._v(" V2Ray 核心无法启动")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("有些提示信息需要在"),t("strong",[a._v("内核设置")]),a._v("中将"),t("strong",[a._v("日志等级")]),a._v("设为"),t("strong",[a._v("信息")]),a._v("或"),t("strong",[a._v("调试")]),a._v("才能看到。")])]),a._v(" "),t("h3",{attrs:{id:"_1-提示-only-one-usage-of-each-socket-address-protocol-network-address-port-is-normally-permitted"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-提示-only-one-usage-of-each-socket-address-protocol-network-address-port-is-normally-permitted"}},[a._v("#")]),a._v(" 1. 提示 "),t("code",[a._v("Only one usage of each socket address (protocol/network address/port) is normally permitted.")])]),a._v(" "),t("ul",[t("li",[t("p",[t("strong",[a._v("本质")]),a._v("：发生了端口冲突。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("原因 1")]),a._v("：先前的 V2Ray 进程未正常退出，占用了相关端口。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("解决方案（Windows 系统）")]),a._v("：通过任务管理器或 "),t("code",[a._v("taskkill /f /im <进程名>")]),a._v(" 结束 "),t("code",[a._v("v2ray.exe")]),a._v(" 或 "),t("code",[a._v("wv2ray.exe")]),a._v(" 进程。")]),a._v(" "),t("ul",[t("li",[t("p",[t("strong",[a._v("方法 1")]),a._v("：在任务管理器的 "),t("code",[a._v("详细信息")]),a._v(" 选项卡中，找到 "),t("code",[a._v("v2ray.exe")]),a._v(" 或 "),t("code",[a._v("wv2ray.exe")]),a._v(" 进程，右键点击进程名称，"),t("code",[a._v("结束任务")]),a._v("、"),t("code",[a._v("结束进程")]),a._v(" 即可。"),t("s",[a._v("科学严谨 XD")])])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("方法 2")]),a._v("：打开 "),t("code",[a._v("cmd")]),a._v(" 或 "),t("code",[a._v("powershell")]),a._v("，执行如下命令：")])])])])]),a._v(" "),t("div",{staticClass:"language-cmd extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("taskkill /f /im v2ray.exe\ntaskkill /f /im wv2ray.exe\n")])])]),t("p",[a._v("或")]),a._v(" "),t("div",{staticClass:"language-pwsh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('Stop-Process -Name "v2ray"; Stop-Process -Name "wv2ray"\n')])])]),t("ul",[t("li",[t("p",[t("strong",[a._v("解决方案（Linux 系统）")]),a._v("："),t("s",[a._v("你都用 Linux 了……还不会杀进程吗？")])]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("方法 1")]),a._v("：通过系统监视器应用来终止 "),t("code",[a._v("v2ray")]),a._v(" 进程，由于 Linux 下有多种桌面环境，每一个桌面环境自带的系统监视器有可能不是同一个软件，因此具体操作需要你自己探索。")]),a._v(" "),t("li",[t("strong",[a._v("方法 2")]),a._v("：通过 "),t("code",[a._v("ps aux | grep v2ray")]),a._v(" 找到进程号，再用 "),t("code",[a._v("kill -9 <进程号>")]),a._v(" 结束进程。")])])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("解决方案 (macOS 系统)")]),a._v("：")]),a._v(" "),t("ul",[t("li",[t("p",[t("strong",[a._v("方法 1")]),a._v("：打开活动监视器，找到 "),t("code",[a._v("v2ray")]),a._v(" 进程，然后终止。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("方法 2")]),a._v("：参照 Linux 系统的"),t("strong",[a._v("方法 2")]),a._v(" 解决方案。")])])])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("原因 2")]),a._v("：Qv2ray 中设定的相关端口已被其他软件占用。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("解决方案")]),a._v("：变更 Qv2ray 或其他软件的端口设置。")])])]),a._v(" "),t("h3",{attrs:{id:"_2-提示-an-attempt-was-made-to-access-a-socket-in-a-way-forbidden-by-its-access-permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-提示-an-attempt-was-made-to-access-a-socket-in-a-way-forbidden-by-its-access-permissions"}},[a._v("#")]),a._v(" 2. 提示 "),t("code",[a._v("An attempt was made to access a socket in a way forbidden by its access permissions.")])]),a._v(" "),t("ul",[t("li",[t("p",[t("strong",[a._v("原因")]),a._v("：如果你使用的是 Windows 系统，那么应该是某个 Windows 补丁将端口号在 "),t("code",[a._v("1000-2000")]),a._v(" 之间的某段端口设了为特权/保留端口。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("解决方案")]),a._v("：更换为大于 "),t("code",[a._v("2000")]),a._v(" 的端口号即可。")])])]),a._v(" "),t("h3",{attrs:{id:"_3-开启-tproxy-之后-v2ray-core-会启动失败"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-开启-tproxy-之后-v2ray-core-会启动失败"}},[a._v("#")]),a._v(" 3. 开启 tProxy 之后，V2ray Core 会启动失败")]),a._v(" "),t("ul",[t("li",[t("p",[t("strong",[a._v("细节")]),a._v("：开启 tProxy 后，会提示 "),t("code",[a._v("Segmentation Fault（段错误）")]),a._v("。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("原因")]),a._v("：这个问题是一些 Linux 系统的 "),t("code",[a._v("SUID")]),a._v(" 特性受限制所导致的。详细的错误分析请参阅 "),t("a",{attrs:{href:"https://github.com/lhy0403/Qv2ray/issues/59",target:"_blank",rel:"noopener noreferrer"}},[a._v("#59"),t("OutboundLink")],1),a._v("。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("解决方案")]),a._v("："),t("code",[a._v("sudo sysctl fs.suid_dumpable=1")]),t("br"),a._v("\n这个解决方案会在重启后失效。如果你希望保持这个选项，请参阅 "),t("a",{attrs:{href:"http://ssdxiao.github.io/linux/2017/03/20/Sysctl-not-applay-on-boot.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("这里"),t("OutboundLink")],1),a._v("。")])])]),a._v(" "),t("h3",{attrs:{id:"_4-内核报错-255"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-内核报错-255"}},[a._v("#")]),a._v(" 4. 内核报错 "),t("code",[a._v("255")])]),a._v(" "),t("ul",[t("li",[t("p",[t("strong",[a._v("原因")]),a._v("：V2Ray 核心没有"),t("strong",[a._v("运行")]),a._v("权限，这一问题发生在 POSIX 系统（Linux、macOS）上。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("解决方案")]),a._v("：在 V2Ray 核心目录中 执行 "),t("code",[a._v("chmod +x v2ray && chmod +x v2ctl")]),a._v("，或通过文件管理器给予运行权限。在 macOS 下可以直接双击这两个程序，系统会自动提示是否运行 UNIX 程序，选择“运行”即可给予其运行权限。")])])]),a._v(" "),t("h2",{attrs:{id:"严重故障"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#严重故障"}},[a._v("#")]),a._v(" 严重故障")]),a._v(" "),t("h3",{attrs:{id:"_1-不能执行-appimage-权限不够-cannot-execute-appimage-permission-denied"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-不能执行-appimage-权限不够-cannot-execute-appimage-permission-denied"}},[a._v("#")]),a._v(" 1. 不能执行 AppImage: 权限不够（Cannot execute AppImage: Permission denied）")]),a._v(" "),t("ul",[t("li",[t("p",[t("strong",[a._v("原因")]),a._v("：……在执行一个程序之前，必须给予它可执行权限。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("解决方案")]),a._v("："),t("code",[a._v("chmod +x Qv2ray.AppImage")])])])]),a._v(" "),t("h2",{attrs:{id:"连接问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#连接问题"}},[a._v("#")]),a._v(" 连接问题")]),a._v(" "),t("h3",{attrs:{id:"_1-已确认设置正确但无法连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-已确认设置正确但无法连接"}},[a._v("#")]),a._v(" 1. 已确认设置正确但无法连接")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("可能原因")]),a._v("：系统时间不同步。如果你使用了 VMess 协议，通信双方的系统时间要求相差在 90 秒以内，否则会拒绝连接。")]),a._v(" "),t("li",[t("strong",[a._v("解决方案（Windows）")]),a._v("：\n"),t("ul",[t("li",[t("strong",[a._v("方法一")]),a._v("：打开设置，选择“时间和语言”，然后启用“自动设置时间”选项即可。如果选项已启用，请点击”立即同步“按钮。")]),a._v(" "),t("li",[t("strong",[a._v("方法二")]),a._v("：打开控制面板，切换查看方式为“类别”，选择“时钟和区域”，点击  “日期和时间”，在弹出的对话框中选择“Internet 时间”，点击“更改设置”按钮，再勾选“与 Internet 时间服务器同步”，最后点击“确认”。")])])]),a._v(" "),t("li",[t("strong",[a._v("解决方案（Linux）")]),a._v("：\n"),t("ul",[t("li",[t("strong",[a._v("方法一")]),a._v("：使用 "),t("code",[a._v("systemd-timesyncd")]),a._v("，执行 "),t("code",[a._v("sudo systemctl enable systemd-timesyncd --now")]),a._v("。")]),a._v(" "),t("li",[t("strong",[a._v("方法二")]),a._v("：使用 "),t("a",{attrs:{href:"https://www.chrony.tuxfamily.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("Chrony"),t("OutboundLink")],1),a._v(" 同步时间。")])])]),a._v(" "),t("li",[t("strong",[a._v("解决方案（macOS）")]),a._v("：打开系统偏好设置，点击“日期与时间”，在“日期与时间”标签页下启用“自动设置日期与时间”。")])]),a._v(" "),t("h3",{attrs:{id:"_2-为什么我在百度查询到的-ip-仍然在国内"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么我在百度查询到的-ip-仍然在国内"}},[a._v("#")]),a._v(" 2. 为什么我在百度查询到的 IP 仍然在国内？")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("原因")]),a._v(" Qv2ray 默认设置为不代理国内流量。")]),a._v(" "),t("li",[t("strong",[a._v("解决方案")]),a._v("：使用国外网站查询 IP（如在 Google 搜索 "),t("code",[a._v("What is my IP")]),a._v(" 或访问 "),t("a",{attrs:{href:"https://ip.sb/",target:"_blank",rel:"noopener noreferrer"}},[a._v("ip.sb"),t("OutboundLink")],1),a._v("），或带有多个测试点的网站查询 IP（如访问 "),t("a",{attrs:{href:"https://www.ip111.cn/",target:"_blank",rel:"noopener noreferrer"}},[a._v("ip111.cn"),t("OutboundLink")],1),a._v(" 或 "),t("a",{attrs:{href:"https://ip.skk.moe/",target:"_blank",rel:"noopener noreferrer"}},[a._v("ip.skk.moe"),t("OutboundLink")],1),a._v("。）")])]),a._v(" "),t("h3",{attrs:{id:"_3-我想要代理国内流量-全局代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-我想要代理国内流量-全局代理"}},[a._v("#")]),a._v(" 3. 我想要代理国内流量（全局代理）")]),a._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/getting-started/step5.html#调整路由方案"}},[t("strong",[a._v("解决方案")])])],1)]),a._v(" "),t("h3",{attrs:{id:"_4-linux-设置了透明代理-redirect-tproxy-为什么不能使用-提示-failed-to-set-ip-transparent-operation-not-permitted"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-linux-设置了透明代理-redirect-tproxy-为什么不能使用-提示-failed-to-set-ip-transparent-operation-not-permitted"}},[a._v("#")]),a._v(" 4. Linux 设置了透明代理 (Redirect, tProxy)，为什么不能使用 (提示 failed to set IP_TRANSPARENT > operation not permitted)？")]),a._v(" "),t("ul",[t("li",[t("p",[t("strong",[a._v("原因：")]),a._v(" 由 V2Ray 脚本安装的服务会在启动时添加 "),t("code",[a._v("cap_net_admin")]),a._v(" 权限，但 Qv2ray 默认调用的 V2Ray 程序本身并未设定包含该权限。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("解决方案：")]),a._v(" Arch 用户，请以管理员 (root / sudo) 权限执行 "),t("code",[a._v('/usr/bin/setcap "cap_net_bind_service=+ep cap_net_admin=+ep" /usr/bin/v2ray')]),a._v(" 或 使用 "),t("code",[a._v("@DuckSoft")]),a._v(" 构建的 "),t("a",{attrs:{href:"https://aur.archlinux.org/packages/v2ray-cap-git/",target:"_blank",rel:"noopener noreferrer"}},[a._v("aur/v2ray-cap-git"),t("OutboundLink")],1),a._v(" ; Fedora 32+ / RHEL 8+ 用户，可以使用 "),t("code",[a._v("@sixg0000d")]),a._v(" 构建的 "),t("a",{attrs:{href:"https://copr.fedorainfracloud.org/coprs/sixg0000d/v2ray/",target:"_blank",rel:"noopener noreferrer"}},[a._v("v2ray-cap"),t("OutboundLink")],1),a._v(" ; 其他 Linux 用户请自行查找 V2Ray 真实绝对路径并替换上文命令中的 "),t("code",[a._v("/usr/bin/v2ray")]),a._v("。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("解决方案：")])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("对于所有 Linux 发行版，请以管理员 (root / sudo) 权限执行以下命令：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("/usr/bin/setcap "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"cap_net_bind_service=+ep cap_net_admin=+ep"')]),a._v(" /usr/bin/v2ray\n")])])]),t("p",[a._v("这是大多数包管理 V2Ray 的安装位置，如若不是（比如通过脚本安装 V2Ray ），请自行查找 V2Ray 真实绝对路径并替换上文命令中的 "),t("code",[a._v("/usr/bin/v2ray")]),a._v("。")])]),a._v(" "),t("li",[t("p",[a._v("对于 Arch 用户："),t("br"),a._v("\n您也可以使用 "),t("code",[a._v("@DuckSoft")]),a._v(" 构建的 "),t("code",[a._v("[aur/v2ray-cap-git](https://aur.archlinux.org/packages/v2ray-cap-git/)")]),a._v(" 来自动化该操作。")])]),a._v(" "),t("li",[t("p",[a._v("对于 Fedora 32+ / RHEL 8+ 用户："),t("br"),a._v("\n如果您是通过 dnf / yum 将 V2Ray 二进制文件安装到 "),t("code",[a._v("/usr/bin/v2ray")]),a._v("，您也可以使用 "),t("code",[a._v("@sixg0000d")]),a._v(" 打包的 "),t("code",[a._v("[v2ray-cap](https://copr.fedorainfracloud.org/coprs/sixg0000d/v2ray/)")]),a._v(" 来自动化该操作。")])])])])]),a._v(" "),t("h3",{attrs:{id:"_5-如何设置拨号连接的代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-如何设置拨号连接的代理"}},[a._v("#")]),a._v(" 5. 如何设置拨号连接的代理？")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/issues/873#issuecomment-680128054",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[a._v("解决方案")]),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"性能问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#性能问题"}},[a._v("#")]),a._v(" 性能问题")]),a._v(" "),t("h3",{attrs:{id:"_1-感觉-qv2ray-打开网页-切换连接的速度比其他代理软件慢得多"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-感觉-qv2ray-打开网页-切换连接的速度比其他代理软件慢得多"}},[a._v("#")]),a._v(" 1. 感觉 Qv2ray 打开网页/切换连接的速度比其他代理软件慢得多")]),a._v(" "),t("ul",[t("li",[t("p",[t("strong",[a._v("原因")]),a._v("：Qv2ray 默认开启的 "),t("code",[a._v("V2Ray 集成")]),a._v(" 会让由插件提供支持的协议（如 SSR、Trojan）的流量完整地通过一遍 "),t("RouterLink",{attrs:{to:"/plugins/v2ray-integration.html"}},[a._v("V2Ray 路由")]),a._v("，以实现高级路由功能，但"),t("s",[a._v("在低配设备上")]),a._v("会导致延迟明显增大。")],1)]),a._v(" "),t("li",[t("p",[t("strong",[a._v("解决方案")]),a._v("：在 "),t("code",[a._v("首选项")]),a._v(" 的 "),t("code",[a._v("内核设置")]),a._v(" 选项卡中关闭 "),t("code",[a._v("V2Ray 集成")]),a._v(" 可以提升由插件提供支持的协议的响应速度，但相关协议将会失去 "),t("code",[a._v("高级路由")]),a._v("、"),t("code",[a._v("绕过中国大陆")]),a._v("、"),t("code",[a._v("本地地址直连")]),a._v(" 和 "),t("code",[a._v("自定义DNS")]),a._v(" 功能，这意味着相关协议的路由/分流功能将完全失效，即只能全局代理，无法分流。请注意，该选项不影响由 V2Ray 内核提供支持的协议（如VMess）。也就是说，如果你仅使用由 V2Ray 内核提供支持的协议，开关该功能不会有任何影响。")])]),a._v(" "),t("li",[t("p",[a._v("此外，在杀毒软件"),t("s",[a._v("尤其是 Microsoft Defender")]),a._v(" 中将 V2Ray 核心设置为白名单程序，也可能会提升响应速度。"),t("s",[a._v("未经科学验证的玄学")])])])]),a._v(" "),t("h2",{attrs:{id:"软件行为-外观问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软件行为-外观问题"}},[a._v("#")]),a._v(" 软件行为 / 外观问题")]),a._v(" "),t("h3",{attrs:{id:"_1-qv2ray-在-gnome-上没有托盘图标或者托盘图标会偶尔消失"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-qv2ray-在-gnome-上没有托盘图标或者托盘图标会偶尔消失"}},[a._v("#")]),a._v(" 1. Qv2ray 在 GNOME 上没有托盘图标或者托盘图标会偶尔消失")]),a._v(" "),t("ul",[t("li",[t("p",[t("strong",[a._v("原因")]),a._v("：这一点已经确认了是上游的 bug。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("解决方案")]),a._v("：Gnome 官方不支持托盘图标，所有的托盘图标现实都来自下游发行版或者第三方开发者的扩展。作为权宜之计，你可以运行这条命令：")])])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("nohup")]),a._v(" gnome-shell --replace "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])])]),t("p",[a._v("或者，你可以试着重启 Qv2ray。")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("给 Gnome 用户的建议")]),a._v(" "),t("p",[a._v("原生的 Gnome 桌面不会显示通知区托盘图标，Qv2ray 的图标也会无法显示。如果要显示通知区图标，您可以安装 "),t("a",{attrs:{href:"https://github.com/ubuntu/gnome-shell-extension-appindicator",target:"_blank",rel:"noopener noreferrer"}},[t("code",[a._v("gnome-shell-extension-appindicator")]),t("OutboundLink")],1),a._v("（ 也叫做 "),t("code",[a._v("ubuntu-appindicator")]),a._v("）这个 Gnome 扩展，然后注销、重新登录，接着在 "),t("code",[a._v("优化")]),a._v(" 应用（即 "),t("code",[a._v("gnome-tweaks")]),a._v(" ）启用它，之后就可以看到通知区托盘图标了。")])]),a._v(" "),t("ul",[t("li",[t("s",[a._v("最后插一嘴，KDE Plasma 真香。")])])]),a._v(" "),t("h3",{attrs:{id:"_2-ubuntu-启动-qv2ray-后会显示一个非常难看的界面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-ubuntu-启动-qv2ray-后会显示一个非常难看的界面"}},[a._v("#")]),a._v(" 2. Ubuntu 启动 Qv2ray 后会显示一个非常难看的界面")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("解决方案")]),a._v("：启动 Qv2ray 时添加 "),t("code",[a._v("--style fusion")]),a._v(" 参数可能会解决这个问题。")])]),a._v(" "),t("h3",{attrs:{id:"_3-小屏-windows-设备上-qv2ray-的界面显得特别大"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-小屏-windows-设备上-qv2ray-的界面显得特别大"}},[a._v("#")]),a._v(" 3. 小屏 Windows 设备上 Qv2ray 的界面显得特别大")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("原因")]),a._v("：低分屏设备上开启了非整比例缩放，导致 Qt 二次缩放后产生界面失真。")]),a._v(" "),t("li",[t("strong",[a._v("解决方案")]),a._v("：启动 Qv2ray 时添加 "),t("code",[a._v("--noScaleFactor")]),a._v(" 参数即可解决。")])]),a._v(" "),t("h3",{attrs:{id:"_4-macos-频繁要求将-qv2ray-qv2ray-插件-移到废纸篓"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-macos-频繁要求将-qv2ray-qv2ray-插件-移到废纸篓"}},[a._v("#")]),a._v(" 4. macOS 频繁要求将 Qv2ray / Qv2ray 插件“移到废纸篓”")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("原因")]),a._v("：开发组在没有 macOS 设备的前提下，恕难自掏腰包"),t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/104912328",target:"_blank",rel:"noopener noreferrer"}},[a._v("实名登记"),t("OutboundLink")],1),a._v("后对 Qv2ray 及 Qv2ray 所有插件进行签名，并交给苹果公司逐一"),t("a",{attrs:{href:"https://krita.org/zh/item/first-notarized-macos-build-of-krita-zh/",target:"_blank",rel:"noopener noreferrer"}},[a._v("检证"),t("OutboundLink")],1),a._v("后发布。")]),a._v(" "),t("li",[t("strong",[a._v("解决方案")]),a._v("：（仅适用于高级用户）\n"),t("ul",[t("li",[a._v("本体："),t("code",[a._v("sudo xattr -rd com.apple.quarantine /Applications/qv2ray.app")])]),a._v(" "),t("li",[a._v("插件：同上，将目录换为插件目录即可。")])])])]),a._v(" "),t("h3",{attrs:{id:"_5-我怎么找不到-qv2ray-的-伪装域名-在哪儿"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-我怎么找不到-qv2ray-的-伪装域名-在哪儿"}},[a._v("#")]),a._v(" 5. 我怎么找不到 Qv2ray 的“伪装域名”在哪儿？")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("原因")]),a._v("：v2rayN 自造概念，V2Ray 核心 / Qv2ray 均无此概念，找不到很正常。")]),a._v(" "),t("li",[t("strong",[a._v("解决方案")]),a._v("：本质是 HTTP 请求头，在 Qv2ray 的 "),t("strong",[a._v("流设置")]),a._v("——"),t("strong",[a._v("请求头")]),a._v(" 中按 "),t("code",[a._v("Host|example.com")]),a._v(" 格式正确填写一行即可，仅此而已。")])]),a._v(" "),t("h2",{attrs:{id:"其他问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他问题"}},[a._v("#")]),a._v(" 其他问题")]),a._v(" "),t("h3",{attrs:{id:"_1-为什么-qv2ray-不打包插件和-v2ray-核心或是内置下载功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么-qv2ray-不打包插件和-v2ray-核心或是内置下载功能"}},[a._v("#")]),a._v(" 1. 为什么 Qv2ray 不打包插件和 V2Ray 核心或是内置下载功能？")]),a._v(" "),t("p",[a._v("我们希望我们的用户能够了解软件的工作原理，同时拥有优秀的动手能力来解决可能存在的问题和需求。如果 Qv2ray 不适合您，您可以使用其他软件。")]),a._v(" "),t("h3",{attrs:{id:"_2-qv2ray-会推出移动平台-android、ios-版本吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-qv2ray-会推出移动平台-android、ios-版本吗"}},[a._v("#")]),a._v(" 2. Qv2ray 会推出移动平台（Android、iOS）版本吗？")]),a._v(" "),t("p",[a._v("目前没有计划。根据开发者的意愿，当程序迁移到 QML 的时候"),t("strong",[a._v("也许")]),a._v("会有。")])])}),[],!1,null,null,null);r.default=e.exports}}]);