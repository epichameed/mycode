import studentModel from "../../model/student/student.js";

const StudentController = {
  create: async (req, res) => {
    try {
      const { firstName, lastName, rollNo, phone } = req.body;
      // const student = new studentModel();
      // student.firstName = firstName;
      // student.lastName = lastName;
      // student.rollNo = rollNo;
      // student.phone = phone;
      // await student.save();
      const student = await studentModel.create({
        firstName,
        lastName,
        rollNo,
        phone,
      });
      return res.status(404).json({
        message: "student created",
        student,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },
  getAll: async (req, res) => {
    const students = await studentModel.findAll({
      where: {
        firstName: "Ali",
      },
    });
    res.json({
      students,
    });
  },
  getSingle: async (req, res) => {
    try {
      const { id } = req.params;
      const student = await studentModel.findOne({
        where: {
          id,
        },
      });
      if (!student) {
        return res.status(404).json({
          message: "Student not found",
        });
      }

      res.json({
        student,
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
      const student = await studentModel.findOne({
        where: {
          id,
        },
      });
      if (!student) {
        return res.status(404).json({
          message: "Student not found",
        });
      }

      await student.destroy();
      res.json({
        message: "Student deleted successfully",
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
      const { firstName, lastName, rollNo, phone } = req.body;

      const student = await studentModel.findOne({
        where: {
          id,
        },
      });
      if (!student) {
        return res.status(404).json({
          message: "Student not found",
        });
      }

      student.firstName = firstName;
      student.lastName = lastName;
      student.rollNo = rollNo;
      student.phone = phone;
      await student.save();

      res.json({
        message: "Student Updated",
        student,
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
export default StudentController;
