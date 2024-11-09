import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is About section of our web page </h2>
            {/* <User name ={"Shikha Yadav (function)"}/> */}

            <UserClass name = {"Shikha (class)"}/>
        </div>
    );
};

export default About;