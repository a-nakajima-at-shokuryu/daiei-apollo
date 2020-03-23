const axios = require('axios');

const HOSTNAME       = `http://tk2-232-25926.vs.sakura.ne.jp`;
const TABLE_LIST_URL = `${HOSTNAME}/describe/tablelist`;
const TRAN_URL       = `${HOSTNAME}/tran/urikaktrn`;
const HINSYU_URL     = `${HOSTNAME}/hinsyu`;

const DESCRIBE_URL = `${HOSTNAME}/describe`;


module.exports = {
  async all() {
    const data = await axios(TABLE_LIST_URL).then(res => res.data);
    return data;
  }, 
  
  async describe(tablename) {
    return await axios(`${DESCRIBE_URL}/${tablename}`)
      .then(res => res.data)
      .then(({ info, dict: columns }) => {
        columns = Object.values(columns);
        return {
          info, 
          columns, 
        }
      });
  },
  
  async tran(tablename, buscd, ymd, aitcd, denno) {
    return await axios(TRAN_URL, {
      params: {
        tablename, buscd, ymd, aitcd, denno, 
      }, 
    }).then(res => res.data);
  },

  async hinsyu(offset, chunk) {
    return await axios(HINSYU_URL, {
      offset, chunk, 
    }).then(res => res.data);
  },  
};