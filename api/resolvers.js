const TableList = require('./models/TableList');

const HINZNSMST = 'hinznsmst';

// 列名からプレフィックスを取り除く
const trimPrefix = (row, columns) => columns.reduce((a, { prefix, name }) => {
  a[name] = row[`${prefix}_${name}`];
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
  }, 
};