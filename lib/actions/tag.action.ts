"use server"

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetTopInteractedTagsParams } from "./shared.types";

export async function getTopInteracttedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();
    const {userId}=params;
    const user = await User.findById(userId);

    if(!user){
      throw new Error("User not found")
    }
    return [{_id:"1",name:"tag1"},{_id:"2",name:"tag2"}]; //@todo implement this method, for now just returning dummy data
  } catch (error) {
    console.log(error);
    throw error;
  }
}