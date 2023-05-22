export async function urlShorten(req,res){
    const {url} = req.body
    try{
    console.log("oi")
    }
    catch(err){
    res.status(500).send(err.message)
    }
    }