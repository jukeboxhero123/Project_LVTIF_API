const Question = require('../models').Question;
const Option = require('../models').Option;

module.exports = {
  create(req, res) {
    return Question
      .create({
        label: req.body.label,
        type: req.body.type,
        order: req.body.order,
        formId: req.params.formId,
        options: req.body.options
      }, {
        include: [{
          model: Option,
          as: 'options'
        }]
      })
      .then(question => res.status(201).send(question))
      .catch(error => res.status(400).send(error));
  },
};