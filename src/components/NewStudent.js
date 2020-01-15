import React ,{useEffect} from "react";
import MyContext from "../context/MyContext"
import '../App.css' 

class NewStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: " "
        }
    }
    componentDidMount() {
        debugger
    }
    handleOnSubmit = event => {
        const textInput = event.target.value;
        console.log(textInput);
        this.state({
            content: textInput
        });
    }

    render() {
        return (
            <MyContext.Consumer>
            <div className="new-student-container">
                <div>
                    <p> test </p>
                </div>
            </div>
            </MyContext.Consumer>
        )
    }
}

export default NewStudent;