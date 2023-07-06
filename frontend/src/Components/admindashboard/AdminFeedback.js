import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { BASE_URL } from '../../config';
const BASE_URL=process.env.REACT_APP_BASE_URL;

export default function AdminFeedback() {
    const [feedbackdata, setFeedbackData] = useState([]);

    useEffect(() => {
        const fetchFunc = async () => {
            await axios.get(`${BASE_URL}getAllComments`)
                .then((response) => {
                    console.log(response.data);
                    setFeedbackData(response.data.data);
                    console.log("this is feedback", feedbackdata)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        fetchFunc();
    }, [feedbackdata])
    return (
        <div>

            <div className="FeedbackHeading">Feedback Data {feedbackdata.length} </div>
            <div className="FeedbackDataCont">
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    {feedbackdata.map((item, index) => (
                        <div key={index+1}>
                            <div class="col">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">{index}. {item.name}</h5>
                                        <p class="card-text">{item.message}</p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-body-secondary">{item.email}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </div>
    )
}


