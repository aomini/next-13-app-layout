import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  firstName: String,
  lastName: String,
});

const User = models.User || model("User", UserSchema);
export default User;
