const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080; 

app.use(cors());

app.get('/experience', (req, res) => {
    console.log('Experience sent');
    res.json({
        "company-logo": "blank-image",
        "company-name": "VideoIt",
        "company-title": "Full stack developer intern",
        "exp-duration": "April 2025 - Current",
        "exp-bulletin": "loremempsum",
        "exp-handles": "none",
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
