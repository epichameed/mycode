import { Router } from "express";
import teacherController from "../../controller/teacher/index.js";

const teacherRouter = Router()
teacherRouter.post("/", teacherController.create)
teacherRouter.get("/", teacherController.getAll);
teacherRouter.get("/:id", teacherController.getSingle);
teacherRouter.delete("/:id", teacherController.delete);
teacherRouter.put("/:id", teacherController.update);

export default teacherRouter;
