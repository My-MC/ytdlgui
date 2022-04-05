# ytdlgui

このソフトウェアはJavaScriptで開発されたReactフレームワークの[Next.js](https://nextjs.org)と[Electron](https://www.electronjs.org)によって開発されています。

## Developing

まずこのソフトウェアは起動時に`main/index.js`を実行し、プロセスを起動します。GUIに表示されるソースは`render`フォルダです。これはNext.jsを使って書いています。そのため開発にはNode.js環境、Yarn環境が必要です。

### Setup

まずこのプロジェクトの開発に入る前に必要なパッケージをインストールするため以下のコマンドをターミナルから実行します。

``` bash
yarn install
```

### Coding

アプリケーションを起動しながらコーディングをする場合は以下のコマンドをターミナルから実行してから行います。

``` bash
yarn run start
# or
yarn start
```

### Build

このアプリケーションをビルドする場合は以下のコマンドをターミナルから実行します。

```bash
yarn run dist
# or
yarn dist
```

### Docker

開発にはネイティブ環境を使うことをお勧めしますが、ビルド時などで環境がない場合、Dockerコンテナを使い、コンテナ上でビルドをすることができます。これはDockerの知識がある程度ある方向けです。

``` bash
docker build --progress=plain -t ytdlgui .
docker create --name ytdlgui -it ytdlgui
docker start ytdlgui
```
