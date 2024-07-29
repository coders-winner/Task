#!/usr/bin/env sh
# abort on errors 
set -e 

# build 

echo Building. this may take a minute... 
npm run build 
# переход в каталог сборки
cd dist
# if you are deploying to a custom domain add a CNAME (uncomment the next 3 lines) 
#cd docs 
# echo 'yourcustomdomain.com' > CNAME 
#cd - 

# deploy 
echo Deploying.. 
git init
git add -A 
git commit -m 'deploy' 
git push -f https://github.com/coders-winner/Task.git master:gh-pages

cd -