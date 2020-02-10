import React from "react";
import { getStudentList } from "../lib/api";
import { Ring } from "react-awesome-spinners";
import MyContext from "../context/MyContext";
import StudentList from "./StudentList";
import Student from "./Student";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleData.bind(this);
    this.state = {
      isLoading: false,
      students: [],
    };
  }

  async handleData() {
    try {
      this.setState({ isLoading: true });
      const response = await getStudentList();
      this.setState({
        students: response.data.students,
        isLoading: false
      });
    } catch (e) {
      console.error("Server Failed ;/");
    }
  }

  componentDidMount() {
    
    this.handleData();
    // setInterval(()=>{this.handleData()}, 6000)
  }

  componentWillUnmount(){
    clearInterval(this.handleData);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <MyContext.Provider value={this.state}>
          {isLoading && (
          <div className="page-loader">
            <Ring />
          </div>
        )}
          <StudentList />
        </MyContext.Provider>
      </div>
    );
  }
}

export default Home;
