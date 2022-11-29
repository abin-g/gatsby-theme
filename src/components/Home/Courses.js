import React from 'react';
import { Row, Col, Card } from 'antd';
import {
    BiCodeCurly,
    BiLinkExternal,
    BiMale,
    BiAtom,
    BiBandAid,
    BiAward,
    BiBitcoin,
    BiCamera,
    BiCheckCircle
} from "react-icons/bi";


const App = () => (
    <Row md={24}>
        <Col md={8}>
            <Card>
                <Card.Grid className='course-section' style={{ backgroundImage: `linear-gradient(90deg, #000, #141414 10%, rgba(83, 100, 141, 0)),url("https://wp-media.petersons.com/blog/wp-content/uploads/2017/12/10124243/adult-beautiful-blur-935756.jpg")` }} >
                    <h2>Courses <BiLinkExternal /></h2>
                </Card.Grid>
            </Card>
        </Col>
        <Col md={16}>
            <Card>
                <Card.Grid className='course-rightsection' style={{ background: `#FD4E00` }}>
                    <BiCodeCurly className="courselogo" size={80} />
                    <h2><BiLinkExternal /> Engineering</h2>
                    <p>Enginerring Sub description text</p>
                </Card.Grid>
                <Card.Grid className='course-rightsection' style={{ background: `#2E2552` }}>
                    <BiMale className="courselogo" size={80} />
                    <h2><BiLinkExternal /> Law</h2>
                    <p>Law Sub description text</p>
                </Card.Grid>
                <Card.Grid className='course-rightsection' style={{ background: `#F47C06` }}>
                    <BiAtom className="courselogo" size={80} />
                    <h2><BiLinkExternal /> Arts & Science</h2>
                    <p>Science Sub description text</p>
                </Card.Grid>
                <Card.Grid className='course-rightsection' style={{ background: `#6F6F6F` }}>
                    <BiBandAid className="courselogo" size={80} />
                    <h2><BiLinkExternal /> Medical</h2>
                    <p>Medical Sub description text</p>
                </Card.Grid>
                <Card.Grid className='course-rightsection' style={{ background: `#E50159` }}>
                    <BiAward className="courselogo" size={80} />
                    <h2><BiLinkExternal /> Business</h2>
                    <p>Enginerring Sub description text</p>
                </Card.Grid>
                <Card.Grid className='course-rightsection' style={{ background: `#000000` }}>
                    <BiBitcoin className="courselogo" size={80} />
                    <h2><BiLinkExternal /> Accounts</h2>
                    <p>Enginerring Sub description text</p>
                </Card.Grid>
                <Card.Grid className='course-rightsection' style={{ background: `#E30613` }}>
                    <BiCamera className="courselogo" size={80} />
                    <h2><BiLinkExternal /> Media</h2>
                    <p>Enginerring Sub description text</p>
                </Card.Grid>
                <Card.Grid className='course-rightsection' style={{ background: `#F47C06` }}>
                    <BiCheckCircle className="courselogo" size={80} />
                    <h2><BiLinkExternal /> Health</h2>
                    <p>Enginerring Sub description text</p>
                </Card.Grid>
            </Card>
        </Col>
    </Row>

);
export default App;