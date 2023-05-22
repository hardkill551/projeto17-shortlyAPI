import db from '../database/database.connetion.js';

export async function getUserRepository (email) {
	return db.query('SELECT * FROM users WHERE email = $1', [email]);
}
export async function getUserById (id) {
	return db.query('SELECT users.id, users.name, AVG(urls."visitCount"),urls.id AS "urlId" FROM urls JOIN users ON users.id = urls."userId" WHERE users.id = $1', [id]);
}
export async function insertUser(name, email, password) {
	return db.query(`INSERT INTO users(name, email, password) VALUES ($1, $2, $3)`, [name, email, password]);
}

