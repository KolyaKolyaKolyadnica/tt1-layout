import img1 from "../../images/Image (1).png";
import img2 from "../../images/Image (2).png";
import img3 from "../../images/Image (3).png";
import img4 from "../../images/Image (4).png";

import style from "./ServicesSection.module.css";

function ServicesSection() {
  const cards = [
    { img: img1, alt: "money-tree", title: "IPDC SAVING SCHEMES", link: "#" },
    {
      img: img2,
      alt: "sky-and-paraglider",
      title: "IPDC SAVING SCHEMES",
      link: "#",
    },
    {
      img: img3,
      alt: "coins-and-pig-money-box",
      title: "IPDC SAVING SCHEMES",
      link: "#",
    },
    {
      img: img4,
      alt: "taxi-night-city",
      title: "IPDC SAVING SCHEMES",
      link: "#",
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2 className={style.title}>Our Services</h2>
        <h4 className={style.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus
          mattis vel feugiat erat tortor eleifend.
        </h4>

        <ul className={style.list}>
          {cards.map((card, idx) => (
            <li className={style.listItem} key={idx}>
              <img src={card.img} alt={card.alt} className={style.image} />

              <div className={style.info}>
                <h3 className={style.infoTitle}>IPDC SAVING SCHEMES</h3>
                <a href={card.link} className={style.infoLink}>
                  <span className={style.svgContainer}>
                    <svg
                      width="37"
                      height="38"
                      viewBox="0 0 37 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.5899 26.2567L25.7561 20.0905C26.0441 19.8006 26.2058 19.4086 26.2058 19C26.2058 18.5914 26.0441 18.1994 25.7561 17.9095L19.5899 11.7434C19.2999 11.4587 18.9093 11.2999 18.5029 11.3018C18.0964 11.3036 17.7072 11.4659 17.4198 11.7533C17.1325 12.0406 16.9702 12.4299 16.9684 12.8363C16.9665 13.2427 17.1252 13.6334 17.41 13.9233L20.945 17.4584H12.3333C11.9244 17.4584 11.5323 17.6208 11.2432 17.9099C10.9541 18.199 10.7916 18.5912 10.7916 19C10.7916 19.4089 10.9541 19.8011 11.2432 20.0902C11.5323 20.3793 11.9244 20.5417 12.3333 20.5417H20.945L17.4099 24.0768C17.1238 24.3665 16.964 24.7576 16.9653 25.1647C16.9666 25.5719 17.1289 25.962 17.4168 26.2499C17.7047 26.5378 18.0948 26.7001 18.502 26.7013C18.9091 26.7026 19.3002 26.5428 19.5899 26.2567Z"
                        fill="#ED017F"
                      />
                      <path
                        d="M33.9167 18.9999C33.9167 15.9508 33.0125 12.9701 31.3185 10.4349C29.6245 7.89963 27.2168 5.92363 24.3998 4.75678C21.5827 3.58993 18.4829 3.28463 15.4924 3.87949C12.5019 4.47434 9.75488 5.94264 7.59882 8.0987C5.44276 10.2548 3.97446 13.0017 3.37961 15.9923C2.78475 18.9828 3.09005 22.0826 4.2569 24.8996C5.42376 27.7167 7.39975 30.1244 9.93501 31.8184C12.4703 33.5124 15.4509 34.4166 18.5 34.4166C22.5874 34.412 26.5061 32.7863 29.3963 29.8961C32.2865 27.0059 33.9122 23.0873 33.9167 18.9999ZM17.4101 26.2566C17.2669 26.1134 17.1533 25.9435 17.0758 25.7565C16.9983 25.5695 16.9584 25.369 16.9584 25.1665C16.9584 24.9641 16.9983 24.7636 17.0758 24.5766C17.1533 24.3896 17.2669 24.2197 17.4101 24.0765L20.945 20.5416H12.3334C11.9245 20.5416 11.5324 20.3792 11.2433 20.09C10.9541 19.8009 10.7917 19.4088 10.7917 18.9999C10.7917 18.5911 10.9541 18.1989 11.2433 17.9098C11.5324 17.6207 11.9245 17.4583 12.3334 17.4583H20.945L17.4101 13.9232C17.1253 13.6332 16.9666 13.2426 16.9684 12.8362C16.9703 12.4297 17.1325 12.0405 17.4199 11.7531C17.7073 11.4658 18.0965 11.3035 18.5029 11.3016C18.9093 11.2998 19.3 11.4585 19.59 11.7433L25.7562 17.9095C26.0442 18.1993 26.2059 18.5914 26.2059 19C26.2059 19.4086 26.0442 19.8006 25.7562 20.0905L19.59 26.2566C19.4469 26.3997 19.277 26.5133 19.09 26.5908C18.9029 26.6683 18.7025 26.7082 18.5 26.7082C18.2976 26.7082 18.0972 26.6683 17.9101 26.5908C17.7231 26.5133 17.5532 26.3997 17.4101 26.2566Z"
                        fill="#FCE0EF"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServicesSection;
