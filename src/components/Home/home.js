import React,{useState} from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

// import Carousel from "react-bootstrap/Carousel";
import bg from "../../assets/images/bg.svg";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import gif1 from "../../assets/images/1.gif";
import gif2 from "../../assets/images/2.gif";
import logo from "../../assets/images/logo2.svg";
import img8 from "../../assets/images/8.png";
import img9 from "../../assets/images/9.png";
import mascotte from "../../assets/images/mascotte.svg";
import verified from "../../assets/images/verified.svg";
import Guide from '../../assets/guide.svg';
import Slider from "../carousel/carousel";
import Colection from "../collections/colection";
import TraderNo from "../traderNumbers/traderNo";
import SliderBackground from '../../assets/sliderBackgroung.svg'
import Logo_rotating from '../../assets/logo_rotating.gif'
import TradingProtocl from '../../layout/tradingProtocol/Index';
const Home = () => {
 
  return (
    <Container fluid className="home_container ">
      <section className="home_banner">
        {/* <div
          className="Bubble position-relative inline-flex align-items-center justify-content-center rounded-full overflow-hidden"
          style={{ width: "100px", height: "100px", animationDelay: "1s"}}
        >
          <div
            className="absolute top-0 flex items-center justify-start w-full h-full transition-all"
            style={{ transform: "translateX(0px)", willChange: "transform" }}
          >
            <img
              src={img1}
              className="h-auto z-0 rounded-circle"
              style={{ width: "100px" }}
            />
          </div> 
          <img
            src={bg}
            className="absolute top-0 left-0 w-full h-auto mix-blend-hard-light z-50"
          />
        </div>*/}
       
        
       <div className="center_text text-center mt-5" >
       <h1 className="text-white header-heading" >
          Swap Your Digital Assets More Secure, More Social
        </h1>
        <button className="rounded-pill border-0 p-3 mt-4 text-primary" type="button">Create Trade</button>
       </div>
        
      <div className="slider1"> <Slider/></div>
      <div className="slider2"> <Slider/></div>
      <div className="slider3"> <Slider/></div>
      <div className="slider4"> <Slider/></div>
      <div className="slider5"> <Slider/></div>
        
        
      </section>
      {/* -------------------------------- */}
      <section className="home_section2 pt-5">
        <h2 className="home_section2_heading text-center mt-5">
          Trade NFTs & Crypto Like a Boss
        </h2>

        <Row className="mt-4 justify-content-center align-items-center">
          <Col lg={4} md={3} sm={3} xs={3} className="text-center">
            <div className="home_section2_gif">
              <img width="70%" className="rounded-circle images" src={gif2} alt="" />
            </div>
          </Col>
          <Col lg={3} md={3} sm={3} xs={3}>
            <div className="home_section2_gif_div text-center align-items-center">
              <img width="10%" className="mb-4" src={logo} alt="" />
              <p style={{ color: "#3e39e6",fontFamily:'Rubik', fontSize:'.75rem' }}>NFT Trader Protocol</p>
            </div>
          </Col>
          <Col lg={4} md={3} sm={3} xs={3} className="text-center">
            <div className="home_section2_gif1">
              <img width="70%" className="rounded-circle images" src={gif1} alt="" />
            </div>
          </Col>
        </Row>
        <p className="text-center mt-5 mt-md-0" style={{ marginTop: "-10px", fontSize:'2vw' }}>
          Our protocol is totally on-chain, data is totally accessible.
        </p>
      </section>
      {/* ---------------------------- */}
      <section className="home_section3">
        <Row className="justify-content-center m-0">
          <Col lg={5}>
            <div
              className="pe-5"
              style={{ borderRight: "1px solid lightgray" }}
            >
              <h3
                style={{
                  color: "#3e39e6",
                  fontSize: "1.675rem",
                  fontWeight: "600",
                }}
              >
                Top 5 Collections
              </h3>
              <div>
                <Colection />
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="ps-4">
              <h3
                style={{
                  color: "#3e39e6",
                  fontSize: "1.675rem",
                  fontWeight: "600",
                }}
              >
                NFT Trader Numbers
              </h3>
              <div>
                <TraderNo />
              </div>
            </div>
          </Col>
        </Row>
        <div
          className="d-flex justify-content-center align-items-center gap-2"
          style={{ marginTop: "90px" }}
        >
          <a href="">Check our volume data on Dune Analytics</a>
          <img width="25px" src={img8} alt="" />
        </div>
      </section>
      {/* -------------------------- */}
      {/* marquee tag section  */}
      <section className="mt-5 mb-1">
        <Container fluid className="home_container">
          

          <div className="news position-relative">
            <div
              className="title share_trades text-center text-white position-absolute"
              style={{
                width: "500px",
                background: "#0c0a41",
                padding: "40px 50px 40px 50px",
                zIndex: "9",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <h5>Share Trades With Your Community</h5>
              <p>Access & configure a trading bot for your own Discord.</p>
            </div>
            <marquee className="news-content">
              <img src={img9} alt="" />
              <img src={img9} alt="" />
              <img src={img9} alt="" />
              <img src={img9} alt="" />
            </marquee>
          </div>
          
        </Container>
      </section>
      {/* ---------------------- */}
      <section className="home_section4">
        {/* <Row className="justify-content-center m-0">
          <Col xs={12} lg={5} md={12}className="text-center text-lg-start">
            <div className="mb-5">
              <p className="fw-bold" style={{ color: "#071b6f" }}>
                Fresh Pair Of Eyes Helping Prevent Scams
              </p>
              <h1 className="fw-bold" style={{ color: "#3e39e6" }}>
                Take comfort with trading on our protocol
              </h1>
              <p>
                NFT Trader offers that extra protective layer to help users
                certify if an NFT collection has been verified or not.
              </p>
            </div>
            <Button
              style={{
                borderRadius: "30px",
                backgroundColor: "#0628b7",
                padding: "13px 30px 13px 30px ",
                fontSize: "16px",
              }}
              variant="primary"
              size="lg"
              active
            >
              Discover How
            </Button>
          </Col>

          <Col xs={12} lg={5} md={12}  className="text-center">
            <div className="mascotte_div position-relative">
              <div
                className=""
                style={{ position: "absolute", top: "-30%", left: "10%" }}
              >
                <img width="90px" src={verified} />
              </div>
              <div
                className=" text-white py-2 ps-4 pe-4"
                style={{
                  position: "absolute",
                  top: "-8%",
                  left: "65.5%",
                  backgroundColor: "#0a1b62",
                  borderRadius: "30px",
                }}
              >
                verified
              </div>
              
            </div>
          </Col>
        </Row> */}
        <TradingProtocl/>
      </section>
      {/* ----------------------------- */}

      {/* <section className="home_section5">
        <Row style={{minHeight:"100vh"}}>
          <Col xs={12} lg={5}  className="d-flex justify-content-center align-items-center">
          <Container fluid className="home_container">
          
          <div className="news position-relative">
            
            <marquee className="news-content">
              <img src={img9} alt="" />
              <img src={img9} alt="" />
              <img src={img9} alt="" />
              <img src={img9} alt="" />
            </marquee>
          </div>
         
        </Container>
          </Col>
          <Col xs={12} lg={5} className="d-flex ps-3 justify-content-center align-items-center">
           <div className="">
           <div className="mb-5 text-white">
              <h1 className="fw-bold">Check What Others Have Traded</h1>
              <p>Review, Compare, Evaluate Past Deals</p>
            </div>
            <div className="">
              <Button
                style={{
                  borderRadius: "30px",
                  backgroundColor: "white",
                  color: "blue",
                  padding: "13px 30px 13px 30px ",
                  fontSize: "16px",
                  marginRight:"10px"
                }}
                variant="primary"
                size="lg"
                active
              >
                View Global Trade History
              </Button>
              <Button
                style={{
                  borderRadius: "30px",
                  backgroundColor: "white",
                  color: "blue",
                  padding: "13px 30px 13px 30px ",
                  fontSize: "16px",
                }}
                variant="primary"
                size="lg"
                active
              >
                Create Your Trade
              </Button>
            </div>
           </div>
          </Col>
        </Row>
      </section> */}

    {/* others trade */}
    <section className="others_trade">
      <div className="blue_section">
         <div className="blueColunm1">
         <marquee direction= {window.innerWidth> '900' ?"up":'left'} >
            <div className="mb-3"> <img src={SliderBackground} className="sliderimg"/></div>     
            <div className="mb-3"> <img src={SliderBackground} className="sliderimg"/></div>     
            <div className="mb-3"> <img src={SliderBackground} className="sliderimg"/></div>     
            <div className="mb-3"> <img src={SliderBackground} className="sliderimg"/></div>     
            <div className="mb-3"> <img src={SliderBackground} className="sliderimg"/></div>     
            <div className="mb-3"> <img src={SliderBackground} className="sliderimg"/></div>     
            <div className="mb-3"> <img src={SliderBackground} className="sliderimg"/></div>     
            <div className="mb-3"> <img src={SliderBackground} className="sliderimg"/></div>     
            
         </marquee>
        {/* <div className="marquee">
          <img src={SliderBackground} className="sliderimg"/>
          <img src={SliderBackground} className="sliderimg"/>
          <img src={SliderBackground} className="sliderimg"/>
          <img src={SliderBackground} className="sliderimg"/>
        </div> */}
          </div>
         <div className="blueColunm2">
         <h1 className="trade-heading">
         Check What Others Have Traded
         </h1>
         <p className="trade-para">Review, Compare, Evaluate Past Deals</p>
         <div className="trade-buttons">
          <button className="trade-history-btn">View global trade history</button>
          <button className="yout-trade-btn">Craete your trade</button>
         </div> </div>
      </div>
      <div className="container">
      <div className="yellow-section">
        <div className="yellow-cl1">
          <img src={Logo_rotating} className="logoRotate"/>
          <h3 className="cl1-heading">Build your application with our open technology</h3>
        </div>
        <div className="yellow-cl2">
          <p className="cl2 para">Looking to build your own interoperable NFT trading market? Feel free to use our SDK and apply it in the development process of your own DApps and protocols.</p>
          <button className="cl2-button rounded-pill">Discover SDK</button>
        </div>
      </div>
      </div>
    </section>

    {/* Know more Section */}
    <section className="knowMore">
   <h1 className="knowMore-heading">Want To Know More?</h1>
   <div className="container">
   <div className="card-warpper">
    <div className="card1">
     <img src={Guide} alt="guide" className="crd1-icon"/>
     <div><h1 className="card1-heaing">How To Trade</h1>
     <p className="card1-para">Learn How To Create Your Deals</p></div>
     <button className="card1-button rounded-pill">Read More</button>
     </div>
    <div className="card1">
     <img src={Guide} alt="guide" className="crd1-icon"/>
     <div><h1 className="card1-heaing">How To Trade</h1>
     <p className="card1-para">Learn How To Create Your Deals</p></div>
     <button className="card1-button rounded-pill">Read More</button>
     </div>
    <div className="card1">
     <img src={Guide} alt="guide" className="crd1-icon"/>
     <div><h1 className="card1-heaing">How To Trade</h1>
     <p className="card1-para">Learn How To Create Your Deals</p></div>
     <button className="card1-button rounded-pill">Read More</button>
     </div>
    
   </div>
   </div>
    </section>

   {/* Connect Wallet Modal */}
  
    </Container>
  );
};

export default Home;
