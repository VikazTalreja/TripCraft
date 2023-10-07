import UserModel from "../models/UserModel.js";
import TripData from "../models/TripData.js";

const userData = new UserModel({
  name: "Harshvardhan Rijhwani",
  email: "harshrijhwani27@gmail.com",
  password: "localhost04",
});

userData.save();
