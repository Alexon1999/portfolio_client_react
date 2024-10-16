import React, { useState, useEffect } from "react";

const Svg = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function scroll() {
      const listPos = document
        .getElementById("list")
        ?.getBoundingClientRect().top;
      const windowHeight = window.innerHeight / 1.6;

      // console.log('Output: windowHeight', windowHeight);
      // console.log(listPos);

      if (listPos < windowHeight) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <svg
      width='533'
      height='620'
      viewBox='0 0 533 620'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g id='revenue-graph-monochrome 1'>
        <g className={!!show ? "show" : ""} id='list'>
          <path
            id='Vector'
            d='M246.218 0V296.236H254.901V360.421H459.516V0H246.218Z'
            fill='#F3F3F3'
          />
          <path
            id='Vector_2'
            d='M459.516 0H246.218V23.2138H459.516V0Z'
            fill='#DFDFDF'
          />
          <path
            id='Vector_3'
            d='M474.608 52.4519H295.476V111.822H474.608V52.4519Z'
            fill='#DFDFDF'
          />
          <path
            id='Vector_4'
            d='M466.085 63.9426H305.936V69.3211H466.085V63.9426Z'
            fill='#F9F9F9'
          />
          <path
            id='Vector_5'
            d='M466.085 76.7559H305.936V82.1344H466.085V76.7559Z'
            fill='#F9F9F9'
          />
          <path
            id='Vector_6'
            d='M466.085 89.5745H305.936V94.953H466.085V89.5745Z'
            fill='#F9F9F9'
          />
          <path
            id='Vector_7'
            d='M474.608 135.682H295.476V195.052H474.608V135.682Z'
            fill='#DFDFDF'
          />
          <path
            id='Vector_8'
            d='M319.337 183.045C327.731 183.045 334.536 175.129 334.536 165.364C334.536 155.6 327.731 147.684 319.337 147.684C310.942 147.684 304.137 155.6 304.137 165.364C304.137 175.129 310.942 183.045 319.337 183.045Z'
            fill='#F9F9F9'
          />
          <path
            id='Vector_9'
            d='M462.367 147.684H345.751V164.786H462.367V147.684Z'
            fill='#F9F9F9'
          />
          <path
            id='Vector_10'
            d='M462.367 170.583H345.751V176.865H462.367V170.583Z'
            fill='#F9F9F9'
          />
          <path
            id='Vector_11'
            d='M435.313 220.803H267.067V317.089H435.313V220.803Z'
            fill='white'
          />
        </g>
        <g id='stairs'>
          <path
            id='Vector_12'
            d='M109 521V367H173V521'
            stroke='black'
            strokeWidth='2.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
          />
          <path
            id='Vector_13'
            d='M192 521V285H256V521'
            stroke='black'
            strokeWidth='2.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
          />
          <path
            id='Vector_14'
            d='M26 528.204V439.885H89.8623V528.204'
            stroke='black'
            strokeWidth='2.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
          />
        </g>
        <g className={!!show ? "show" : ""} id='man'>
          <g id='left_foot'>
            <g id='left'>
              <path
                id='Vector_15'
                d='M182.665 176.02C187.107 176.02 222.742 181.874 238.332 191.19C236.187 203.336 222.169 274.89 222.169 274.89H213.441C213.441 274.89 210.155 214.651 209.444 215.153C204.722 217.979 185.983 225.109 165.956 225.455'
                fill='black'
              />
              <path
                id='Vector_16'
                d='M214.192 274.058V284.701H230.577L219.509 278.702V273.804'
                stroke='black'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </g>
          <g className={!!show ? "show" : ""} id='left_hand'>
            <path
              id='Vector_17'
              d='M193.491 100.406C196.681 103.053 201.663 108.118 202.743 110.245C215.399 91.9524 236.241 73.4973 237.946 71.365C239.65 69.2326 240.181 57.3532 240.181 54.7554C240.181 52.1576 243.263 45.2356 246.234 45.2356V76.382C246.234 76.382 211.358 133.236 205.616 133.236C202.655 133.236 190.399 127.282 184.234 123.424'
              stroke='black'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <path
            id='left_handle'
            d='M172.707 87.6497C181.59 89.1377 193.25 95.8802 193.272 98.5617C193.298 101.662 187.524 113.478 182.989 118.345'
            stroke='black'
            strokeWidth='2.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
          />
          <g id='body'>
            <g id='Vector_18'>
              <path
                d='M165.32 80.2769C189.203 94.3819 187.289 171.872 182.665 176.02C177.575 180.583 135.797 182.804 131.977 176.02C130.2 172.858 128.93 151.417 131.168 129.396'
                fill='white'
              />
              <path
                d='M165.32 80.2769C189.203 94.3819 187.289 171.872 182.665 176.02C177.575 180.583 135.797 182.804 131.977 176.02C130.2 172.858 128.93 151.417 131.168 129.396'
                stroke='black'
                strokeWidth='2.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
              />
            </g>
            <g id='Vector_19'>
              <path
                d='M142.455 87.7683C145.226 83.418 148.562 80.2715 152.551 78.8765Z'
                fill='white'
              />
              <path
                d='M142.455 87.7683C145.226 83.418 148.562 80.2715 152.551 78.8765'
                stroke='black'
                strokeWidth='2.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
              />
            </g>
          </g>
          <g id='right_hand'>
            <path
              id='Vector_20'
              d='M118.834 111.008C112.109 119.926 102 142.793 102 146.88C102 157.214 131.99 202.727 135.806 202.727C137.396 199.518 139.941 192.864 139.941 192.864C139.941 192.864 121.925 153.783 118.621 148.73C121.481 145.63 131.866 129.376 133.563 124.323C133.788 123.634 133.965 122.926 134.091 122.204'
              stroke='black'
              strokeWidth='2.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
            />
          </g>
          <g id='right_handle'>
            <path
              id='Vector_21'
              d='M137.298 123.103C133.904 123.351 117.786 113.333 117.786 108.425C117.786 104.477 135.419 83.2217 143.023 88.0732C144.107 88.7655 144.8 90.0159 145.244 91.6485'
              stroke='black'
              strokeWidth='2.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
            />
          </g>
          <g id='head'>
            <path
              id='Vector_22'
              d='M181.146 35.5695C181.709 34.4773 182.004 33.2264 181.999 31.9528C181.999 27.3028 178.641 26.6932 177.113 25.2362C175.487 23.6862 176.185 19 171.783 19C167.839 19 165.898 23.8205 163.375 25.6753C160.324 27.9228 154.336 26.1145 150.392 30.842C148.478 33.136 148.029 38.7832 146.839 40.8498C145.213 43.6502 142.397 44.4665 142.397 48.7394C142.397 51.3227 143.956 55.3785 146.044 57.1559'
              stroke='black'
              strokeWidth='2.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
            />
            <path
              id='Vector_23'
              d='M165.32 80.2768V73.772'
              stroke='black'
              strokeWidth='2.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
            />
            <path
              id='Vector_24'
              d='M152.551 62.24V80.7832C152.551 83.3975 155.744 84.7305 158.938 84.7408'
              stroke='black'
              strokeWidth='2.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
            />
            <path
              id='Vector_25'
              d='M165.32 73.7719C165.828 73.7408 166.331 73.6578 166.826 73.5239C173.395 71.7414 176.9 61.2169 174.652 50.0259C174.248 47.999 173.663 46.0267 172.907 44.1411'
              stroke='black'
              strokeWidth='2.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
            />
            <path
              id='Vector_26'
              d='M150.245 51.7566C149.277 52.0818 148.443 52.8025 147.895 53.7861C147.347 54.7697 147.123 55.9503 147.263 57.1109C147.404 58.2714 147.899 59.3341 148.659 60.1035C149.419 60.873 150.393 61.2977 151.4 61.2994C151.657 61.2965 151.912 61.2671 152.164 61.2116C152.289 61.5577 152.417 61.9039 152.551 62.2449'
              stroke='black'
              strokeWidth='2.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
            />
          </g>
          <g id='right_foot'>
            <g id='right'>
              <path
                id='Vector_27'
                d='M132.248 176.02V176.351C136.441 185.274 139.941 192.884 139.941 192.884C139.941 192.884 137.396 199.539 135.806 202.747C135.201 202.747 133.94 201.6 132.252 199.647V356.745H139.941L182.665 176.02C179.916 178.655 142.162 184.855 132.248 176.02Z'
                fill='black'
              />
              <path
                id='Vector_28'
                d='M133.332 356.466V367.109H149.712L138.648 361.111V356.213'
                stroke='black'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Svg;
