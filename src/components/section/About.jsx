import CodeIcon from '@mui/icons-material/Code'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import YouTubeIcon from '@mui/icons-material/YouTube'
import ncsp2024 from '../../assets/about/research/ncsp-2024-student-paper-award.png'
import paper from '../../assets/about/research/journal-article-preview.png'
import highSchool from '../../assets/about/timeline/high-school.jpg'
import hometownHorses from '../../assets/about/timeline/hometown-horses.jpg'
import ibarakiUniversity from '../../assets/about/timeline/ibaraki-university.jpg'
import professionalCareer from '../../assets/about/timeline/professional-career.jpg'
import profilePortrait from '../../assets/profile/profile-portrait.png'

const conferencePresentations = [
    {
        date: '2023年8月',
        event: '日本機械学会茨城講演会',
        title: '景気敏感業種を考慮した国内株式運用の機械学習',
    },
    {
        date: '2024年2月',
        event: 'Proc. of RISP International Workshop on NCSP',
        note: '英語発表',
        title: 'Machine learning of economic sensitive industries for domestic equity management',
        award: 'Student Paper Award',
    },
]

function About() {
  return (
    <>
        {/* <!-- About--> */}
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                </div>

                <div className="about-profile">
                    <div className="about-profile__visual">
                        <img
                            className="about-profile__photo-blur"
                            src={profilePortrait}
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                            decoding="async"
                        />
                        <img
                            className="about-profile__photo"
                            src={profilePortrait}
                            alt="ノートパソコンを使う人物のイラスト"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    <div className="about-profile__content">
                        <h3 className="about-profile__name">nzm_ort</h3>
                        <div className="about-profile__hobbies" aria-label="趣味">
                            <span><YouTubeIcon aria-hidden="true" />YouTube</span>
                            <span><FlightTakeoffIcon aria-hidden="true" />旅行</span>
                            <span><CodeIcon aria-hidden="true" />競プロ</span>
                        </div>

                        <div className="about-profile__accounts">
                            <a href="https://atcoder.jp/users/nzm_ort" target="_blank" rel="noreferrer">
                                <strong>AtCoder</strong>
                                <OpenInNewIcon fontSize="small" aria-hidden="true" />
                            </a>
                            <a href="https://codeforces.com/profile/nzm_ort" target="_blank" rel="noreferrer">
                                <strong>Codeforces</strong>
                                <OpenInNewIcon fontSize="small" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>

                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={hometownHorses} alt="北海道新ひだか町の馬" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>幼少期</h4>
                                <h4 className="subheading">北海道日高郡新ひだか町</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">
                                    小学2年生から6年生までそろばんに取り組み、中学では3年間、男子バスケットボール部に所属。
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className='timeline-inverted'>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={highSchool} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2016-2019</h4>
                                <h4 className="subheading">北海道立静内高等学校</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">普通科<br></br>帰宅部</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={ibarakiUniversity} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2019~2023</h4>
                                <h4 className="subheading">茨城大学</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">工学部機械システム工学科<br></br>卒業論文<br></br>「データマイニングバイアスを考慮した資産運用業務の最適化」</p></div>
                            {/* <div className="timeline-body"><p className="text-muted">工学部機械システム工学科<br></br>・機械学習・プログラミングの勉強に力を入れて取り組みました！<br></br>・機械学習ではデータを取得し、前処理をするところからモデルを評価するまでの一連の流れについて学ぶことができました。</p></div> */}
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={ibarakiUniversity} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2023~2025</h4>
                                <h4 className="subheading">茨城大学大学院</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">理工学研究科<br></br>機械システム工学専攻<br></br>修士論文<br></br>「データマイニングバイアスを考慮した国内株式運用の機械学習」</p></div>
                            {/* <div className="timeline-body"><p className="text-muted">理工学研究科機械システム工学専攻<br></br>・研究活動と競技プログラミングに力を入れて取り組みました！<br></br>・競プロを通してアルゴリズムに関する知識・実装力を身に付けました。</p></div> */}
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={professionalCareer} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2025~</h4>
                                <h4 className="subheading">社会人</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">頑張ります！</p></div>
                        </div>
                    </li>
                    {/* <li className="timeline-inverted">
                        <div className="timeline-image">
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
                {/* <div className="text-center conf">
                    <h2 className="section-heading text-uppercase">学会発表</h2>
                    <ul className='accountUrl'>
                        <li>2023年8月 茨城講演会</li>
                        <li>2024年2月 NCSP2024 英語発表 「Student Paper Award」受賞</li>
                    </ul>
                    <img className="ncsp" src={ncsp2024} alt="..." />
                </div> */}
            </div>
            <div className="container container-sub">
                <h2 className="section-heading text-uppercase text-center">Conference Presentations</h2>
                <div className="conference-showcase">
                    <ol className="conference-list">
                        {conferencePresentations.map(({ date, event, note, title, award }) => (
                            <li className="conference-entry" key={title}>
                                <time className="conference-entry__date">{date}</time>
                                <h3 className="conference-entry__event">
                                    {event}
                                    {note && <span className="conference-entry__note">{note}</span>}
                                </h3>
                                <p className="conference-entry__title">「{title}」</p>
                                {award && (
                                    <p className="conference-entry__award">
                                        {award} 受賞
                                    </p>
                                )}
                            </li>
                        ))}
                    </ol>

                    <figure className="conference-award">
                        <img
                            className="conference-award__image"
                            src={ncsp2024}
                            alt="NCSP 2024 Student Paper Awardの受賞証明書"
                            loading="lazy"
                            decoding="async"
                        />
                        <figcaption className="conference-award__caption">
                            NCSP 2024 / Student Paper Award
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div className="container container-sub">
                <h2 className="section-heading text-uppercase text-center">Publications</h2>
                <div className="publication-showcase">
                    <article className="publication-details">
                        <p className="publication-details__meta">
                            Journal of Signal Processing · 2024
                        </p>
                        <h3 className="publication-details__title">
                            Machine Learning of Economically Sensitive Industries without Data-Mining Bias for Domestic Equity Management
                        </h3>
                        <p className="publication-details__authors">
                            Nozomu Orita, Takashi Suzuki, Tomoya Suzuki
                        </p>
                        <p className="publication-details__citation">
                            Vol. 28, No. 4, pp. 151–154
                        </p>
                        <a
                            className="publication-details__link"
                            href="https://www.jstage.jst.go.jp/article/jsp/28/4/28_151/_article/-char/en"
                            target="_blank"
                            rel="noreferrer"
                        >
                            J-STAGEで論文を読む
                            <OpenInNewIcon fontSize="small" aria-hidden="true" />
                        </a>
                    </article>

                    <figure className="publication-preview">
                        <img
                            className="publication-preview__image"
                            src={paper}
                            alt="学術論文の1ページ目"
                            loading="lazy"
                            decoding="async"
                        />
                        <figcaption className="publication-preview__caption">
                            Published July 2024
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    </>
  )
}

export default About
