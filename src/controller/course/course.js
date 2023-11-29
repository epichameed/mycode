import courseModel from "../../model/course/course.js";
const courseController = {
  create: async (req, res) => {
    try {
      const { courseName, courseId, creditHours, phone } = req.body;
      const course = await courseModel.create({
        courseName,
        courseId,
        creditHours,
        phone,
      });
      return res.status(404).json({
        message: "course created",
        course,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },
  getAll: async (req, res) => {
    const courses = await courseModel.findAll({
      where: {
        courseName: "MERN",
      },
    });
    res.json({
      courses,
    });
  },
  getSingle: async (req, res) => {
    try {
      const { id } = req.params;
      const course = await courseModel.findOne({
        where: {
          id,
        },
      });
      if (!course) {
        return res.status(404).json({
          message: "Course not found",
        });
      }

      res.json({
        course,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const course = await courseModel.findOne({
        where: {
          id,
        },
      });
      if (!course) {
        return res.status(404).json({
          message: "course not found",
        });
      }

      await course.destroy();
      res.json({
        message: "Course deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { courseName, courseId, creditHours, phone } = req.body;

      const course = await courseModel.findOne({
        where: {
          id,
        },
      });
      if (!course) {
        return res.status(404).json({
          message: "Course not found",
        });
      }

      course.courseName = courseName;
      course.courseId = courseId;
      course.creditHours = creditHours;
      course.phone = phone;
      await course.save();

      res.json({
        message: "course Updated",
        course,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },
  //   create: (req, res) => {
  //     const { cnic } = req.params;
  //     if (!cnic) {
  //       res.status(400).json({
  //         message: "Please provide cnic",
  //       });
  //     }

  //     res.json({
  //       cnic,
  //       message: "Student create",
  //     });
  //   },
  //   getAll: (req, res) => {
  //     res.json({
  //       message: "All students",
  //     });
  //   },
  // };
};
export default courseController;
