show dbs
use database

db.inventory.insertone(
  {item:"item-1",qty:100,brand:"abc",size:{h:10,w:20,b:30}}
)


# Insert multiple documents into the collection
db.inventory.insertMany([
  { item: "item-1", qty: 100, brand: "abc", size: { h: 10, w: 20, b: 30 } },
  { item: "item-2", qty: 50, brand: "xyz", size: { h: 8, w: 15, b: 25 } },
  { item: "item-3", qty: 200, brand: "def", size: { h: 12, w: 18, b: 28 } },
  { item: "item-4", qty: 75, brand: "abc", size: { h: 9, w: 22, b: 32 } },
  { item: "item-5", qty: 150, brand: "ghi", size: { h: 11, w: 21, b: 29 } }
])
In this example, I've added 5 fake data documents to the "inventory" collection, each with relevant fields like item, qty, brand, and size. Feel free to adjust the data and fields to match your topic or use case.



db.inventory.find()
db.inventory.find({})
db.inventory.find().pretty()


db.inventory.find({
  $and: [
    { brand: "abc" },
    { qty: { $gte: 100 } }
  ]
})

db.inventory.find({
  $or: [
    { brand: "abc" },
    { brand: "xyz" }
  ]
})

db.inventory.find({
  brand: {
    $in: ["abc", "xyz", "def"]
  }
})

db.inventory.find({
  brand: {
    $in: ["abc", "xyz", "def"]
  }
}).limit(3)


//update
db.inventory.updateOne(
  { item: "item-1" },
  { $set: { qty: 150 } }
)

db.inventory.updateMany(
  { brand: "abc" },
  { $set: { brand: "new-brand" } }
)

db.inventory.updateOne(
  { item: "item-2" },
  {
    $set: {
      qty: 75,
      size: { h: 10, w: 18, b: 28 }
    }
  }
)


db.inventory.updateMany(
  { brand: "xyz" },
  { $inc: { qty: 10 } }
)

db.inventory.updateOne(
  { item: "item-3" },
  { $push: { sizes: { h: 14, w: 24, b: 34 } } }
)

//delete
db.inventory.deleteOne({ item: "item-1" })

db.inventory.deleteMany({})

db.inventory.deleteMany({})

db.inventory.updateOne(
  { item: "item-2" },
  { $unset: { brand: "" } }
)

db.inventory.updateOne(
  { item: "item-3" },
  { $pull: { sizes: { h: 14, w: 24, b: 34 } } }
)








//hmmmmmmmmmmmm

Certainly! Here are some other frequently used MongoDB commands and operations that you might find useful:

Query with Projection:
Retrieve documents with specific fields (projection) from the "inventory" collection:
db.inventory.find({}, { item: 1, qty: 1 })

Sort Documents:
Retrieve documents sorted by qty field in descending order:
db.inventory.find().sort({ qty: -1 })

Count Documents:
Count the number of documents where the brand is "abc":
db.inventory.countDocuments({ brand: "abc" })

Indexing:
Create an index on the brand field for faster queries:
db.inventory.createIndex({ brand: 1 })

Aggregation Pipeline:
Perform an aggregation operation to calculate average qty for each brand:
db.inventory.aggregate([
  { $group: { _id: "$brand", avgQty: { $avg: "$qty" } } }
])

Drop Collection:
Delete the entire "inventory" collection:
db.inventory.drop()

Backup and Restore:
Create a backup of the "inventory" collection and restore it:
mongodump --db mydb --collection inventory
mongorestore --db mydb --collection inventory dump/mydb/inventory.bson

Show Databases and Collections:
Show all available databases and collections:
show dbs
use mydb
show collections

Exit MongoDB Shell:
Exit the MongoDB shell:
exit

//
db.inventory.find().skip(4)

//we use skip and 
limit,to amke pagination,

eg:
pageNo=1,show=9 --> db.blogs.find().skip({pageNo-1}*show).limit(show) //9 blogs cards,at a time
