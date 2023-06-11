var data =  require("./fakeData");

const getUser = ( req, res ) => {

    const { id } = req.params;

    const HTTP_NOT_FOUND = 404;

    const user = data.find((findedUser) => findedUser.id == id);

    if (!user) {
        return res.status(HTTP_NOT_FOUND).send("User not Found");
    }

    user.readed += 1;
    res.send(user);

};

const getUsers = ( _, res ) => {
    
    res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};