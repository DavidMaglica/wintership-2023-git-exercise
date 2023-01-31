const { application } = require('express');

application.get('/hello', (req, res) => {
    res.send("Hello world!");
});

application.listen(3000, () => {
    console.log("Server listening on port 3000");
})