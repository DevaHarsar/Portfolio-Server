const { default: mongoose } = require('mongoose')
const moongoose = require('mongoose')
 const projectSchema= new moongoose.Schema({
    title:{
        type:String,
        required:true,
    },
   desc: {
      type:String,
      required:true
    },
    img:{
      type:String,
      required:true
    }
 })

 const Projects = mongoose.model("Projects",projectSchema)
 module.exports = Projects