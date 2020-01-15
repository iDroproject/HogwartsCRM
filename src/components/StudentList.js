import React, { useState } from "react";
import MyContext from "../context/MyContext.js";
import NewStudent from "./NewStudent";
import { Link } from "react-router-dom";
const StudentList = props => {
  const [addNewStudent, setAddNewStudent, getStudent, setGetStudent] = useState(
    false
  );

  function setNewStudentBool() {
    setAddNewStudent(true);
  }

  //   function redirectStudent(id) {
  //     console.log(`clicked ${id}`);
  //     return <Link to={`/students/${id}`}/>;
  //     // return <Redirect to={`/student/${id}`}/>;
  //     //    this.props.history.push('/student/'+id)
  //     //    redirect localhost:5000/student/id
  //   }

  return (
    <div>
      {!addNewStudent && (
        <div className="list-constructor">
          <table className="students-tablet">
            <tr className="list-info">
              <td className="field-id">ID</td>
              <td className="field-first-name">First Name</td>
              <td className="field-last-name">Last Name</td>
              <td className="field-time-created">Magic Skillz</td>
              <td className="field-time-created">Created on</td>
              <td className="field-time-created">Last Updated on</td>
              <td className="field-time-created"></td>
            </tr>
          </table>
          <MyContext.Consumer>
            {({ students }) => (
              <table className="students-tablet">
                  {console.log(students)}
                {students.map(student=> {
                  return (
                    <Link to={`/student/?ID=${student.id}`} >
                      <tr
                        className="list-row"
                      >
                        <td className="field id">{student.id}</td>
                        <td className="field first-name">
                          {student.first_name}
                        </td>
                        <td className="field last-name">{student.last_name}</td>
                        <td className="field-time-created">
                          {student.created_on}
                        </td>
                        <td className="field-time-created">
                          {student.updated_on}
                        </td>
                      </tr>
                    </Link>
                  );
                })}
              </table>
            )}
          </MyContext.Consumer>

          <button
            className="create-student-btn"
            onClick={() => setNewStudentBool()}
          >
            New Student
          </button>
        </div>
      )}
      {addNewStudent && <NewStudent />}
    </div>
  );
};

export default StudentList;
