# 修改环境变量添加nginx执行文件路径
$env:NGINX_HOME="D:\develop\env\server\nginx"
$env:Path=$env:NGINX_HOME+";"+$env:Path