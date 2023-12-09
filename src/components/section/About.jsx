import React from 'react'
import horse from "../../assets/horse.jpg";
import high_school from "../../assets/high-school.jpg";
import ibadai from "../../assets/ibadai.jpg";


function About() {
  return (
    <>
        {/* <!-- About--> */}
        <section class="page-section" id="about">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">About</h2>
                    <h3 class="section-subheading text-muted">趣味は競技プログラミングとWebサイト、アプリ制作です。AtCoderやってます！<br></br>最近、Vimにハマっています！</h3>
                    <h3 class="section-subheading text-muted">
                        <ul>
                            <li>AtCoderアカウント: <a href='https://atcoder.jp/users/nzm_ort' target='_blank'>https://atcoder.jp/users/nzm_ort</a></li>
                            <li>CodeForcesアカウント: <a href='https://codeforces.com/profile/nzm_ort' target='_blank'>https://codeforces.com/profile/nzm_ort</a></li>
                            <li>Xアカウント: <a href='https://twitter.com/account_0818' target='_blank'>https://twitter.com/account_0818</a></li>
                            <li>Qiitaアカウント: <a href='https://qiita.com/nzmort1' target='_blank'>https://qiita.com/nzmort1</a></li>
                            <li>Noteアカウント: <a href='https://note.com/lorem_0818' target='_blank'>https://note.com/lorem_0818</a></li>
                            
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
                            <div class="timeline-body"><p class="text-muted">小学2~6年生：そろばんを習う<br></br>中学1~3年：男子バスケットボール部</p></div>
                        </div>
                    </li>
                    <li className='timeline-inverted'>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src={high_school} alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2016-2019</h4>
                                <h4 class="subheading">北海道立静内高等学校</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">普通科</p></div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src={ibadai} alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2019~2023</h4>
                                <h4 class="subheading">茨城大学</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">工学部機械システム工学科<br></br>・機械学習・プログラミングの勉強に力を入れて取り組みました！<br></br>・機械学習ではデータを取得し、前処理をするところからモデルを評価するまでの一連の流れについて学ぶことができました。</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src={ibadai} alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2023~</h4>
                                <h4 class="subheading">茨城大学大学院</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">理工学研究科機械システム工学専攻<br></br>・研究活動と競技プログラミングに力を入れて取り組みました！<br></br>・競プロを通してアルゴリズムに関する知識・実装力を身に付けました。</p></div>
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
