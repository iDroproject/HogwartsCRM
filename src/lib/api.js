import axios from "axios";

export function getStudentList() {
  return axios.get("http://127.0.0.1:5000");
}

export function postTweet(newStudent) {
  return axios.post(
    "http://127.0.0.1:5000/student",
    {student: newStudent}
  );
}