import db from '../database/database.connetion.js';
export async function insertUrlShort(url, shortUrl, userId){
    return db.query(`INSERT INTO urls(url, "shortUrl", "userId") VALUES ($1, $2, $3)`, [url, shortUrl, userId])
    }

    export async function getUrlShort(shortUrl){
        return db.query('SELECT id, "shortUrl" FROM urls WHERE "shortUrl" = $1', [shortUrl]);
    }
    export async function getUrlShortById(id){
        return db.query('SELECT id, "shortUrl", url FROM urls WHERE id = $1', [id]);
    }
    export async function getUrlShortByIdComplete(id){
        return db.query('SELECT "userId" FROM urls WHERE id = $1', [id]);
    }
    export async function updateUrl(id){
        return db.query('UPDATE urls SET "visitCount" = "visitCount" + 1 WHERE id = $1', [id]);
    }
    export async function deleteShortUrl(id){
        return db.query('DELETE FROM urls WHERE id = $1', [id]);
    }