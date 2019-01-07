const http = require('request');

const apiOptions = {
  server: "http://localhost:3005"
}

module.exports.getSummariesPage = (req, res, next) => {
    const pathAPI = '/api/summaries';
    const requestOptions = {
        url: apiOptions.server + pathAPI,
        method: 'GET'
    };
    let sendObj = {
        title: 'Summaries'
    };
    http(requestOptions, function (error, response, body) {
        res.render('layouts/summaries', Object.assign(sendObj, JSON.parse(body)));
    })
}

module.exports.addSummary = (req, res) => {
    const pathApi = '/api/summaries';
    const requestOptions = {
      url: apiOptions.server + pathApi,
      method: "POST",
      json: {
        date: req.body.date,
        name: req.body.name,
        phone: req.body.phone,
        salary: req.body.salary,
        town: req.body.town,
        email: req.body.email,
        category: req.body.category,
        text: req.body.text
      }
    };
  
    http(requestOptions, function (error, response, body) {
      res.redirect('/summaries?message=' + body.message);
    });
}