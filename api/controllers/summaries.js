const mongoose = require('mongoose');

module.exports.getSummary = (req, res) => {
  const Summary = mongoose.model('summaries');

  Summary.find().then(items => {
    res.status(200).json({ summaries: items });
  });
};

module.exports.createSummary = (req, res) => {
  const Model = mongoose.model('summaries');

  let item = new Model({
    date: req.body.date,
    title: req.body.title,
    phone: req.body.phone,
    salary: req.body.salary,
    town: req.body.town,
    email: req.body.email,
    category: req.body.category,
    text: req.body.text
  });

  item
    .save()
    .then(item => {
      return res.status(201).json({ message: 'Резюме успешно добавлено' });
    })
    .catch(err => {
      res.status(400).json({
        message: `При добавлении резюме произошла ошибка: ${err.message}`
      });
    });
};

module.exports.deleteSummary = (req, res) => {
  const id = req.params.id;
  const Model = mongoose.model('summaries');

  Model.findByIdAndRemove(id)
    .then(item => {
      if (!!item) {
        res.status(200).json({ message: 'Резюме успешно удалено' });
      } else {
        res.status(404).json({ message: 'Резюме не найдено' });
      }
    })
    .catch(err => {
      res.status(400).json({
        message: `При удалении резюме произошла ошибка: ${err.message}`
      });
    });
};