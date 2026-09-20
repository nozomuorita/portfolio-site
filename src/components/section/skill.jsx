import nadeshiko from '../../assets/nadeshiko.png'

const deviconBaseUrl =
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

const skills = [
  {
    name: 'Python',
    icon: `${deviconBaseUrl}/python/python-original.svg`,
    iconClassName: 'card-img',
    description: (
      <>
        研究活動や趣味で機械学習やデータ分析、データ取得、
        <br />
        Webアプリケーション作成に使用
      </>
    ),
  },
  {
    name: 'React',
    icon: `${deviconBaseUrl}/react/react-original.svg`,
    description: (
      <>
        趣味でWebサイトやWebアプリ作成に使用
        <br />
        本サイトもReactを用いて作成
      </>
    ),
  },
  {
    name: 'Three.js',
    icon: `${deviconBaseUrl}/threejs/threejs-original.svg`,
    description: (
      <>
        趣味でWebサイト作成に使用
        <br />
        「Portfolio design」に使用。
      </>
    ),
  },
  {
    name: 'HTML',
    icon: `${deviconBaseUrl}/html5/html5-original.svg`,
    description: (
      <>
        趣味でWebサイトやWebアプリ作成に使用
        <br />
        本サイトもReactを用いて作成
      </>
    ),
  },
  {
    name: 'CSS',
    icon: `${deviconBaseUrl}/css3/css3-original.svg`,
    description: (
      <>
        趣味でWebサイトやWebアプリ作成に使用
        <br />
        本サイトもReactを用いて作成
      </>
    ),
  },
  {
    name: 'JavaScript',
    icon: `${deviconBaseUrl}/javascript/javascript-original.svg`,
    iconClassName: 'card-img',
    description: '拡張機能の作成やWebサイト作成に使用',
  },
  {
    name: 'Github',
    icon: `${deviconBaseUrl}/github/github-original.svg`,
    description: (
      <>
        コード管理に使用
        <br />
        また、Webサイト・アプリのデプロイにGithub Pagesを使用
      </>
    ),
  },
  {
    name: 'VSCode',
    icon: `${deviconBaseUrl}/vscode/vscode-original.svg`,
    description: 'エディタとして使用',
  },
  {
    name: 'R',
    icon: `${deviconBaseUrl}/r/r-original.svg`,
    description: '研究活動の一部で使用',
  },
  {
    name: 'LATEX',
    icon: `${deviconBaseUrl}/latex/latex-original.svg`,
    description: '論文執筆時に使用',
  },
  {
    name: 'C',
    icon: `${deviconBaseUrl}/c/c-original.svg`,
    description: (
      <>
        大学の講義で使用
        <br />
        また、センサから情報を読み取りロボットを動かすなどに
        <br />
        使用
      </>
    ),
  },
  {
    name: 'C++',
    icon: `${deviconBaseUrl}/cplusplus/cplusplus-original.svg`,
    description: '競技プログラミングで使用',
  },
  {
    name: 'なでしこ',
    icon: nadeshiko,
    iconClassName: 'nadesiko-icon',
    description: '簡単な操作であれば可能。',
  },
  {
    name: 'Vim',
    icon: `${deviconBaseUrl}/vim/vim-original.svg`,
    description: 'VSCodeと併用。',
  },
  {
    name: 'Whitespace',
    icon: '',
    description: '遊び心で使用',
  },
]

function Skill() {
  return (
    <section className="page-section" id="skill">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Skill</h2>
          <h3 className="section-subheading text-muted">
            My programming skill
          </h3>
        </div>
        <div className="row text-center">
          {skills.map(({ name, icon, iconClassName, description }) => (
            <div className="col-md-4" key={name}>
              <span className="fa-stack fa-4x">
                <img src={icon} className={iconClassName} alt="" />
              </span>
              <h4 className="my-3">{name}</h4>
              <p className="text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skill
