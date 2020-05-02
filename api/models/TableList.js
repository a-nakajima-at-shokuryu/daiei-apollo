const axios = require('axios');

const HOSTNAME          = `http://tk2-232-25926.vs.sakura.ne.jp`;
const TABLE_LIST_URL    = `${HOSTNAME}/describe/tablelist`;
const TRAN_SUMMARY_URL  = `${HOSTNAME}/tran/urikaktrn/summary`;
const TRAN_URL          = `${HOSTNAME}/tran/urikaktrn`;
const HINSYU_URL        = `${HOSTNAME}/hinsyu`;
const URISAKI_URL        = `${HOSTNAME}/urisaki`;
const KAISAKI_URL        = `${HOSTNAME}/kaisaki`;
const URISAKI2_URL        = `${HOSTNAME}/urisaki2`;
const GZAIKOZAN_URL        = `${HOSTNAME}/gzaikozan`;

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

  async tranSummary(tablename, buscd, ymd) {
    return await axios(TRAN_SUMMARY_URL, {
      params: {
        tablename, buscd, ymd, 
      }, 
    }).then(res => res.data);
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

  async urisaki(buscd) {
    return await axios(URISAKI_URL, { buscd }).then(res => res.data);
  }, 

  async kaisaki(buscd) {
    return await axios(KAISAKI_URL, { buscd }).then(res => res.data);
  }, 

  async urisaki2() {
    return await axios(URISAKI2_URL).then(res => res.data);
  }, 

  async gzaikozan() {
    return await axios(GZAIKOZAN_URL).then(res => res.data);
  }, 
};