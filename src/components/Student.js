import React from "react";
import { getStudentById } from "../lib/api";

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: []
    };
  }

  componentDidMount() {
    this.handleData();
  }

  async handleData() {
    try {
      const studentId = await getStudentById();
      console.log(studentId);
      const { data } = studentId;
      this.setState({ student: data.student });
    } catch (err) {
      console.error("Failed to get student ;/");
    }
  }

  render() {
    const student = this.state.student;

    return (
      <div className="student-container">
        <div className="student-info-box">
          <h1>Student card</h1>
          <div className="student-fname-lname">
            <div>first name: {student.first_name}</div>
            <div>last name: {student.last_name}</div>
          </div>
          <div className="student-skillz">
            <div>magic_skillz: {student.magic_skillz}</div>
          </div>
          <div className="student-desired-interested">
            <div>Desired magic skillz: </div>
            <div>Interested in course: </div>
          </div>
          <div className="student-created-updated">
            <div>Creation time: </div>
            <div>Last update time: </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Student;
