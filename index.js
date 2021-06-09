
const PORT = 3000
const chalk = require('chalk')
const express = require('express')
const server = express()


server.listen(PORT, () => {
    console.log(chalk.bold.rgb(10, 100, 200)('THE SERVER IS UP ON PORT',PORT));
})



//OUR FIRST MIDDLEWARE
server.use((req, res,next) => {
    console.log("<____Body Logger START____>");
    console.log(req.body);
    console.log("<_____Body Logger END_____>");

    next();
})



