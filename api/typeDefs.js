const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    hello: String!

    tableList: [Table!]!

    describe(tablename: String!): Describe!

    tranSummary(
      tablename: String!
      buscd: String!
      ymd: String!
    ): [TranSummary!]

    tran(
      tablename: String!
      buscd: String!
      ymd: String!
      aitcd: String
      denno: String
    ): [Tran!]!

    hinsyu(
      offset: Int!
      chunk: Int!
    ): [Hinsyu!]!

    urisaki(
      buscd: String!
    ): [Aitsak!]

    kaisaki(
      buscd: String!
    ): [Aitsak!]
  }

  type Table {
    id: String!
    name: String
    title: String
    filename: String 
  }

  type Describe {
    info: DescribeInfo!
    columns: [Column!]!
  }

  type DescribeInfo {
    id: String!
    name: String!
    upper: String
    title: String 
    filename: String 
  }

  type Column {
    no: Int 
    title: String 
    prefix: String!
    name: String!
    type: String!
    size: String
    iskey: String 
    biko: String 
  }

  type TranSummary {
    AITCD: String
    DENNO: String
    KENSU: String
    KINGK: String
  }

  type Tran {
    YOHKB: String
    SZDKB: String
    SISCD: String
    BUSCD: String
    TANCD: String
    DENNO: String
    DENSQ: String
    NDPAG: String
    UDGYO: String
    AITCD: String
    SRYMD: String
    HSYMD: String
    NSYMD: String
    FRYMD: String
    MHYMD: String
    KSYMD: String
    HINCD: String
    BRNCD: String
    MAISU: String
    KINGK: String
    NKRCD: String
    NYKNO: String
    NYKKB: String
    SKRCD: String
    ZSHNO: String
    SYKKB: String
    ZSHNG: String
    TDNKB: String
    ADNKB: String
    HDNKB: String
    SHZKB: String
    KSKFG: String
    HASKB: String
    LOTNO: String
    ENTRY: String
    UNSCD: String
    HATSU: String
    CHAKU: String
    KAINO: String
    HSBUS: String
    UNCHN: String
    HJURY: String
    HENTR: String
    HMEIG: String
    HCYMD: String
    HCBIN: String
    HCHUK: String
    CUNCH: String
    HSZK6: String
    HKOSU: String
    MARFG: String
    MEGKB: String
    TDNO1: String
    TDNO2: String
    SQYMD: String
    NDENO: String
    HTANKB:String
    ARARI: String
    SKFLG: String
    HDNFG: String
    SDPFG: String
    NIPFG: String
    SIRAI: String
    SOSKB: String
    JYUNO: String
    JYUSQ: String
    EIGKB: String
    OKFLG: String
    ZAIKB: String
    SMYMD: String
    COMNT: String
    MIKKB: String
    SNDKB: String
    DNYMD: String
    KRDEN: String
    LOC01: String
    LOC02: String
    LOC03: String
    LOC04: String
    LOC05: String
    COMN1: String
    COMN2: String
    COMN3: String
    ZAMAI: String
    MOMAI: String
    MOKIN: String
    FLG01: String
    FLG02: String
    FLG03: String
    FLG04: String
    FLG05: String
    GENCD: String
    KAKCD: String
    IKUCD: String
    TAICD: String
    CHA01: String
    CHA02: String
    CHA03: String
    VAR01: String
    VAR02: String
    VAR03: String
  }

  type Hinsyu {
    HINCD: String
    HINNM: String
    SIZEN: String
    YORYO: String
    JURKB: String
    IRISU: String
    HGRC1: String
    HGRC2: String
    BIKOU: String
    TOROK: String
    MENTE: String
    MNTAN: String
    JYURY: String
    SHINM: String
    SSIZE: String
    GENFG: String
    KAKFG: String
    IKUFG: String
    TAIFG: String
    PBFLG: String
    DAICD: String
    CHUCD: String
    SBRCD: String
    USEFG: String
  }

  type Aitsak
  {
    USBKB: String
    BUSCD: String
    AITCD: String
    GRPNO: String
    MEISJ: String
    SEISJ: String
    MEISK: String
    SEISK: String
    ADRS1: String
    ADRS2: String
    ADRS3: String
    ADRS4: String
    ADRS5: String
    YUBIN: String
    TELNO: String
    KENCD: String
    YOSIN: String
    GYSCD: String
    TANCD: String
    TANCH: String
    SIMKB: String
    KSBKB: String
    KSHKB: String
    SEQKB: String
    BOBKB: String
    TORKB: String
    SQHKB: String
    ZHSKB: String
    SEIBO: String
    INDXJ: String
    INDXK: String
    TSYMD: String
    TEYMD: String
    TOROK: String
    MENTE: String
    SHACD: String
    BUMON: String
    TANHO: String
    SAGRP: String
    GYSC1: String
    TESSY: String
    TESUM: String
    TESKB: String
    TESKS: String
    TESKH: String
    TESSR: String
    TESKJ: String
    CHUKB: String
    TNLNK: String
    TNYMD: String
    TNMNT: String
    JJOKY: String
    HJOKY: String
    GKIBO: String
    GSTDY: String
    GONER: String
    GFUHY: String
    GSRAI: String
    GCMNT: String
    BIKOU: String
    GMEIS: String
    GSEIS: String
    GMEIF: String
    GSEIF: String
    ADRG1: String
    ADRG2: String
    ADRG3: String
    ADRG4: String
    ADRG5: String
    YUBNG: String
    TELNG: String
    FAXNO: String
    KENCG: String
    GYOSN: String
    GYGCD: String
    GYSMA: String
    GYSUB: String
    HINM1: String
    HINM2: String
    HINM3: String
    HINM4: String
    HINM5: String
    SGYMD: String
    SEYMD: String
    SIHON: String
    NINZU: String
    JOUJO: String
    KEIFG: String
    KYKKB: String
    HOSFG: String
    HOSNM: String
    TNPKB: String
    TORKG: String
    KEIRE: String
    BIKOG: String
    JIGSU: String
    JIGNM: String
    INDXG: String
    INDFG: String
    NAMED: String
    YOMID: String
    YAKUD: String
    ADRD1: String
    ADRD2: String
    ADRD3: String
    ADRD4: String
    ADRD5: String
    YUBND: String
    TELND: String
    KENC2: String
    SENEN: String
    GAKOD: String
    SOTSU: String
    DNYMD: String
    BIKOD: String
    GTORO: String
    GMENT: String
    GSHAC: String
    DKENC: String
    KGYCD: String
    KEIYM: String
    KEIBK: String
    HOSYM: String
    HOSNA: String
    HOSBK: String
    TNPSY: String
    TNPYM: String
    TNPBK: String
    OBEUM: String
    OBEYM: String
    KESAN: String
    TOKUM: String
    TOKYM: String
    TOKBK: String
    YOSBK: String
    GYGC1: String
    GYGS1: String
    GYGS2: String
    URLAD: String
    SINYO: String
    COMNT: String
    KBNK1: String
    KBNK2: String
    KBNK3: String
    KBNK4: String
    KBNK5: String
    KYAK1: String
    KYAK2: String
    KYAK3: String
    KYAK4: String
    KYAK5: String
    KIRE1: String
    KIRE2: String
    KIRE3: String
    KIRE4: String
    KIRE5: String
    KURI1: String
    KURI2: String
    KURI3: String
    KURI4: String
    KURI5: String
    KKAB1: String
    KKAB2: String
    KKAB3: String
    KKAB4: String
    KKAB5: String
    NBUSCD: String
    KAMEINO: String
    TORKEINO: String
    KEINO: String
    SYOCD: String
  }
`;