module.exports = function (app) {
    var dust2 = app.controllers.dust2;
    app.get("/dust2", dust2.index);
}