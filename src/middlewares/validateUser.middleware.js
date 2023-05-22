export async function validateUser(req,res,next){
    const {password, confirmPassword} = req.body
    if(password!==confirmPassword) return res.sendStatus(422)
    next()
}