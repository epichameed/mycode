import teacherModel from "../../model/teacher/teacher.js";
const teacherController = {
  create: async (req, res) => {
    try {
      const { firstName, lastName, classes, section } = req.body;
      const teacher = await teacherModel.create({
        firstName,
        lastName,
        classes,
        section,
      });
      return res.status(404).json({
        message: "teacher arrived",
        teacher,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },
  getAll: async (req, res) => {
    const teachers = await teacherModel.findAll({
      where: {
        courseName: "MERN10",
      },
    });
    res.json({
      teachers,
    });
  },
  getSingle: async (req, res) => {
    try {
      const { id } = req.params;
      const teacher = await teacherModel.findOne({
        where: {
          id,
        },
      });
      if (!teacher) {
        return res.status(404).json({
          message: "Teacher not arrived",
        });
      }

      res.json({
        teacher,
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
      const teacher = await teacherModel.findOne({
        where: {
          id,
        },
      });
      if (!teacher) {
        return res.status(404).json({
          message: "teacher not arrived",
        });
      }

      await teacher.destroy();
      res.json({
        message: "teacher deleted successfully",
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
      const {  firstName, lastName, classes, section } = req.body;

      const teacher = await teacherModel.findOne({
        where: {
          id,
        },
      });
      if (!teacher) {
        return res.status(404).json({
          message: "teacher not arrived",
        });
      }

      teacher.firstName = firstName;
      teacher.lastName = lastName;
      teacher.class = classes;
      teacher.section = section;
      await teacher.save();

      res.json({
        message: "teacher Updated",
        teacher,
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
export default teacherController;
