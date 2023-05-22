import { getLinks } from "../repositories/ranking.repository.js";

export async function getRanking(req, res) {
  
  try {
    const links = await getLinks()
    console.log(links.rows)
    res.status(200).send(links.rows)
  } catch (err) {
    res.status(500).send(err.message);
  }
}