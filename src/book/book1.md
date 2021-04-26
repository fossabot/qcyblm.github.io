# npm yarn 修改全局安装路径、缓存路径和更换镜像源

## npm 的安装路径、缓存路径和更换镜像源

### 查看各种路径命令

- 查看当前 npm 包的全局安装路径

```sh
npm prefix -g
```

- 查看配置列表

```sh
npm config ls
```

### 修改路径命令

- 修改 npm 的包的全局安装路径

```sh
npm config set prefix "<fill>"
```

- 修改 npm 的包的全局 cache 位置

```sh
npm config set cache "<fill>"
```

### 修改镜像源命令

- 查看 npm 当前镜像源

```sh
npm config get registry
```

- 改变 npm 镜像源

```sh
npm config set registry "<url>"
```

## yarn 的安装路径、缓存路径和更换镜像源

### 查看各种路径命令

- 查看 yarn 全局 bin 位置

```sh
yarn global bin
```

- 查看 yarn 全局安装位置

```sh
yarn global dir
```

- 查看 yarn 全局 cache 位置

```sh
yarn cache dir
```

### 修改路径命令

- 改变 yarn 全局 bin 位置

```sh
yarn config set prefix "<fill>"
```

- 改变 yarn 全局安装位置

```sh
yarn config  set global-folder "<fill>"
```

- 改变 yarn 全局 cache 位置

```sh
yarn config set cache-folder "<fill>"
```

- 改变 yarn 全局 link 位置

```sh
yarn config set link-folder "<fill>"
```

### 修改镜像源命令

- 查看 yarn 当前镜像源

```sh
yarn config get registry
```

- 改变 yarn 镜像源

```sh
yarn config set registry "<url>"
```
