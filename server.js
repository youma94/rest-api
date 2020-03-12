const express = require('express')
const mongodb = require('mongodb')
const bodyParser = require('body-parser')
const assert = require('assert')

const app = express()
const PORT = 5000

app.use(bodyParser.json())

const mongo_url = 'mongodb://localhost:27017'
const dataBase = "contact-list"

mongodb.MongoClient.connect(mongo_url, { useNewUrlParser: true },(err, client) => {
    assert.equal(err, null, 'Connection to data base failed !')
    const db = client.db(dataBase)

    // The data base isn't created yet, to create it we have to create a collection, the methode that we use to create contact is POST
    app.post('/new_contact', (req, res) => {
        let newContact = req.body
        db.collection('contact-list').insertOne(newContact, (err, data) => {
            if(err) res.send('Operation failed! verify your connection to data base')
            else res.send('Contact added successfuly')
        })
    })

    // To display all the contacts created in our data base we use the methode GET to fetch data in the data base
    app.get('/contacts', (req, res) => {
        db.collection('contact-list').find().toArray((err, data) => {
            if(err) res.send("Can't fetch data!")
            else res.send(data)
        })
    })

    // To display only one contact using his ID
    app.get('/contacts/:id', (req, res) => {
        const contactId = mongodb.ObjectID(req.params.id)
        db.collection('contact-list').findOne({_id: contactId}, (err, data) => {
            if(err) res.send("Sorry, we can't find the contact you're looking for")
            else res.send(data)
        })
    })

    // To edit a contact, methode used PUT
    app.put('/edit_contact/:id', (req, res) => {
        let contactToEditId = mongodb.ObjectID(req.params.id)
        let modifications = req.body
        db.collection('contact-list').findOneAndUpdate({_id: contactToEditId}, {$set: {...modifications}}, (err, data) => {
            if(err) res.send("Sorry, can't modify the contact, something is wrong happening")
            else res.send('Contact modified')
        })
    })

    // To delete contact from data base
    app.delete('/delete_contact/:id', (req, res) => {
        let contactToDeleteId = mongodb.ObjectID(req.params.id)
        db.collection('contact-list').findOneAndDelete({_id: contactToDeleteId}, (err, data) => {
            if(err) res.send('Sorry, deleting contact failed')
            else res.send('Contact deleted!')
        })
    })


})


app.listen(PORT, (err) => {
    if(err) console.log('error')
    else console.log(`Server is running on port: ${PORT}`)
})