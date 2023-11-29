import studentModel from "../model/student/student.js";
import courseModel from "../model/course/course.js";
import teacherModel from "../model/teacher/teacher.js";
import productModel from "../model/product/product.js";

const dbInit = async () => {
  await studentModel.sync({
    alter: true,
    force: false,
  });
  await courseModel.sync({
    alter: true,
    force: false,
  });
  await teacherModel.sync({
    alter: true,
    force: false,
  });
  await productModel.sync({
    alter: true,
    force: false,
  });
};



export default dbInit;
