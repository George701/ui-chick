import React from 'react'

function Chick() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      viewBox="0 0 357.79 357.789"
      xmlSpace="preserve"
    >
      <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(90)">
          <stop offset="5%" stop-color="#ffea00" />
          <stop offset="95%" stop-color="#ff3d00" />
        </linearGradient>
      </defs>
      <path
        fill="url('#myGradient')"
        d="m246.401 233.358-38.299 15.42-108.467-36.935v-73.874l146.766 95.389zm-108.026 90.15 126.209-55.49-45.738-15.576 43.541-17.546-4.9-3.183-47.415-136.925h59.243l72.166 138.822-88.606 102.478-114.5-12.58zM357.79 87.396H207.514l-.469-1.372 48.249-64.323L357.79 87.396zm-113.587 181.51-120.519 52.975-81.068-11.001L0 185.704l244.203 83.202z"
      />
    </svg>
  )
}

export default Chick