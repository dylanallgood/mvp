const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SavedTextSchema = new Schema({
  id: Number,
  date: { type: Date, default: Date.now },
  savedText: String,
});

let SavedText = mongoose.model('SavedText', SavedTextSchema);
SavedTextSchema.index({ id: 1 }, { uniqe: true }, { timestamps: true });
module.exports = SavedText;
