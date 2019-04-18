const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const PORT = process.env.PORT || 4000
const app = express()


//allow cross-origin requests
app.use(cors())

mongoose.connect('mongodb+srv://toom123:unnc123@cluster0-zrxzb.mongodb.net/test?retryWrites=true')
mongoose.connection.once('open', () => {
    console.log('connected to database')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log('Listening on PORT: ' + PORT)
})