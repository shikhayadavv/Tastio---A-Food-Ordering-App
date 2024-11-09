import React from "react";

class UserClass extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    render(){
        const { name, location} = this.props;
        const { count, count2} = this.state;

        return (
            <div className="user-card">
                <h1>Count: {count}</h1> 

                <button onClick={ () => {
                    //NEVER UPDATE THE STATE VARIABLES DIRECTLY
                    this.setState({
                        count:this.state.count + 1,
                    });
                }}>Count Increase</button>
                
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h4>Contact: shikhayadav1703@gmail.com</h4>
            </div>
        );
    }
}

export default UserClass;