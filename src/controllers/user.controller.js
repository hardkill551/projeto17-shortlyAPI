import { insertUser, getUserRepository } from "../repositories/user.repository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { insertSession } from "../repositories/session.repository.js";
export async function signUp(req, res) {
  const { name, email, password } = req.body;

  try {
    const result = await getUserRepository(email);
    if (result.rowCount !== 0) return res.sendStatus(409);
    const criptPass = bcrypt.hashSync(password, 10);
    await insertUser(name, email, criptPass);
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function signIn(req, res) {
  const { email, password } = req.body;
  
  try {
    const user = await getUserRepository(email);
    if(user.rowCount !== 1 ) return res.send(401)
    const valid = bcrypt.compareSync(password, user.rows[0].password);
    if (!valid) return res.send(401);
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(user.rows[0].id, secretKey);
    await insertSession(token, user.rows[0].id)
    res.status(200).send({ token: token });
  } catch (err) {
    res.status(500).send(err);
  }
}
