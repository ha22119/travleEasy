import logo from '../image/logo.png';
// import './js/slide.js';
import './css/index.scss';

function App() {
  return (
    <div className="MainPage">
      <div className="Inner">

        <div className="MainPageHeader">
          <h1 class="MainPageLogo">
            <a href="#"><img src={logo}/></a>
          </h1>
          <ul className="MainPageMenuBar">
            <li><a href="#">여행하기</a></li>
            <li><a href="#">지역가이드</a></li>
            <li><a href="#">MY</a></li>
            <li><a href="#">LOGOUT(s19078@gsm.hs.kr)</a></li>
          </ul>
        </div>

        <div className="MainPageSlidePart">
          <div className="MainPageSlide">
            <div className="MainPageSlideTop"></div>
              <div className="MainPageSlideImagePart">
                {/* {Slide()} */}
              </div>
            <div className="MainPageSlideButtom"></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
