
```shell

 

cd /tmp/test/rainbowfish/dist/

rm -rf /usr/share/nginx/html/dist/*



cp -r /usr/share/nginx/html/dist/ /usr/share/nginx/html/dist_bk
mv * /usr/share/nginx/html/dist/
 cd /usr/share/nginx/html/dist/
```

### 备份

```shell

cd /usr/share/nginx/html/dist/

rm -rf /usr/share/nginx/html/dist_bk/*


```

```shell
ssh -p 22500 root@122.51.228.168

su caosiwei

cd /home/caosiwei/project/rainbowfish


git pull origin master

npm i

npm run build

sudo rm -rf /usr/share/nginx/html/dist/*

sudo mv -f dist/* /usr/share/nginx/html/dist

```
