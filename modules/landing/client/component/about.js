import {Component} from 'react';

export default class AboutArea extends Component {
    render() {
        return <section id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 title-section">
                        <h4 className="title">
                            <span style={{color: '#c75b5b'}}>
                                WHO WE ARE
                            </span>
                            <span style={{color: '#48494b', fontSize: '24px', textTransform: 'none'}}>
                                Premium landing page only $15
                            </span>
                        </h4>
                        <div className="line">
                            <i className="iconi icon-24 icon-profle"></i>
                        </div>
                    </div>
                </div>

                <div className="row wrap-feature-one">
                    <div className="col-md-3 col-sm-6 feature-one">
                        <i className="icon icon-64 icon-magicwand"></i>
                        <h5 className="title">Magic HTML5</h5>
                        <p>Hinc errem volutpat per in, te hinc essent mea. Ei pro corrumpit, elit ullum scripserit eum ad</p>
                    </div>

                    <div className="col-md-3 col-sm-6 feature-one">
                        <i className="icon icon-64 icon-tools"></i>
                        <h5 className="title">Easy To Use</h5>
                        <p>Hinc errem volutpat per in, te hinc essent mea. Ei pro corrumpit, elit ullum scripserit eum ad</p>
                    </div>

                    <div className="col-md-3 col-sm-6 feature-one">
                        <i className="icon icon-64 icon-easel"></i>
                        <h5 className="title">Flat Style</h5>
                        <p>Hinc errem volutpat per in, te hinc essent mea. Ei pro corrumpit, elit ullum scripserit eum ad</p>
                    </div>

                    <div className="col-md-3 col-sm-6 feature-one">
                        <i className="icon icon-64 icon-browser"></i>
                        <h5 className="title">Cross browser</h5>
                        <p>Hinc errem volutpat per in, te hinc essent mea. Ei pro corrumpit, elit ullum scripserit eum ad</p>
                    </div>
                </div>
            </div>
        </section>
    }
}