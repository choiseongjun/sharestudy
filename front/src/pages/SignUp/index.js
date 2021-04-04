import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, Form, Input, Button } from 'antd';
import { useFormik } from 'formik';
import './styles.scss';

const SignUp = () => {
  const [gender, setGender] = useState('F');
  const [validateState, setValidateState] = useState({
    email: false,
    confirmText: false,
    id: false,
    confirmPassword: false
  });

  const formik = useFormik({
    initialValues: {
      nickName: '',
      email: '',
      confirmText: '',
      id: '',
      password: '',
      confirmPassword: '',
      birth: '',
      agree: false
    },
    onSubmit: (values) => {
      console.log(values);
      console.log(validateState);
      const valid = Object.values(validateState).every((state) => state);
      if (values.agree && valid) {
        //회원가입 로직 추가 필요
      } else {
        //상세 알럿 추가 필요
        alert('항목을 재확인 해주세요.');
      }
    }
  });

  const onSendEmail = useCallback(() => {
    let result = true;
    if (
      !formik.values.email ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formik.values.email)
    ) {
      result = false;
      alert('이메일을 확인 해주세요');
    }
    //메일 발송하기 추가 필요
    console.log(formik.values.email, '메일발송');
    setValidateState((state) => ({ ...state, email: result }));
  }, [formik]);

  const onCheckConfirmText = useCallback(() => {
    let result = true;
    //문구확인 로직 추가 필요
    if (!formik.values.confirmText) {
      alert('인증이 실패 되었습니다.');
      result = false;
    }
    setValidateState((state) => ({ ...state, confirmText: result }));
  }, [formik]);

  const onCheckDupId = useCallback(() => {
    let result = true;
    //아이디 중복 확인 로직 추가 필요
    if (!formik.values.id) {
      console.log('아이디를 재입력 해주세요.');
      result = false;
    }
    setValidateState((state) => ({ ...state, id: result }));
  }, [formik]);

  const onCheckConfirmPwd = useCallback(() => {
    let result = true;
    const { password, confirmPassword } = formik.values;

    if (!password || !confirmPassword || password !== confirmPassword) {
      alert('비밀번호를 확인 해주세요');
      result = false;
    } else if (
      !/^((?=.*[a-zA-Z])(?=.*\d)|(?=.*[a-zA-Z])(?=.*\W)|(?=.*\d)(?=.*\W)).{6,}$/.test(password)
    ) {
      alert('비밀번호는 영문, 숫자, 특수문자중 2가지 포함 6글자 이상이어야 합니다');
      result = false;
    }

    setValidateState((state) => ({ ...state, confirmPassword: result }));
  }, [formik]);

  const onFormChange = useCallback(
    (e) => {
      const { name } = e.target;
      if (name === 'id') {
        setValidateState((state) => ({
          ...state,
          id: false
        }));
      } else if (name.indexOf('password') > 0) {
        setValidateState((state) => ({
          ...state,
          confirmPassword: false
        }));
      }

      formik.handleChange(e);
    },
    [formik]
  );

  const onChangeGender = useCallback(
    (e) => {
      setGender(e?.target?.value);
    },
    [setGender]
  );

  return (
    <div className="container">
      <div className="content">
        <Link className="backBtn" to="/login">
          <svg
            width="9"
            height="15"
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 14L1 7.5L7.5 1"
              stroke="#111111"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <div className="signUp">
          <h1 className="header">회원가입</h1>
          <Form onFinish={formik.handleSubmit} onChange={onFormChange}>
            <div className="input-group" style={{ marginBottom: '35px' }}>
              <Input.Search
                className={validateState.id ? 'confirm' : ''}
                id="id"
                name="id"
                type="text"
                placeholder="아이디를 입력해 주세요."
                enterButton="중복확인"
                value={formik.values.id}
                onSearch={onCheckDupId}
              />
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="비밀번호 6글자 이상.(영문, 숫자, 특수문자중 2포함)"
                value={formik.values.password}
              />
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="비밀번호 확인"
                value={formik.values.confirmPassword}
              />
            </div>

            <div className="input-group" style={{ marginBottom: '35px' }}>
              <Input.Search
                id="nickName"
                name="nickName"
                type="text"
                placeholder="닉네임을 입력해 주세요."
                enterButton="중복확인"
                value={formik.values.nickName}
              />
              <Input.Search
                id="email"
                name="email"
                type="email"
                placeholder="이메일을 입력해 주세요."
                enterButton="중복확인"
                value={formik.values.email}
                disabled={validateState.email}
                onSearch={onSendEmail}
              />
            </div>

            <div className="input-group">
              <Input
                id="birth"
                name="birth"
                type="text"
                placeholder="생년월일을 입력해주세요."
                value={formik.values.birth}
              />
            </div>

            <div className="submit-group">
              <Checkbox.Group defaultValue={['M', 'F']}>
                <Checkbox
                  id="female"
                  name="gender"
                  value="F"
                  checked={gender}
                  onClick={() => {
                    return false;
                  }}
                  className={gender === 'F' ? '' : 'gender_disable'}
                >
                  여자
                </Checkbox>
                <Checkbox
                  id="male"
                  name="gender"
                  value="M"
                  checked={gender}
                  onClick={() => {
                    return false;
                  }}
                  className={gender === 'M' ? '' : 'gender_disable'}
                >
                  남자
                </Checkbox>
              </Checkbox.Group>
              <Checkbox id="agree" name="agree" checked={formik.values.agree}>
                이용약관에 동의합니다.
              </Checkbox>
              <Button htmlType="submit">확인</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
