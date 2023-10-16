import React from 'react'

function About() {
  return (
    <>
        {/* <!-- About--> */}
        <section class="page-section" id="about">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">About</h2>
                    <h3 class="section-subheading text-muted">My background, etc.</h3>
                </div>
                <ul class="timeline">
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="../../public/horse.jpg" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>出身地</h4>
                                <h4 class="subheading">北海道日高郡新ひだか町</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">小学2~6年生：そろばんを習う<br></br>中学1~3年：男子バスケットボール部</p></div>
                        </div>
                    </li>
                    <li className='timeline-inverted'>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="../../public/high-school.jpg" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2016-2019</h4>
                                <h4 class="subheading">北海道立静内高等学校</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">普通科</p></div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="./ibadai.jpg" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2019~2023</h4>
                                <h4 class="subheading">茨城大学</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">工学部機械システム工学科</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="./ibadai.jpg" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2023~</h4>
                                <h4 class="subheading">茨城大学大学院</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">理工学研究科機械システム工学専攻</p></div>
                        </div>
                    </li>
                    {/* <li class="timeline-inverted">
                        <div class="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li> */}
                </ul>
            </div>
        </section>


    </>
  )
}

export default About
