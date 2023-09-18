## 使い方

### ブランチ説明
- main
  - 全ての実装がまとまったブランチです。
- feature/create-todolist-components
  - TodoListアプリを作成したブランチです。
- feature/implement-storybook
  - TodoListのstorybookを作成したブランチです。
- feature/components-test
  - TodoListのstorybookを使ってテストを実装したブランチです。

### npm scripts
- TodoListを触ってみたいとき
  - ``npm run dev``でNext.jsサーバーを立ち上げて触ってみてください。
- TodoListのstorybookを触ってみたいとき
  - ``npm run storybook``で立ち上げて触ってみてください。
- TodoListのテストを実行してみたいとき
  - ``npm run test``で実行してください。
  - もしvscodeの方は拡張機能の[Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner)を使うとGUIで便利に実行できるのでぜひ
