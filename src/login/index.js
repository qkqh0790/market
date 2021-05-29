import React, { useEffect } from "react";
import {
  Form,
  Divider,
  Input,
  InputNumber,
  Button,
  Upload,
  message,
} from "antd";
import "./index.css";
import { useHistory } from "react-router";
import axios from "axios";
import { API_URL } from "../config/constants";

const LoginPage = () => {
  const history = useHistory();

  useEffect(() => {
    const login = localStorage.getItem("login");
    if (login === "true") {
      history.replace("/");
    }
  }, [history]);

  const onSubmit = (values) => {
    axios
      .post(`${API_URL}/login`, {
        login_id: values.login_id,
        login_password: values.login_password,
      })
      .then((result) => {
        const success = result.data.success;
        if (success) {
          message.success("로그인이 완료 되었습니다.");
          localStorage.setItem("login", values.login_id);
          history.replace("/");
        } else {
          message.error("아이디와 비밀번호를 확인 해주세요.");
        }
      });
  };

  return (
    <div className="login-wrapper">
      <Form name="로그인" onFinish={onSubmit}>
        <Form.Item
          name="login_id"
          rules={[{ required: true, message: "필수 입력 사항입니다" }]}
        >
          <Input className="id-input" size="large" placeholder="아이디" />
        </Form.Item>
        <Form.Item
          name="login_password"
          rules={[{ required: true, message: "필수 입력 사항입니다" }]}
        >
          <Input
            className="password-input"
            size="large"
            placeholder="비밀번호"
            type="password"
          />
        </Form.Item>
        <Form.Item>
          <Button id="login-button" size="large" htmlType="submit">
            로그인
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
