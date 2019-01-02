module.exports.getVacanciesPage = (req, res, next) => {
    res.render('layouts/vacancies', { title: 'Vacancies' });
}