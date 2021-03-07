import React, { useCallback, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { loginRequestAction } from '../../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import './LoginForm.scss';

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const { logInLoading, logInError, logInDone } = useSelector((state) => state.userReducer);
  const [userid, onChangeUserid] = useInput('');
  const [password, onChangePassword] = useInput('');

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
    if (logInDone) {
      history.push('/');
    }
  }, [logInError, logInDone, history]);

  const onSubmitForm = useCallback(() => {
    console.log(userid, password);
    dispatch(loginRequestAction({ userid, password }));
  }, [userid, password, dispatch]);

  return (
    <div className="login">
      <Form onFinish={onSubmitForm}>
        {/* 스터디쉐어 로고입니다 */}
        <h1 className="login__logo">
          <svg
            width="158.37"
            height="27"
            viewBox="0 0 94 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.98 13.24C7.42 13.24 9.7 12.18 9.7 9.36C9.7 7.2 8.48 5.94 5.48 5.24C4.12 4.92 3.76 4.58 3.76 4.02C3.76 3.42 4.3 3.06 5.16 3.06C6.32 3.06 7.58 3.54 8.48 4.1L9.14 1.94C8.2 1.28 6.78 0.72 5.2 0.72C2.52 0.72 0.8 2.14 0.8 4.32C0.8 6.1 1.74 7.56 4.48 8.2C6.2 8.6 6.72 8.92 6.72 9.7C6.72 10.54 5.96 10.92 4.98 10.92C3.4 10.92 2.1 10.08 1.2 9.32L0.48 11.68C1.42 12.46 2.92 13.24 4.98 13.24ZM12.0525 13H14.9725V8.08H16.2325V6.18H14.9725V3.88H12.0525V6.18H10.8125V8.08H12.0525V13ZM25.7183 6.18H22.7983V9.58C22.7983 10.24 22.3183 10.9 21.6583 10.9C21.0783 10.9 20.7383 10.56 20.7383 9.64V6.18H17.8183V10.28C17.8183 11.98 18.5583 13.26 20.3983 13.26C21.2183 13.26 22.2983 12.86 22.7983 11.9L22.8783 13H25.7183V6.18ZM30.6764 13.26C31.4564 13.26 32.5364 12.98 33.0364 12.16L33.1964 13H35.8364V1H32.9164V6.84C32.3364 6.16 31.4564 5.92 30.6764 5.92C28.8364 5.92 27.5164 7.4 27.5164 9.58C27.5164 11.78 28.8364 13.26 30.6764 13.26ZM31.7164 11.1C31.0164 11.1 30.4364 10.56 30.4364 9.58C30.4364 8.6 31.0164 8.08 31.7164 8.08C32.4164 8.08 32.9964 8.6 32.9964 9.58C32.9964 10.56 32.4164 11.1 31.7164 11.1ZM38.1736 16.9H40.8736L45.3536 6.18H42.6536L41.2136 10.06L39.8136 6.18H37.0336L39.8736 12.96L38.1736 16.9ZM53.8863 13.24C56.3263 13.24 58.6063 12.18 58.6063 9.36C58.6063 7.2 57.3863 5.94 54.3863 5.24C53.0263 4.92 52.6663 4.58 52.6663 4.02C52.6663 3.42 53.2063 3.06 54.0663 3.06C55.2263 3.06 56.4863 3.54 57.3863 4.1L58.0463 1.94C57.1063 1.28 55.6863 0.72 54.1063 0.72C51.4263 0.72 49.7063 2.14 49.7063 4.32C49.7063 6.1 50.6463 7.56 53.3863 8.2C55.1063 8.6 55.6263 8.92 55.6263 9.7C55.6263 10.54 54.8663 10.92 53.8863 10.92C52.3063 10.92 51.0063 10.08 50.1063 9.32L49.3863 11.68C50.3263 12.46 51.8263 13.24 53.8863 13.24ZM60.3188 13H63.2388V9.6C63.2388 8.94 63.7188 8.28 64.3788 8.28C64.9588 8.28 65.2988 8.62 65.2988 9.54V13H68.2188V8.9C68.2188 7.2 67.4788 5.92 65.6388 5.92C64.8188 5.92 63.7388 6.32 63.2388 7.28V1H60.3188V13ZM73.1569 5.92C71.3169 5.92 69.9969 7.4 69.9969 9.6C69.9969 11.78 71.3169 13.26 73.1569 13.26C73.9369 13.26 75.0169 12.98 75.5169 12.16L75.6769 13H78.3169V6.18H75.6769L75.5169 7.02C75.0169 6.2 73.9369 5.92 73.1569 5.92ZM74.1969 8.08C74.8969 8.08 75.4769 8.62 75.4769 9.6C75.4769 10.58 74.8969 11.1 74.1969 11.1C73.4969 11.1 72.9169 10.58 72.9169 9.6C72.9169 8.62 73.4969 8.08 74.1969 8.08ZM80.5141 13H83.4341V9.94C83.4341 8.74 84.6141 8.3 85.7741 8.76V5.92C84.6141 5.92 83.7541 6.58 83.3541 7.44L83.2741 6.18H80.5141V13ZM90.6933 13.26C92.1533 13.26 93.1133 12.92 93.7533 12.44V10.68C93.2533 11.04 92.3733 11.34 91.6133 11.34C90.4333 11.34 89.7933 10.84 89.7133 9.9H93.7733C93.8333 9.68 93.8933 9.18 93.8933 8.76C93.8933 6.98 92.3733 5.92 90.5733 5.92C88.6133 5.92 86.8333 7.3 86.8333 9.52C86.8333 11.68 88.3733 13.26 90.6933 13.26ZM89.7333 8.7C89.8333 7.76 90.2333 7.52 90.6133 7.52C91.0333 7.52 91.3533 7.82 91.3533 8.3C91.3533 8.54 91.3333 8.7 91.3333 8.7H89.7333Z"
              fill="#2656FF"
            />
          </svg>
        </h1>
        {/* //스터디쉐어 로고입니다 */}

        <div className="loginFormWrap">
          <Input
            className="login__id loginForm"
            name="user-id"
            type="id"
            placeholder="아이디 입력"
            value={userid}
            required
            onChange={onChangeUserid}
          />

          <Input
            className="login__pw loginForm"
            name="user-password"
            type="password"
            placeholder="비밀번호 입력"
            value={password}
            required
            onChange={onChangePassword}
          />

          <Button className="login__btn loginForm" htmlType="submit" loading={logInLoading}>
            로그인
          </Button>

          <ul className="login__link">
            <li>
              <a href="#this">아이디 찾기</a>
            </li>
            <li className="login__link-center">
              <a href="#this">비밀번호 찾기</a>
            </li>
            <li>
              <Link to="./SignUp">
                <a href="./SignUp" className="blue">
                  회원가입
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </Form>
    </div>
  );
};
export default Login;
