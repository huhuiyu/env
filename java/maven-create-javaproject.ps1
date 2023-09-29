.\java-home.ps1
.\maven-home.ps1
Set-Location .\test\
$dir = ".\javaproject\"
if( Test-Path $dir ){
    Remove-Item -Force -Recurse $dir
}
mkdir $dir
mvn archetype:generate -s ..\maven-settings.xml "-DgroupId=top.huhuiyu.projects.demo" "-DartifactId=javaproject" "-DarchetypeArtifactId=maven-archetype-quickstart" "-DarchetypeVersion=1.4" "-DinteractiveMode=false"
Set-Location ..\