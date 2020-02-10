import React from "react";
import { updateStudentById } from "../lib/api";

class EditStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {},
      studentInput: false
    };
  }

  componentDidMount() {
    this.updateData()
  }
  
  
  updateData() {
    let student_id = this.props.match.params['id'];
    updateStudentById(student_id, this.state.student).then(res => {
      console.log(res)
    }).catch(err => console.log(err));
  }

  handleFnameOnSubmit(event) {
    const { student } = this.state;
    student.first_name = event.target.value;
    this.setState({ student: student });
    console.log(student);
  }

  handleLnameOnSubmit(event) {
    const { student } = this.state;
    student.last_name = event.target.value;
    this.setState({ student: student });
    console.log(student);
  }

  render() {
    const { student } = this.state;
    return (
      <div className="student-container">
        <div className="student-info-box">
          <h1>Edit student card</h1>
          <div className="student-fname-lname">
            <div>
              First Name:
              <input
                type="text"
                value={student.first_name}
                onChange={event => this.handleFnameOnSubmit(event)}
              />
            </div>
            <div>
              Last Name:
              <input
                type="text"
                value={student.last_name}
                onChange={event => this.handleLnameOnSubmit(event)}
              />
            </div>
          </div>
          <button
            className="student-edit-btn"
            onClick={() => this.updateData()}
          >
            sumbit
          </button>
        </div>
      </div>
    );
  }
}

export default EditStudent;
