import { Request, Response } from "express";

const controller = {
  doThing: async (req: Request, res: Response) => {
    return res.status(200).json({ message: "Hello World!" });
  },
};

export default controller;
