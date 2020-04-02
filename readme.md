
# daiei-apollo

GraphQLサーバー

#### Zeit Now Deploy

Zeid Nowに[デプロイ](https://daiei-apollo-one.now.sh/)

```
npx now 
```

#### REST API URL
* [fastapi rest api site](http://tk2-232-25926.vs.sakura.ne.jp/docs)
* [tablelist rest api](http://tk2-232-25926.vs.sakura.ne.jp/describe/tablelist)

**テーブルリスト取得**
```graphql
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
```graphql
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
```graphql
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

**売り先マスタ取得**

（仕入先の場合は`urisaki`を`kaisaki`に変更してください

```graphql
query {
  urisaki(buscd: "0281") {
    USBKB
    BUSCD
    AITCD
    GRPNO
    MEISJ
    SEISJ
    MEISK
    SEISK
    ADRS1
    ADRS2
    ADRS3
    ADRS4
    ADRS5
    YUBIN
    TELNO
    KENCD
    YOSIN
    GYSCD
    TANCD
    TANCH
    SIMKB
    KSBKB
    KSHKB
    SEQKB
    BOBKB
    TORKB
    SQHKB
    ZHSKB
    SEIBO
    INDXJ
    INDXK
    TSYMD
    TEYMD
    TOROK
    MENTE
    SHACD
    BUMON
    TANHO
    SAGRP
    GYSC1
    TESSY
    TESUM
    TESKB
    TESKS
    TESKH
    TESSR
    TESKJ
    CHUKB
    TNLNK
    TNYMD
    TNMNT
    JJOKY
    HJOKY
    GKIBO
    GSTDY
    GONER
    GFUHY
    GSRAI
    GCMNT
    BIKOU
    GMEIS
    GSEIS
    GMEIF
    GSEIF
    ADRG1
    ADRG2
    ADRG3
    ADRG4
    ADRG5
    YUBNG
    TELNG
    FAXNO
    KENCG
    GYOSN
    GYGCD
    GYSMA
    GYSUB
    HINM1
    HINM2
    HINM3
    HINM4
    HINM5
    SGYMD
    SEYMD
    SIHON
    NINZU
    JOUJO
    KEIFG
    KYKKB
    HOSFG
    HOSNM
    TNPKB
    TORKG
    KEIRE
    BIKOG
    JIGSU
    JIGNM
    INDXG
    INDFG
    NAMED
    YOMID
    YAKUD
    ADRD1
    ADRD2
    ADRD3
    ADRD4
    ADRD5
    YUBND
    TELND
    KENC2
    SENEN
    GAKOD
    SOTSU
    DNYMD
    BIKOD
    GTORO
    GMENT
    GSHAC
    DKENC
    KGYCD
    KEIYM
    KEIBK
    HOSYM
    HOSNA
    HOSBK
    TNPSY
    TNPYM
    TNPBK
    OBEUM
    OBEYM
    KESAN
    TOKUM
    TOKYM
    TOKBK
    YOSBK
    GYGC1
    GYGS1
    GYGS2
    URLAD
    SINYO
    COMNT
    KBNK1
    KBNK2
    KBNK3
    KBNK4
    KBNK5
    KYAK1
    KYAK2
    KYAK3
    KYAK4
    KYAK5
    KIRE1
    KIRE2
    KIRE3
    KIRE4
    KIRE5
    KURI1
    KURI2
    KURI3
    KURI4
    KURI5
    KKAB1
    KKAB2
    KKAB3
    KKAB4
    KKAB5
    NBUSCD
    KAMEINO
    TORKEINO
    KEINO
    SYOCD
  }
}
```

**売掛トラン取得**
```graphql
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

