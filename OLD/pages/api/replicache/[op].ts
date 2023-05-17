import { NextApiRequest, NextApiResponse } from "next";
import { handleRequest } from "replicache-nextjs/lib/backend";
import { mutators } from "../../../src/mutators";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await handleRequest(req, res, mutators);
  } catch (error) {
    console.error("Error in handleRequest:", error);
    res.status(500).json({ error: "An error occurred during the request" });
  }
};
