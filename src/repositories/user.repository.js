import db from '../database/database.connetion.js';

export async function getUserRepository (email) {
	return db.query('SELECT * FROM users WHERE email = $1', [email]);
}

export async function insertUser(name, email, password) {
	return db.query(`INSERT INTO users(name, email, password) VALUES ($1, $2, $3)`, [name, email, password]);
}

