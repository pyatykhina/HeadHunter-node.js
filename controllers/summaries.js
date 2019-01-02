module.exports.getSummariesPage = (req, res, next) => {
    res.render('layouts/summaries', { title: 'Summaries' });
}