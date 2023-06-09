import React, { useState, useContext } from "react";
import axios from 'axios';
// import { BASE_URL} from "../../config";
import AuthContext from '../Context_API/AuthContex';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const options = {
    beginner: "Beginner",
    medium: "Medium",
    advanced: "Advanced",
};

const webDevOptions = {
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript",
    react: "React.js",
    vue: "Vuejs",
    nodejs: "Node.js",
    express: "Expressjs",
    mongodb: "MongoDB",
    sql: "SQL",
    java: "Java",
    php: "Php",
    python: "Python",
    cpp: "C/C++",
    testing: "Testing",
    git: "Git"
};

const dsOptions = {
    searching: "Searching",
    sorting: "Sorting",
    algorithm: "Algorithm",
    array: "Array",
    linkedlist: "Linkedlist",
    stack: "Stack",
    heap: "Heap",
    hashing: "Hashing",
    tree: "Tree",
    graph: "Graph",
};

const coreSubjOptions = {
    os: "Operating System",
    cn: "Computer Networks",
    oops: "Oops",
    dbms: "Database Management System",
    se: "Software Engineering"
};


export default function PostData() {
    const [question, setQuestion] = useState("");
    const [text, setText] = useState("");
    const [level, setLevel] = useState("");
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const { accessToken } = useContext(AuthContext);
    const [inputValue, setInputValue] = useState('');
    const [arrayValues, setArrayValues] = useState([]);



    const handleCategoryChange = (e) => {
        const value = e.target.value;
        setCategory(value);
        if (value === "webdev") {
            setSubCategory("");
        } else if (value === "ds") {
            setSubCategory("");
        } else if (value === "coresubj") {
            setSubCategory("");
        }
    };

    const handleSubCategoryChange = (e) => {
        const value = e.target.value;
        setSubCategory(value);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddToArray = (e) => {
        e.preventDefault();
        if (inputValue !== '') {
            setArrayValues([...arrayValues, inputValue]);
            setInputValue('');
        }
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        // Perform form submission logic here
        const formData = {
            qname: question,
            answer: text,
            cname: category,
            tagname: subCategory,
            photo:arrayValues,
            level: level
        }
        // console.log("form data",formData)
        console.log("cookies", accessToken);
        await axios.post(`${BASE_URL}add-question`, formData, { headers: { Authorization: accessToken } })
            // await axios.post(`${BASE_URL}add-question`, formData)
            .then((response) => {
                console.log("response", response.data);
            })
            .catch((error) => {
                console.log("Error from post data", error);
            });

        console.log("Form submitted!");
        console.log(question, text, level, category, subCategory,arrayValues);
        setQuestion("");
        setText("");
        setLevel("");
        setCategory("");
        setSubCategory("");
    }
    return (
        <div className="postFormCont">
            <form className="postForm">
                <div class="mb-3">
                    <label htmlFor="question" class="form-label">Question:</label>
                    <textarea
                        type="text"
                        id="question"
                        name="question"
                        class="form-control"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    ></textarea>
                </div>
                <div class="mb-3">
                    <label htmlFor="text" class="form-label">Answer:</label>
                    <textarea
                        type="text"
                        id="text"
                        name="text"
                        class="form-control"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>
                </div>

                {/* image link input  */}
                <div class="mb-3">
                    <label htmlFor="text" class="form-label">Image Link:</label>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Enter a value"
                    />
                    <button onClick={handleAddToArray}>Add to array</button>
                </div>

                {/* drop down for level */}
                <div class="dropdown">
                    <label htmlFor="level" class="form-label">Level:</label>
                    <select
                        id="level"
                        name="level"
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                    >
                        <option value="" class="dropdown-item">Select level</option>
                        {Object.entries(options).map(([key, value]) => (
                            <option key={key} value={key} class="dropdown-item" >
                                {value}
                            </option>
                        ))}

                    </select>
                </div>


                <br />
                <label htmlFor="category">Category:</label>
                <select
                    id="category"
                    name="category"
                    value={category}
                    onChange={handleCategoryChange}
                >
                    <option value="">Select category</option>
                    <option value="webdev">Web Development</option>
                    <option value="ds">Data Structure and Algorithm</option>
                    <option value="coresubj">Core Subject</option>
                </select>

                <br />
                {category === "webdev" && (
                    <div>
                        <label htmlFor="subCategory">Sub-Category:</label>
                        <select
                            id="subCategory"
                            name="subCategory"
                            value={subCategory}
                            onChange={handleSubCategoryChange}
                        >
                            <option value="">Select sub-category</option>
                            {Object.entries(webDevOptions).map(([key, value]) => (
                                <option key={key} value={key}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                {category === "ds" && (
                    <div>
                        <label htmlFor="subCategory">Sub-Category:</label>
                        <select
                            id="subCategory"
                            name="subCategory"
                            value={subCategory}
                            onChange={handleSubCategoryChange}
                        >
                            <option value="">Select sub-category</option>
                            {Object.entries(dsOptions).map(([key, value]) => (
                                <option key={key} value={key}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                {category === "coresubj" && (
                    <div>
                        <label htmlFor="subCategory">Sub-Category:</label>
                        <select
                            id="subCategory"
                            name="subCategory"
                            value={subCategory}
                            onChange={handleSubCategoryChange}
                        >
                            <option value="">Select sub-category</option>
                            {Object.entries(coreSubjOptions).map(([key, value]) => (
                                <option key={key} value={key}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                <br />
                <button type="submit" className="btn btn-primary" onClick={handleOnSubmit}>Post Data</button>
            </form>






        </div>
    )
}
