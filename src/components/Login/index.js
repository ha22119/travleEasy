import logo from '../image/logo.png';
import LoginButton from '../image/LoginButton.png';
import './css/index.scss';

function App() {
  return (
    <div className="MainLoginPage">
      <div className="ServiceDescriptionPart">
        <div className="Inner">
          <div className="Logo">
            <img src={logo} alt="LogoImage"/>
          </div>
          <div className="Description">
            <a>서비스 설명이 주저리주저리 들어갔으면 좋겠다  서비스 설명이 주저리주저리 들어갔으면 좋겠다  서비스 설명이 주저리주저리 들어갔으면 좋겠다  서비스 설명이 주저리주저리 들어갔으면 좋겠다</a>
          </div>
        </div>
      </div>

      <div className="LoginPart">
        <div className="Inner">
          <div className="LoginDescription">
            <div class="Description">
              <a>Travle should be easy! So we make easy travle. <br/><br/>we are travler and guide.</a>
            </div>
          </div>
          {/* Login part */}
          <form action="" method="">
            <div className="LoginForm">
              <input type="text" placeholder="Email"/>
              <div className="Line"></div> {/* Email Password maddle line */}
              <input type="text" placeholder="Password"/>
            </div>
            <div className="button">
              <img src={LoginButton} alt="LoginButton"/>
            </div>
          </form>
          
          <div class="Footer">
            <div class="FindUserInfo"><a href="#">아이디 / 비밀번호 찾기</a></div>
            <div class="SingUp"><a href="#">회원가입</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
