---
title: 'VRChatで使える表情をカスタマイズする (Avater2.0)'
date: '2019-12-24'
---

# TL;DR
![](https://i.imgur.com/qsuSfTE.png)
↓↓↓↓↓↓↓↓↓
![](https://i.imgur.com/6J5JzHu.png)
<br><br>


# 前提
- 本記事はVRMモデルを扱う前提で書いています
    - VRM以外のモデルを使う場合は「アニメーションのプロパティ名」だけ読み替えてください
- 本手順の前段となる「VRMを変換してVRCにアップロードする手順」は↓を参照してください
    - [VRMからVRChatへアップロードする流れ](https://qiita.com/100/items/7315fe3a7eb75732ae43)
<br>

## ソフトウェアバージョン
- Unity: 2017.4.28f1
- UniVRM: 0.53.0
- VRM Converter for VRChat: 17.1.0
<br><br>


# 初期状態
- Unityの画面
    - VRChatへアップロードが終わったところ
![](https://i.imgur.com/uqATO6o.png)
<br><br>


# 表情(アニメーション)を作る
## 下準備
- モデルを`Ctrl+D`等で複製します（※理由は後述）
![](https://i.imgur.com/EfCdlbE.png)
<br>

- また、Inspectorタブから複製したモデル以外を非表示にしておくと良いです。
![](https://i.imgur.com/uBTStoU.png)
<br><br>


## 空のアニメーションファイルの作成
- Assetsの中に「Animation」フォルダを作ります
`Assets右クリック > Create > folder > 「Animation」と名前をつける`
![](https://i.imgur.com/Oq9qhen.png)
<br><br>


- Animationフォルダを開く
`Create > Animation > 「wink」と名前をつける`
![](https://i.imgur.com/FmzWaB2.png)
<br><br>


## アニメーション編集ウィンドウを開く
- `メニュー > Window > Animation` を選択するとアニメーションウィンドウが開きます。
![](https://i.imgur.com/vgcb58H.png)
<br>↓↓↓↓↓


- アニメーションウィンドウは別ウィンドウで開かれます
（※スクショの関係で私は下のタブに合流させました）
![](https://i.imgur.com/bBwR0p8.png)
<br><br><br>


## アニメーションとモデルの関連付け
- projectタブに戻って、先程作ったwinkをHierarchyタブの自分のモデル（のルート）にドラッグ＆ドロップ
![](https://i.imgur.com/QIvcjmx.png)
<br><br><br>


- このタイミングで「モデル名(1)」というファイルがAnimationフォルダに生成される。
 - ※スクリーンショットの例だと `santa3_VRC()`
 - ※アニメーションコントローラーと呼ばれるファイルが自動生成されているが、今回の作業では意識しないので無視する
![](https://i.imgur.com/Eft8Nqh.png)
<br><br>


- Animationタブを開くと、winkが開かれた状態になっている
![](https://i.imgur.com/Yz8LIbU.png)
※もしも画像のように`Add Property`ボタンがグレーアウトしていた場合、Hierarchyタブで複製したモデルを選択し直してみてください
<br><br>



## 表情プロパティの追加
- アニメーションウィンドウで
`Add Property > Body > Skinned Mesh Renderer` > (一旦スクロールバーを右端まで持っていく)
![](https://i.imgur.com/g4togHM.png)
<br><br>

- `~.Face.M_F00_000_00_Fcl_EYE_Joy_R` の右端のプラスアイコンをクリック
![](https://i.imgur.com/nF63cQC.png)
<br><br>

- Animationタブに選択した表情の項目が追加される
![](https://i.imgur.com/v5zqVqf.png)
<br><br>



## 表情の調整
- 記録ボタン(赤丸) をクリック
![](https://i.imgur.com/dBYKmrL.png)
<br><br>

- Sceneタブのモデルが地面にめり込んでしゃがみますが、そういう仕様なので気にしないでください（※詳細は後述）
![](https://i.imgur.com/BHCCMkz.png)
<br><br>

- 矢印の部分の数値を100にしてみます。
キャラクターの表情が変化します。100以外の値も試して感覚を掴んでください。
![](https://i.imgur.com/MdnV45E.png)
<br><br>

- VRCの表情コントロールの仕様で、キーフレームが2つ必要なため、0.01秒後の部分にも同じキーを作ります。
![](https://i.imgur.com/FCZxu4a.png)
<br><br>

- 録画ボタンをクリックして記録モードを解除
このタイミングで wink (=アニメーションファイル) が上書き保存されます
<br><br>


# VRC上の操作と関連付け
ウィンクしか作っていませんが、一旦VRC上で動作確認してみたいと思います

## 空のカスタムオーバーライドファイルを作成
プロジェクトタブを開き、
`Assets > VRCSDK > Examples > Sample Assets > Animation`
の中にある CustomOverrideEmpty を
`Assets > Animation`
フォルダにCtrl押しながらドラッグ＆ドロップ
![](https://i.imgur.com/CVc0AiW.png)
<br><br>

- CustomOverrideEmpty を適当にリネーム
私は識別しやすくするために、Emptyの部分を削除してキャラクター名を入れました
- ※本記事では `CustomOverrideYui` としました

![](https://i.imgur.com/qRjcR0t.png)
<br><br>


## カスタムオーバーライドとアニメーションの関連付け
- `Inspectorタブ > VRC_Avater Descriptor(Script) > Custom Standing Anims`
欄の右端のターゲットアイコンをクリック
![](https://i.imgur.com/QStnDvY.png)
<br><br>


- 先程作成した CustomOverride ファイルを選択する
![](https://i.imgur.com/elWQWnZ.png)
<br><br>


- Custom Standing Anims の欄が、上記で選択したカスタムオーバーライドファイルになっていることを確認しつつ、矢印のあたりをダブルクリック
![](https://i.imgur.com/khv11gN.png)
<br><br>


- Inspectorタブにカスタムオーバーライドの中身が表示される
- まだ空っぽなので、 VICTORY のターゲットアイコンをクリック
![](https://i.imgur.com/I4D1kT7.png)
<br><br>


- 一番下に wink があるのでダブルクリックして適用
![](https://i.imgur.com/bQ7X9v1.png)
<br><br>


## 動作確認
### アップロード
- モデルに表情の設定ができたはずなので、いったん複製したモデル(Scene)をCtrl+Sで保存し、VRCへアップロードする。
- ※VRCへアップロードする手順は [こちら](https://qiita.com/100/items/7315fe3a7eb75732ae43#%E3%82%A2%E3%83%83%E3%83%97%E3%83%AD%E3%83%BC%E3%83%89)を参照してください
![](https://i.imgur.com/gw1PQ3p.png)
<br><br>


### VRCで確認
- 一旦別のアバターに切り替えてからアップロードしたアバターに着替え直す
 - ※そうしないと変更が反映されない
- Shift+F5 で VICTORYモーションを呼び出してみる
![](https://i.imgur.com/LOlDlM8.png)
　　　　　　　　　　　　　　　＼あざとい！／
<br><br><br>





# ハンドサインと表情を同時に操作する
ここまででウィンクだけならできるようになりましたが、本当はピースしながらウィンクしたいですよね？
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**その夢、叶えましょう**
<br><br>


## ハンドサインが入ったアニメーションを複製する
`Assets > VRMConverterForVRChat > Editor`
の中にある VICTORY をCtrl押しながらAnimationフォルダにドラッグ＆ドロップ
![](https://i.imgur.com/2KxupmF.png)
<br><br>

複製した VICTORY ファイルは `VICTORY_WINK` にリネームしておきます
※リネームは必須です。[^1]
![](https://i.imgur.com/myJ7HyS.png)
<br><br>


## モデルとアニメーションの関連付け
- `VICTORY_WINK` をモデルにドラッグ＆ドロップする
![](https://i.imgur.com/bsljLcg.png)

- Animationタブ(ウィンドウ)を開く
`wink` の文字のあたりをクリックする
↓の画像のように、`VICTORY_WINK` が選択できるようになっている
![](https://i.imgur.com/wt8DSKj.png)
<br><br>


- `VICTORY_WINK` を選択すると、指の形に関するプロパティがたくさん設定されている
![](https://i.imgur.com/p7e1yCU.png)
<br><br>


## 表情の調整
- ここに先程ウィンクを設定したのと同じ要領でウィンクを `Add Property`する
 - うまくいけば↓の画像のように、ピースしながらウィンクする状態になる
![](https://i.imgur.com/CEgbmtB.png)
<br><br>


# 使える表情の数
- VRモードとデスクトップモード共通で、8個まで表情を設定できます
 - https://twitter.com/twintail_vtuber/status/1191178567847010304
<img src="https://i.imgur.com/l0D90gi.png" width="500"><br>
（ちなみにF1とF3はVIVEコンだとグリップ握り/開放で操作します）
<br><br>


# 他の表情設定
- `ハンドサインが入ったアニメーションを複製する` の手順を、ハンドサインを変えながら繰り返していけばOKです
- ハンドサインの元となるファイルは以下にあります
 - `Assets > VRMConverterForVRChat > Editor`

![](https://i.imgur.com/6eucB46.png)
※握りこぶし、自然に開く、大きく開く の3種類がどこにあるのか分からないため、ご存知の方からのコメントお待ちしておりますm(_ _)m
<br><br>


# 座った時の表情を設定する
- 本記事に従って設定しただけでは立ち状態での表情しか変更できません。
座ったときの表情を変更したい場合は、Custom Sitting Anims にも同じカスタムオーバーライドファイルをドラッグ&ドロップしてください。
![](https://i.imgur.com/tHBQNon.png)
<br><br>


# しゃがみポーズから復帰する方法
&nbsp;&nbsp;**ありません。**

- なので最初にモデルを複製しました。
最終的にカスタムオーバーライドファイル (本記事中の`CustomOverrideYui`)だけをモデルに適用してあげれば良いので、複製したモデルは削除し、複製元のモデルにカスタムオーバーライドを適用してください。
<br><br>


# おわりに
- 自撮りしてたら朝が来た
![](https://i.imgur.com/dI0Gxki.jpg)


[^1]: リネームが必要な理由 https://twitter.com/kohack_v/status/981349557807202304
