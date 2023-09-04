$dir=Get-Location
..\..\java\java-home.ps1
.\tomcat-home.ps1
cd $env:TOMCAT10_HOME\bin
& .\shutdown.bat
cd $dir