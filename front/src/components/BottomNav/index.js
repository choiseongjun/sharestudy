import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.scss";

const BottomNav = () => {
  return (
    <div className="foot_bar">
      <div className="foot_bar_wrap">
        <NavLink to="/" className="foot_bar_img" activeClassName="active" exact>
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.33317 14.1667V9.16667H10.6665V14.1667H14.8332V7.5H17.3332L8.99984 0L0.666504 7.5H3.1665V14.1667H7.33317Z"
              fill="#999999"
            />
          </svg>
          <p>홈</p>
        </NavLink>
        <NavLink
          to="/mytodolist"
          className="foot_bar_img"
          activeClassName="active"
          exact
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6667 8.33333H1.33333C0.875 8.33333 0.5 8.70833 0.5 9.16667V14.1667C0.5 14.625 0.875 15 1.33333 15H14.6667C15.125 15 15.5 14.625 15.5 14.1667V9.16667C15.5 8.70833 15.125 8.33333 14.6667 8.33333ZM3.83333 13.3333C2.91667 13.3333 2.16667 12.5833 2.16667 11.6667C2.16667 10.75 2.91667 10 3.83333 10C4.75 10 5.5 10.75 5.5 11.6667C5.5 12.5833 4.75 13.3333 3.83333 13.3333ZM14.6667 0H1.33333C0.875 0 0.5 0.375 0.5 0.833333V5.83333C0.5 6.29167 0.875 6.66667 1.33333 6.66667H14.6667C15.125 6.66667 15.5 6.29167 15.5 5.83333V0.833333C15.5 0.375 15.125 0 14.6667 0ZM3.83333 5C2.91667 5 2.16667 4.25 2.16667 3.33333C2.16667 2.41667 2.91667 1.66667 3.83333 1.66667C4.75 1.66667 5.5 2.41667 5.5 3.33333C5.5 4.25 4.75 5 3.83333 5Z"
              fill="#999999"
            />
          </svg>
          <p>투두</p>
        </NavLink>
        <NavLink
          to="/todofeed"
          className="foot_bar_img"
          activeClassName="active"
          exact
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.99984 0.166504C4.39984 0.166504 0.666504 3.89984 0.666504 8.49984C0.666504 13.0998 4.39984 16.8332 8.99984 16.8332C13.5998 16.8332 17.3332 13.0998 17.3332 8.49984C17.3332 3.89984 13.5998 0.166504 8.99984 0.166504ZM8.99984 2.6665C10.3832 2.6665 11.4998 3.78317 11.4998 5.1665C11.4998 6.54984 10.3832 7.6665 8.99984 7.6665C7.6165 7.6665 6.49984 6.54984 6.49984 5.1665C6.49984 3.78317 7.6165 2.6665 8.99984 2.6665ZM8.99984 14.4998C6.9165 14.4998 5.07484 13.4332 3.99984 11.8165C4.02484 10.1582 7.33317 9.24984 8.99984 9.24984C10.6582 9.24984 13.9748 10.1582 13.9998 11.8165C12.9248 13.4332 11.0832 14.4998 8.99984 14.4998Z"
              fill="#999999"
            />
          </svg>
          <p>마이</p>
        </NavLink>
        <NavLink
          to="/mylist"
          className="foot_bar_img"
          activeClassName="active"
          exact
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5567 7.93864H16.9403C16.7448 7.04485 16.3951 6.20657 15.9214 5.45712L17.0339 4.33572C17.2074 4.16085 17.2074 3.87772 17.0339 3.70285L15.3267 1.98188C15.1532 1.80701 14.8723 1.80701 14.6988 1.98188L13.5864 3.10329C12.8429 2.62586 12.0141 2.27334 11.1246 2.07626V0.446896C11.1246 0.199854 10.9264 0 10.6813 0H8.26638C8.0213 0 7.82304 0.199854 7.82304 0.446896V2.07626C6.92261 2.27611 6.08275 2.63419 5.33101 3.12549L4.24884 2.03462C4.07536 1.85975 3.79449 1.85975 3.62101 2.03462L1.91377 3.75559C1.74029 3.93046 1.74029 4.21359 1.91377 4.38846L3.00696 5.49043C2.54159 6.23156 2.20014 7.05595 2.00739 7.93864H0.443333C0.198261 7.93864 0 8.13849 0 8.38554V10.8199C0 11.0669 0.198261 11.2668 0.443333 11.2668H2.00739C2.2029 12.1606 2.55261 12.9988 3.02899 13.7455L1.86696 14.9169C1.69348 15.0917 1.69348 15.3749 1.86696 15.5497L3.5742 17.2707C3.74768 17.4456 4.02855 17.4456 4.20203 17.2707L5.36406 16.0993C6.10754 16.5768 6.93638 16.9293 7.8258 17.1264V18.5503C7.8258 18.7974 8.02406 18.9972 8.26913 18.9972H10.6841C10.9291 18.9972 11.1274 18.7974 11.1274 18.5503V17.1264C12.0141 16.9293 12.8457 16.5768 13.5891 16.0993L14.7512 17.2707C14.9246 17.4456 15.2055 17.4456 15.379 17.2707L17.0862 15.5497C17.2597 15.3749 17.2597 15.0917 17.0862 14.9169L15.9242 13.7455C16.3978 12.9961 16.7475 12.1606 16.943 11.264H18.5594C18.8045 11.264 19.0028 11.0641 19.0028 10.8171V8.38276C19 8.1385 18.8017 7.93864 18.5567 7.93864ZM9.47522 13.9287C7.10435 13.9287 5.18232 11.9912 5.18232 9.60131C5.18232 7.2114 7.10435 5.27392 9.47522 5.27392C11.8461 5.27392 13.7681 7.2114 13.7681 9.60131C13.7681 11.9912 11.8461 13.9287 9.47522 13.9287Z"
              fill="#999999"
            />
          </svg>
          <p>설정</p>
        </NavLink>
      </div>
    </div>
  );
};

export default BottomNav;
