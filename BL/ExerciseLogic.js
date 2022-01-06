const ExerciseController = require('../DL/controllers/ExerciseController')

async function create(data) {

    return ExerciseController.create(data)
}

async function read(_id) {
    let filter =  _id ? { _id } : {}
    return ExerciseController.read(filter)
}


async function update(data) {
    data.lastSeen = Date.now()
    return ExerciseController.update(data._id, data)
}

module.exports = {
    ...ExerciseController,
    create,
    read,
    update
}