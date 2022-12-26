const mongooose = require('mongoose');
const classSchema = new mongooose.Schema({
    // Your code goes here
    // _id : Number,
    class: {type : String,required:true},
    studentsCount :{type : Number,required:true},
    
})

const MyClass = mongooose.model('myclass', classSchema);



module.exports = MyClass;