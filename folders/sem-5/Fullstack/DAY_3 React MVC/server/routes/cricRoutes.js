import express from "express";
import { cric } from "../models/cricSchema.js";
const app = express();

export const getCric = async (req, res) => {
  console.log("raised get request");
  try {
    const Crics = await cric.find();
    res.json(Crics);
    console.log(res);
  } catch (error) {
    console.log("error", error);
  }
};

export const postCric = async (req, res) => {
  console.log("inside post method ");
  try {
    const name = await req.body.name;
    const roll = await req.body.roll;
    const jno = await req.body.jno;
    const b1 = new cric({
      name,
      roll,
      jno,
    });
    const cricData = await b1.save();
    res.status(200).json(cricData);
  } catch (error) {
    console.log("error", error);
  }
};

export const patchCric = async (req, res) => {
  console.log("inside Patch method ");
  try {
    const a = parseInt(req.params.id);
    const data = await cric.findOneAndUpdate(
      { roll: a },
      { $set: { roll: a } },
      { new: true }
    );
    // data.name = "Captian";
    // const modifiedData = await data.save();
    res.json({ status: "ok" });

    console.log(data);
  } catch (error) {
    console.log("error", error);
  }
};
