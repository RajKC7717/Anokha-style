import { useEffect } from 'react';
import './anokhastyle.css'
import imgrobot from "./images/image-removebg-preview.png"
import imgarrow from "./images/arrow.png"
import imghan1 from "./images/hanging1.png"
import imghan2 from "./images/hangtwo.png"
import imghood from "./images/HOODIEEE.png"
import imgjac from "./images/JACKETTT.png"
import imgsize from "./images/sizemeaphoto.png"
import Spline from '@splinetool/react-spline';


export default function AnokhaStyle() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      console.log(scrollTop);
      
      const two = document.getElementById('twoo');
      const one = document.getElementById('onee');
      const three = document.getElementById('threee');
      const six = document.getElementById('sixx');
      const seven = document.getElementById('sevenn');

      if (scrollTop >= 950 && two) {
        two.style.animation = "right 1.5s forwards linear";
      }
      if (scrollTop >= 1100 && one) {
        one.style.animation = "left 1s forwards linear";
      }
      if (scrollTop >= 1350 && three) {
        three.style.animation = "rightb 1s forwards linear";
      }
      if (scrollTop >= 1750 && six) {
        six.style.animation = "left 1s forwards linear";
      }
      if (scrollTop >= 2200 && seven) {
        seven.style.animation = "rightb 1s forwards linear";
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <img id="hang2" src={imghan2} alt="" />
      <img id="hang1" src={imghan1} alt="" />
      <img id="hang3" src={imghood} alt="" />
      <img id="hang4" src={imgjac} alt="" />

      <div className="ndivone">
        <div className="n nsubdivone1">ANOKHA</div>
        <div className="nsubdivone2"></div>
        <div className="n nsubdivone3">STYLE</div>
      </div>

      <a href="./chatbot-master/chatbot.html">
        <img id="floating" src={imgrobot} alt="" title="AI Chatbot" />
      </a>

      <a id="log" href="./node_login_excel/public/index.html">
        <div className="subthree">LOGIN</div>
      </a>
      
      <div className="subthree1"></div>
      <div className="subthree2"></div>
      <div className="subfour"></div>
      <div className="subfourr"></div>
      
      <div className="divfour">
        {/* <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.76/build/spline-viewer.js"></script>
        <spline-viewer background="#081f5c" url="https://prod.spline.design/lf1EZzpo1t3e-jGR/scene.splinecode"></spline-viewer> */}
          <Spline
        scene="https://prod.spline.design/iHvj3dZI0M8ZQ7I0/scene.splinecode" 
      />
      </div>

      <a id="liinkk" href="jayeshindex.html">
        <div className="box1 box">
          <h1>Explore</h1>
        </div>
      </a>
      
      <a href="#qwer">
        <div className="box2 box">
          <h2 id="padd">Design</h2>
          <p id="ex">it yourself</p>
        </div>
      </a>
      
      <a href="http://localhost:3000/">
        <div className="box3 box">
          <h1>Measurements</h1>
          <p id="mea">Our platform includes an advanced webcam-based measurement feature that accurately captures your body size.</p>
        </div>
      </a>
      
      <a href="./chatbot-master/chatbot.html">
        <div className="box4 box">
          <h2 id="headask">Ask</h2>
          <p id="ask">Our platform features an AI-integrated chatbot that provides personalized fashion recommendations. Designed to understand your style preferences, it helps you make better design choices.</p>
        </div>
      </a>

      <div className="wrapper">
        <div className="inner" style={{ "--quantity": 10 }}>
          <div className="card" style={{ "--index": 0, backgroundColor: "#7096d1" }}>
            <div className="img">A <br />N<br />I<br />M<br />E</div>
          </div>
          <div className="card" style={{ "--index": 1, backgroundColor: "#7096d1" }}>
            <div className="img">M<br />A<br />R<br />V<br />E<br />L</div>
          </div>
          <div className="card" style={{ "--index": 2, backgroundColor: "#7096d1" }}>
            <div className="img">D<br />C</div>
          </div>
          <div className="card" style={{ "--index": 3, backgroundColor: "#7096d1" }}>
            <div className="img">J<br />E<br />R<br />S<br />E<br />Y</div>
          </div>
          <div className="card" style={{ "--index": 4, backgroundColor: "#7096d1" }}>
            <div className="img">C<br />A<br />R<br />T<br />O<br />N</div>
          </div>
          <div className="card" style={{ "--index": 5, backgroundColor: "#7096d1" }}>
            <div className="img">D<br />O<br />O<br />D<br />L<br />E</div>
          </div>
          <div className="card" style={{ "--index": 6, backgroundColor: "#7096d1" }}>
            <div className="img">V<br />A<br />L<br />O</div>
          </div>
          <div className="card" style={{ "--index": 7, backgroundColor: "#7096d1" }}>
            <div className="img">T<br />E<br />C<br />H<br />N<br />O</div>
          </div>
          <div className="card" style={{ "--index": 8, backgroundColor: "#7096d1" }}>
            <div className="img">Q<br />U<br />O<br />T<br />E<br />S</div>
          </div>
          <div className="card" style={{ "--index": 9, backgroundColor: "#7096d1" }}>
            <div className="img">S<br />C<br />R<br />I<br />B<br />L</div>
          </div>
        </div>
      </div>

      <img id="arrow" src={imgarrow} alt="" />
      
      <div id="qwer" className="ndivfive">
        <div className="nsubfive1" id="twoo">
          <a id="lin" href="./paint-web-app-main/index.html">
            <div className="step1">
              Canvas for 2-D designing <button id="stepbtn"><i className="fas fa-arrow-right"></i></button>
            </div>
          </a>
        </div>
        <div className="nsubfive2" id="onee">
          <a id="lin" href="mockup.html">
            <div className="step2">
              Visualise/Edit your design on 3-D model of apparels <button id="stepbtn"><i className="fas fa-arrow-right"></i></button>
            </div>
          </a>
        </div>
        <div className="nsubfive3" id="threee">
          <a id="lin" href="./customizable/tryon.html">
            <div className="step3">
              You can try-on your apparel here. <button id="stepbtn"><i className="fas fa-arrow-right"></i></button>
            </div>
          </a>
        </div>
      </div>

      <div id="nsizes" className="nsize">
        <div className="nsix1">
          <h1 id="headsix">FASHION RECOMMENDATIONS(AI)</h1>
          <p className="paraone">Our platform features an AI-integrated chatbot that provides personalized fashion recommendations. Designed to understand your style preferences, it helps you make better design choices.</p>
        </div>
        <div className="nsix2" id="sixx">
          <a href="./chatbot-master/chatbot.html">
            <img id="bot" src={imgrobot} alt="" />
          </a>
        </div>
      </div>
      
      <div className="naifas">
        <div className="nseven1" id="sevenn">
          <a id="linkk" href="http://localhost:3000/">
            <img id="bot2" src={imgsize} alt="" />
          </a>
        </div>
        <div className="nseven2">
          <h1 id="headsix">BODYSIZE-MEASUREMENT</h1>
          <p className="para">Our platform includes an advanced webcam-based measurement feature that accurately captures your body size.</p>
        </div>
      </div>

      <div className="divsix">
        <div className="common-class unique-class1">
          Terms & conditions <br />
          <p id="small">By using Anokha Style, users agree to follow the terms and conditions. Users can create designs and visualize them on 3D models while Anokha Style moderates content. The webcam-based body measurement tool requires consent, and data is not stored or shared. Users retain ownership of designs, but Anokha Style may showcase them for promotions. We prioritize privacy per our policy and are not liable for inaccuracies. Services may change or end without notice, governed by local laws.</p>
        </div>
        <div className="common-class unique-class2">
          Anokha Style <br />
          <p id="small">Anokha Style is an innovative platform that allows users to create unique designs and visualize them on 3D models. It offers a cutting-edge webcam-based body measurement feature for accurate sizing without storing personal data. Users retain ownership of their designs, while Anokha Style reserves the right to showcase them for promotional purposes. The platform is committed to privacy and data security, adhering to its Privacy Policy. With a focus on creativity and technology, Anokha Style provides a seamless and engaging design experience.</p>
        </div>
        <div className="common-class unique-class3">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <div className="ni"><i className="fab fa-facebook-f"></i></div>
          </a><br />
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <div className="ni"><i className="fab fa-twitter"></i></div>
          </a><br />
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <div className="ni"><i className="fab fa-instagram"></i></div>
          </a><br />
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <div className="ni"><i className="fab fa-linkedin-in"></i></div>
          </a><br />
        </div>
      </div>
    </>
  );
}