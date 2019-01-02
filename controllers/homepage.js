module.exports.getHomePage = (req, res, next) => {
    res.render('layouts/index', { title: 'HeadHunter' });
}