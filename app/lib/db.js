const mysql = require("mysql2/promise");


const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "Royboy",
    database: "jagan",
  });


  export const db = async (query, data) => {
    try {
        const [rows] = await pool.query(query, data);
        return rows;
    } catch (err) {
      console.error("DB Query Error", err);
      throw err;
    }
  };

