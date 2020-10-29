let express = require('express');
let router = express.Router();

let contactController  = require('../controllers/contact')

let passport = require('passport');

// helper function

function requireAuth(req, res, next){
  if(!req.isAuthenticated()){
    return res.redirect('/login');
  }
  next();
}

/* GET route for the Contact list page */
router.get('/',contactController.displayContactList);

/* GET route for Add page */
router.get('/add', requireAuth, contactController.displayAddContactPage);

/* POST route for Add page */
router.post('/add', requireAuth, contactController.processAddContactPage);

/* GET route for Edit page */
router.get('/edit/:id', requireAuth, contactController.displayEditContactPage);

/* POST route for Edit page */
router.post('/edit/:id', requireAuth, contactController.processEditContactPage);

/* GET to perform deletion */
router.get('/delete/:id', requireAuth, contactController.deleteContact);

module.exports = router;