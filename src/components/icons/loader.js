import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      {/* <g id="B" transform="translate(11.000000, 5.000000)">
        <path
          d="M 50 35 L 34 35 L 34 43 L 47 43 L 47 48 L 34 48 L 34 61 L 29 61 L 29 30 L 50 30 Z Z Z"
          fill="currentColor"
        />
      </g> */}
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLoader;
