var express = require('express')
var router = express.Router()

const BASE_PATH = 'process-over-phone';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const START_PATH = '/v1_0-agent/contact-centre-agent/process-over-phone/confirmation';

router.get('/', function (req, res) {
    res.redirect(`${START_PATH}`);
});


module.exports = router 