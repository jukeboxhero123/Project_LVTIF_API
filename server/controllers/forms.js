const question = require('../models/question');

const Form = require('../models').Form;
const Question = require('../models').Question;
const Option = require('../models').Option;

module.exports = {
  create(req, res) {
    return Form
      .create({
        title: req.body.title,
      })
      .then(form => res.status(201).send(form))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Form
      .findAll({
          include: [{
              model: Question,
              as: 'questions'
          }]
      })
      .then(forms => res.status(200).send(forms))
      .catch(error => res.status(400).send(error));
  },
  getQuestions(req, res) {
    return Form
      .findOne({
        where: {
          id: req.params.formId
        },
        include: [{
          model: Question,
          as: 'questions',
          include: [{
            model: Option,
            as: 'options'
          }]
        }]
      })
      .then(form => res.status(200).send(form))
      .catch(error => {res.status(400).send(error)});
  }
};