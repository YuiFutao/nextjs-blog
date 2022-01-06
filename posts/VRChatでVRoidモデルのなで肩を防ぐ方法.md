---
title: 'VRChatでVRoidモデルのなで肩を防ぐ方法'
date: '2022-01-06'
---



![](https://i.imgur.com/ipNNaUI.png)

## はじめに
- VRoidモデルをVRChatで使用していると、手を下げたときになで肩になりすぎることがあります
- この事象の対策として、肩が一定の場所より下がらない設定方法について説明します
- 本手法は トリン([@Torin1911](https://twitter.com/Torin1911))さんから教えていただいた方法を書き起こしたものです
    - トリンさんいつもありがとうございます！！

<br>

## FBX形式へエクスポートする
- `FBX Exporter` を使ってください
    - 導入方法：[FBX Exporterのインストール方法（2021年Ver.）](https://www.yuifutao.work/posts/FBX%20Exporter%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E6%96%B9%E6%B3%95%EF%BC%882021%E5%B9%B4Ver.%EF%BC%89)
	- ※FBXへエクスポートできるのはVRMモデルのprefabだけです
		- Convert後のVRChat用prefabはFBX化に失敗するので注意

<br>

## FBXファイルの編集
- Projectウィンドウでfbxファイルを選択する
- Inspector上に↓のような画面がでるので、
`Rig` > `Humanoid` > `Configure` の順にクリック
![](https://i.imgur.com/mntPKWD.png)

<br>

- 続いてこんな画面が出るので、`Muscles & Settings` をクリック
![](https://i.imgur.com/oHykFS3.png)

<br>

- 赤枠部分の最小値を**0**にして `Done` をクリック
![](https://i.imgur.com/kN89RMZ.png)
- ※肩が下がらなすぎて違和感がある場合は最小値を大きく(例えば5とかに)して調整してください

<br>

## VRoidモデルへの反映

- プロジェクトfbxファイルを展開する。
	- ![](https://i.imgur.com/TBiJfSh.png)
- 枠で囲った青い人形みたいなファイルが含まれていることを確認する
- `VRM Converter for VRChat` で変換後のモデルをヒエラルキー上で選択する
- Inspector上に下のような画面が出るので、`Avater`欄に先程編集した青い人形をドラッグアンドドロップ等で設定する
![](https://i.imgur.com/YoDSElU.png)
- この状態でVRChatへアップロードして完了です
<br>


