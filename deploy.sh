set -e
yarn
git add .
git commit -S -m 'Update documents.'
yarn build
cd src/.vuepress/dist
git init -b master
git add -A
git commit -S -m "deploy: $(TZ="Asia/Shanghai" date +"%Y-%m-%d %T %Z")"
git push -f $giteeUrl master:gh-pages
cd -