function guestMiddleware (req, res, next) {
    if(req.session.userLogged) {
        return res.send('ya estas logueado');
    }
    next();
}

module.exports = guestMiddleware;