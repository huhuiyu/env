# 创建必须的logs和temp文件夹
$dir = ".\logs\"
if( Test-Path $dir ){
  echo $dir' has exists'
} else {
  md $dir
}

$dir = ".\temp\"
if( Test-Path $dir ){
  echo $dir' has exists'
} else {
  md $dir
}

# 启动nginx服务
..\nginx-home.ps1
nginx -t -c ./nginx.conf