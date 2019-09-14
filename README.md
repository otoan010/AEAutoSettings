# AEAutoSettings
After Effectsで新規プロジェクトを始める際に、コンポやディレクトリの設定を自動でできるようにしたものです  
新規プロジェクト作成時にフォルダを作ったりコンポを作成したりするのにマウスをポチポチしたり、  
設定の為に数値を打ち込んだり、といった手間が減った幸せを感じて頂けたら幸いです  

### 実行環境  
以下の環境で確認しています  
PC : windows10 / macOS  
SoftWare Version : After Effects CC 2019 v16.1

### 設定方法  
1.Clone or download から Download.zip をクリックしてzipファイルをダウンロードしてください

2.ダウンロードしたzipファイルをPCの適当なフォルダに解凍してください

3.AEAutoSettings.jsxをAfter EffectsのScriptsというフォルダに格納してください（コピペしてください）

以下はスクリプトを格納するフォルダの例です  
C:\Program Files\Adobe\Adobe After Effects CC 2019\Support Files\Scripts

4.After Effectsを起動し、メニューバーから ファイル > スクリプト　と進み、AEAutoSettingsが追加されていたら設定完了です

### 使用方法
1.After Effectsを起動します

2.使用したプロジェクトの履歴が表示されますが、無視して(あるいは閉じて)  
メニューバーから ファイル > スクリプト　と進み、AEAutoSettingsをクリックします

3.コンポやフォルダが自動で追加されていたら成功です

### フォルダ設定の変更方法
folderItemObj.items.addFolder('PreComp');

'PreComp'の 'この中'を変更すると自動で追加されるフォルダのフォルダ名を変更できます  
フォルダこんなにいらないという人は、（例えば）以下の1行を削除するか//を冒頭に入れてください（コメントアウトと言います）  
//folderItemObj.items.addFolder('PreComp');

### コンポ設定の変更方法
folderItemObj.items.addComp("Main", 1920, 1080, 1, 50, 29.97);

addCompの後の(この中)を変更することでコンポの設定を変更できます  
設定項目と並び順は以下の通りです  
(コンポ名, 横のピクセルサイズ, 縦のピクセルサイズ, 縦横比, コンポの秒数, フレームレート)  

### 参考サイト
AEP Project  
http://ae-users.com/jp/sp0909_scripting-tutorial/



