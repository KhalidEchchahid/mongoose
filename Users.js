const mongoose = require("mongoose")

const adreessSchema = new mongoose.Schema(
    {
        street: String,
        city: String
    }
)
const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 100,
        validate: {
            validator: v => v % 2 === 0,  // if validate = false the message gonna show
            message: props => `${props.value} is not an even number`
        }
    },
    email: {
        type: String,
        minLength: 10,
        required: true,
        lowercase: true, // wakha dekhl upper ghadi yt7wel l lower l3ekss s7i7 
    },
    createAt: {
        type: Date,
        immutible: true, // we can't change the value 
        default: () => Date.now(),
    },
    updateAt: {
        type: Date,
        default: () => Date.now(),
    },
    bestFreind: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    hobbis: [String],
    adress: adreessSchema
})

userSchema.methods.sayHi = function () {     // we can't use an errow function here 
    console.log(`hi my name is ${this.name}`)
}
userSchema.statics.findByName = function (name) {
    return this.find({ name: new RegExp(name, 'i') }) // get all users that have that name 
}
userSchema.query.byName = function (name) {    // hadi ghir query khass dir l function li ghadi tkhdem 3liha 3ad ndiro hadi
    return this.where({ name: new RegExp(name, 'i') })
}

userSchema.virtual('namesEmail').get(function () {
    return `${this.name} <${this.email}>`
})

userSchema.pre('save', function (next) { // before save | remove | validate      the modul run this function
    this.updateAt = Date.now()
    next()        // evrey time I go to save a user I want to take the updated Fieled and contunue at rest my code
})

userSchema.post('save', function (doc, next) { // after save | remove | validate      the modul run this function
    doc.sayHi()
    next()        // evrey time I go to save a user I want to take the updated Fieled and contunue at rest my code
})

module.exports = mongoose.model("User", userSchema)