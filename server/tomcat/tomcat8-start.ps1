$dir=Get-Location
..\..\java\java-home.ps1
.\tomcat-home.ps1
cd $env:TOMCAT8_HOME\bin
& .\startup.bat
cd $dir