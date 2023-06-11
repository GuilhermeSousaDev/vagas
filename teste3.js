var data =  require("./fakeData");

module.exports = function(req, res) {
  
    const { id } =  req.params;

    const HTTP_NOT_FOUND = 404;

    const userIndex = data.findIndex((user) => user.id == id);

    if (userIndex < 0) {
        return res.status(HTTP_NOT_FOUND).send("User not Found");
    }

    data.splice(userIndex, 1);

    res.send("success");

};