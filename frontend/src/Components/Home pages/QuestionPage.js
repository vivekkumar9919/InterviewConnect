import React, { useState, useEffect } from 'react';
// import { BASE_URL } from '../../config';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL


export default function QuestionPage({ selectedValue }) {

    const [question, setQuestion] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    // console.log("Base url ",BASE_URL);

    // calling API it fetch the question
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}get-Allquestions/`, {
                    params: {
                        tagname: selectedValue,
                    },
                });
                setQuestion(response.data.data);
                setFilteredQuestions(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [selectedValue]);

    const handlePrevPage = () => {
        setCurrentPage((currentPage) => currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage((currentPage) => currentPage + 1);
    };

    const getPageQuestions = () => {
        const startIndex = currentPage * 15;
        const endIndex = startIndex + 15;
        return filteredQuestions && filteredQuestions.length > 0 ? filteredQuestions.slice(startIndex, endIndex) : [];
    };


    const pageQuestions = getPageQuestions();






    // filter the question
    const showAll = () => {
        setFilteredQuestions(question);
        setCurrentPage(0);
    };
    const showBeginner = () => {
        const beginnerQuestions = question.filter((item) => item.level === "beginner");
        setFilteredQuestions(beginnerQuestions);
        setCurrentPage(0);
    };

    const showMedium = () => {
        const mediumQuestions = question.filter((item) => item.level === "medium");
        setFilteredQuestions(mediumQuestions);
        setCurrentPage(0);
    };

    const showAdvanced = () => {
        const advancedQuestions = question.filter((item) => item.level === "advanced");
        setFilteredQuestions(advancedQuestions);
        setCurrentPage(0);
    };

    return (
        <div id='QandACont'>
            <div className='separator'>
                <div className='line'></div>
                <h2>
                    {selectedValue.toUpperCase()}{' '}
                    {'Questions'.toUpperCase()}
                </h2>
                <div className='line'></div>
            </div>
            <div className='levelCont'>
                <button className='level' onClick={showAll}>All</button>
                <button className='level' onClick={showBeginner}>Beginner</button>
                <button className='level' onClick={showMedium}>Medium</button>
                <button className='level' onClick={showAdvanced}>Advanced</button>
            </div>

            <div className='QuestionCont'>
                <div className='accordion accordion-flush' id='accordionFlushExample'>
                    {question ? (
                        pageQuestions.map((item, index) => (
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
                                        <div class="d-flex justify-content-between w-100">
                                            <div>{index + 1}. <span dangerouslySetInnerHTML={{ __html: item.qname }}></span></div>
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
                                        Answer:- <br /> <span dangerouslySetInnerHTML={{ __html: item.answer }}></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className='d-flex justify-content-between mt-3'>
                    <button
                        className='btn  pageBtn'
                        onClick={handlePrevPage}
                        disabled={currentPage === 0}
                    >
                        Previous Page
                    </button>
                    <button
                        className='btn pageBtn'
                        onClick={handleNextPage}
                        disabled={pageQuestions.length < 15}
                    >
                        Next Page
                    </button>
                </div>
            </div>
        </div>
    );
}
