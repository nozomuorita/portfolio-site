import React from 'react'
import portfolio2 from "../../assets/portfolio/2.jpg";
import portfolio3 from "../../assets/portfolio/3.jpg";
import portfolio4 from "../../assets/portfolio/4.jpg";
import portfolio5 from "../../assets/portfolio/5.jpg";
import portfolio6 from "../../assets/portfolio/6.jpg";
import fig1 from "../../assets/portfolio/portfolio1.png";
import fig2 from "../../assets/portfolio/portfolio2.png";
import fig3 from "../../assets/portfolio/portfolio3.png";
import fig4 from "../../assets/portfolio/portfolio4.png";
import fig5 from "../../assets/portfolio/portfolio5.png";
import fig6 from "../../assets/portfolio/portfolio6.png";
import fig7 from "../../assets/portfolio/portfolio7.png";
import close_icon from "../../assets/close-icon.svg";

function Portfolio() {
  return (
    <>
      {/* <!-- Portfolio Grid--> */}
      <section class="page-section bg-light" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Portfolio</h2>
                    <h3 class="section-subheading text-muted">What I have created so far.<br></br>Click to see details.</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 1--> */}
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1" target='_blank'>
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className='img-fluid' src={fig1} />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Visualization Web App</div>
                                <div class="portfolio-caption-subheading text-muted">データの分析結果を可視化することができるWebアプリケーションです。</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 2--> */}
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className='img-fluid' src={fig2} />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">AtData</div>
                                <div class="portfolio-caption-subheading text-muted">AtCoderでの学習状況を確認することができるWebアプリケーションです。</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 3--> */}
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className='img-fluid' src={fig3} />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Portfolio Design</div>
                                <div class="portfolio-caption-subheading text-muted">Three.jsを使用したポートフォリオサイトのデザイン例です。</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 3--> */}
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className='img-fluid' src={fig4} />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">AtCoder Review Bot</div>
                                <div class="portfolio-caption-subheading text-muted">AtCoderの問題で復習するべき問題をレコメンドします</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 3--> */}
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className='img-fluid' src={fig5} />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">AtCoder Perf Graph</div>
                                <div class="portfolio-caption-subheading text-muted">AtCoderマイページのレーティンググラフにパフォーマンスグラフを重ねて表示します。</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 3--> */}
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className='img-fluid' src={fig6} />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Qiita Notification Bot</div>
                                <div class="portfolio-caption-subheading text-muted">特定のユーザーがQiitaに記事を投稿したら通知するdiscord botです。</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 3--> */}
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal7">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className='img-fluid' src={fig7} />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">AtCoder Games1</div>
                                <div class="portfolio-caption-subheading text-muted">AtCoder内に出てくる問題をゲームとして再現したWebアプリケーションです。</div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </section>





        {/* <!-- Portfolio Modals-->
        <!-- Portfolio item 1 modal popup--> */}
        <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src={close_icon} alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 class="text-uppercase">Visualization Web App</h2>
                                    <p class="item-intro text-muted">データ分析の結果を可視化グラフ化して可視化することができるWebアプリケーションです</p>
                                    <img class="img-fluid d-block mx-auto" src={fig1} alt="..." />
                                    <p>ユーザーは左のSettingでパラメータを指定することで、条件にあったデータを様々な形式で可視化できます。<br></br>Pythonのみで作成。<br></br>Githubリンク：<a href='https://github.com/nozomuorita/visualization-web-app' target='_blank'>https://github.com/nozomuorita/visualization-web-app</a></p>
                                    <div>
                                        <p>Tools</p>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className='modal-img' />
                                    </div>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/* <!-- Portfolio item 2 modal popup--> */}
    <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src={close_icon} alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 class="text-uppercase">AtData</h2>
                                    <p class="item-intro text-muted">AtCoderの学習状況を可視化するWebアプリです。</p>
                                    <img class="img-fluid d-block mx-auto" src={fig2} alt="..." />
                                    <p>AtCoderでまだ解けていない問題を表示したり、ライバルとコンテストでの成績を比較したりできます。<br></br>PythonのDashで作成。<br></br>Githubリンク：<a href='https://github.com/nozomuorita/atdata' target='_blank'>https://github.com/nozomuorita/atdata</a></p>
                                    <div>
                                        <p>Tools</p>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className='modal-img' />
                                    </div>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    {/* <!-- Portfolio item 3 modal popup--> */}
    <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src={close_icon} alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 class="text-uppercase">Portfolio Design</h2>
                                    <p class="item-intro text-muted">Three.jsを使用したポートフォリオサイトのデザイン例です。</p>
                                    <img class="img-fluid d-block mx-auto" src={fig3} alt="..." />
                                    <p>Three.jsを使用しておしゃれ風のWebサイトを作成しました。<br></br>React, Three.jsを使用<br></br>Githubリンク：今後リポジトリを作成し、デプロイ予定</p>
                                    <div>
                                        <p>Tools</p>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className='modal-img' />
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original-wordmark.svg" className='modal-img' />
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className='modal-img' />
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className='modal-img' />
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='modal-img' />
                                    </div>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    {/* <!-- Portfolio item 4 modal popup--> */}
    <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src={close_icon} alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 class="text-uppercase">AtCoder Review Bot</h2>
                                    <p class="item-intro text-muted">AtCoderにおいて復習すべき問題をレコメンドするDiscord Botです。</p>
                                    <img class="img-fluid d-block mx-auto" src={fig4} alt="..." />
                                    <p>ユーザー名などを入力すると、そのユーザーが過去に解いた問題の中から忘れていそうな問題や過去に多く間違えてしまった問題を探してきてリンクを表示するBotです。<br></br>Pythonで作成。<br></br>Githubリンク：<a href='https://github.com/nozomuorita/discordbot-atcoder-review' target='_blank'>https://github.com/nozomuorita/discordbot-atcoder-review</a></p>
                                    <div>
                                        <p>Tools</p>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className='modal-img' />
                                    </div>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    {/* <!-- Portfolio item 5 modal popup--> */}
        <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src={close_icon} alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 class="text-uppercase">AtCoder Perf Graph</h2>
                                    <p class="item-intro text-muted">AtCoderのマイページにパフォーマンスグラフを重ねて表示します。</p>
                                    <img class="img-fluid d-block mx-auto" src={fig5} alt="..." />
                                    <p>マイページにパフォーマンスのグラフも表示させたいという声をちょくちょく見かけたので作成しました。<br></br>累計370インストールしていただきました！ありがとうございます。<br></br>JavaScriptで作成。<br></br>Githubリンク：<a href='https://github.com/nozomuorita/atcoder-perf-graph' target='_blank'>https://github.com/nozomuorita/atcoder-perf-graph</a></p>
                                    <div>
                                        <p>Tools</p>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='modal-img' />
                                    </div>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    {/* <!-- Portfolio item 6 modal popup--> */}
    <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src={close_icon} alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 class="text-uppercase">Qiita Notification Bot</h2>
                                    <p class="item-intro text-muted">特定のユーザーがQiitaに記事を投稿したら通知するdiscord botです。</p>
                                    <img class="img-fluid d-block mx-auto" src={fig6} alt="..." />
                                    <p>Qiita記事を投稿したときに自動でDiscordのチャンネルに通知メッセージを送ることができます。<br></br>JavaScriptで作成。<br></br>Githubリンク：今後リポジトリを作成予定</p>
                                    <div>
                                        <p>Tools</p>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='modal-img' />
                                    </div>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    {/* <!-- Portfolio item 7 modal popup--> */}
    <div class="portfolio-modal modal fade" id="portfolioModal7" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src={close_icon} alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 class="text-uppercase">AtCoder Games1</h2>
                                    <p class="item-intro text-muted">AtCoder内の問題をゲームとして再現したWebアプリケーションです。</p>
                                    <img class="img-fluid d-block mx-auto" src={fig7} alt="..." />
                                    <p>AtCoderのコンテスト<a href='https://atcoder.jp/contests/abc306/tasks/abc306_d' target='_blank'>ABC306のD問題</a>を再現してゲーム性をつけたWebアプリケーションになります。<br></br>Reactで作成。<br></br>Githubリンク：<a href='https://github.com/nozomuorita/atcoder-games1' target='_blank'>https://github.com/nozomuorita/atcoder-games1</a></p>
                                    <div>
                                        <p>Tools</p>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className='modal-img' />
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className='modal-img' />
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className='modal-img' />
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='modal-img' />
                                    </div>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>
  )
}

export default Portfolio
