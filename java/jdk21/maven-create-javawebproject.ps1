..\maven-home.ps1
.\java-home.ps1
Set-Location .\test\
$dir = ".\javawebproject\"
if( Test-Path $dir ){
    Remove-Item -Force -Recurse $dir
}
mkdir $dir
mvn archetype:generate -s ..\..\maven-settings.xml "-DgroupId=top.huhuiyu.projects.webdemo" "-DartifactId=javawebproject" "-DarchetypeArtifactId=maven-archetype-webapp" "-DarchetypeVersion=1.4" "-DinteractiveMode=false"
Set-Location ..\