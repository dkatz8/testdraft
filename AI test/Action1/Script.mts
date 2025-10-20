Browser("Home - Advantage Bank_2").Page("Home - Advantage Bank").Sync
Browser("Home - Advantage Bank_2").Navigate "https://aadvantageonlinebanking.com/" @@ script infofile_;_ZIP::ssf4.xml_;_
AIUtil("button", "").Click
AIUtil.SetContext Window("regexpwndclass:=Shell_TrayWnd", "is owned window:=False", "is child window:=False")
AIUtil("copy").Click
AIUtil("button", "", micFromLeft, 1).Click

