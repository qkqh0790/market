import React from "react";
import {
  Form,
  Divider,
  Input,
  InputNumber,
  Button,
  Select,
  Upload,
  message,
} from "antd";
import "./index.css";
import { API_URL } from "../config/constants";

import axios from "axios";
import { useHistory } from "react-router";

const RegisterPage = () => {
  const history = useHistory();
  const { Option } = Select;

  const onSubmit = (values) => {
    axios
      .post(`${API_URL}/register`, {
        user: values.user,
        password: values.password,
        name: values.name,
        year: values.year,
        month: values.month,
        day: values.day,
        gender: values.gender,
        phonenumber: values.phonenumber,
      })
      .then((result) => {
        message.success("회원 가입이 완료 되었습니다.");
        history.replace("/login");
      })
      .catch((err) => {
        console.error(err);
        message.error(`에러가 발생했습니다. ${err.message}`);
      });
  };
  return (
    <div className="register-wrapper">
      <Form name="회원 가입" onFinish={onSubmit}>
        <div className="register-title">아이디</div>
        <Form.Item
          name="user"
          rules={[{ required: true, message: "필수 입력 사항입니다" }]}
        >
          <Input
            className="register-input"
            placeholder="아이디를 입력하세요."
          />
        </Form.Item>
        <div className="register-title">비밀번호</div>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "필수 입력 사항입니다" }]}
        >
          <Input
            type="password"
            className="register-input"
            placeholder="비밀번호를 입력하세요."
          />
        </Form.Item>
        <div className="register-title">비밀번호 재확인</div>
        <Form.Item>
          <Input
            type="password"
            className="register-input"
            placeholder="비밀번호를 확인 해주세요."
          />
        </Form.Item>
        <div className="register-title">이름</div>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "필수 입력 사항입니다" }]}
        >
          <Input
            className="register-input"
            placeholder="이름을 작성 해주세요."
          />
        </Form.Item>
        <div className="register-title">생년월일</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "40px",
          }}
        >
          <Form.Item
            style={{ display: "inline-block" }}
            name="year"
            rules={[{ required: true, message: "필수 입력 사항입니다" }]}
          >
            <Input
              style={{ width: "146px", height: "40px" }}
              placeholder="년(4자)"
            />
          </Form.Item>
          <Form.Item
            name="month"
            rules={[{ required: true, message: "필수 입력 사항입니다" }]}
          >
            <Select
              size="large"
              style={{
                display: "inline-block",
                width: "146px",
              }}
              name="month"
              // onChange
              defaultValue="월"
            >
              <Option value="1">1월</Option>
              <Option value="2">2월</Option>
              <Option value="3">3월</Option>
              <Option value="4">4월</Option>
              <Option value="5">5월</Option>
              <Option value="6">6월</Option>
              <Option value="7">7월</Option>
              <Option value="8">8월</Option>
              <Option value="9">9월</Option>
              <Option value="10">10월</Option>
              <Option value="11">11월</Option>
              <Option value="12">12월</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="day"
            rules={[{ required: true, message: "필수 입력 사항입니다" }]}
          >
            <Select
              size="large"
              style={{
                display: "inline-block",
                width: "146px",
              }}
              name="day"
              defaultValue="일"
            >
              <Option value="1">1일</Option>
              <Option value="2">2일</Option>
              <Option value="3">3일</Option>
              <Option value="4">4일</Option>
              <Option value="5">5일</Option>
              <Option value="6">6일</Option>
              <Option value="7">7일</Option>
              <Option value="8">8일</Option>
              <Option value="9">9일</Option>
              <Option value="10">10일</Option>
              <Option value="11">11일</Option>
              <Option value="12">12일</Option>
              <Option value="13">13일</Option>
              <Option value="14">14일</Option>
              <Option value="15">15일</Option>
              <Option value="16">16일</Option>
              <Option value="17">17일</Option>
              <Option value="18">18일</Option>
              <Option value="19">19일</Option>
              <Option value="20">20일</Option>
              <Option value="21">21일</Option>
              <Option value="22">22일</Option>
              <Option value="23">23일</Option>
              <Option value="24">24일</Option>
              <Option value="25">25일</Option>
              <Option value="26">26일</Option>
              <Option value="27">27일</Option>
              <Option value="28">28일</Option>
              <Option value="29">29일</Option>
              <Option value="30">30일</Option>
              <Option value="31">31일</Option>
            </Select>
          </Form.Item>
        </div>
        {/* selectbox */}
        <div className="register-title">성별</div>
        <Form.Item
          name="gender"
          rules={[{ required: true, message: "필수 입력 사항입니다" }]}
        >
          <Select
            size="large"
            style={{
              display: "inline-block",
            }}
            defaultValue="성별"
          >
            <Option value="0">남자</Option>
            <Option value="1">여자</Option>
          </Select>
        </Form.Item>
        <div className="register-title">이메일 (선택사항)</div>
        <Form.Item name="email">
          <Input className="register-input" />
        </Form.Item>
        <div className="register-title">휴대전화</div>
        <Form.Item
          name="phonenumber"
          rules={[{ required: true, message: "필수 입력 사항입니다" }]}
        >
          <Input
            className="register-input"
            placeholder="전화번호를 입력 해주세요."
          />
        </Form.Item>
        <Form.Item>
          <Button id="register-button" size="large" htmlType="submit">
            가입하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterPage;
