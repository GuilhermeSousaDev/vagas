var data = require('./fakeData');

module.exports = function(req, res){
    
    const { id } =  req.params;

    const HTTP_NOT_FOUND = 404;

    const user = data.find((user) => user.id == id);

    if (!user) {
        return res.status(HTTP_NOT_FOUND).send("User not Found");
    }

    res.send(`The User ${user.name} was read ${user.readed} times.`);

};