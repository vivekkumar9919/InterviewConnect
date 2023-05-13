import React, { useState, useEffect, useContext } from "react";
import axios from 'axios'
// import { BASE_URL } from "../../config";
import AuthContext from "../Context_API/AuthContex";
const BASE_URL = process.env.REACT_APP_BASE_URL;

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


export default function GetData() {
  const [questions, setQuestions] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalQuestion, setModalQuestion] = useState({});
  // const [deleteQuestionId, setDeleteQuestionId] = useState("");
  const [updateFlag, setUpdateFlag] = useState(false);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const { accessToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedTag) {
        try {
          const response = await axios.get(`${BASE_URL}get-Allquestions/`, {
            params: {
              tagname: selectedTag,
            },
          });
          setQuestions(response.data.data);
          // console.log(response.data);
          // console.log(questions);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchData();
  }, [selectedTag, updateFlag]);

  // const handleTagChange = (e) => {
  //   setSelectedTag(e.target.value);
  // };

  const handleEditClick = (question) => {
    setModalQuestion(question);
    setModalQuestion({
      ...question,
      photo: [...question.photo],
    });
    setShowModal(true);
    console.log("Edit button", modalQuestion);
    setShowModal(true);
  };

  const handleDeleteClick = (questionId) => {
    // console.log(questionId);
    // setDeleteQuestionId(questionId);
    console.log(showModal, questionId);
    let decision = window.confirm("Are you sure you want to delete this item?")
    if (decision)
      handleDeleteConfirm(questionId);
  };



  const handleModalSubmit = (modalquestion) => {
    axios.put(`${BASE_URL}update-question/${modalquestion._id}`, modalquestion, { headers: { Authorization: accessToken } })
      .then(() => {
        // Reload questions list after successful update
        axios.get(`${BASE_URL}get-Allquestions/?tagname=${selectedTag}`)
          .then((response) => {
            setQuestions(response.data);
          });
        setUpdateFlag(!updateFlag);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(modalquestion)
    setShowModal(false);
    setModalQuestion({});
  };

  const handleDeleteConfirm = (questionId) => {
    axios
      .delete(`${BASE_URL}delete-question/${questionId}`, { headers: { Authorization: accessToken } })
      .then(() => {
        // Reload questions list after successful deletion
        console.log(questionId);
        axios.get(`${BASE_URL}get-Allquestions/?tagname=${selectedTag}`)
          .then((response) => {
            setQuestions(response.data);
          });
        setUpdateFlag(!updateFlag);
      })
      .catch((error) => {
        console.log(error);
      });
    // setDeleteQuestionId("");
  };


  // way to select the 
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
    setSelectedTag(value);
  };

  // const handleEditClick = (question) => {
  //   setModalQuestion({
  //     ...question,
  //     photo: [...question.photo],
  //   });
  //   setShowModal(true);
  // };

  return (
    <div className="getDataCont">
      <div className="getDataForm">
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
      </div>

      {selectedTag && (
        <div className="getQuestionCont">
          <div className='accordion accordion-flush' id='accordionFlushExample'>
            {questions.length > 0 ? (
              questions.map((item, index) => (
                <div className='accordion-item' key={index}>
                  <h2 className='accordion-header'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target={`#collapse${index}`}
                      aria-expanded='false'
                      aria-controls={`collapse${index}`}
                    >
                      {/* {index + 1}. {item.qname} */}
                      <div class="d-flex justify-content-between w-100">
                        <div>{index + 1}. {item.qname}</div>
                        <div style={{ paddingRight: '10px' }}>{item.level}</div>

                      </div>
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionFlushExample'
                  >
                    <div className='accordion-body'>
                      Answer:- <br /> {item.answer}
                      <br />
                      <br />
                      {item.photo.length > 0 && item.photo.map((imageLink, index) => (
                        // eslint-disable-next-line 
                        imageLink && <div className="codeImgBox"><img key={index} src={imageLink} alt={`Image ${index}`} /> </div>

                      ))}
                      <br />
                      <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" onClick={() => handleEditClick(item)}>Edit</button>
                      {/* <button className="btn btn-primary"  onClick={()=>handleEditClick(item)}>Edit</button> */}
                      <button className="btn btn-danger" onClick={() => handleDeleteClick(item._id)}>Delete</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      )}


      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Update</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label" >Question:-</label>
                  <textarea className="form-control" id="recipient-name" value={modalQuestion.qname} onChange={(e) => setModalQuestion({ ...modalQuestion, qname: e.target.value })} />
                </div>
                <div className="mb-3">
                  <label for="message-text" className="col-form-label">Answer:</label>
                  <textarea className="form-control" id="message-text" value={modalQuestion.answer} onChange={(e) => setModalQuestion({ ...modalQuestion, answer: e.target.value })} ></textarea>
                </div>
                <div className="mb-3">
                  {modalQuestion.photo ? (modalQuestion.photo.map((link, index) => (
                    <div key={index}>
                      <label htmlFor={`photo${index}`}>Photo {index + 1}:</label>
                      <textarea
                        type="text"
                        id={`photo${index}`}
                        name={`photo${index}`}
                        value={link}
                        onChange={(e) => {
                          const updatedLinks = [...modalQuestion.photo];
                          updatedLinks[index] = e.target.value;
                          setModalQuestion({
                            ...modalQuestion,
                            photo: updatedLinks,
                          });
                        }}
                      ></textarea>
                    </div>
                  ))) : (<div>No photo</div>)}

                </div>
                <div class="form-group">
                  <label for="formLevel">Level</label>
                  <select class="form-control" id="formLevel" value={modalQuestion.level} onChange={(e) => setModalQuestion({ ...modalQuestion, level: e.target.value })}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={() => handleModalSubmit(modalQuestion)}>Update</button>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}





