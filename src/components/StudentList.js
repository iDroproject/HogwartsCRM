import React, { useState } from "react";
import MyContext from "../context/MyContext.js";
import NewStudent from "./NewStudent";
import { Link, useHistory } from "react-router-dom";
const StudentList = props => {
  const [addNewStudent, setAddNewStudent, getStudent, setGetStudent] = useState(
    false
  );
  const history = useHistory()

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

{/* <div class="flex-table row" role="rowgroup">
  <div class="flex-row first" role="cell"><span class="flag-icon flag-icon-gb"></span> United Kingdom</div>
  <div class="flex-row" role="cell">Stonehenge, Windsor and Bath with Pub Lunch </div>
  <div class="flex-row" role="cell">19 Sep, 1p.m.</div>
  <div class="flex-row" role="cell">US$500</div>
</div> */}

  return (
    <div>
      {!addNewStudent && (
        <div className="list-constructor">
          <div className="table-container" role="table" aria-label="Destinations">
          <div className="flex-table header" role="rowgroup">
              <div className="flex-row first" role="columnheader" value="ID">ID</div>
              <div className="flex-row first" role="columnheader" value="First" >First Name</div>
              <div className="flex-row first" role="columnheader" value="Second" >Last Name</div>
              <div className="flex-row first" role="columnheader" value="MagicSkillz" >Magic Skillz</div>
              <div className="flex-row first" role="columnheader" value="Created" >Created on</div>
              <div className="flex-row first" role="columnheader" value="Updated" >Last Updated on</div>
            </div>
          </div>
          <MyContext.Consumer>
            {({ students }) => (
              <div className="table-container" role="table" aria-label="Destinations">
                  {console.log(students)}
                {students.map(student=> {
                  return (
                    <Link to={`/student/?ID=${student.id}`} >
                      <div
                        className="flex-table row" role="rowgroup"
                      >
                        <div className="flex-row first" role="cell">{student.id}</div>
                        <div className="flex-row" role="cell">
                          {student.first_name}
                        </div>
                        <div className="flex-row" role="cell">{student.last_name}</div>
                        <div className="flex-row" role="cell">
                          {student.magic_skillz}
                        </div>
                        <div className="flex-row" role="cell">
                          {student.created_on}
                        </div>
                        <div className="flex-row" role="cell">
                          {student.update_on}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </MyContext.Consumer>
          {/* <Link to={{ pathname:`/new_student`}}> */}
          <div className="newstudent-btn-container">
          <button
            className="create-student-btn"
            onClick={() => history.push('/new_student')}
          >
            New Student
          </button>
          </div>
          {/* </Link> */}
        </div>
      )}
      {addNewStudent && <NewStudent />}
    </div>
  );
};

export default StudentList;
