import React,{useState} from 'react'
import { Container, Image, Row, Col, Button } from 'react-bootstrap'


const WalletDetailsCard = () => {

    const [timeLeft, settimeLeft] = useState(false)
    setInterval(() => {
        if(timeLeft === false){
            settimeLeft(true)
        }else{
            settimeLeft(false)
        }
    }, 3000);

    let time = new Date();


    return (
        <Container fluid style={{ maxWidth: "1280px" }} className="WalletDetailsCard">
            <div className="activetrades-top d-flex justify-content-between align-items-center">
                <p>Active Trades</p>
                <Image src="/reload.svg" style={{ height: "100%" }}></Image>
            </div>
            <div className="trades-swap">
                <Row className="trades-swap-row align-items-center">
                    <Col lg={2} md={2} sm={12} xs={12}>
                        <Row className='align-items-center justify-content-evenly trade-swaps'>
                            <Col sm={3} xs={3}><Image src="/profile.png"></Image></Col>
                            <Col sm={1} xs={1}><Image src="/profile.png" style={{width : "20px"}}></Image></Col>
                            <Col sm={3} xs={3}><Image src="/arrows.svg"></Image></Col>
                            <Col sm={1} xs={1}><Image src="/profile.png" style={{width : "20px"}}></Image></Col>
                            <Col sm={3} xs={3}><Image src="/ETH.png"></Image></Col>
                        </Row>
                    </Col>
                    <Col lg={1} md={1} sm={0} ></Col>
                    <Col lg={5} md={5} sm={12} xs={12}>
                        <Row className='align-items-center justify-content-evenly trade-swap-from'>
                            <Col sm={1} xs={2}>
                                <p style={{fontFamily : "Rubik"}}>from :</p>
                            </Col>
                            <Col sm={1} xs={1}><Image src="/profile.png" style={{width : "30px"}}></Image></Col>
                            <Col sm={4} xs={4}>
                                <p className='trade-swap-p'>{"<"}username not set{">"}</p>
                            </Col>
                            <Col sm={4} xs={4}>
                                <Button>{timeLeft ? "New Request" : "16h 4m left"}</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12} className="d-flex justify-content-end rm-flex-end">
                        <Row className='trade-check-deal justify-content-end'>
                            <Col><Button>Check Deal<Image src="eye.svg" height={"20px"}></Image></Button></Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default WalletDetailsCard
