import { nanoid } from "nanoid";
import { deleteShortUrl, getUrlShort, getUrlShortById, getUrlShortByIdComplete, insertUrlShort, updateUrl } from "../repositories/url.repository.js";

export async function urlShorten(req, res) {
  const { url } = req.body;
  try {
    const shortUrl = nanoid();
    const userId = res.locals.userId;
    await insertUrlShort(url, shortUrl, userId);
    const shorturl = await getUrlShort(shortUrl);
    res.status(201).send(shorturl.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getUrl(req, res) {
  const { id } = req.params;
  try {
    const shortUrl = await getUrlShortById(id)
    if(shortUrl.rowCount===0) return res.sendStatus(404)
    res.status(200).send(shortUrl.rows[0])
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function redirectUrl(req, res) {
    const { shortUrl } = req.params;
    try {
        const shorturl = await getUrlShort(shortUrl);
        if(shorturl.rowCount===0) return res.sendStatus(404)
        const url = await getUrlShortById(shorturl.rows[0].id)
        await updateUrl(url.rows[0].id)
        res.redirect(url.rows[0].url)
    } catch (err) {
      res.status(500).send(err.message);
    }
  }


export async function deleteUrl(req,res){
    const { id } = req.params;
    try {
        const userId = res.locals.userId;
        const url = await getUrlShortByIdComplete(id)
        console.log(userId)
        if (url.rowCount === 0) return res.sendStatus(404)
        if(url.rows[0].userId!==Number(userId)) return res.sendStatus(401)
        
        await deleteShortUrl(id)
        res.sendStatus(204)

    } catch (err) {
      res.status(500).send(err.message);
    }
}