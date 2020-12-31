import './css/index.scss';
import LogoImage from "../image/logo.png"
import SingUpButton from "../image/SingUpButton.png"
function Singup() {
  return(
    <div className="SingUp">
      <div className="Inner">
        <div className="SingUpLogo">
          <img src={LogoImage} alt="Logo"/>
        </div>
        <div className="SingUpPart">
          <div className="SingUpDescription">
            <div className="SingUpDescriptionBox">
              <a>
              Travle should be easy!
              So we make easy travle.
              <br/><br/>
              we are travler and guide.
              </a>
            </div>
          </div>  
          <div className="UserInfoInput">
            <form action="" method="">
              {/* 회원가입 부분 */}
              <div class="UserInfoInputInner">
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Password_Check"/>
                <input type="text" placeholder="Phone"/>
              </div>
              <div class="UserInfoInputButton">
                <img src={SingUpButton} alt="logo"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ); 
}
export default Singup;