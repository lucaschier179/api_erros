import { Router } from "express";
import { ApiError, BadRequestError } from "./helpers/apiError";

const routes = Router()

routes.get("/", async (req, res) => {
  throw new ApiError("Erro lancado no api error", 404)
})

export default routes

if (!teste) {
  throw new BadRequestError("Página não encontrada!")
}