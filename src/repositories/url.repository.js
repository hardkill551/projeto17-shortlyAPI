import db from '../database/database.connetion.js';
export async function insertUrlShort(url, shortUrl, userId){
    return db.query(`INSERT INTO urls(url, "shortUrl", "userId") VALUES ($1, $2, $3)`, [url, shortUrl, userId])
    }

    export async function getUrlShort(shortUrl){
        return db.query('SELECT * FROM urls WHERE "shortUrl" = $1', [shortUrl]);
    }