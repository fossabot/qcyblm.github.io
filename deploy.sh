set -e
yarn
git add .
read -p "Commits: " commit
git commit -S -m "$commit"
git push
yarn build
cd src/.vuepress
rm -rf gh-pages
git clone -q --depth=1 -b gh-pages git@gitee.com:qcyblm/qcyblm.git gh-pages
cd gh-pages
git config user.name $name
git config user.email $email
rm -rf *
cp -a ../dist/* .
git add -A
git commit -m "deploy: $(date +"%Y年%m月%d日 %T %:z")"
git push origin gh-pages
cd ../
rm -rf gh-pages