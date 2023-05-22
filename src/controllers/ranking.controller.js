
export async function getRanking(req, res) {
  
  try {
    const links = getLinks()
  } catch (err) {
    res.status(500).send(err.message);
  }
}