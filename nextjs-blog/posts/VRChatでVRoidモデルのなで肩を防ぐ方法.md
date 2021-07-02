---
title: 'VRChatでVRoidモデルのなで肩を防ぐ方法'
date: '2020-02-23'
---

![](https://i.imgur.com/ipNNaUI.png)

## はじめに
- VRoidモデルをVRChatで使用していると、手を下げたときになで肩になりすぎることがあります
- この事象の対策として、肩が一定の場所より下がらない設定方法について説明します
- 本手法は トリン([@Torin1911](https://twitter.com/Torin1911))さんから教えていただいた方法を書き起こしたものです
    - トリンさんいつもありがとうございます！！
<br><br>



## FBX形式へエクスポートする
- `FBX Exporter` を使ってください
    - 導入方法：[FBX Exporter のインストール](https://www.yuifutao.work/2021/05/07/post-168/)
    - エクスポート手順：[FBX形式でエクスポート](https://www.yuifutao.work/2020/11/14/post-149/#outline__4)
- ※FBXへエクスポートできるのはVRMモデルのprefabだけです
	- Convert後のVRChat用prefabはFBX化に失敗するので注意
<br><br>


## FBXファイルの編集
- Projectウィンドウでfbxファイルを選択する
- Inspector上に↓のような画面がでるので、
`Rig` > `Humanoid` > `Configure` の順にクリック
![](https://i.imgur.com/mntPKWD.png)
<br><br>


- 続いてこんな画面が出るので、`Muscles & Settings` をクリック
![](https://i.imgur.com/oHykFS3.png)
<br><br>


- 赤枠部分の最小値を**0**にして `Done` をクリック
![](https://i.imgur.com/kN89RMZ.png)
- ※肩が下がらなすぎて違和感がある場合は最小値を大きく(例えば5とかに)して調整してください
<br><br>


## VRoidモデルへの反映
- `VRM Converter for VRChat` で変換後のモデルをヒエラルキー上で選択する
- Inspector上に下のような画面が出るので、`Avater`欄に先程編集したFBXファイルをドラッグアンドドロップ等で設定する
![](https://i.imgur.com/YoDSElU.png)
- この状態でVRChatへアップロードして完了です
<br><br>

