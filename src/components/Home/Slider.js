import React from "react";
import { Carousel } from 'antd';

const contentStyle = {
    height: '500px',
    color: '#fff',
    width: '100%',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


function Slider() {

    return (
        <Carousel dotPosition="right">
            <div>
                <img style={contentStyle} src="https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg" />
            </div>
            <div>
                <img style={contentStyle} src="https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg" />
            </div>
            <div>
                <img style={contentStyle} src="https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg" />
            </div>
            <div>
                <img style={contentStyle} src="https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg" />
            </div>
        </Carousel>
    );
};

export default Slider;