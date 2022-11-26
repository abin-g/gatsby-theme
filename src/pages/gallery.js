import React from "react";
import { Image, Col, Row } from 'antd';
import Layouts from "@components/layout"


function Gallery() {

    return (
        <Layouts>
            <div className="gallery">
                <Row gutter={16}>
                    <Col className="image-div" span={8}>
                        <Image
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                    </Col>
                    <Col span={8}>
                        <Image
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                    </Col>
                    <Col span={8}>
                        <Image
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                    </Col>
                    <Col span={8}>
                        <Image
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                    </Col>
                </Row>
            </div>
        </Layouts>
    );
};

export default Gallery;