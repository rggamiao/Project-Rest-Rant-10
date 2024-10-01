const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  // ... existing fields ...
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
})

module.exports = mongoose.model('Place', placeSchema)