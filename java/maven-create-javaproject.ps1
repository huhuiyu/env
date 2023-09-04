cd .\test\
Remove-Item -Force -Recurse .\javaproject\
mvn archetype:generate -s ..\maven-settings.xml "-DgroupId=top.huhuiyu.projects.demo" "-DartifactId=javaproject" "-DarchetypeArtifactId=maven-archetype-quickstart" "-DarchetypeVersion=1.4" "-DinteractiveMode=false"
cd ..\