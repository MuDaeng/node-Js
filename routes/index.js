import express from 'express';
import routes from '../RoutesName';
import toPage from '../PageName';
const router = express.Router();

/* GET home page. */
router.get(routes.home, function(req, res, next) {
  res.render(toPage.home, { title: 'Express' });
});

module.exports = router;
