import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import abacus from '../../assets/qualifications/abacus-certification.jpg'
import awsCloudPractitioner from '../../assets/qualifications/aws-cloud-practitioner-badge.png'
import eiken from '../../assets/qualifications/eiken-logo.jpg'
import g from '../../assets/qualifications/g-test-logo.png'
import ipa from '../../assets/qualifications/ipa-logo.jpg'
import kanken from '../../assets/qualifications/kanken-logo.gif'
import toeic from '../../assets/qualifications/toeic-logo.jpeg'

const qualifications = [
  { title: '暗算検定参段', date: '2011年3月取得', image: abacus, fit: 'contain' },
  { title: '珠算検定1級', date: '2011年12月取得', image: abacus, fit: 'contain' },
  { title: 'フラッシュ暗算初段', date: '2012年3月取得', image: abacus, fit: 'contain' },
  { title: '日本漢字能力検定2級', date: '2017年10月取得', image: kanken },
  { title: '実用英語技能検定２級', date: '2018年2月取得', image: eiken },
  { title: '普通自動車免許(AT)', date: '2021年10月取得', Icon: DirectionsCarIcon },
  { title: 'TOEICスコア655', date: '2022年3月取得', image: toeic },
  { title: 'G検定', date: '2023年3月取得', image: g, fit: 'contain' },
  { title: '基本情報技術者', date: '2024年8月取得', image: ipa },
  { title: '応用情報技術者', date: '2024年12月取得', image: ipa },
  {
    title: 'AWS Certified Cloud Practitioner',
    date: '2025年12月取得',
    image: awsCloudPractitioner,
    fit: 'contain',
  },
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
          {qualifications.map(({ title, date, image, Icon, iconColor, fit }) => (
            <div className="col-lg-4 col-sm-6 mb-4 card" key={title}>
              <div className="card__imgframe">
                {Icon ? (
                  <Icon
                    className="material-ui"
                    style={{ color: iconColor, fontSize: '200px', margin: 'auto' }}
                  />
                ) : (
                  <img
                    src={image}
                    className={`qual-img${fit === 'contain' ? ' qual-img--contain' : ''}`}
                    alt=""
                  />
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
