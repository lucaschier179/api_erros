import { Router } from "express";
// import { BadRequestError} from "./helpers/api.ts"

const routes = Router()

export default routes.get("/", async (req, res) => {
  try {
    throw new Error("Erro");
    return res.json("Ok")
  } catch (error) {
    console.log("error")
    return res.status(500).json("")
  }
})

