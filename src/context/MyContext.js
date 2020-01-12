import React from "react";

const MyContext = React.createContext({
  students: [],
  addStudent: student => {}
});

export default MyContext;
