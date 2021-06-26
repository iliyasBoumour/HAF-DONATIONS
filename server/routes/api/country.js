const express = require('express');
const router = express.Router();
const axios = require('axios');
router.get('/country', async (req, res) => {
    console.log("test country");
    var data;
    await axios.get(`http://apilayer.net/api/validate?access_key=${process.env.KEY_NUMBER}&number=0778980987&country_code=MA`)
        .then(resp => {
            data = resp.data;
            console.log(`valide === ${resp.data.valid}`)
        })
        .catch(error => console.log(error));
    
    return res.status(200).json(data);
    
});

module.exports = router;