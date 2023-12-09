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
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
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
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
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
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <div>
                                        <p>Tools</p>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='modal-img' />
                                    </div>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Threads
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Illustration
                                        </li>
                                    </ul>
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
