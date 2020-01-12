import React from "react";
import MyContext from "../context/MyContext.js";

const StudentList = props => {

    return (
      <div>
        <div className="list-constructor">
          <div className="list-info">
            <div className="field-id">ID</div>
            <div className="field-first-name">First Name</div>
            <div className="field-last-name">Last Name</div>
            <div className="field-time-created">Created on</div>
            <div className="field-time-created">Last Updated on</div>
          </div>
          <MyContext.Consumer>
            {({ addStudent, students }) => (
              <div>
                  {students.map(student => {
                    return (
                        <div className="list-row">
                            <div className="field-id">{student.id}</div>
                            <div className="field-first-name">{student.first_name}</div>
                            <div className="field-last-name">{student.last_name}</div>
                            <div className="field-time-created">{student.created_on}</div>
                            <div className="field-time-created">{student.updated_on}</div>
                        </div>
                    );
                })}
              </div>
            )}
          </MyContext.Consumer>
          <button className="new-student-btn">newStudent</button>
        </div>
      </div>
    );
  }

export default StudentList;
