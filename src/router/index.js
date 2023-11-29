import { Router } from "express";
import studentRouter from "./student/index.js";
import productRouter from "./product/index.js";
import courseRouter from "./course/index.js";
import teacherRouter from "./teacher/index.js";
const allRoutes = Router();

allRoutes.use("/student", studentRouter);
allRoutes.use("/course", courseRouter);
allRoutes.use("/teacher", teacherRouter);
allRoutes.use("/product", productRouter);


export default allRoutes;
