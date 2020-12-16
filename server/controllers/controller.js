const SavedText = require('../models/model');

const get_text = (req, res) => {
  SavedText.find()
    .sort({ date: -1 })
    .then((text) => {
      res.status(200).send(text);
    })
    .catch((err) => console.log(err));
};

const post_text = (req, res) => {
  let text = req.body.params.savedText;

  let newText = new SavedText({
    savedText: text,
  });

  newText
    .save()
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
};

const delete_text = (req, res) => {
  let text = req.query._id;

  SavedText.deleteOne({ _id: text })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  get_text,
  post_text,
  delete_text,
};
