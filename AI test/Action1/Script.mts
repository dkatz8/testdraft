Browser("Home - Advantage Bank_2").Page("Home - Advantage Bank").Sync
Browser("Home - Advantage Bank_2").Navigate "https://aadvantageonlinebanking.com/" @@ hightlight id_;_5185452_;_script infofile_;_ZIP::ssf41.xml_;_
If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("login").Exist Then @@ script infofile_;_ZIP::ssf4.xml_;_
AIUtil("button", "").Click
AIUtil.SetContext Window("regexpwndclass:=Shell_TrayWnd", "is owned window:=False", "is child window:=False")
AIUtil("copy").Click
AIUtil("button", "", micFromLeft, 1).Click
AIUtil.SetContext Window("regexpwndtitle:=Program Manager", "regexpwndclass:=Progman", "is owned window:=False", "is child window:=False")
Browser("Home - Advantage Bank_2").Page("Home - Advantage Bank").Sync
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set "dede_se" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").SetSecure "68f62e884b3792d1bdcbf2226c59c17d0fa86c57e440" @@ script infofile_;_ZIP::ssf3.xml_;_
AIUtil("button", "").Click

