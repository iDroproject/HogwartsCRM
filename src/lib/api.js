import axios from "axios";

let id = getUrlVars()['ID']

export function getStudentList() {
  return axios.get("http://127.0.0.1:5000/students");
}
export function getStudentById() {
  //get parameter from url
  let id = getUrlVars()['ID']
  return axios.get(`http://127.0.0.1:5000/student/${id}`);
}

function getUrlVars() {
  let vars = {};
  let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}

export function updateStudentById(id, student) {
  return axios.put(`http://127.0.0.1:5000/edit_student/${id}`, student);
}

export function postStudent(newStudent) {
  return axios.post(
    "http://127.0.0.1:5000/create_student",
    newStudent
  );
}

export function removeStudent(id){
  return axios.delete(
    `http://127.0.0.1:5000/remove_student/${id}`
  )
}
