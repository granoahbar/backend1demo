const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())  // When we want to be able to accept JSON.
app.use(cors())
const dummyDatabase = ['chips', 'dip', 'salsa', 'Dr. Pepper', 'Mt. Dew', 'bratwurst', 'Sour Patch Watermelon', 'Sour Patch Original']

app.get('/api/inventory', (req, res) => {
    // console.log(req.body)
    // console.log(req.query)
    // console.log(req.params)

    if(req.query.item){
    console.log('App get IF hit')

    const filteredItems = dummyDatabase.filter((food)=>food.includes(req.query.item))
    res.status(200).send(filteredItems)

    }else{
        console.log('App get ELSE hit')
        res.status(200).send(dummyDatabase)
    }
    
})

app.get('/api/inventory/:id', (req, res) => {
    console.log(+req.params.id)

    let index = req.params.id

    console.log(dummyDatabase[index])

    res.status(200).send(dummyDatabase[index])
})

app.listen(5050, () => console.log('Server running on 5050'))
