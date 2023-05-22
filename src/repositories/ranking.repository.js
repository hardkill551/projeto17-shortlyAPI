import db from '../database/database.connetion.js';
export async function getLinks(){
    return db.query(`SELECT users.id, users.name, COUNT() AS "linksCount" FROM sessions WHERE token = $1 AND "userId" = $2`,[token, user])
    }