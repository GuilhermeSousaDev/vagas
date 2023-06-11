var data =  require("./fakeData");

module.exports = function(req, res){

    const { name, job } =  req.body;

    const HTTP_BAD_REQUEST = 400;
    const HTTP_CREATED = 201;
    
    if (!name || !job) {
        return res.status(HTTP_BAD_REQUEST).send("The name and job are required");
    }

    const newUser = { 
        id: data.length + 1,
        name, 
        job,
        readed: 0,
    }

    data.push(newUser);
    
    res.status(HTTP_CREATED).send(newUser);

};