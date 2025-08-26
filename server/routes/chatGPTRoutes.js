import OpenAI from "openai";
import express from "express";
import * as dotenv from "dotenv";
// import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY }); //
//const openai = new OpenAI();

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from chatGPT route!" });
});

router.route("/").post(async (req, res) => {
  const prompt = req.body.prompt;
  console.log("prompt is", prompt);
  // const result = await openai.images.generate({
  //   model: "gpt-image-1",
  //   prompt: prompt,
  // });

  // const image_base64 = result.data[0].b64_json;
  // res.header("Access-Control-Allow-Origin", "*");
  // res.status(200).json({ photo: image_base64 }); //
  res.status(200).json({ promptfromserver: prompt });
});

export default router; //
