import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="B" transform="translate(11.000000, 5.000000)">
        {/* <path
          d="M 10.28 28.44 L 0 1.44 L 3.72 0 L 12.52 24.28 L 21.36 0.12 L 24.8 1.44 L 14.56 28.44 L 10.28 28.44 Z"
          fill="currentColor"
        /> */}
        <text
          space="preserve"
          textAnchor="start"
          fontFamily="sans-serif"
          fontSize="40"
          strokeWidth="3"
          id="svg_2"
          y="60"
          x="13"
          stroke="currentColor"
          fill="currentColor">
          VB
        </text>
      </g>
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
