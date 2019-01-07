const mongoose = require('mongoose');

module.exports.getVacancy = (req, res) => {
  const Vacancy = mongoose.model('vacancies');

  Vacancy.find().then(items => {
    res.status(200).json({ vacancies: items });
  });
};

module.exports.createVacancy = (req, res) => {
  const Model = mongoose.model('vacancies');

  let item = new Model({
    date: req.body.date,
    name: req.body.name,
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
      return res.status(201).json({ message: 'Вакансия успешно добавлена' });
    })
    .catch(err => {
      res.status(400).json({
        message: `При добавлении вакансии произошла ошибка: ${err.message}`
      });
    });
};

module.exports.deleteVacancy = (req, res) => {
  const id = req.params.id;
  const Model = mongoose.model('vacancies');

  Model.findByIdAndRemove(id)
    .then(item => {
      if (!!item) {
        res.status(200).json({ message: 'Вакансия успешно удалена' });
      } else {
        res.status(404).json({ message: 'Вакансия не найдена' });
      }
    })
    .catch(err => {
      res.status(400).json({
        message: `При удалении вакансии произошла ошибка: ${err.message}`
      });
    });
};