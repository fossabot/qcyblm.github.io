set -e
yarn
git add .
git commit -S -m 'Update documents.'
git push
yarn build
cd src/.vuepress/dist
git init -b master
git config user.name 'qcyblm'
git config user.email '8064994+qcyblm@user.noreply.gitee.com'
git add -A
git commit -m "deploy: $(TZ="Asia/Shanghai" date +"%Y-%m-%d %T %Z")"
git push -f git@gitee.com:qcyblm/qcyblm.git master:gh-pages
cd -