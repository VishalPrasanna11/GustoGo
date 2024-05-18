import mongoose from"mongoose";

const userSchema = new mongoose.Schema({
    auth0id: {
        
            type: String,
            required: true,
        },

        email:{
            type: String,
        },
        name:{
            type: String,
        },
        addressLine1:
        {
            type: String,
        },
        addressLine2:
        {
            type: String,
        },
        city:{
            type: String,
        },
        state:{
            type: String,
        },
        zipCode:{
            type: String,
        },
        country:{
            type: String,
        },
        phone:{
            type: String,
        },
    }

);

const User = mongoose.model("User", userSchema);
export default User;