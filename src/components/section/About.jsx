import React from 'react'
import horse from "../../assets/horse.jpg";
import high_school from "../../assets/high-school.jpg";
import ibadai from "../../assets/ibadai.jpg";
import ncsp2024 from "../../assets/ncsp2024.png";
import shakaijin from "../../assets/shakaijin.jpg";

function About() {
  return (
    <>
        {/* <!-- About--> */}
        <section class="page-section" id="about">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">About</h2>
                    <h3 class="section-subheading text-muted">趣味：YouTube，旅行，競プロ</h3>
                    <h3 class="section-subheading text-muted">
                        <ul className='accountUrl'>
                            <li>AtCoderアカウント: <a href='https://atcoder.jp/users/nzm_ort' target='_blank'>https://atcoder.jp/users/nzm_ort</a></li>
                            <li>CodeForcesアカウント: <a href='https://codeforces.com/profile/nzm_ort' target='_blank'>https://codeforces.com/profile/nzm_ort</a></li>                            
                        </ul>
                    </h3>
                </div>
                <ul class="timeline">
                    <li>
                        {/* <div class="timeline-image"><img class="rounded-circle img-fluid" src="../../public/horse.jpg" alt="..." /></div> */}
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src={horse} /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>出身地</h4>
                                <h4 class="subheading">北海道日高郡新ひだか町</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">小学2~6年生：そろばん<br></br>中学1~3年：男子バスケットボール部</p></div>
                        </div>
                    </li>
                    <li className='timeline-inverted'>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src={high_school} alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2016-2019</h4>
                                <h4 class="subheading">北海道立静内高等学校</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">普通科<br></br>帰宅部</p></div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src={ibadai} alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2019~2023</h4>
                                <h4 class="subheading">茨城大学</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">工学部機械システム工学科<br></br>卒業論文<br></br>「データマイニングバイアスを考慮した資産運用業務の最適化」</p></div>
                            {/* <div class="timeline-body"><p class="text-muted">工学部機械システム工学科<br></br>・機械学習・プログラミングの勉強に力を入れて取り組みました！<br></br>・機械学習ではデータを取得し、前処理をするところからモデルを評価するまでの一連の流れについて学ぶことができました。</p></div> */}
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src={ibadai} alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2023~2025</h4>
                                <h4 class="subheading">茨城大学大学院</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">理工学研究科機械システム工学専攻<br></br>修士論文<br></br>「データマイニングバイアスを考慮した国内株式運用の機械学習」</p></div>
                            {/* <div class="timeline-body"><p class="text-muted">理工学研究科機械システム工学専攻<br></br>・研究活動と競技プログラミングに力を入れて取り組みました！<br></br>・競プロを通してアルゴリズムに関する知識・実装力を身に付けました。</p></div> */}
                        </div>
                    </li>
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src={shakaijin} alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2025~</h4>
                                <h4 class="subheading">社会人</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">頑張ります！</p></div>
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
                <div class="text-center conf">
                    <h2 class="section-heading text-uppercase">学会発表</h2>
                    <ul className='accountUrl'>
                        <li>2023年8月　茨城講演会</li>
                        <li>2024年2月　NCSP2024　英語発表　「Student Paper Award」受賞</li>
                    </ul>
                    <img class="ncsp" src={ncsp2024} alt="..." />
                </div>
            </div>
        </section>


    </>
  )
}

export default About
