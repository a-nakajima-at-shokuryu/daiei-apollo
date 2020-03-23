
# daiei-apollo

GraphQLサーバー

#### Zeit Now Deploy

```
npx now 
```

#### REST API URL
* [fastapi rest api site](http://tk2-232-25926.vs.sakura.ne.jp/docs)
* [tablelist rest api](http://tk2-232-25926.vs.sakura.ne.jp/describe/tablelist)

**テーブルリスト取得**
```
query {
  tableList {
    id 
    name
    title 
    filename 
  }
}
```

**テーブル定義取得（売掛トラン）**
```
query {
  describe(tablename:"urikaktrn") {
    info {
      id 
      name 
    }
    columns {
      no
      title 
      prefix 
      name
      type
      size 
      iskey 
      biko 
    } 
  }
}
```

**品種マスタ取得**
```
query {
  hinsyu(
    offset: 0
    chunk: 1000
  ) {
    HINCD
    HINNM
    SIZEN
    YORYO
    JURKB
    IRISU
    HGRC1
    HGRC2
    BIKOU
    TOROK
    MENTE
    MNTAN
    JYURY
    SHINM
    SSIZE
    GENFG
    KAKFG
    IKUFG
    TAIFG
    PBFLG
    DAICD
    CHUCD
    SBRCD
    USEFG
  }
}
```

**売掛トラン取得**
```
query {
  tran(
  	tablename: "urikaktrn"
    buscd: "0281"
    ymd: "2020-02-15"
    
  ) {
    YOHKB
    SZDKB
    SISCD
    BUSCD
    TANCD
    DENNO
    DENSQ
    NDPAG
    UDGYO
    AITCD
    SRYMD
    HSYMD
    NSYMD
    FRYMD
    MHYMD
    KSYMD
    HINCD
    BRNCD
    MAISU
    KINGK
    NKRCD
    NYKNO
    NYKKB
    SKRCD
    ZSHNO
    SYKKB
    ZSHNG
    TDNKB
    ADNKB
    HDNKB
    SHZKB
    KSKFG
    HASKB
    LOTNO
    ENTRY
    UNSCD
    HATSU
    CHAKU
    KAINO
    HSBUS
    UNCHN
    HJURY
    HENTR
    HMEIG
    HCYMD
    HCBIN
    HCHUK
    CUNCH
    HSZK6
    HKOSU
    MARFG
    MEGKB
    TDNO1
    TDNO2
    SQYMD
    NDENO
    HTANKB
    ARARI
    SKFLG
    HDNFG
    SDPFG
    NIPFG
    SIRAI
    SOSKB
    JYUNO
    JYUSQ
    EIGKB
    OKFLG
    ZAIKB
    SMYMD
    COMNT
    MIKKB
    SNDKB
    DNYMD
    KRDEN
    LOC01
    LOC02
    LOC03
    LOC04
    LOC05
    COMN1
    COMN2
    COMN3
    ZAMAI
    MOMAI
    MOKIN
    FLG01
    FLG02
    FLG03
    FLG04
    FLG05
    GENCD
    KAKCD
    IKUCD
    TAICD
    CHA01
    CHA02
    CHA03
    VAR01
    VAR02
    VAR03
  }
}
```