import React from 'react'
import nadeshiko from "../../assets/nadeshiko.png";

function skill() {
  return (
    <>
      <section className='page-section' id='skill'>
        <div className='container'>
          <div className='text-center'>
            <h2 className='section-heading text-uppercase'>Skill</h2>
            <h3 className='section-subheading text-muted'>My programming skill</h3>
          </div>
          <div className='row text-center'>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className='card-img' />
                    {/* <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i> */}
                </span>
                <h4 class="my-3">Python</h4>
                <p class="text-muted">研究活動や趣味で機械学習やデータ分析、データ取得、<br></br>Webアプリケーション作成に使用</p>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                    {/* <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-laptop fa-stack-1x fa-inverse"></i> */}
                </span>
                <h4 class="my-3">React</h4>
                <p class="text-muted">趣味でWebサイトやWebアプリ作成に使用<br></br>本サイトもReactを用いて作成</p>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" />
                    {/* <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-lock fa-stack-1x fa-inverse"></i> */}
                </span>
                <h4 class="my-3">Three.js</h4>
                <p class="text-muted">趣味でWebサイト作成に使用<br></br>「Prtfolio design」に使用。</p>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                    {/* <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-lock fa-stack-1x fa-inverse"></i> */}
                </span>
                <h4 class="my-3">HTML</h4>
                <p class="text-muted">趣味でWebサイトやWebアプリ作成に使用<br></br>本サイトもReactを用いて作成</p>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                    {/* <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-lock fa-stack-1x fa-inverse"></i> */}
                </span>
                <h4 class="my-3">CSS</h4>
                <p class="text-muted">趣味でWebサイトやWebアプリ作成に使用<br></br>本サイトもReactを用いて作成</p>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='card-img' />
                    {/* <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-lock fa-stack-1x fa-inverse"></i> */}
                </span>
                <h4 class="my-3">JavaScript</h4>
                <p class="text-muted">拡張機能の作成やWebサイト作成に使用</p>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                    {/* <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-lock fa-stack-1x fa-inverse"></i> */}
                </span>
                <h4 class="my-3">Github</h4>
                <p class="text-muted">コード管理に使用<br></br>また、Webサイト・アプリのデプロイにGithub Pagesを使用</p>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                    {/* <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-lock fa-stack-1x fa-inverse"></i> */}
                </span>
                <h4 class="my-3">VSCode</h4>
                <p class="text-muted">エディタとして使用</p>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" />
                    {/* <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-lock fa-stack-1x fa-inverse"></i> */}
                </span>
                <h4 class="my-3">R</h4>
                <p class="text-muted">研究活動の一部で使用</p>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg" />
                    {/* <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-lock fa-stack-1x fa-inverse"></i> */}
                </span>
                <h4 class="my-3">LATEX</h4>
                <p class="text-muted">論文執筆時に使用</p>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                    {/* <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-lock fa-stack-1x fa-inverse"></i> */}
                </span>
                <h4 class="my-3">C</h4>
                <p class="text-muted">大学の講義で使用<br></br>また、センサから情報を読み取りロボットを動かすなどに<br></br>使用</p>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
                    {/* <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-lock fa-stack-1x fa-inverse"></i> */}
                </span>
                <h4 class="my-3">C++</h4>
                <p class="text-muted">競技プログラミングで使用</p>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                <img src={nadeshiko} className='nadesiko-icon' />
                    {/* <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-lock fa-stack-1x fa-inverse"></i> */}
                </span>
                <h4 class="my-3">なでしこ</h4>
                <p class="text-muted">簡単な操作であれば可能。</p>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg" />                    {/* <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-lock fa-stack-1x fa-inverse"></i> */}
                </span>
                <h4 class="my-3">Vim</h4>
                <p class="text-muted">VSCodeと併用。</p>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                <img src="" />                    {/* <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-lock fa-stack-1x fa-inverse"></i> */}
                </span>
                <h4 class="my-3">Whitespace</h4>
                <p class="text-muted">遊び心で使用</p>
            </div>
          </div>
        </div>
      </section>


        
          
    </>
  )
}

export default skill
