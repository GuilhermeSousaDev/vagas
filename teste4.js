var data =  require("./fakeData");

module.exports =  function(req, res) {
  
    const { id } =  req.params;
    const { name, job } = req.body;

    const HTTP_BAD_REQUEST = 400;
    const HTTP_NOT_FOUND = 404;

    if (!name || !job) {
        return res.status(HTTP_BAD_REQUEST).send("The name and job are required");
    }

    const findedUser = data.find((user) => user.id == id);

    if (!findedUser) {
        return res.status(HTTP_NOT_FOUND).send("User not Found");
    }

    findedUser.name = name;
    findedUser.job = job;

    res.send(findedUser);

};