import React from 'react'
import cx from 'classnames'
import { Link } from 'react-router'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import category from './category'
import './style.scss'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SwiperItem = (props) => {
    return (
        <Link key={props.item.icon} to={`/search/${props.item.icon}`}>
            <li 
                className='float-left' 
                style={{
                'backgroundImage': `url(${require(`./icon/${props.item.icon}.png`)})`
            }}>
                {props.item.text}
            </li>
        </Link>
    )
}

const SwiperWrapper = (props) => {
    return (
        <div className="carousel-item">
            <ul className="clear-fix">
                {
                    props.items.map((item, index) => {
                        return <SwiperItem key={index} item={item}/>
                    })
                }
            </ul>
        </div>
    )
}

export default class Category extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            index: 0
        }
    }

    onChangeIndex (index) {
        this.setState({
            index
        })
    }

    render() {
        return (
            <div className="category">
                <AutoPlaySwipeableViews onChangeIndex={(index) => {
                    this.onChangeIndex(index)
                }}>
                    {/* <div className="carousel-item">
                        <ul className="clear-fix">
                            <li className="float-left jingdian">景点</li>
                            <li className="float-left ktv">KTV</li>
                            <li className="float-left gouwu">购物</li>
                            <li className="float-left shenghuofuwu">生活服务</li>
                            <li className="float-left jianshenyundong">健身运动</li>
                            <li className="float-left meifa">美发</li>
                            <li className="float-left qinzi">亲子</li>
                            <li className="float-left xiaochikuaican">小吃快餐</li>
                            <li className="float-left zizhucan">自助餐</li>
                            <li className="float-left jiuba">酒吧</li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <li className="float-left meishi">美食</li>
                            <li className="float-left dianying">电影</li>
                            <li className="float-left jiudian">酒店</li>
                            <li className="float-left xuixianyule">休闲娱乐</li>
                            <li className="float-left waimai">外卖</li>
                            <li className="float-left huoguo">火锅</li>
                            <li className="float-left liren">丽人</li>
                            <li className="float-left dujiachuxing">度假出行</li>
                            <li className="float-left zuliaoanmo">足疗按摩</li>
                            <li className="float-left zhoubianyou">周边游</li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <li className="float-left ribencai">日本菜</li>
                            <li className="float-left SPA">SPA</li>
                            <li className="float-left jiehun">结婚</li>
                            <li className="float-left xuexipeixun">学习培训</li>
                            <li className="float-left xican">西餐</li>
                            <li className="float-left huochejipiao">火车机票</li>
                            <li className="float-left shaokao">烧烤</li>
                            <li className="float-left jiazhuang">家装</li>
                            <li className="float-left chongwu">宠物</li>
                            <li className="float-left quanbufenlei">全部分类</li>
                        </ul>
                    </div> */}
                    {
                        category.map((items, index) => {
                            return <SwiperWrapper key={index} items={items}/>
                        })
                    }
                </AutoPlaySwipeableViews>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}