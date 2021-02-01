const formsController = require('../controllers').forms;
const questionsController = require('../controllers').questions;
const responsesController = require('../controllers').responses;
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Forms API!',
  }));

  app.post('/api/forms', formsController.create);
  app.get('/api/forms', formsController.list);
  app.get('/api/forms/:formId/questions', formsController.getQuestions);
  app.post('/api/forms/:formId/questions', questionsController.create);
  app.post('/api/forms/:formId/responses/new', responsesController.create);
  app.get('/api/forms/:formId/responses', responsesController.getResponses);

};