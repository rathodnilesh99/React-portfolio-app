import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
            <div className="colorlib-narrow-content">
                <div className="row">
                <div className="col-md-12">
                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                    <div className="col-md-12">
                        <div className="about-desc">
                        <span className="heading-meta">About Us</span>
                        <h2 className="colorlib-heading">Who Am I?</h2>
                        <p>Web Developer with 6+ year of experience in designing and developing user interfaces, testing, debugging, and eCommerce technologies.<br />
                        Proven ability in optimizing web functionalities that improve data retrieval and workflow efficiencies.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <section className="colorlib-about">
            <div className="colorlib-narrow-content">
                <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">What I do?</span>
                    <h2 className="colorlib-heading">Here are some of my expertise</h2>
                </div>
                </div>
                <div className="row row-pt-md">
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-1">
                    <span className="icon">
                        <i className="icon-bulb" />
                    </span>
                    <div className="desc">
                        <h3>Web Development </h3>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-3">
                    <span className="icon">
                        <i className="icon-phone3" />
                    </span>
                    <div className="desc">
                        <h3>WEB DESIGNER</h3>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section className="colorlib-skills" data-section="skills">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">My Specialty</span>
                        <h2 className="colorlib-heading animate-box fadeInUp animated">My Skills</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                        <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                    </div>
                    <div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                        <div className="progress-wrap">
                            <h3>Symfony</h3>
                            <div className="progress">
                                <div className="progress-bar color-1" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width:'75%'}}>
                                <span>75%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                        <div className="progress-wrap">
                            <h3>jQuery</h3>
                            <div className="progress">
                                <div className="progress-bar color-2" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}>
                                <span>60%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                        <div className="progress-wrap">
                            <h3>HTML5</h3>
                            <div className="progress">
                                <div className="progress-bar color-3" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: '85%' }}>
                                <span>85%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                        <div className="progress-wrap">
                            <h3>CSS3</h3>
                            <div className="progress">
                                <div className="progress-bar color-4" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}>
                                <span>90%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                        <div className="progress-wrap">
                            <h3>WordPress</h3>
                            <div className="progress">
                                <div className="progress-bar color-5" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>
                                <span>70%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                        <div className="progress-wrap">
                            <h3>PHO</h3>
                            <div className="progress">
                                <div className="progress-bar color-6" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}>
                                <span>90%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
  }
}
