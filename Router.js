
const UserLogic = require('./BL/UserLogic'),
    ExerciseLogic = require('./BL/ExerciseLogic'),
    LangLogic = require('./BL/LangLogic'),
    GeneralLogic = require('./BL/GeneralLogic')

module.exports = app => {

    // READ - Users (for test) - V
    app.get('/user', async (req, res) => {
        res.send(await UserLogic.read())
    })

    // login
    app.post('/user', async (req, res) => { })

    // register - V
    app.post('/register', async (req, res) => {
        try {
            let result = await UserLogic.register(req.body)
            res.send(result)
        }
        catch (err) {
            console.log(err);
            res.send({
                status: 400,
                message: err.message || err
            })
        }
    })

    // CREATE - Exercise
    app.post('', async (req, res) => {
        try {
            let result = await ExerciseLogic.create(req.body)
            res.send(result)
        }
        catch (err) {
            console.log(err);
            res.send({
                status: 400,
                message: err.message || err
            })
        }
    })

    // READ - Exercise - V
    app.get('/exercise/:id?', async (req, res) => {
        let result;
        try {
            if (req.params.id) {
                result = await GeneralLogic.getSingleExercise(req.params.id)
            }
            else {
                result = await ExerciseLogic.read()
            }
        }
        catch (err) {
            result = {
                status: 400,
                message: err.message || err
            }
        }
        res.send(result)
    })

    // UPDATE - Exercise
    app.post('/user', async (req, res) => { })

    // DELETE - Exercise
    app.post('/user', async (req, res) => { })

    // READ - Lang
    app.post('/user', async (req, res) => { })
}