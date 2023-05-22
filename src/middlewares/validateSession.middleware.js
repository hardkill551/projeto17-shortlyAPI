import { getSession } from "../repositories/session.repository"
import jwt from jsonwebtoken


export async function validateToken(req, res, next) {
    try {
        const { authorization } = req.headers
        const token = authorization?.replace("Bearer ", "")
        if (!token) return res.sendStatus(401)
        const user = jwt.verify(token, SECRET_KEY)
        const session = await getSession(token, user)
        if (session.rowCount === 0) return res.sendStatus(409)
        next()
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}