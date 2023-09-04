cd .\test\
Remove-Item -Force -Recurse .\javawebproject\
mvn archetype:generate -s ..\maven-settings.xml "-DgroupId=top.huhuiyu.projects.webdemo" "-DartifactId=javawebproject" "-DarchetypeArtifactId=maven-archetype-webapp" "-DarchetypeVersion=1.4" "-DinteractiveMode=false"
cd ..\