
const db_file=require('./getENV.js');
const mysql = require('mysql2')

exports.db=mysql.createConnection(db_file.db_url);

exports.Connection = (props) =>{
    return new Promise((successful, crash) => 
    {
        if(true)
        {
            successful();
        }
        else
        {
            crash("connection not created!!");
        }
    });
}

