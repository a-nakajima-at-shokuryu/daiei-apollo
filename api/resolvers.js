const TableList = require('./models/TableList');

const HINZNSMST = 'hinznsmst';
const AITSAKMST = 'aitsakmst';

// 列名からプレフィックスを取り除く
const trimPrefix = (row, columns) => columns.reduce((a, { prefix, name }) => {
  a[name] = row[`${prefix}${prefix.length ? '_' : ''}${name}`];
  return a;
}, {});

module.exports = {
  Query: {
    hello: () => 'hi', 
    tableList: async () => {
      return await TableList.all(); 
    }, 
    describe: async (_, { tablename }) => {
      return await TableList.describe(tablename);
    },

    tranSummary: async (_, {
      tablename, 
      buscd, 
      ymd, 
    }) => {
      const columns = [
        { prefix: 'URI', name: 'AITCD' }, 
        { prefix: 'URI', name: 'DENNO' }, 
        { prefix: 'URI', name: 'KINGK' }, 
        { prefix: '', name: 'KENSU' }, 
      ];
      const data = await TableList.tranSummary(tablename, buscd, ymd);

      return data.map(row => trimPrefix(row, columns));
    }, 
    
    tran: async (_, { 
      tablename, 
      buscd, 
      ymd, 
      aitcd, 
      denno, 
    }) => {
      const describe = await TableList.describe(tablename);
      const columns = describe.columns;
      const data = await TableList.tran(tablename, buscd, ymd, aitcd, denno);

      return data.map(row => trimPrefix(row, columns));
    }, 
    
    hinsyu: async (_, { offset, chunk }) => {
      const tablename = HINZNSMST;
      const describe = await TableList.describe(tablename);
      const columns = describe.columns; 

      const data = await TableList.hinsyu(offset, chunk);
      return data.map(row => trimPrefix(row, columns));
    }, 

    urisaki: async (_, { buscd }) => {
      const tablename = AITSAKMST;
      const describe = await TableList.describe(tablename);
      const columns = describe.columns;

      const data = await TableList.urisaki(buscd);
      return data.map(row => trimPrefix(row, columns));
    }, 

    kaisaki: async (_, { buscd }) => {
      const tablename = AITSAKMST;
      const describe = await TableList.describe(tablename);
      const columns = describe.columns;

      const data = await TableList.kaisaki(buscd);
      return data.map(row => trimPrefix(row, columns));
    }, 
  }, 
};