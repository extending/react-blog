rm -rf build
npm run build
scp -r build/* root@81.69.245.94:/usr/local/src/front-end/
