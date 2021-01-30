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
git config user.name 'qcyblm'
git config user.email '8064994+qcyblm@user.noreply.gitee.com'
rm -rf *
cp -a ../dist gh-pages
git add -A
git commit -m "deploy: $(date +"%Y年%m月%d日 %T %:z")"
git push origin gh-pages
cd ../
rm -rf gh-pages
cd -