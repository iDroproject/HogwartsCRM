import React, { useEffect } from "react";
import { postStudent } from "../lib/api";
import "../App.scss";

class NewStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {}
    };
  }

  uploadData() {
    postStudent(this.state.student)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
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
          <h1>New student card</h1>
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
            onClick={() => this.uploadData()}
          >
            create
          </button>
        </div>
      </div>
    );
  }
}

export default NewStudent;

// import React, { useEffect } from "react";
// import MyContext from "../context/MyContext";
// import "../App.css";
// import { postStudent } from "../lib/api";

// class NewStudent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       student: {}
//     };
//   }
//   componentDidMount() {
//     this.uploadData();
//   }

//   uploadData() {
//     postStudent(this.state.student)
//       .then(res => {
//         console.log(res);
//       })
//       .catch(err => console.log(err));
//   }

//   handleFnameOnSubmit(event) {
//     const { student } = this.state;
//     student.first_name = event.target.value;
//     this.setState({ student: student });
//     console.log(student);
//   }

//   handleLnameOnSubmit(event) {
//     const { student } = this.state;
//     student.last_name = event.target.value;
//     this.setState({ student: student });
//     console.log(student);
//   }

//   render() {
//     const { student } = this.state;
//     return (
//       <div className="student-container">
//         <div className="student-info-box">
//           <h1>New student card</h1>
//           <div className="student-fname-lname">
//             <div>
//               First Name:
//               <input
//                 type="text"
//                 value={student.first_name}
//                 onChange={event => this.handleFnameOnSubmit(event)}
//               />
//             </div>
//             <div>
//               Last Name:
//               <input
//                 type="text"
//                 value={student.last_name}
//                 onChange={event => this.handleLnameOnSubmit(event)}
//               />
//             </div>
//           </div>
//           <button
//             className="student-edit-btn"
//             onClick={() => this.uploadData()}
//           >
//             create
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default NewStudent;
