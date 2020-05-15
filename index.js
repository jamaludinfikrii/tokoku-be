const express = require('express')
const app = express()
const PORT = 4000

app.use(express.json())


app.get('/' , (req,res) => {
    res.send('Hello')
})


app.use('/cart',require('./routers/cartRouter'))
app.use('/transaction',require('./routers/transactionRouter'))
app.use('/public' , express.static('public'))

app.listen(PORT , () => console.log('API run on port ' + PORT))
