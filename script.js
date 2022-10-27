const { default: mongoose } = require("mongoose")
const User = require("./Users")

mongoose.connect("mongodb://localhost/testdb")



run()
async function run() {

    try {
        const user = await User.findOne({ name: "khalid" })
        // const user = await User.find().byName("khalid")
        // const user = await User.findById("63053651c5a180a91477cf7f")
        // const user = await User.find({name : "khalid"})
        //  const user = await User.where("name")
        // .equals("khalid")
        // .where("age")
        // .gt("20")
        // .populate("bestFreind") // show all the object of the bestFreind (join())
        // .limit(1) 

        // .select("age")
        // user[0].bestFreind = "63053651c5a180a91477cf7f"
        // user[0].save()   
        console.log(user)
        await user.save()
        // user.sayHi()
        onsole.log(user)
        console.log(user.namesEmail)
    } catch (e) {
        console.log(e.message)
    }
}

// we can use what we learn in mongodb here



// const user = await User.create({
//             name: "khalid",
//             age: 28,
//             email: "AAaaaaa@bb",
//             hobbis: ["swiming", "bowling"],
//             adress: {
//                 street: "Main st"
//             }
//         })
//         // const user = new User({name: "khalid",age: 20})  // create a user
//         // await user.save() // save this user to the database
//         // user.name = "sohayb"
//         // await user.save()          // update the name
//         console.log(user)

//         // user.createAt = 5
//         // await user.save() // nothing changed 


















