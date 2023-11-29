import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Link from "next/link";

const config: DocsThemeConfig = {
  logo: (
    <Link legacyBehavior href="/docs">
      <svg
        width="144"
        viewBox="0 0 410 64"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M46.9921 41.5811C45.5255 43.6611 43.7268 45.4609 41.6463 46.9291C41.2589 47.2026 41.0026 47.6203 40.9428 48.0758C40.8828 48.5317 41.016 48.9826 41.318 49.345L52.2603 62.2456C53.002 63.1353 54.0784 63.6488 55.2096 63.6488C56.2264 63.6488 57.1946 63.2405 57.9364 62.4987L62.5619 57.8732C63.3501 57.0848 63.7571 56.0562 63.7081 54.9759C63.6586 53.8951 63.1594 52.9065 62.3026 52.1921L49.4133 41.2565C49.1065 41.0006 48.7308 40.8628 48.3495 40.8628C47.8166 40.8628 47.3091 41.1313 46.9921 41.5811Z"
          fill="black"
        ></path>
        <path
          d="M46.9921 41.5811C45.5255 43.6611 43.7268 45.4609 41.6463 46.9291C41.2589 47.2026 41.0026 47.6203 40.9428 48.0758C40.8828 48.5317 41.016 48.9826 41.318 49.345L52.2603 62.2456C53.002 63.1353 54.0784 63.6488 55.2096 63.6488C56.2264 63.6488 57.1946 63.2405 57.9364 62.4987L62.5619 57.8732C63.3501 57.0848 63.7571 56.0562 63.7081 54.9759C63.6586 53.8951 63.1594 52.9065 62.3026 52.1921L49.4133 41.2565C49.1065 41.0006 48.7308 40.8628 48.3495 40.8628C47.8166 40.8628 47.3091 41.1313 46.9921 41.5811Z"
          fill="url(#paint0_linear_3_108)"
        ></path>
        <path
          d="M24.2988 0.501652C10.5875 2.29359 0 14.0197 0 28.2197C0 41.613 9.41888 52.8042 21.9935 55.5365C24.0064 55.7833 26.0555 55.9198 28.1364 55.9198C29.9355 55.9198 31.7116 55.8194 33.4607 55.6326C46.2643 53.0758 55.9121 41.775 55.9121 28.2197C55.9121 13.8649 45.0924 2.03943 31.1637 0.447948C30.1621 0.386637 29.1533 0.351196 28.1364 0.351196C26.8448 0.351196 25.5653 0.403814 24.2988 0.501652ZM6.5266 28.1356C6.5266 16.221 16.222 6.52558 28.1364 6.52558C40.051 6.52558 49.7462 16.221 49.7462 28.1356C49.7462 40.05 40.051 49.7454 28.1364 49.7454C16.222 49.7454 6.5266 40.05 6.5266 28.1356Z"
          fill="black"
        ></path>
        <path
          d="M24.2988 0.501652C10.5875 2.29359 0 14.0197 0 28.2197C0 41.613 9.41888 52.8042 21.9935 55.5365C24.0064 55.7833 26.0555 55.9198 28.1364 55.9198C29.9355 55.9198 31.7116 55.8194 33.4607 55.6326C46.2643 53.0758 55.9121 41.775 55.9121 28.2197C55.9121 13.8649 45.0924 2.03943 31.1637 0.447948C30.1621 0.386637 29.1533 0.351196 28.1364 0.351196C26.8448 0.351196 25.5653 0.403814 24.2988 0.501652ZM6.5266 28.1356C6.5266 16.221 16.222 6.52558 28.1364 6.52558C40.051 6.52558 49.7462 16.221 49.7462 28.1356C49.7462 40.05 40.051 49.7454 28.1364 49.7454C16.222 49.7454 6.5266 40.05 6.5266 28.1356Z"
          fill="url(#paint1_linear_3_108)"
        ></path>
        <path
          d="M20.8974 19.0478C20.6742 19.3457 20.4644 19.6564 20.2667 19.9775C21.6925 22.2499 24.5507 23.8047 27.8371 23.8047C31.1236 23.8047 33.9815 22.2499 35.4076 19.9775C35.2101 19.6564 35.0001 19.3457 34.7768 19.0478C32.9447 16.6047 30.4803 15.2592 27.8374 15.2592C25.194 15.2592 22.7296 16.6047 20.8974 19.0478Z"
          fill="black"
        ></path>
        <path
          d="M20.8974 19.0478C20.6742 19.3457 20.4644 19.6564 20.2667 19.9775C21.6925 22.2499 24.5507 23.8047 27.8371 23.8047C31.1236 23.8047 33.9815 22.2499 35.4076 19.9775C35.2101 19.6564 35.0001 19.3457 34.7768 19.0478C32.9447 16.6047 30.4803 15.2592 27.8374 15.2592C25.194 15.2592 22.7296 16.6047 20.8974 19.0478Z"
          fill="url(#paint2_linear_3_108)"
        ></path>
        <path
          d="M39.25 18.9533L37.4046 20.7987C36.8824 21.7117 36.1821 22.5524 35.3176 23.2884C33.5666 24.7788 31.32 25.6847 28.9034 25.8911V40.2746C31.1383 39.9626 33.1937 38.6718 34.7769 36.5607C35.0546 36.1905 35.3124 35.8011 35.5503 35.3956L39.2503 39.0954C39.4585 39.3034 39.7312 39.4076 40.004 39.4076C40.2769 39.4076 40.5498 39.3034 40.758 39.0954C41.1744 38.679 41.1744 38.0041 40.758 37.5876L36.5234 33.3532C37.0513 31.9606 37.3753 30.4444 37.4764 28.8701H42.1393C42.7283 28.8701 43.2055 28.3926 43.2055 27.8039C43.2055 27.2153 42.728 26.7381 42.1393 26.7381H37.4764C37.419 25.8447 37.2898 24.9703 37.0922 24.1267L40.7578 20.4609C41.1742 20.0447 41.1742 19.3697 40.7578 18.9533C40.5495 18.7452 40.2769 18.6411 40.004 18.6411C39.7312 18.6411 39.4583 18.7452 39.25 18.9533Z"
          fill="black"
        ></path>
        <path
          d="M39.25 18.9533L37.4046 20.7987C36.8824 21.7117 36.1821 22.5524 35.3176 23.2884C33.5666 24.7788 31.32 25.6847 28.9034 25.8911V40.2746C31.1383 39.9626 33.1937 38.6718 34.7769 36.5607C35.0546 36.1905 35.3124 35.8011 35.5503 35.3956L39.2503 39.0954C39.4585 39.3034 39.7312 39.4076 40.004 39.4076C40.2769 39.4076 40.5498 39.3034 40.758 39.0954C41.1744 38.679 41.1744 38.0041 40.758 37.5876L36.5234 33.3532C37.0513 31.9606 37.3753 30.4444 37.4764 28.8701H42.1393C42.7283 28.8701 43.2055 28.3926 43.2055 27.8039C43.2055 27.2153 42.728 26.7381 42.1393 26.7381H37.4764C37.419 25.8447 37.2898 24.9703 37.0922 24.1267L40.7578 20.4609C41.1742 20.0447 41.1742 19.3697 40.7578 18.9533C40.5495 18.7452 40.2769 18.6411 40.004 18.6411C39.7312 18.6411 39.4583 18.7452 39.25 18.9533Z"
          fill="url(#paint3_linear_3_108)"
        ></path>
        <path
          d="M14.9167 18.9535C14.5003 19.3699 14.5003 20.0449 14.9167 20.4611L18.5823 24.1269C18.3847 24.9705 18.2553 25.8449 18.1981 26.7381H13.5352C12.9465 26.7381 12.4692 27.2155 12.4692 27.8041C12.4692 28.3928 12.9465 28.8703 13.5352 28.8703H18.1981C18.2992 30.4446 18.6232 31.9608 19.1513 33.3534L14.9167 37.5878C14.5003 38.0043 14.5003 38.6792 14.9167 39.0956C15.333 39.5119 16.0079 39.5119 16.4242 39.0956L20.1242 35.3958C20.3621 35.8013 20.6199 36.1904 20.8976 36.5607C22.4808 38.672 24.5365 39.9628 26.7711 40.2746V25.8915C24.3545 25.6849 22.1081 24.7792 20.3569 23.2886C19.4924 22.5526 18.7921 21.7121 18.2699 20.7989L16.4242 18.9535C16.2162 18.7454 15.9433 18.6413 15.6705 18.6413C15.3976 18.6413 15.1248 18.7454 14.9167 18.9535Z"
          fill="url(#paint4_linear_3_108)"
        ></path>
        <path d="M88.5046 10.3636H99.8825L111.9 39.6818H112.411L124.428 10.3636H135.806V54H126.857V25.598H126.495L115.202 53.7869H109.108L97.8157 25.4915H97.4535V54H88.5046V10.3636Z"></path>
        <path d="M158.151 54.6392C154.785 54.6392 151.887 53.9574 149.458 52.5937C147.043 51.2159 145.183 49.2699 143.876 46.7557C142.569 44.2273 141.916 41.2372 141.916 37.7855C141.916 34.419 142.569 31.4645 143.876 28.9219C145.183 26.3793 147.022 24.3977 149.394 22.9773C151.781 21.5568 154.579 20.8466 157.789 20.8466C159.948 20.8466 161.958 21.1946 163.819 21.8906C165.694 22.5724 167.327 23.6023 168.719 24.9801C170.126 26.3579 171.219 28.0909 172.001 30.179C172.782 32.2528 173.173 34.6818 173.173 37.4659V39.9588H145.538V34.3338H164.629C164.629 33.027 164.344 31.8693 163.776 30.8608C163.208 29.8523 162.42 29.0639 161.411 28.4957C160.417 27.9133 159.259 27.6222 157.938 27.6222C156.56 27.6222 155.339 27.9418 154.273 28.581C153.222 29.206 152.398 30.0511 151.802 31.1165C151.205 32.1676 150.9 33.3395 150.886 34.6321V39.9801C150.886 41.5994 151.184 42.9986 151.781 44.1775C152.391 45.3565 153.251 46.2656 154.359 46.9048C155.467 47.544 156.781 47.8636 158.3 47.8636C159.309 47.8636 160.232 47.7216 161.07 47.4375C161.908 47.1534 162.626 46.7273 163.222 46.1591C163.819 45.5909 164.273 44.8949 164.586 44.071L172.981 44.625C172.555 46.642 171.681 48.4034 170.36 49.9091C169.053 51.4006 167.363 52.5653 165.289 53.4034C163.229 54.2273 160.85 54.6392 158.151 54.6392Z"></path>
        <path d="M196.504 21.2727V28.0909H176.795V21.2727H196.504ZM181.269 13.4318H190.346V43.9432C190.346 44.7812 190.474 45.4347 190.729 45.9034C190.985 46.3579 191.34 46.6776 191.795 46.8622C192.264 47.0469 192.803 47.1392 193.414 47.1392C193.84 47.1392 194.266 47.1037 194.692 47.0327C195.119 46.9474 195.445 46.8835 195.673 46.8409L197.1 53.5952C196.646 53.7372 196.006 53.9006 195.183 54.0852C194.359 54.2841 193.357 54.4048 192.178 54.4474C189.991 54.5327 188.073 54.2415 186.425 53.5739C184.792 52.9062 183.521 51.8693 182.612 50.4631C181.702 49.0568 181.255 47.2812 181.269 45.1364V13.4318Z"></path>
        <path d="M202.416 54V21.2727H211.493V54H202.416ZM206.976 17.054C205.626 17.054 204.469 16.6065 203.503 15.7116C202.551 14.8025 202.075 13.7159 202.075 12.4517C202.075 11.2017 202.551 10.1293 203.503 9.23437C204.469 8.32527 205.626 7.87073 206.976 7.87073C208.325 7.87073 209.476 8.32527 210.428 9.23437C211.393 10.1293 211.876 11.2017 211.876 12.4517C211.876 13.7159 211.393 14.8025 210.428 15.7116C209.476 16.6065 208.325 17.054 206.976 17.054Z"></path>
        <path d="M233.551 54.6392C230.199 54.6392 227.315 53.929 224.9 52.5085C222.5 51.0739 220.653 49.0852 219.36 46.5426C218.082 44 217.443 41.0739 217.443 37.7642C217.443 34.4119 218.089 31.4716 219.382 28.9432C220.689 26.4006 222.542 24.419 224.943 22.9986C227.343 21.5639 230.199 20.8466 233.508 20.8466C236.363 20.8466 238.863 21.365 241.008 22.402C243.153 23.4389 244.851 24.8949 246.101 26.7699C247.351 28.6449 248.039 30.8466 248.167 33.375H239.602C239.36 31.7415 238.721 30.4275 237.684 29.4332C236.662 28.4247 235.319 27.9204 233.657 27.9204C232.251 27.9204 231.022 28.304 229.971 29.071C228.934 29.8239 228.125 30.9247 227.542 32.3736C226.96 33.8224 226.669 35.5767 226.669 37.6364C226.669 39.7244 226.953 41.5 227.521 42.9631C228.103 44.4261 228.92 45.5412 229.971 46.3082C231.022 47.0753 232.251 47.4588 233.657 47.4588C234.694 47.4588 235.625 47.2457 236.449 46.8196C237.287 46.3935 237.976 45.7756 238.515 44.9659C239.069 44.142 239.431 43.1548 239.602 42.0043H248.167C248.025 44.5043 247.343 46.706 246.122 48.6094C244.914 50.4986 243.245 51.9758 241.115 53.0412C238.984 54.1065 236.463 54.6392 233.551 54.6392Z"></path>
        <path d="M274.966 40.0653V21.2727H284.043V54H275.328V48.0554H274.987C274.249 49.973 273.02 51.5142 271.301 52.679C269.597 53.8437 267.516 54.4261 265.058 54.4261C262.871 54.4261 260.946 53.929 259.284 52.9347C257.622 51.9403 256.322 50.527 255.385 48.6946C254.462 46.8622 253.993 44.6676 253.979 42.1108V21.2727H263.055V40.4915C263.07 42.4233 263.588 43.9503 264.611 45.0724C265.634 46.1946 267.004 46.7557 268.723 46.7557C269.817 46.7557 270.84 46.5071 271.791 46.0099C272.743 45.4986 273.51 44.7457 274.092 43.7514C274.689 42.7571 274.98 41.5284 274.966 40.0653Z"></path>
        <path d="M300.38 10.3636V54H291.303V10.3636H300.38Z"></path>
        <path d="M322.438 54.6392C319.128 54.6392 316.266 53.9361 313.851 52.5298C311.45 51.1094 309.597 49.1349 308.29 46.6065C306.983 44.0639 306.33 41.1165 306.33 37.7642C306.33 34.3835 306.983 31.429 308.29 28.9006C309.597 26.3579 311.45 24.3835 313.851 22.9773C316.266 21.5568 319.128 20.8466 322.438 20.8466C325.747 20.8466 328.602 21.5568 331.003 22.9773C333.418 24.3835 335.278 26.3579 336.585 28.9006C337.892 31.429 338.545 34.3835 338.545 37.7642C338.545 41.1165 337.892 44.0639 336.585 46.6065C335.278 49.1349 333.418 51.1094 331.003 52.5298C328.602 53.9361 325.747 54.6392 322.438 54.6392ZM322.48 47.6079C323.986 47.6079 325.243 47.1818 326.251 46.3295C327.26 45.4631 328.02 44.2841 328.531 42.7926C329.057 41.3011 329.32 39.6037 329.32 37.7003C329.32 35.7969 329.057 34.0994 328.531 32.6079C328.02 31.1165 327.26 29.9375 326.251 29.071C325.243 28.2045 323.986 27.7713 322.48 27.7713C320.96 27.7713 319.682 28.2045 318.645 29.071C317.622 29.9375 316.848 31.1165 316.322 32.6079C315.811 34.0994 315.555 35.7969 315.555 37.7003C315.555 39.6037 315.811 41.3011 316.322 42.7926C316.848 44.2841 317.622 45.4631 318.645 46.3295C319.682 47.1818 320.96 47.6079 322.48 47.6079Z"></path>
        <path d="M365.435 40.0653V21.2727H374.511V54H365.797V48.0554H365.456C364.717 49.973 363.489 51.5142 361.77 52.679C360.065 53.8437 357.984 54.4261 355.527 54.4261C353.34 54.4261 351.415 53.929 349.753 52.9347C348.091 51.9403 346.791 50.527 345.854 48.6946C344.93 46.8622 344.462 44.6676 344.447 42.1108V21.2727H353.524V40.4915C353.538 42.4233 354.057 43.9503 355.08 45.0724C356.102 46.1946 357.473 46.7557 359.192 46.7557C360.286 46.7557 361.308 46.5071 362.26 46.0099C363.212 45.4986 363.979 44.7457 364.561 43.7514C365.158 42.7571 365.449 41.5284 365.435 40.0653Z"></path>
        <path d="M409.002 30.6051L400.692 31.1165C400.55 30.4062 400.245 29.767 399.776 29.1989C399.307 28.6165 398.689 28.1548 397.922 27.8139C397.169 27.4588 396.267 27.2812 395.216 27.2812C393.81 27.2812 392.624 27.5795 391.658 28.1761C390.692 28.7585 390.209 29.5398 390.209 30.5199C390.209 31.3011 390.522 31.9616 391.147 32.5014C391.772 33.0412 392.844 33.4744 394.364 33.8011L400.287 34.9943C403.469 35.6477 405.841 36.6989 407.404 38.1477C408.966 39.5966 409.748 41.5 409.748 43.8579C409.748 46.0028 409.115 47.8849 407.851 49.5043C406.601 51.1236 404.883 52.3878 402.695 53.2969C400.522 54.1918 398.015 54.6392 395.174 54.6392C390.841 54.6392 387.39 53.7372 384.819 51.9332C382.262 50.115 380.763 47.6435 380.323 44.5185L389.25 44.0497C389.52 45.3707 390.174 46.3793 391.211 47.0753C392.248 47.7571 393.576 48.098 395.195 48.098C396.786 48.098 398.064 47.7926 399.03 47.1818C400.01 46.5568 400.507 45.7543 400.522 44.7741C400.507 43.9503 400.159 43.2756 399.478 42.75C398.796 42.2102 397.745 41.7983 396.324 41.5142L390.657 40.3849C387.461 39.7457 385.081 38.6378 383.519 37.0611C381.971 35.4844 381.196 33.4744 381.196 31.0312C381.196 28.929 381.765 27.1179 382.901 25.598C384.052 24.0781 385.664 22.9062 387.738 22.0824C389.826 21.2585 392.269 20.8466 395.067 20.8466C399.201 20.8466 402.454 21.7202 404.826 23.4673C407.212 25.2145 408.604 27.5937 409.002 30.6051Z"></path>
        <defs>
          <linearGradient
            id="paint0_linear_3_108"
            x1="48.4415"
            y1="68.2844"
            x2="58.7654"
            y2="24.5307"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E968C1"></stop>
            <stop offset="1" stopColor="#F5878F"></stop>
          </linearGradient>
          <linearGradient
            id="paint1_linear_3_108"
            x1="52.7181"
            y1="1.15421"
            x2="10.4392"
            y2="47.366"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#AF48EA"></stop>
            <stop offset="1" stopColor="#7152F1"></stop>
          </linearGradient>
          <linearGradient
            id="paint2_linear_3_108"
            x1="32.1158"
            y1="11.6689"
            x2="16.2614"
            y2="42.4559"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E968C1"></stop>
            <stop offset="1" stopColor="#F5878F"></stop>
          </linearGradient>
          <linearGradient
            id="paint3_linear_3_108"
            x1="42.7606"
            y1="17.1502"
            x2="26.9062"
            y2="47.9372"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E968C1"></stop>
            <stop offset="1" stopColor="#F5878F"></stop>
          </linearGradient>
          <linearGradient
            id="paint4_linear_3_108"
            x1="30.4883"
            y1="10.8305"
            x2="14.6339"
            y2="41.6176"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E968C1"></stop>
            <stop offset="1" stopColor="#F5878F"></stop>
          </linearGradient>
        </defs>
      </svg>
    </Link>
  ),
  project: {
    link: "https://github.com/alwaysmeticulous/meticulous-sdk",
  },
  chat: {
    link: "https://discord.gg/gD7Mmc5XGb",
  },
  docsRepositoryBase: "https://github.com/iarthstar/always-meticulous---docs",
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
  },
  footer: {
    text: "Always Meticulous",
  },
  primaryHue: 291,
  primarySaturation: 50,
};

export default config;
