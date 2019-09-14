//新しいプロジェクトを作成
prObj = app.newProject();

//作成したPJにFootageというフォルダを追加
var folderItemObj = app.project.items.addFolder('Footage');

//作成したFootageというフォルダの直下にPreComp,IMG以下略を追加
//平面フォルダは平面を作成すれば自動でフォルダが作成されるので追加していません
folderItemObj.items.addFolder('PreComp');

folderItemObj.items.addFolder('IMG');

folderItemObj.items.addFolder('Sound');

folderItemObj.items.addFolder('Movie');

//作成したPJにCompというフォルダを追加
var folderItemObj = app.project.items.addFolder('Comp');

//追加したCompフォルダの直下に以下の設定のコンポを追加
//(コンポ名, 横のピクセルサイズ, 縦のピクセルサイズ, 縦横比, コンポの秒数, フレームレート)
folderItemObj.items.addComp("Main", 1920, 1080, 1, 50, 29.97);

folderItemObj.items.addComp("Scene1", 1920, 1080, 1, 50, 29.97);

folderItemObj.items.addComp("Scene2", 1920, 1080, 1, 50, 29.97);

folderItemObj.items.addComp("Scene3", 1920, 1080, 1, 50, 29.97);

folderItemObj.items.addComp("Scene4", 1920, 1080, 1, 50, 29.97);

folderItemObj.items.addComp("Scene5", 1920, 1080, 1, 50, 29.97);