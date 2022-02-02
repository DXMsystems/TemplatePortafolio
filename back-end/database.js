var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE Contact (
            id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            name TEXT NOT NULL, 
            email TEXT NOT NULL, 
            subject TEXT NOT NULL,
            message TEXT NOT NULL, 
            date DATE NOT NULL
            );`,
        (err) => {
            if (err) {
                console.log("Table already created")
            }else{
                // Table just created, creating some rows
                console.log("Table just created")
            }
        });  
    }
});


module.exports = db
