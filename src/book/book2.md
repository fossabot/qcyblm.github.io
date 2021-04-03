# Git 常用命令速查表
## 创建版本库
- 克隆远程版本库
``` sh
git clone <url>
```
- 初始化本地版本库
``` sh
git init
```
## 修改和提交
- 查看状态
``` sh
git status
```
- 查看变更内容
``` sh
git diff
```
- 跟踪所有改动过的文件
``` sh
git add .
```
- 跟踪指定的文件
``` sh
git add <file>
```
- 文件改名
``` sh
git mv <old> <new>
```
- 删除文件
``` sh
git rm <file>
```
- 停止跟踪文件但不删除
``` sh
git rm --cached <file>
```
- 提交所有更新过的文件
``` sh
git commit -m "commit message"
```
- 修改最后一次提交
``` sh
git commit --amend 
```
## 查看提交历史
- 查看提交历史
``` sh
git log
```
- 查看指定文件的提交历史
``` sh
git log -p <file>
```
- 以列表方式查看指定文件的提交历史
``` sh
git blame <file>
```
## 撤消
- 撤消工作目录中所有未提交文件的修改内容
``` sh
git reset --hard HEAD
```
- 撤消指定的未提交文件的修改内容
``` sh
git checkout HEAD <file>
```
- 撤消指定的提交
``` sh
git revert <commit>
```
## 分支与标签
- 显示所有本地分支
``` sh
git branch
```
- 切换到指定分支或标签
``` sh
git checkout <branch/tag>
```
- 创建新分支
``` sh
git branch <new- branch>
```
- 删除本地分支
``` sh
git branch -d <branch>
```
- 列出所有本地标签
``` sh
git tag
```
- 基于最新提交创建标签
``` sh
git tag <tagname>
```
- 删除标签
``` sh
git tag -d <tagname>
```
## 合并与衍合
- 合并指定分支到当前分支
``` sh
git merge <branch>
```
- 衍合指定分支到当前分支
``` sh
git rebase <branch>
```
## 远程操作
- 查看远程版本库信息
``` sh
git remote -V
```
- 查看指定远程版本库信息
``` sh
git remote show <remote>
```
- 添加远程版本库
``` sh
git remote add <remote> <url>
```
- 从远程库获取代码
``` sh
git fetch <remote>
```
- 下载代码及快速合并
``` sh
git pull <remote> <branch>
```
- 上传代码及快速合并
``` sh
git push <remote> <branch>
```
- 删除远程分支或标签
``` sh
git push <remote> : <branch/tag-name>
```
- 上传所有标签
``` sh
git push --tags
```