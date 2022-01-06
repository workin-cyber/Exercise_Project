require('./db')
const execModel = require('./models/ExerciseModel');

const execTemplate = {
    icon:"icon.jpg",
    title: "My First Exercise",
    details:"bla bla bla bla bla bla",
    status: 'draft',
    //creator_id: new mongoose.SchemaTypes.ObjectId(),
    exec_type: "short",
    difficulty: "medium",
    tags: ['Loops', 'Functions'],
    prog_lang: "61d2eec83a6c92050a52b0de",
    dev_time: "",
    content: {
        content:"bla bla bla",
        sources : [{
            name: "Link1",
            url : "https://google.com"
        }]
    },
    solution:"my solution" ,
}

async function create(data){
    return  console.log( await execModel.create(data));
}

async function readAll(id){
    return  console.log( await execModel.find({}));
}
console.log("start create");
// createMyExec(execTemplate);
readAll()
