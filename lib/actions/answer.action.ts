"use server"
import { connectToDatabase } from "../mongoose";
import { CreateAnswerParams } from "./shared.types";

export async function createAnswer(params: CreateAnswerParams) {
    try {
      connectToDatabase();
    }
    catch{
        console.log("error connecting to database")
    }
}