const express = require('express');
const router = express.Router();

const ctrlSummaries = require('../controllers/summaries');
const ctrlVacancies = require('../controllers/vacancies');

router.get('/summaries', ctrlSummaries.getSummary);
router.post('/summaries', ctrlSummaries.createSummary);
router.delete('/summaries/:id', ctrlSummaries.deleteSummary);

router.get('/vacancies', ctrlVacancies.getVacancy);
router.post('/vacancies', ctrlVacancies.createVacancy);
router.delete('/vacancies/:id', ctrlVacancies.deleteVacancy);

module.exports = router;
