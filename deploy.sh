set -e
yarn
git add .
git commit -S -m 'Update documents.'
git push
yarn build
cd src/.vuepress/dist
git init
git config user.name 'qcyblm'
git config user.email '8064994+qcyblm@user.noreply.gitee.com'
git add -A
git commit -m "deploy: $(date +"%Y年%m月%d日 %T %Z")"
git push -f git@gitee.com:qcyblm/qcyblm.git master:gh-pages
cd -