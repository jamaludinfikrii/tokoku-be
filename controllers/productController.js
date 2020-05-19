const db = require('./../database/mysql')

const getAllProduct = (req, res) => {
    let sql = `select p.id as id,p.name as name, p.price as price, pi.url_image as url_image from products p 
    join product_images pi on pi.products_id = p.id;`

    db.query(sql, (err, result)=>{
        try{
            if (err) throw err
            res.send({error : false, data : result})
        }catch(err){
            res.send({error : true, message : err.message})
        }
    })
}

const getDetailProduct = (req, res) => {
    let id = req.params.id
    let sql = `select p.id as id,p.name as name, p.price as price, p.description as description, pi.url_image as url_image from products p 
    join product_images pi on pi.products_id = p.id where p.id = ?;`

    db.query(sql, id,(err, result)=>{
        try{
            if (err) throw err
            res.send({error : false, data : result})
        }catch(err){
            res.send({error : true, message : err.message})
        }
    })
}
module.exports = {
    getAllProduct,
    getDetailProduct
}

