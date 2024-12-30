import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className=" bg-gradient-to-b from-blue-100 to-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Contact Us</h1>
                <p className="text-center text-gray-700 mb-8">
                    Have questions or feedback? We’d love to hear from you!
                </p>

                <form className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <label className="block font-semibold text-gray-600 mb-1" htmlFor="name">Name</label>
                        <div className="flex items-center border border-gray-300 p-2 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                            <FaUser className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                id="name"
                                className="w-full outline-none text-gray-700"
                                placeholder="Your Name"
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block font-semibold text-gray-600 mb-1" htmlFor="email">Email</label>
                        <div className="flex items-center border border-gray-300 p-2 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                            <FaEnvelope className="text-gray-400 mr-2" />
                            <input
                                type="email"
                                id="email"
                                className="w-full outline-none text-gray-700"
                                placeholder="Your Email"
                            />
                        </div>
                    </div>

                    {/* Message Field */}
                    <div>
                        <label className="block font-semibold text-gray-600 mb-1" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            className="w-full border border-gray-300 p-3 rounded-md outline-none text-gray-700 focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Message"
                            rows="4"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
                    >
                        <FaPaperPlane className="mr-2" /> Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
