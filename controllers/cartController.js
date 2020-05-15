const db = require('./../database/mysql')

const getAllCart = (req,res) => {
    const sql = `select p.id as id_product, c.id as id, id_users, name, price, qty, url_image from cart c 
    join products p on c.id_products = p.id
    join product_images pi on c.id_products = pi.products_id where id_users = ?`

    db.query(sql,req.params.id_user,(err,result) => {
        try {
            if(err) throw err
            res.send({ error :false , data: result})
        } catch (err) {
            res.send({ error: true,message : err.message})
        }
    })

    
}

const updateCart = (req,res) => {
    const id = req.params.id
    const data = req.body
    console.log(data)
    console.log(id)
    const sql = 'update cart set ? where id = ?'
    db.query(sql,[data,id] , (err,result) => {
        try {
            if(err) throw err
            res.send({error : false,message : 'Update Cart Success'})
        } catch (error) {
            res.send({error  : true , message : err.message})
        }
    } )
}




module.exports = {
    getAllCart,
    updateCart
}