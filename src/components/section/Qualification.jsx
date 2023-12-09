import React from 'react'
import abacus from "../../assets/qualification/abacus.jpg";
import kanken from "../../assets/qualification/kanken.gif";
import eiken from "../../assets/qualification/eiken.jpg";
import toeic from "../../assets/qualification/toeic.jpeg";
import g from "../../assets/qualification/g.png";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';


function Qualification() {
  return (
    <>
      {/* <!-- Qualifications Grid--> */}
      <section class="page-section bg-light" id="qualifications">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Qualifications</h2>
                    <h3 class="section-subheading text-muted">These are the certifications I have earned so far.</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 mb-4 card">
                        <div class="card__imgframe"><img src={abacus} class="qual-img" /></div>
                        <div class="card__textbox">
                            <div class="card__titletext">
                                暗算検定参段
                            </div>
                            <div class="card__overviewtext">
                                2011年3月取得
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 card">
                        <div class="card__imgframe"><img src={abacus} class="qual-img" /></div>
                        <div class="card__textbox">
                            <div class="card__titletext">
                                珠算検定1級
                            </div>
                            <div class="card__overviewtext">
                                2011年12月取得
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 card">
                        <div class="card__imgframe"><img src={abacus} class="qual-img" /></div>
                        <div class="card__textbox">
                            <div class="card__titletext">
                                フラッシュ暗算初段
                            </div>
                            <div class="card__overviewtext">
                                2012年3月取得
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 card">
                        <div class="card__imgframe"><img src={kanken} class="qual-img" /></div>
                        <div class="card__textbox">
                            <div class="card__titletext">
                                日本漢字能力検定2級
                            </div>
                            <div class="card__overviewtext">
                                2017年10月取得
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 card">
                        <div class="card__imgframe"><img src={eiken} class="qual-img" /></div>
                        <div class="card__textbox">
                            <div class="card__titletext">
                                実用英語技能検定
                            </div>
                            <div class="card__overviewtext">
                                2018年2月取得
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 card">
                        <div class="card__imgframe"><DirectionsCarIcon className='material-ui' style={{fontSize: '200px', margin: 'auto'}}/></div>
                        <div class="card__textbox">
                            <div class="card__titletext">
                                普通自動車免許(AT)
                            </div>
                            <div class="card__overviewtext">
                                2018年2月取得
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 card">
                        <div class="card__imgframe"><img src={toeic} class="qual-img" /></div>
                        <div class="card__textbox">
                            <div class="card__titletext">
                                TOEICスコア655
                            </div>
                            <div class="card__overviewtext">
                                2022年3月取得
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 card">
                        <div class="card__imgframe"><img src={g} class="qual-img" /></div>
                        <div class="card__textbox">
                            <div class="card__titletext">
                                G検定
                            </div>
                            <div class="card__overviewtext">
                                2023年3月取得
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </section>


    </>
    )
}

export default Qualification
