module.exports = app => {
    app.get('/api/info', ( req, res ) => {
        res.send({ 
            ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
            lang: req.headers["accept-language"].split(",")[0],
            software: req.headers["user-agent"].split("(",2)[1].split(")")[0],
         })
    })
}
