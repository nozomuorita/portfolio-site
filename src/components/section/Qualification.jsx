import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import abacus from '../../assets/qualification/abacus.jpg'
import eiken from '../../assets/qualification/eiken.jpg'
import g from '../../assets/qualification/g.png'
import ipa from '../../assets/qualification/ipa.jpg'
import kanken from '../../assets/qualification/kanken.gif'
import toeic from '../../assets/qualification/toeic.jpeg'

const qualifications = [
  { title: '暗算検定参段', date: '2011年3月取得', image: abacus },
  { title: '珠算検定1級', date: '2011年12月取得', image: abacus },
  { title: 'フラッシュ暗算初段', date: '2012年3月取得', image: abacus },
  { title: '日本漢字能力検定2級', date: '2017年10月取得', image: kanken },
  { title: '実用英語技能検定２級', date: '2018年2月取得', image: eiken },
  { title: '普通自動車免許(AT)', date: '2021年10月取得', icon: 'car' },
  { title: 'TOEICスコア655', date: '2022年3月取得', image: toeic },
  { title: 'G検定', date: '2023年3月取得', image: g },
  { title: '基本情報技術者', date: '2024年8月取得', image: ipa },
  { title: '応用情報技術者', date: '2024年12月取得', image: ipa },
]

function Qualification() {
  return (
    <section className="page-section bg-light" id="qualifications">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Qualifications</h2>
          <h3 className="section-subheading text-muted">
            Qualifications to date
          </h3>
        </div>
        <div className="row">
          {qualifications.map(({ title, date, image, icon }) => (
            <div className="col-lg-4 col-sm-6 mb-4 card" key={title}>
              <div className="card__imgframe">
                {icon === 'car' ? (
                  <DirectionsCarIcon
                    className="material-ui"
                    style={{ fontSize: '200px', margin: 'auto' }}
                  />
                ) : (
                  <img src={image} className="qual-img" alt="" />
                )}
              </div>
              <div className="card__textbox">
                <div className="card__titletext">{title}</div>
                <div className="card__overviewtext">{date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Qualification
