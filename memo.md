### react-pdf

#### PDFファイル表示

- https://github.com/wojtekmaj/react-pdf/blob/v9.x/packages/react-pdf/README.md
- v9でないとエラー出る
  - https://github.com/wojtekmaj/react-pdf/issues/2039

#### PDFファイル生成

- https://zenn.dev/ksk2/articles/c0cf38b8ba61ec
- useEffectとuseStateで描画タイミングをコントロールする必要があった
  - https://github.com/diegomura/react-pdf/issues/2599
- propsなどでPDFコンポーネントに値を渡せば、フォーム入力内容を反映するなどの操作もできる

### cleave.js

- react-hook-formとの連携はControllerを介して行う

### console

- https://dev.classmethod.jp/articles/console-log-css/
- https://qiita.com/S4nTo/items/453b5e6ee933765211ec

### log4js

- log levelの意味
  - debug：開発中だけ使う
  - info：正常系の流れ
  - warn：想定内だけど怪しい
  - error：例外・障害
- https://zenn.dev/shouta0715/articles/6823ea33cd3778
- bash: `LOGGER_ENV=production npm run dev`
- powershell: `$env:LOGGER_ENV="production"; npm run dev`
