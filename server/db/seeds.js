use endangered;
db.dropDatabase();

db.animals.insertOne({
  name: "test"
})
db.animals.insertOne({
  name: "test2"
})
db.animals.insertOne({
  name: "test3"
})
