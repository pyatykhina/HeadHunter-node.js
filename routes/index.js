var express = require('express');
var router = express.Router();

const ctrlHome = require('../controllers/homepage');
const ctrlVacancies = require('../controllers/vacancies');
const ctrlSummaries = require('../controllers/summaries');

/* GET home page. */
router.get('/', ctrlHome.getHomePage);

router.get('/vacancies', ctrlVacancies.getVacanciesPage);
router.post('/vacancies/add', ctrlVacancies.addVacancy);

router.get('/summaries', ctrlSummaries.getSummariesPage);
router.post('/summaries/add', ctrlSummaries.addSummary);

module.exports = router;
