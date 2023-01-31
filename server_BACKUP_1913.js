const express = require("express");

const app = express();
const port = 8080;


app.get('/hello', (req, res) => {
    var x;
    var y = 15;
    var numbers = [12, 75, 23, 2, 56, 84, 46, 157]
    var result = []

    for (let i in numbers) {
        x = numbers[i] / 2
        
        let operation = (x - y) * 2
        if (operation <= 20) {
            result.push(operation)
        }
<<<<<<< HEAD
        else print(x)
=======
        else result.push(x)
>>>>>>> feature-z
    }

    res.send(result)
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})