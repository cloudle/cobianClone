import {Component} from 'react';

export default class ScrollTop extends Component {
    render () {
        return <div className="scroll top" style={{display: 'block'}}>
            <a href="#home">
                <span className="fa fa-chevron-up"></span>
            </a>
        </div>
    }
}