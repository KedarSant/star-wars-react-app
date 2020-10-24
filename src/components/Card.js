import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ReactHtmlParser from 'react-html-parser';
import logo from '../image.jpg'
import { ArrowDownCircleFill } from 'react-bootstrap-icons';

export default class Card extends Component {

    state = {
        id_card : uuidv4()
    }

    render() {
        return (
            <div className='col-lg-4 col-md-4 col-sm-12 mb-3'>
                <div class="card bg-warning">
                    <div class="card-body">
                        <img class="card-img-top mb-5" src={logo} alt="Card"/>
                        <div class="mb-2 card-header">
                            <h3 class="card-title">{this.props.title}</h3>
                            <button className='btn btn-dark' data-toggle="collapse" data-target={`#_${this.state.id_card}`}
                                aria-expanded="true" aria-controls="collapseOne">
                                Expand {' '}
                                <ArrowDownCircleFill size={36} />
                            </button>
                            </div>
                        <p class="collapse card-text" id={`_${this.state.id_card}`}>{ReactHtmlParser(this.props.body)}</p>
                    </div>
                </div>
            </div>
        )
    }
}
