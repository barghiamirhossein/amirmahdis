import React from 'react'

export default function HeartCouple({className=''}) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#ff8fb2"/>
          <stop offset="100%" stopColor="#caa7ff"/>
        </linearGradient>
      </defs>
      <g transform="translate(10,10)">
        <path d="M50 20C44 5 20 6 18 25C16 44 40 54 50 68C60 54 84 44 82 25C80 6 56 5 50 20Z" fill="url(#g1)"/>
        <circle cx="30" cy="30" r="6" fill="#fff" opacity="0.3"/>
        <circle cx="70" cy="30" r="6" fill="#fff" opacity="0.3"/>
      </g>
    </svg>
  )
}
