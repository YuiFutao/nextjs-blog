---
title: 'mixamoのアニメーションを自分のモデルに適用する'
date: '2020-06-01'
---

===

![](https://i.imgur.com/FTvKJMh.gif)

## はじめに
Vket入稿の度に忘れてるアニメーション設定の作業をまとめました。
<br><br>


## 必要なもの
- Unity 2018 4.20f1
    - [https://unity3d.com/jp/unity/qa/lts-releases?version=2018.4](https://unity3d.com/jp/unity/qa/lts-releases?version=2018.4)
- VRC SDK2
    - [https://www.vrchat.com/home/download](https://www.vrchat.com/home/download)
- UniVRM
    - [https://github.com/vrm-c/UniVRM/releases](https://github.com/vrm-c/UniVRM/releases)
        - ※本記事では v0.61.1 を使いました
- FBX Exporter
    - これは他と違ってUnityPackage形式で配布されて**いない**
    - 下記手順に従って「Package Manager」からインストール
        - [https://learn.unity.com/tutorial/fbx-exporter-nosetsutoatsuputoraundotoritsupunocao-zuo-2019-1-2019-2?language=ja#](https://learn.unity.com/tutorial/fbx-exporter-nosetsutoatsuputoraundotoritsupunocao-zuo-2019-1-2019-2?language=ja#)
<br><br>


## VRMをUnityにインポート
- vrmモデルをAsset配下にドラッグアンドドロップ
    - ![](https://i.imgur.com/RSVs99p.png)
- こうなる
    - ![](https://i.imgur.com/tWjiFeG.png)
- prefab ファイルをヒエラルキーにドラッグアンドドロップ
    - ![](https://i.imgur.com/rhtLGUj.png)
<br><br>


## FBX形式でエクスポート
- ヒエラルキー上でモデルを右クリック > **Export to FBX** をクリック
    - ![](https://i.imgur.com/RA0GPzn.png)
- 設定は変えずに、そのまま **Export** をクリック
    - ![](https://i.imgur.com/zAiFmNe.png)
- Asset直下に生成されたfbxモデルを右クリック > **Show in Explorer** をクリック
    - ![](https://i.imgur.com/D52jXvz.png)
    - fbxファイルは後で使うので適当な場所に保存する
<br><br>


## mixamoにアップロード
- https://www.mixamo.com/#/ を開く
- **UPLOAD CHARACTOR** をクリック
    - ![](https://i.imgur.com/sKDTUhK.png)
    - さっき作ったfbxファイルをアップロード
- 1分くらい待つ
- 確認画面が出てくる。人間っぽい動きをしていることを確認して、**NEXT** を2回クリック
    - ![](https://i.imgur.com/vLUsjvz.png)
<br><br>


## いい感じのアニメーションを探す
- 今回は **Capoeira** を使ってみます
    - ![](https://i.imgur.com/Yw2GZYC.png)
    - ちなみに右のパラメーターをいじると動きの幅等を調整できます
<br><br>


## FBXファイルをダウンロード
- **Download**ボタンをクリック
    - ![](https://i.imgur.com/oCSpvpm.png)
- DOWNLOAD SETTINGSは以下のようにする
    - Skin: **Without Skin**
        - →fbxにテクスチャ等を含めるかどうか。今回の作業では不要
    - Keyframe Reduction: **uniform**
        - →動きをそれほど変えずにファイルサイズを圧縮する。
        - ※UniformとNon-Uniformの違いは分かりません！知ってる方いらっしゃればコメント等で教えていただけると喜びます
<br><br>


## FBXファイルをUnityにインポート
- Assets配下にドラッグアンドドロップ
<br><br>


## FBXファイルのRig設定変更
- fbxファイルを選択した状態で、インスペクターの **Rig** > Animation Type を **Humanoid** に変更する > **Apply**
    - ![](https://i.imgur.com/DWNrVr6.png)
<br><br>


## FBXファイル展開
- 再生マークをクリックしてfbxファイルの内容を展開する
    - ![](https://i.imgur.com/e6R1lz4.png)
- こうなる
    - ![](https://i.imgur.com/yUq2C0Q.png)
<br><br>


## FBXからanimationファイルを分離
- **mixamo.com** というファイルを選択し、Ctrl+Dで複製する
    - 複製するとfbxファイルの外側に.animファイルが生成される
    - ![](https://i.imgur.com/cC77kRp.png)
- このままだと名前が分かりづらいのでリネームしておくのがオススメ
    - 今回は **カポエラ.anim** にした
<br><br>


## モデルにanimationを設定
- .animファイルをヒエラルキー上のモデルにドラッグアンドドロップ
    - ![](https://i.imgur.com/jiTQos8.png)
- [モデル名].controller ファイルが生成される
    - ![](https://i.imgur.com/a7vtThL.png)
<br><br>


## animation調整
- 再生ボタンを押す
    - ![](https://i.imgur.com/8puHTz1.png)
- アセットウィンドウ上で **カポエラ.anim** ファイルを選択し、インスペクター上で以下のチェックを入れる（合計4つ）
    - Loop Time
    - Bake Into Pose(Rotation, PositionY/XZ すべて)
    - ![](https://i.imgur.com/5nTE5rd.png)
<br><br>


## 最後に
質問、補足歓迎です！
もし躓いたところがあればコメントで教えてもらえると加筆修正しますので遠慮なく仰って下さい








