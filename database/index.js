const mongoose = require('mongoose');
const convo = require('/Users/ncassano/Desktop/Hack_Reactor/rpp2205-mvp/backUpData')
mongoose.connect('mongodb://localhost/SMLL_TLK', () => {
  console.log('Connected to MongoDB');
});

const SMLL_TLK_SCHEMA = new mongoose.Schema({
  category: String,
  text: String,
  keywords: Array,
  seenBefore: Boolean
});

const TLK = mongoose.model('TLK', SMLL_TLK_SCHEMA);

let insert = async (array) => {
  for (var i = 0; i < array.length; i++) {
    const Inserted = new TLK({
      category: array[i].category,
      text: array[i].text,
      keywords: array[i].keywords,
      seenBefore: array[i].seenBefore
      })
      Inserted.save()
    }
    return
}

let remove = async () => {
  TLK.deleteMany({seenBefore: false})
  return
}



let find = (cat) => {
  console.log('FIND WAS CALLED')
  return TLK.find({})
    .then((total) => {
      if (!total.length) {
        console.log('EMPTY')
        insert(convo.data)
      }
      return convo.data
    })
    .then(() => {
      console.log('FULL!')
      return TLK.find(cat)
    })
  }

module.exports = {
find: find,
insert: insert,
remove: remove
}