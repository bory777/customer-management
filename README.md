顧客管理システム

シンプルな顧客管理システム（CRM）アプリケーションのフロントエンド実装です。ログイン機能を備え、顧客の一覧表示・検索・並び替えなどの操作が可能です。

<img width="1470" alt="Image" src="https://github.com/user-attachments/assets/be3f141f-4008-4923-86e7-26345a741ece" />

---

## 目次
1. [機能概要](#機能概要)  
2. [セットアップ手順](#セットアップ手順)  
3. [使用した技術・ライブラリ](#使用した技術ライブラリ)  
4. [実装した機能の説明](#実装した機能の説明)  
5. [動作確認方法](#動作確認方法)  
6. [フォルダ構成](#フォルダ構成)  
7. [今後の改善点](#今後の改善点)

---

## 機能概要
- シンプルなログイン画面
- 顧客情報の一覧表示
- 検索機能・並び替え機能
- レスポンシブ対応

---

## セットアップ手順

### 前提条件
- Node.js (v14.0.0 以上)
- npm (v6.0.0 以上) または yarn

### インストールと起動
1. リポジトリをクローン  
   ```bash
   git clone https://github.com/yourusername/simple-crm.git
   cd simple-crm
   ```
2. 依存パッケージをインストール  
   ```bash
   npm install
   ```
   または  
   ```bash
   yarn
   ```
3. 開発サーバーを起動  
   ```bash
   npm start
   ```
   または  
   ```bash
   yarn start
   ```
4. ブラウザで [http://localhost:3000](http://localhost:3000) にアクセス

---

## 使用した技術・ライブラリ
- **React**: Create React App を使用
- **React Router**: ページ遷移（ログインフォーム・顧客一覧・顧客登録など）
- **Material-UI (MUI)**: UI コンポーネントライブラリ
- **Icon**: `@mui/icons-material` の `MenuIcon` など

---

## 実装した機能の説明

### 1. ログイン機能
- ユーザーID・パスワード入力フォーム
- バリデーション（未入力時のエラーメッセージ表示）
- 「テストユーザーを入力」ボタンで `userId = "testuser"`, `password = "password123"` を自動入力可能
- ログインに成功すると顧客一覧ページが表示される
- ログアウトボタンでログイン状態をクリア

### 2. 顧客一覧機能
- 顧客データをカード形式で表示
- 顧客名での検索機能（リアルタイム絞り込み）
- 「名前順」または「登録日順」での並び替えボタン
- Material-UI の `<Grid>` や `<Card>` によるレスポンシブレイアウト

### 3. 顧客登録機能
- 名前、メールアドレス、電話番号、登録日を入力し、簡易的に登録（現状はアラート表示のみ）
- バックエンド連携やデータ永続化は未実装

### 4. Drawer (サイドメニュー)
- ログイン後のみ「ハンバーガーボタン」が表示され、クリックするとサイドメニューがオーバーレイ表示 (`variant="temporary"`)
- 「顧客一覧」「顧客登録」の画面へ切り替え可能

---

## 動作確認方法
1. アプリ起動後、未ログイン状態でまずはログイン画面が表示される  
2. `userId` と `password` に文字列を入力し、「ログイン」ボタンを押下  
   - 例: `userId=testuser`, `password=password123`
3. 正しく入力すると顧客一覧画面に遷移  
4. サーチバーで顧客名を入力すると、該当顧客のみ表示される  
5. 「並び替え」ボタンで、**名前順** と **登録日順** をトグル可能  
6. サイドメニューの「顧客登録」をクリックすると登録画面へ移動  
7. 登録フォームを入力して「登録」ボタンを押すとアラートが表示される  
8. ナビゲーションバーの「ログアウト」ボタンでログアウト可能  
9. ログアウトすると再びログイン画面に戻る

---

## フォルダ構成

```
.
├── public/
│   └── index.html           # Reactアプリのエントリーポイント(テンプレート)
└── src/
    ├── components/
    │   ├── CustomerList.js  # 顧客一覧表示 + 検索・並び替え機能
    │   ├── CustomerRegister.js  # 顧客登録フォーム
    │   └── LoginForm.js     # ログイン画面
    └── App.js               # 全体レイアウト, Drawer, ルーティング

```

---

## 今後の改善点
- バックエンドと連携して実際のデータベースにアクセス（API実装）
- 顧客詳細・編集・削除機能の追加
- ログイン認証の強化（トークン管理など）
- レスポンシブデザインのさらなる最適化
