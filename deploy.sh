#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn
echo "module.exports={clientId: '${VSSUE_CLIENTID}',clientSecret: '${VSSUE_CLIENTSECRET}'}" > src/.vuepress/secret.js
yarn build

# 进入生成的文件夹
cd src/.vuepress/dist

# Deploy to GitHub
if [ -z "$TOKEN" ]; then
  msg='deploy'
  giteeUrl=git@gitee.com:qcyblm/qcyblm.git
else
  msg='来自Gitee Go的自动部署'
  giteeUrl=https://qcyblm:${TOKEN}@gitee.com/qcyblm/qcyblm.git # 使用Gitee Go
  git config --global user.name "qcyblm"
  git config --global user.email "qcyblm@163.com"
fi
git init
git add -A
git commit -m "${msg}：$(TZ="Asia/Shanghai" date +"%Y-%m-%d %T %Z")"
git push -f $giteeUrl master:gh-pages # 推送到gitee

cd -