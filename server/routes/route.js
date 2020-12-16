const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/data', controller.get_text);
router.post('/data', controller.post_text);
router.delete('/data', controller.delete_text);

module.exports = {
  router,
};
