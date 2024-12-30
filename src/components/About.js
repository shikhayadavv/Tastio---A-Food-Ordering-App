import img from "../assets/userPhoto.jpg";

const About = () => {
    return (
        <div className="about-section bg-gradient-to-b from-blue-100 to-white p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto mt-12">
            {/* Title */}
            <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-8 tracking-tight">
                About <span className="text-blue-500">Us</span>
            </h1>
            
            {/* Profile Section */}
            <div className="text-center mb-8">
                <img 
                    src={img} 
                    alt="Shikha" 
                    className="rounded-full mx-auto w-40 h-40 mb-6 shadow-lg border-4 border-blue-300"
                />
                <h2 className="text-3xl text-blue-600 font-bold">Hello! I’m <span className="bold">Shikha</span></h2>
            </div>
            
            {/* About Paragraph */}
            <p className="text-gray-700 text-center text-xl leading-relaxed mb-8 px-6">
                A <strong className="text-blue-600">passionate Frontend Developer</strong> dedicated to crafting simple yet visually appealing applications. 
                I have created <strong className="text-blue-600 italic">Tastio</strong>, your go-to app for discovering delightful food experiences.
            </p>
            
            {/* Skills Section */}
            <ul className="list-none text-gray-800 space-y-6 px-8 text-lg">
                <li className="flex items-start space-x-4">
                    <span className="text-blue-500 text-2xl">&#10003;</span>
                    <p>
                        <strong className="text-blue-600">Expertise:</strong> Creating responsive and dynamic web interfaces using <strong>React.js</strong>, 
                        <strong> HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>.
                    </p>
                </li>
                <li className="flex items-start space-x-4">
                    <span className="text-blue-500 text-2xl">&#10003;</span>
                    <p>
                        <strong className="text-blue-600">Focused Design:</strong> Crafting user-centered designs that enhance user experiences with clean and maintainable code.
                    </p>
                </li>
                <li className="flex items-start space-x-4">
                    <span className="text-blue-500 text-2xl">&#10003;</span>
                    <p>
                        <strong className="text-blue-600">API Integration:</strong> Proficient in integrating APIs to add dynamic, data-driven features to applications.
                    </p>
                </li>
                <li className="flex items-start space-x-4">
                    <span className="text-blue-500 text-2xl">&#10003;</span>
                    <p>
                        <strong className="text-blue-600">Continuous Growth:</strong> Always learning and adapting to the latest frontend technologies and best practices.
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default About;
