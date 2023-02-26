const express = require('express');
const database = require('../config/database');
const router = express.Router();


router.post('/listokopname', async(req, res) => {
    const { kode, ed, kondisi, update_by } = req.body;
    let query = 'SELECT * FROM sudahso';
    const params = [];
  
    if (kode || ed || kondisi || update_by) {
      query += ' WHERE';
      if (kode) {
        query += ' kode = %?%';
        params.push(kode);
      }
      if (ed) {
        query += `${params.length ? ' OR' : ''} ed = %?%`;
        params.push(ed);
      }
      if (kondisi) {
        query += `${params.length ? ' OR' : ''} kondisi = %?%`;
        params.push(kondisi);
      }
      if (update_by) {
        query += `${params.length ? ' OR' : ''} update_by = %?%`;
        params.push(update_by);
      }
    }
  
    database.query(query, params, (err, rows) => {
      if (err) {
        res.status(500).send({message: err.message});
        return;
      }
      if (rows.length === 0) {
        res.status(404).send({message:"Can't find any data"});
      } else {
        res.status(200).json({
          metadata: {
            code: 200,
            message: 'OK',
          },
          response: rows,
        });
      }
    });
  });
  
  
module.exports = router;