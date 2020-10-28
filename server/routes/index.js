let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET Home page. */
router.get('/', indexController.displayHomePage);

/* GET Home page. */
router.get('/home', indexController.displayHomePage);

/* GET ABout Me page. */
router.get('/about', indexController.displayAboutMePage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.dispplayServicesPage);

/* GET Contact Me page. */
router.get('/contact', indexController.displayContactMePage);

/* function to download resume */
router.get('/about/download', function(req, res, next){
/* Specify path to file that will be downloadable */
  const file = "public/assets/other/ParthPatel-Resume.pdf"
  res.download(file);
});

module.exports = router;
