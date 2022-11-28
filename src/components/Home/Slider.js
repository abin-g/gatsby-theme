import React from "react";
import { Carousel, Button, Tooltip } from 'antd';
import { BsFillCursorFill, BsFillHandIndexThumbFill, BsFillTelephoneForwardFill, BsWhatsapp, BsUiChecksGrid } from "react-icons/bs";
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
        <>
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
            <div className="icon-bar">
                <div className="apply-cta">
                    <Tooltip title="Apply Online">
                        <Button shape="circle" style={{ background: '#E30613' }} icon={<BsFillCursorFill fill="white" size={20} />} />
                    </Tooltip>
                </div>
                <div className="apply-cta">
                    <Tooltip title="Enquir Now">
                        <Button shape="circle" style={{ background: '#F47D07' }} icon={<BsFillHandIndexThumbFill fill="white" size={20} />} />
                    </Tooltip>
                </div>
                <div className="apply-cta">
                    <Tooltip title="Request a call">
                        <Button shape="circle" style={{ background: '#FD4F00' }} icon={<BsFillTelephoneForwardFill fill="white" size={20} />} />
                    </Tooltip>
                </div>
                <div className="apply-cta">
                    <Tooltip title="Whatsapp">
                        <Button shape="circle" style={{ background: '#19A56E' }} icon={<BsWhatsapp fill="white" size={20} />} />
                    </Tooltip>
                </div>
                <div className="apply-cta">
                    <Tooltip title="Events & News">
                        <Button shape="circle" style={{ background: '#E50159' }} icon={<BsUiChecksGrid fill="white" size={20} />} />
                    </Tooltip>
                </div>
            </div>
        </>
    );
};

export default Slider;