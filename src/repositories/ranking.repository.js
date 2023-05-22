import db from '../database/database.connetion.js';
export async function getLinks(){
    return db.query(`SELECT users.id, users.name, COUNT(urls) AS "linksCount", SUM(urls."visitCount") AS "visitCount" FROM users JOIN urls ON users.id = urls."userId" GROUP BY users.id ORDER BY "visitCount" DESC LIMIT 10 `,[])
    }