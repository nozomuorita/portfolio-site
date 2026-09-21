import closeIcon from '../../assets/icons/modal-close.svg'
import fig7 from '../../assets/portfolio/atcoder-games.png'
import fig5 from '../../assets/portfolio/atcoder-performance-graph.png'
import fig4 from '../../assets/portfolio/atcoder-review-bot.png'
import fig2 from '../../assets/portfolio/atdata.png'
import fig3 from '../../assets/portfolio/portfolio-design.png'
import fig6 from '../../assets/portfolio/qiita-notification-bot.png'
import fig1 from '../../assets/portfolio/visualization-web-app.png'

const deviconBaseUrl =
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

const toolIcons = {
  css: `${deviconBaseUrl}/css3/css3-original.svg`,
  html: `${deviconBaseUrl}/html5/html5-original.svg`,
  javascript: `${deviconBaseUrl}/javascript/javascript-original.svg`,
  python: `${deviconBaseUrl}/python/python-original.svg`,
  react: `${deviconBaseUrl}/react/react-original.svg`,
  threejs: `${deviconBaseUrl}/threejs/threejs-original-wordmark.svg`,
}

const projects = [
  {
    id: 1,
    title: 'Visualization Web App',
    image: fig1,
    cardDescription:
      'データの分析結果を可視化することができるWebアプリケーションです。',
    intro: '研究活動で作成した分析ツールです',
    details: (
      <>
        金融分野における資産運用業務（投資局面の判断）に活用することができます．
        <br />
        Pythonのみで作成。
        <br />
        Githubリンク：
        <a
          href="https://github.com/nozomuorita/visualization-web-app"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/nozomuorita/visualization-web-app
        </a>
      </>
    ),
    tools: ['python'],
    cardTarget: '_blank',
  },
  {
    id: 2,
    title: 'AtData',
    image: fig2,
    cardDescription:
      'AtCoderでの学習状況を確認できるWebアプリケーションです。',
    intro: 'AtCoderの学習状況を可視化するWebアプリです。',
    details: (
      <>
        AtCoderでまだ解けていない問題を表示したり、ライバルとコンテストでの成績を比較したりできます。
        <br />
        Pythonのみで作成。
        <br />
        Githubリンク：
        <a
          href="https://github.com/nozomuorita/atdata"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/nozomuorita/atdata
        </a>
      </>
    ),
    tools: ['python'],
  },
  {
    id: 3,
    title: 'Portfolio Design',
    image: fig3,
    cardDescription:
      'Three.jsを使用したポートフォリオサイトのデザイン例です。',
    intro: 'Three.jsを使用したポートフォリオサイトのデザイン例です。',
    details: (
      <>
        Three.jsを使用しておしゃれ風のWebサイトを作成しました。
        <br />
        Githubリンク：
      </>
    ),
    tools: ['react', 'threejs', 'html', 'css', 'javascript'],
  },
  {
    id: 4,
    title: 'AtCoder Review Bot',
    image: fig4,
    cardDescription:
      'AtCoderの問題で復習するべき問題をおすすめするツールです',
    intro: 'AtCoderにおいて復習すべき問題をおすすめするDiscord Botです。',
    details: (
      <>
        ユーザー名などを入力すると、そのユーザーが過去に解いた問題の中から忘れていそうな問題や過去に多く間違えてしまった問題を探してきてリンクを表示するBotです。
        <br />
        Pythonで作成。
        <br />
        Githubリンク：
        <a
          href="https://github.com/nozomuorita/discordbot-atcoder-review"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/nozomuorita/discordbot-atcoder-review
        </a>
      </>
    ),
    tools: ['python'],
  },
  {
    id: 5,
    title: 'AtCoder Perf Graph',
    image: fig5,
    cardDescription:
      'AtCoderマイページのレーティンググラフにパフォーマンスグラフを重ねて表示します。',
    intro: 'AtCoderのマイページにパフォーマンスグラフを重ねて表示します。',
    details: (
      <>
        マイページにパフォーマンスのグラフも表示させたいという声をちょくちょく見かけたので作成しました。
        <br />
        累計800インストールありがとうございます！
        <br />
        JavaScriptで作成。
        <br />
        Githubリンク：
        <a
          href="https://github.com/nozomuorita/atcoder-perf-graph"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/nozomuorita/atcoder-perf-graph
        </a>
      </>
    ),
    tools: ['javascript'],
  },
  {
    id: 6,
    title: 'Qiita Notification Bot',
    image: fig6,
    cardDescription:
      '特定のユーザーがQiitaに記事を投稿したら通知するdiscord botです。',
    intro: '作ったけど微妙でした．．．',
    details: (
      <>
        Qiita記事を投稿したときに自動でDiscordのチャンネルに通知メッセージを送ることができます。
        <br />
        JavaScriptで作成。
        <br />
        Githubリンク：今後リポジトリを作成予定
      </>
    ),
    tools: ['javascript'],
  },
  {
    id: 7,
    title: 'AtCoder Games1',
    image: fig7,
    cardDescription:
      'AtCoder内に出てくる問題をゲームとして再現したWebアプリケーションです。',
    intro: 'AtCoder内の問題をゲームとして再現したWebアプリケーションです。',
    details: (
      <>
        AtCoderのコンテスト
        <a
          href="https://atcoder.jp/contests/abc306/tasks/abc306_d"
          target="_blank"
          rel="noreferrer"
        >
          ABC306のD問題
        </a>
        を再現してゲーム性をつけたWebアプリケーションになります。
        <br />
        Reactで作成。
        <br />
        Githubリンク：
        <a
          href="https://github.com/nozomuorita/atcoder-games1"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/nozomuorita/atcoder-games1
        </a>
      </>
    ),
    tools: ['react', 'html', 'css', 'javascript'],
  },
]

function renderProjectCard(project) {
  const modalId = `#portfolioModal${project.id}`

  return (
    <div className="col-lg-4 col-sm-6 mb-4" key={project.id}>
      <div className="portfolio-item">
        <a
          className="portfolio-link"
          data-bs-toggle="modal"
          href={modalId}
          target={project.cardTarget}
        >
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <i className="fas fa-plus fa-3x" />
            </div>
          </div>
          <img className="img-fluid" src={project.image} alt="" />
        </a>
        <div className="portfolio-caption">
          <div className="portfolio-caption-heading">{project.title}</div>
          <div className="portfolio-caption-subheading text-muted">
            {project.cardDescription}
          </div>
        </div>
      </div>
    </div>
  )
}

function renderProjectModal(project) {
  return (
    <div
      className="portfolio-modal modal fade"
      id={`portfolioModal${project.id}`}
      key={project.id}
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-bs-dismiss="modal">
            <img src={closeIcon} alt="Close modal" />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  <h2 className="text-uppercase">{project.title}</h2>
                  <p className="item-intro text-muted">{project.intro}</p>
                  <img
                    className="img-fluid d-block mx-auto"
                    src={project.image}
                    alt=""
                  />
                  <p>{project.details}</p>
                  <div>
                    <p>Tools</p>
                    {project.tools.map((tool) => (
                      <img
                        src={toolIcons[tool]}
                        className="modal-img"
                        alt=""
                        key={tool}
                      />
                    ))}
                  </div>
                  <button
                    className="btn btn-primary btn-xl text-uppercase"
                    data-bs-dismiss="modal"
                    type="button"
                  >
                    <i className="fas fa-xmark me-1" />
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Portfolio() {
  return (
    <>
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <h3 className="section-subheading text-muted">
              Click to see details.
            </h3>
          </div>
          <div className="row">
            {projects.map(renderProjectCard)}
          </div>
        </div>
      </section>

      {projects.map(renderProjectModal)}
    </>
  )
}

export default Portfolio
