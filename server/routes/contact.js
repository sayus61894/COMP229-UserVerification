let express = require('express');
let router = express.Router();

let contactController  = require('../controllers/contact')

/* GET route for the Contact list page */
router.get('/', contactController.displayContactList);

/* GET route for Add page */
router.get('/add', contactController.displayAddContactPage);

/* POST route for Add page */
router.post('/add', contactController.processAddContactPage);

/* GET route for Edit page */
router.get('/edit/:id', contactController.displayEditContactPage);

/* POST route for Edit page */
router.post('/edit/:id', contactController.processEditContactPage);

/* GET to perform deletion */
router.get('/delete/:id', contactController.deleteContact);

module.exports = router;