import React from "react";
import { Button, Tooltip } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper";
import {
    BsFillCursorFill,
    BsFillHandIndexThumbFill,
    BsFillTelephoneForwardFill,
    BsWhatsapp,
    BsUiChecksGrid
} from "react-icons/bs";


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
            <Swiper spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper">
                <SwiperSlide className="slider-swap" style={{ backgroundImage: `linear-gradient(90deg, #000, #141414 10%, rgba(83, 100, 141, 0)),url("https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/fbd6fa099e205c45454a0f9465138665d7e263044c30ef3dbc4cae67cad5b247._V_SX2160_.jpg")` }}>
                    <div className="slider-text-area" style={{ height: '500px' }}>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slider-swap" style={{ backgroundImage: `linear-gradient(90deg, #000, #141414 10%, rgba(83, 100, 141, 0)),url("https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/fbd6fa099e205c45454a0f9465138665d7e263044c30ef3dbc4cae67cad5b247._V_SX2160_.jpg")` }}>
                    <div className="slider-text-area" style={{ height: '500px' }}>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
                    </div>
                </SwiperSlide>

            </Swiper>

            <div className="icon-bar">
                <div className="apply-cta">
                    <Tooltip placement="leftBottom" title="Apply Online">
                        <Button shape="circle" style={{ background: '#E30613' }} icon={<BsFillCursorFill fill="white" size={20} />} />
                    </Tooltip>
                </div>
                <div className="apply-cta">
                    <Tooltip placement="leftBottom" title="Enquir Now">
                        <Button shape="circle" style={{ background: '#F47D07' }} icon={<BsFillHandIndexThumbFill fill="white" size={20} />} />
                    </Tooltip>
                </div>
                <div className="apply-cta">
                    <Tooltip placement="leftBottom" title="Request a call">
                        <Button shape="circle" style={{ background: '#FD4F00' }} icon={<BsFillTelephoneForwardFill fill="white" size={20} />} />
                    </Tooltip>
                </div>
                <div className="apply-cta">
                    <Tooltip placement="leftBottom" title="Whatsapp">
                        <Button shape="circle" style={{ background: '#19A56E' }} icon={<BsWhatsapp fill="white" size={20} />} />
                    </Tooltip>
                </div>
                <div className="apply-cta">
                    <Tooltip placement="leftBottom" title="Events & News">
                        <Button shape="circle" style={{ background: '#E50159' }} icon={<BsUiChecksGrid fill="white" size={20} />} />
                    </Tooltip>
                </div>
            </div>
        </>
    );
};

export default Slider;