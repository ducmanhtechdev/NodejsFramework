const handleHello  = (req,res) => {
    const name = req.body.name; 
    return res.render('index.ejs', {name})

}


module.exports = {
    handleHello
}