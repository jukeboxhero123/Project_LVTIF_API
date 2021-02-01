const Response = require('../models').Response;
const Answer = require('../models').Answer;

module.exports = {
  create(req, res) {
    return Response
      .create({
        name: req.body.name,
        formId: req.params.formId,
        answers: req.body.answers
      }, {
        include: [{
          model: Answer,
          as: 'answers'
        }]
      })
      .then(response => res.status(201).send(response))
      .catch(error => res.status(400).send(error));
  },
  getResponses(req, res) {
    return Response
      .findAll({
        where: {
          formId: req.params.formId
        },
        include: [{
          model: Answer,
          as: 'answers'       
        }]
      })
      .then(forms => res.status(200).send(forms))
      .catch(error => res.status(400).send(error));
  }
};