# 修改环境变量添加nginx执行文件路径
$env:NGINX_HOME="D:\develop\server\nginx-1.24.0"
$env:Path=$env:NGINX_HOME+";"+$env:Path