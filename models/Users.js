import mongoose from "mongoose";
import { User } from "./User.js";

export async function getUserOracleCredentials(userId) {
  try {
   console.log(userId);
    const users = await User.find({ _id: userId }); // This returns an array
    const user = users[0]; // Get the first user
    if (!user) {
      console.log("❌ User not found for ID:", userId);
      return null;
    }

    console.log("✅ Retrieved user:", user);
    return user;
  } catch (err) {
    console.log("❌ Error fetching user:", err.message);
    return null;
  }
}



export async function insertValue(user) {
   let res = await User.create(user);
   return res;
}