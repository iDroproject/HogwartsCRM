import axios from "axios";

export function getStudentList() {
  return axios.get("http://127.0.0.1:5000/students");
}
export function getStudentById() {
  console.log('gettting student by id: ');
  //get parameter from url
  let id = getUrlVars()['ID']
  console.log(id)
  return axios.get(`http://127.0.0.1:5000/students/${id}`);
}

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}
// export function postTweet(newStudent) {
//   return axios.post(
//     "http://127.0.0.1:5000/student",
//     {student: newStudent}
//   );
// }