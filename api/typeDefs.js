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
`;