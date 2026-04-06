# CRUD ops
  Create Read Update Delete
  Read -> Query

  1. Mobile Management 
       mobiles {id,anme,model,price,photo}
       admins

  2. Patient Management
       patients {id ,name, gender,age,photo}
       admins

  3. Cab management
        cars {id,model, number,type, photo}
        admins


In CMD

mongo connect :
      mongosh "mongodb+srv://chinmayi:1234@cluster0.usdurkk.mongodb.net/"


// show databases
  use trainer_app_db
  db.trainers.insertOne({"name":"chinmayi","skills":"js","photo":""})  //creating the document in trainers
  show collections //list of collections on db
  db.trainers.find() //get all the trainers documents
  db.trainers.updateOne({"name":"manya"},
       {$set:{"skills":"C#"}})
  db.trainers.deleteOne({"name":"manya"})  //delets the document
  db.admins.insertMany([{"email":"jathis@gmail.com","password":"1234","role":"Maneger"},
                       {"email":"jagdidh@gmail.com","password":"1234","role":"agent"}])
  db.admins.find() 
  db.admins.find({"email":"jathis@gmail.com"})    //give array of documents
  db.admins.findOne({"email":"jathis@gmail.com"})   //gives only one document
  

  


# MONGO DB
'''
  Building BLock: document
  !JSON document(BSON)
  
  RDBMS         MongoDB
  Database      Database      !Container fot data
  Table         Collection
  Rows          Documents
  Referential   Referential and Embedded
     model

'''


order
     useer details+billing address+billing details+prodeucts selected in cart
     == orderinfo+line items
     == {id,user_id,bill_amount,address,pay_mode,status}+
       [{id,product_id,order_id,qty,price,amount}]
    == Referential Modeling
       orders:
                id,  user_id,bill_amount,address,pay_mode, status
         order: 1,   10,     18000,       xyz,   gpay,     pending
         order_items: id,product_id,order_id,qty,price,amount
                      1, 1001,      1,       1,  16000, 16000
                      2, 4002,      1,       2,  1000,  2000
        ---

        In mongo
        orders
            [
                {id:1,user_id:10,bill_amount:18000,address:xyz,pay_mode:gpay,status:pending}
            ]

        order_items:
           [
               {id:1,product_id:1001,order_id:1,qty:1,price:16000,amount:16000},
               {id:2,product_id:4002,order_id:1,qty:2,price:1000,amount:2000}
               ....
           ]
    Embedded modeling:
           orders:
              [
                {id:1,user_id:10,bill_amount:18000,address:xyz,pay_mode:gpay,status:pending,
                items: 
                   [
                    {id:1,product_id:1001,qty:1,price:16000,amount:16000},
                    {id:2,product_id:4002,qty:2,price:1000,amount:2000}
                   ]},
                   ....
              ]
                

