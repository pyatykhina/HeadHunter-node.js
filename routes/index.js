var express = require('express');
var router = express.Router();

const ctrlHome = require('../controllers/homepage');
const ctrlVacancies = require('../controllers/vacancies');
const ctrlSummaries = require('../controllers/summaries');

/* GET home page. */
router.get('/', ctrlHome.getHomePage);

router.get('/vacancies', ctrlVacancies.getVacanciesPage);

router.get('/summaries', ctrlSummaries.getSummariesPage);

module.exports = router;

