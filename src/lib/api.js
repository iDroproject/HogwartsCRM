import axios from "axios";

export function getStudentList() {
  return axios.get("http://127.0.0.1:5000/students");
}
export function getStudentById() {
  //get parameter from url
  let id = getUrlVars()['ID']
  return axios.get(`http://127.0.0.1:5000/students/${id}`);
}

function getUrlVars() {
  let vars = {};
  let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}

export function updateStudentById(id) {
  return axios.put(`http://127.0.0.1:5000/students/${id}/edit_student`, {student: true});
}

// export function postTweet(newStudent) {
//   return axios.post(
//     "http://127.0.0.1:5000/student",
//     {student: newStudent}
//   );
// }