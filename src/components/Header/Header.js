import style from "./Header.module.css";
import logo from "../../images/logo.png";

function Header() {
  return (
    <header className={style.header}>
      {/* <div className={style.headerContent}> */}
      <img src={logo} alt="logo" className={style.logo} />

      <div className={style.menu}>
        <ul className={style.list}>
          <li className={style.listItem}>
            <a href="#">RETAIL</a>
          </li>
          <li className={style.listItem}>
            <a href="#">SME</a>
          </li>
          <li className={style.listItem}>
            <a href="#">CORPORATE</a>
          </li>
          <li className={style.listItem}>
            <a href="#">ABOUT US</a>
          </li>
          <li className={style.listItem}>
            <a href="#">COVID 19</a>
          </li>
          <li className={style.listItem}>
            <a href="#">CAMPGAINS</a>
          </li>
        </ul>

        <div className={style.svgContainer}>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={style.search}
          >
            <path
              d="M20.71 19.29L17 15.61C18.4401 13.8144 19.1375 11.5353 18.9488 9.2413C18.7601 6.9473 17.6997 4.81278 15.9855 3.27664C14.2714 1.7405 12.0338 0.919506 9.73295 0.982466C7.43207 1.04543 5.24275 1.98756 3.61517 3.61514C1.98759 5.24272 1.04546 7.43203 0.982497 9.73292C0.919537 12.0338 1.74053 14.2714 3.27667 15.9855C4.81281 17.6997 6.94733 18.7601 9.24133 18.9488C11.5353 19.1375 13.8144 18.4401 15.61 17L19.29 20.68C19.383 20.7737 19.4936 20.8481 19.6154 20.8989C19.7373 20.9497 19.868 20.9758 20 20.9758C20.132 20.9758 20.2627 20.9497 20.3846 20.8989C20.5065 20.8481 20.6171 20.7737 20.71 20.68C20.8903 20.4935 20.991 20.2443 20.991 19.985C20.991 19.7257 20.8903 19.4765 20.71 19.29ZM10 17C8.61556 17 7.26218 16.5895 6.11103 15.8203C4.95989 15.0511 4.06268 13.9579 3.53287 12.6788C3.00306 11.3997 2.86443 9.99223 3.13453 8.63436C3.40463 7.2765 4.07131 6.02922 5.05028 5.05025C6.02925 4.07128 7.27653 3.4046 8.63439 3.1345C9.99226 2.8644 11.3997 3.00303 12.6788 3.53284C13.9579 4.06265 15.0511 4.95986 15.8203 6.111C16.5895 7.26215 17 8.61553 17 10C17 11.8565 16.2625 13.637 14.9498 14.9497C13.637 16.2625 11.8565 17 10 17Z"
              fill="#ED017F"
            />
          </svg>
        </div>
      </div>

      <button type="button" className={style.btn}>
        <span className={style.btnText}>ISERVICE</span>
      </button>
      {/* </div> */}
    </header>
  );
}

export default Header;
