import "antd/dist/antd.css";
import "./App.css";
import MainPageComponent from "./main";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";
import { Button } from "antd";
import { DownloadOutlined, UserAddOutlined } from "@ant-design/icons";
import LoginPage from "./login";
import RegisterPage from "./register";

function App() {
  const history = useHistory();
  const handleButton = () => {
    const isLogin = localStorage.getItem("login");
    if (isLogin) {
      history.push("/upload");
    } else {
      history.push("/login");
    }
  };
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <div onClick={() => history.push("/home")}>
            <img src="/images/icons/logo.png" alt="판매아이콘" />
          </div>
          <div>
            <Button
              style={{ marginRight: "10px" }}
              size="large"
              onClick={function () {
                history.push("/register");
              }}
              icon={<UserAddOutlined />}
            >
              회원가입
            </Button>
            <Button
              size="large"
              onClick={() => handleButton()}
              icon={<DownloadOutlined />}
            >
              판매하기
            </Button>
          </div>
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <MainPageComponent />
          </Route>
          <Route exact={true} path="/products/:id">
            <ProductPage />
          </Route>
          <Route exact={true} path="/upload">
            <UploadPage />
          </Route>
          <Route exact={true} path="/login">
            <LoginPage />
          </Route>
          <Route exact={true} path="/register">
            <RegisterPage />
          </Route>
        </Switch>
      </div>
      {/* <div id="footer"></div> */}
    </div>
  );
}

export default App;
