import React, { useState } from "react";
import Layouts from "@components/layout"
import { Carousel, Radio } from 'antd';

const contentStyle = {
    height: '500px',
    color: '#fff',
    width: '100%',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


function Home() {

    return (
        <Layouts>
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
        </Layouts>

    );
};

export default Home;