import './App.css';
import PageOne from "./PageOne";
import PageFour from "./PageFour";
import PageFive from "./PageFive";
import PageSix from "./PageSix";
import PageSeven from "./PageSeven";
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import ApiContextProvider from './Assets/Context';
import Icon from './Icon';
import OwlCrousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

import mob1 from "./Assets/ScrollAnimation Task Assets/mobile1.PNG";
import Headline4 from "./Assets/ScrollAnimation Task Assets/karavan-social-networking-app-screen.png";
function App() {
  return (
    <div className="App">
      <div className='content-container text-white d-lg-block d-none'>
        <ApiContextProvider>
          <Icon />
          <PageOne />
          <PageTwo />
          <PageThree />
          <PageFour />
          <PageFive />
          <PageSix />
          <PageSeven />
        </ApiContextProvider>
      </div>
      <div className='owl-theme d-lg-none d-block '>
        <OwlCrousel items="1" autoPlay dots loop margin={10} autoHeightClass >
          <div className='item vh-100'>
            <div class="card h-100">
              <img src={mob1} class="card-img-top" alt="..." />
              <div class="card-body bg-danger py-5">
                <h1 class="card-title mt-5 mb-3 fw-bold">ABC 1</h1>
                <p class="card-text text-black mb-3">This Is Simple Text For ABC 1</p>
                <h4 className='by-5'>Case Study <span className="p-3 rounded-pill bg-white ">Comping Soon</span></h4>

              </div>
            </div>
          </div>
          <div className='item vh-100'>
            <div class="card h-100">
              <img src={mob1} class="card-img-top" alt="..." />
              <div class="card-body bg-danger py-5">
                <h1 class="card-title mt-5 mb-3">ABC 1</h1>
                <p class="card-text text-black">This Is Simple Text For ABC 1</p>
                <h4>Case Study <span className="p-3 rounded bg-white ">Comping Soon</span></h4>

              </div>
            </div>
          </div>
          <div className='item vh-100'>
            <div class="card h-100">
              <img src={mob1} class="card-img-top" alt="..." />
              <div class="card-body bg-danger py-5">
                <h1 class="card-title mt-5 mb-3">ABC 1</h1>
                <p class="card-text text-black">This Is Simple Text For ABC 1</p>
                <h4>Case Study <span className="p-3 rounded bg-white ">Comping Soon</span></h4>

              </div>
            </div>
          </div>
        </OwlCrousel>
      </div>
    </div>

  );
}

export default App;
