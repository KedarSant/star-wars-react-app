import React, { Component } from 'react'
import axios from 'axios';
import Card from './Card'

export default class Grid extends Component {
    state = {
        category: this.props.category,
        categoryData : []
    }

    componentDidMount() {
        axios(`https://blooming-thicket-64006.herokuapp.com/https://swapi.dev/api/${this.state.category}`)
            .then(res => {
                this.setState({
                    category : this.state.category,
                    categoryData: res.data.results
                })
        })
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    }

    categoryObjectString(categoryObject) {
        let body = '';
        for (let key in categoryObject) {
            if (!Array.isArray(categoryObject[key])) {
                if (this.validURL(categoryObject[key])) {
                    body = body + `${this.capitalizeFirstLetter(key)} : 
                                    <a href='${categoryObject[key]}'>${categoryObject[key]}</a><br>`;
                }
                else if (key !== 'created' && key !== 'edited') {
                    body = body + `${this.capitalizeFirstLetter(key)} : ${categoryObject[key]}<br>`;
                }
            }
        }
        return body;
    }

    render() {
        return (
            <React.Fragment>
                <h2 className='mb-3 white text-center'>
                    <hr color='white'/> {this.capitalizeFirstLetter(this.state.category)} <hr color='white'/>
                </h2>
                <div className='row mb-5'>
                    {
                        this.state.categoryData.map((categoryObject) => {
                            return <Card title={categoryObject.title ? categoryObject.title : categoryObject.name}
                                body={this.categoryObjectString(categoryObject)} />
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}
