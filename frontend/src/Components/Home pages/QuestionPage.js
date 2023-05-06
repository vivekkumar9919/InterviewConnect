import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../config';
import axios from 'axios';
// comment1
export default function QuestionPage({ selectedValue }) {

    const [question, setQuestion] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [filteredQuestions, setFilteredQuestions] = useState([]);

    const handlePrevPage = () => {
        setCurrentPage((currentPage) => currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage((currentPage) => currentPage + 1);
    };

    const getPageQuestions = () => {
        const startIndex = currentPage * 15;
        const endIndex = startIndex + 15;
        return filteredQuestions.slice(startIndex, endIndex);
    };

    const pageQuestions = getPageQuestions();


    // calling API it fetch the question
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}get-questions/`, {
                    params: {
                        tagname: selectedValue ,
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



    // filter the question
    const showAll = () => {
        setFilteredQuestions(question);
        setCurrentPage(0);
      };
    const showBeginner = () => {
        const beginnerQuestions = question.filter((item) => item.level === "Beginner");
        setFilteredQuestions(beginnerQuestions);
        setCurrentPage(0);
      };
    
      const showMedium = () => {
        const mediumQuestions = question.filter((item) => item.level === "Medium");
        setFilteredQuestions(mediumQuestions);
        setCurrentPage(0);
      };
    
      const showAdvanced = () => {
        const advancedQuestions = question.filter((item) => item.level === "Advanced");
        setFilteredQuestions(advancedQuestions);
        setCurrentPage(0);
      };


    return (
        <div id='QandACont'>
            <div className='separator'>
                <div className='line'></div>
                <h2>
                    {question.length}+ {selectedValue.toUpperCase()}{' '}
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
                    {question.length > 0 ? (
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
