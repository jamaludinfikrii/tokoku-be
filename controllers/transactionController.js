const db = require('./../database/mysql')

const onBayarClick = (req,res) => {
    const data = req.body

    // if(data.dataTransaction && data.dataTransactionDetail){
    //     db.query('insert into transaction set ?' , data.dataTransaction,(err,result) => {
    //         if(err) throw err
    //         const dataTransDetailArr = data.dataTransactionDetail.map((val) => {
    //             return [ val.product_name, val.product_price,val.qty, result.insertId ]
    //         })

    //         db.query('INSERT INTO transaction_detail (product_name, product_price, qty,transaction_id) VALUES ?', 
    //         [dataTransDetailArr], (err,result) => {
    //             if(err) throw err
    //             db.query('delete from cart where id_users = ?',data.dataTransaction.users_id,(err,result) => {
    //                 if(err) throw err
    //                 res.json({
    //                     error : false,
    //                     message : "Checkout Berhasil"
    //                 })
    //             })
    //         })

    //     })
    // }

    let transaction = data.dataTransaction
    let transactionDetail = data.dataTransactionDetail
    const sql = 'insert into transaction set ?'
    const sql_2 = 'INSERT INTO transaction_detail (product_name, product_price, qty,transaction_id) VALUES ?'
    const sql_3 = 'delete from cart where id_users = ?'

    db.beginTransaction((err) => {
        if(err) throw err
        db.query(sql , transaction,(err,result) => {
            if(err){
                return db.rollback(() => {
                    throw err
                })
            }
            const dataTransactionDetailArr = transactionDetail.map((val) => {
                return [val.product_name, val.product_price,val.qty, result.insertId]
            })

            db.query(sql_2 ,[dataTransactionDetailArr],(err,result) => {
                if(err){
                    return db.rollback(() => {
                        throw err
                    })
                }
                db.query(sql_3 , transaction.users_id,(err,result) => {
                    if(err){
                        return db.rollback(() => {
                            throw err
                        })
                    }
                    db.commit((err) => {
                        if(err){
                            return db.rollback(() => {
                                throw err
                            })
                        }
                        res.json({
                            error : false,
                            message : "Checkout Berhasil"
                        })
                    })
                })
            })
        })
    })


    // insert ke transaction
    // insert ke transaction detail
    // hapus data di cart
   
}



const getAllTransaction = (req,res) => {
    const users_id = req.params.users_id
    const sql = 'select * from transaction where users_id = ?'
    db.query(sql,users_id,(err,result) => {
        try {
            if(err) throw err
            res.send({ error :false , data: result})
        } catch (err) {
            res.send({ error: true,message : err.message})
        }
    })
}

const getTransactionDetailByIdTransaction = (req,res) => {
    const transaction_id = req.params.transaction_id
    const sql = 'select * from transaction_detail where transaction_id = ?;'
    db.query(sql,transaction_id,(err,result) => {
        try {
            if(err) throw err
            res.send({ error :false , data: result})
        } catch (err) {
            res.send({ error: true,message : err.message})
        }
    })
}

module.exports = {
    onBayarClick,
    getAllTransaction,
    getTransactionDetailByIdTransaction 
}

