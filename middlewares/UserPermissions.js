const data = require('../fakeData');

function UserPermission(req, res, next) {
    const userId = req.headers['user'];
    const permitedUsersJob = ["CEO", "ADMIN", "MANAGER"];

    const HTTP_BAD_REQUEST = 400;
    const HTTP_NOT_FOUND = 404;
    const HTTP_FORBIDDEN = 403;

    if (!userId) {
        return res.status(HTTP_BAD_REQUEST).send("Header User is Required");
    }

    const user = data.find((user) => user.id == userId);

    if (!user) {
        return res.status(HTTP_NOT_FOUND).send("User not Found");
    }

    if (!permitedUsersJob.includes(user.job)) {
        return res.status(HTTP_FORBIDDEN).send("You don't have permission for this action."); 
    }

    next();
}

module.exports = UserPermission;