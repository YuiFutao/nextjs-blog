---
title: '前髪の前に目を描画する（MToon編）'
date: '2020-02-01'
---

![](https://i.imgur.com/lpLVi29.png)

## はじめに
- 前髪の長いモデルを扱っていると、目が前髪に隠れすぎて困ることがあると思います。
- 今回はVRM標準のシェーダー「MToon」を使って前髪を透かす方法を、VRoidモデルを例にして紹介します。
- ※「ステンシル」と呼ばれるシェーダーの機能を使うので、他のシェーダーで頑張りたい方は「ステンシル 〇〇シェーダー」とググると良いかもしれません。
<br><br>


## ベースヘアが前髪の手前に描画されるのを防ぐ
- UnityにインポートしたVRMのフォルダの中に「(モデル名).Materials」フォルダがあるはずなので開く
    - スクリーンショットでは「(skr20_)sten」を例に説明します
![](https://i.imgur.com/LmNohJy.png)
<br>

- プロジェクトウィンドウ上で「F00_000_HairBack_00_HAIR」マテリアルを選択する
![](https://i.imgur.com/jH9Cgdd.png)
<br>
- インスペクター上で、Rendering > Mode > Rendering Type
     - Cutout に変更
![](https://i.imgur.com/d4X38Ba.png)
<br><br>


## アイラインを一番手前に描画する
- プロジェクトウィンドウ上で「F00_000_00_FaceEyeline_00_FACE」マテリアルを選択する
<br>
- Rendering > Mode > Rendering Type
    - Transparent （最初から選択されているはず）
- CullMode
    - Back （裏側から見える必要は無いのでBackを指定）
- Options > Advanst Options > RenderQueue
    - 3000　（値の範囲は2950～3000で、初期値3000。数字が大きい方が手前に描画されます。）
![](https://i.imgur.com/mrDElAb.png)
<br><br>


## 前髪をアイラインの次に描画させる
- プロジェクトウィンドウ上で前髪のテクスチャを選択する。
    - スクリーンショットでは「F00_000_Hair_00_HAIR_04」を例に説明します
    - ※どのマテリアルが前髪に対応しているかはVRoidStudio上での作成順に依存するため、各自で調べて下さい。
<br>
- Rendering > Mode > Rendering Type
    - Transparent に変更する
- Rendering > Mode > Cull Mode
    - Back (ここはお好みでOffでも良いですが、Backの方が描画負荷が軽いです。)
- Options > Advanst Options > RenderQueue
    - 2990 にする
![](https://i.imgur.com/hOWOB8T.png)
<br><br>


## まゆ毛を調整する
- ※デフォルトで Transparent かつ RenderQueue=3000 が設定されています。
    - 気になる人だけ調整して下さい
- 「F00_000_00_FaceBrow_00_FACE」の CullMode を Back にするとちょっとだけ描画負荷が軽くなります
<br><br>


## その他
- 髪型の構造的に描画順がおかしなところがあれば前髪よりも後ろにしてください
- 自分の場合は左右の触覚が前髪よりも手前に描画されていて変だったので 触覚のRenderQueueを 2980 にしました
- 手順でよくわからないことがあったらTwitterでもDiscordでも、お気軽にお尋ね下さい(σ⁎˃ᴗ˂⁎)σ

