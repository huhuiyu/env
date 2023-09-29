# 创建必须的logs和temp文件夹
$dir = ".\logs\"
if( Test-Path $dir ){
  Write-Output "$dir has exists"
} else {
  mkdir $dir
}

$dir = ".\temp\"
if( Test-Path $dir ){
  Write-Output "$dir has exists"
} else {
  mkdir $dir
}

# 启动nginx服务
..\nginx-home.ps1
nginx -c ./nginx.conf