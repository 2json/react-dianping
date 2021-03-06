import React from 'react'
import axios from 'axios'
import HomeAd from 'components/HomeAd'

export default class Ad extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            result: []
        }
    }

    async getAdData() {
        try{
            let result = await axios.get('/api/ads')
            if(result && result['status'] == 200) {
                this.setState({
                    result: result['data']
                })
            }
        }catch(ex) {
            console.log(ex.message)
        }
    }

    componentDidMount() {
        this.getAdData()
    }

    render() {
        return (
            <div>
                {
                    this.state.result.length ? 
                    <HomeAd result={this.state.result} /> :
                    null
                }
            </div>
        )
    }
}