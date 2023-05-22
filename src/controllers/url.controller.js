import { nanoid } from 'nanoid'
import { getUrlShort, insertUrlShort } from '../repositories/url.repository.js'


export async function urlShorten(req,res){
    const {url} = req.body
    try{
    const shortUrl = nanoid()
    const userId = res.locals.userId
    await insertUrlShort(url, shortUrl, userId)
    const shorturl = await getUrlShort(shortUrl)
    res.status(201).send({id:shorturl.rows[0].id, shortUrl})
    }
    catch(err){
    res.status(500).send(err.message)
    }
    }