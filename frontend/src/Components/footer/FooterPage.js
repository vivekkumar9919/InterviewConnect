import React from 'react'

export default function FooterPage() {
    return (
        <div className='footerCon'>
            <div id='contactNav'></div>
            <footer class="padding_4x">
                <div class="flex">
                    <section class="flex-content padding_1x">
                        <h3>InterviewConnect</h3>
                        <p>Welcome to InterviewConnect - your one-stop destination for acing your next software developer interview!</p>
                        <p style={{ color: 'white' }}>interviewconnect2023@gmail.com</p>
                    </section>
                    <section class="flex-content padding_1x">
                        <h3>Quick Links</h3>
                        <a href="/">Home</a>
                        <a href="/" aria-disabled="true" >Quiz</a>
                        <a href="#reviewNav">Reviews</a>
                        <a className="nav-link nav-element" href='/' data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Feedback</a>

                    </section>
                    <section class="flex-content padding_1x">
                        <h3>Features</h3>
                        <a href="/">Subject Wise Questions</a>
                        <a href="/">Topic Wise Questions</a>
                        <a href="/">Sorted by Level</a>
                        <a href="/">Curated Content</a>
                    </section>
                    <section class="flex-content padding_1x">
                        <h3>Teams</h3>
                        <div>
                            <div class="vivek">
                                <section >
                                    <p>Vivek Kumar</p>
                                </section>
                                <section class="flex padding_1x">
                                    <a href="/"><i class="fa fa-linkedin"></i></a>
                                    <a href="/"><i class="fa fa-github"></i></a>
                                    <a href="/"><i class="fa fa-facebook"></i></a>
                                    <a href="/"><i class="fa fa-instagram"></i></a>
                                </section>
                            </div>
                            <div class="satyam">
                                <section >
                                    <p>Satyam Kumar</p>
                                </section>
                                <section class="flex padding_1x">
                                    <a href="/"><i class="fa fa-linkedin"></i></a>
                                    <a href="/"><i class="fa fa-github"></i></a>
                                    <a href="/"><i class="fa fa-facebook"></i></a>
                                    <a href="/"><i class="fa fa-instagram"></i></a>
                                </section>
                            </div>

                        </div>
                    </section>


                    {/* <section class="flex-content padding_1x">
                        <h3>Newsletter</h3>
                        <p>You can trust us. we only send promo offers,</p>
                        <fieldset class="fixed_flex">
                            <input type="email" name="newsletter" placeholder="Your Email Address" />
                            <button class="btn btn_2">Subscribe</button>
                        </fieldset>
                    </section> */}
                </div>
                <div class="flex">
                    <section class="flex-content padding_1x">
                        <p id='copy'>Copyright ©2023 All rights reserved interviewConnect</p>
                    </section>
                    {/* <section class="flex-content padding_1x">
                        <a href="/"><i class="fa fa-facebook"></i></a>
                        <a href="/"><i class="fa fa-twitter"></i></a>
                        <a href="/"><i class="fa fa-dribbble"></i></a>
                        <a href="/"><i class="fa fa-linkedin"></i></a>
                    </section> */}
                </div>
                
            </footer>
        </div>
    )
}
