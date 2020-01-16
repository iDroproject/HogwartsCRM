import React from "react";
import { updateStudentById } from "../lib/api";
import axios from "axios"

class EditStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        student: {},
    };
  }

  componentDidMount() {
    console.log(window.location.pathname);

    return axios.get(`http://127.0.0.1:5000/student/3/edit_student`).then((response) =>
        this.setState({
            student: response
        }));
    }
    

  render() {
      console.log(this.props.student, this.student, this.state)
    return (
      <div className="student-container">
        <div className="student-info-box">
          <h1>Student card</h1>
          <div className="student-fname-lname">
            {/* <div>first name: <input type="text" {student.first_name}/></div>
            <div>last name: <input type="text" {student.last_name}/></div>
          </div>
          <div className="student-skillz">
            <div>magic_skillz: {student.magic_skillz}</div> */}
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

export default EditStudent;
