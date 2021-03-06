import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

export default class LoadMore extends React.Component {
    static propTypes = {
        loadType: PropTypes.string
    }

    static defaultProps = {
        loadType: 'scroll'
    }

    constructor(props, context) {
        super(props, context)
        this.timerId = null
    }

    componentDidMount() {
        const { isLoadingMore } = this.props
        
        if(this.props.loadType != 'scroll') {
            return
        }
        
        window.addEventListener('scroll', () => {
            if (isLoadingMore) {
                return
            }
            if(this.timerId) {
                clearTimeout(this.timerId)
            }
            this.timerId = setTimeout(this.scrollFun.bind(this), 150)
        }, false)
    }

    componentWillUnmount() {
        clearTimeout(this.timerId)
        window.removeEventListener('scroll', this.scrollFun, false)
    }

    scrollFun() {
        if(!this.wrapper) return
        const top = this.wrapper.getBoundingClientRect().top 
        const windowHeight = window.screen.height
        if(top && top < windowHeight) {
            this.props.loadingMoreFn()
        }
    }

    render() {
        const { isLoadingMore, loadingMoreFn, loadType } = this.props
        return (
            <div ref={(wrapper) => this.wrapper = wrapper} style={{minHeight: 10}}>
                {
                    loadType == 'click' && 
                    <div className="load-more">
                        {
                            isLoadingMore
                            ? <span>加载中...</span>
                            : <span onClick={loadingMoreFn}>加载更多</span>
                        }
                    </div>
                }
            </div>
        )
    }
}