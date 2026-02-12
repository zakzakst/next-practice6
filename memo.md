### threejs

- https://threejs-journey.com/
- https://qiita.com/nemutas/items/d2d738749184a7a42f1d
- https://ics.media/entry/250410/

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
- ImageはSVGと外部画像が上手く表示できなかった

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

### GitHub Copilot SDK

- 下記を参考に試したが、上手くいかなかった。copilotの認証・ライセンスが関わっている？
  - https://rutla.jp/blog/8544/
  - https://github.com/github/copilot-sdk/blob/main/docs/getting-started.md
- 利用にはGitHub Copilotサブスクリプションまたは開発者自身のAPIキーが必要
  - https://138io.com/archives/9081

### simple-git

- https://www.npmjs.com/package/simple-git
- 残作業
  - テンプレートファイルを読み込んで所定の箇所にdiffの情報を流し込む
    - ⇒ プロンプトを出力するのでなく、diffを出力し、それをcopilot側で読み込んでもらう方針に変更
  - テンプレートファイルをコマンドラインのオプションで指定できるようにする
    - ⇒ copilot側でファイル読み込み後の処理を変えたpromptを用意する方針に変更
  - 出力対象外のファイル（package-lock.json など）を指定できるようにする
    - ⇒ copilot側でファイル読み込み後の処理を変えたpromptを用意する方針に変更
  - 出力ファイルの先をvscodeのcopilot連携できるディレクトリに変更する
    - ⇒ プロンプトを出力するのでなく、diffを出力し、それをcopilot側で読み込んでもらう方針に変更

### .github/prompts,agents,workflows

```
GitHub Copilot の思想は
Prompt → Agent → Workflow
つまり：
- 人間が目的を書く（Prompt）
- Agent がそれを理解して
- Workflow に沿って実行する
という三層構造です。
```

- コードレビュー（番人）とコードレビュー（教師）
  - エラーなどを検出する用のコードレビューと成長機会としてのコードレビューの2パターン作ってみる
  - Workflowだけでなく、Agentの性格変えることもやってみる
    - ⇒済
- promptにagent指定して、workflow ○○をやってください。と記載
  - ⇒済
- 残作業
  - 各promptが想定通りに動くか（copilotの無料枠を使い切ってしまったので、復活する2/7以降に試す）
  - prompt、workflowファイルはフォルダでまとめられるか確認する
    - イメージ：`.github/prompts/merge-review`配下に`coach.prompt.md`とかが入る
  - 複数作業を連携する方法を調べる
    - diffのレビューとかはskillsに入れてworkflowでは各作業の呼び出しをするみたいなファイル構成が良かったりする？
    - ⇒ workflowというファイルないっぽい、一度ファイル構成のルール見直す（https://github.com/github/awesome-copilot）
  - searcherのagent作る
  - balancerの指示に文言のトーン&マナーに関する記述も入れる
  - hooksについて調べる
    - https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-hooks
  - agent skillについて調べる
    - https://agentskills.io/home
