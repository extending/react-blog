rm -rf build
npm run build
scp -r build/* root@121.196.186.149:/home/wwwroot/default
