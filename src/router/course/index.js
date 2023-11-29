import { Router } from "express";
import courseController from "../../controller/course/course.js";

const courseRouter = Router()
courseRouter.post("/", courseController.create)
courseRouter.get("/", courseController.getAll);
courseRouter.get("/:id", courseController.getSingle);
courseRouter.delete("/:id", courseController.delete);
courseRouter.put("/:id", courseController.update);

export default courseRouter;
