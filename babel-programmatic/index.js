import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { number } from 'prop-types'

const fullSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Container = styled.div`
  height: ${({ size }) => size ? `${size}rem` : `100%`};
  width: ${({ size }) => size ? `${size}rem` : `100%`};
  animation: ${fullSpin} 750ms linear infinite;
  margin: 0 auto;
`

/**
 * @render react
 * @name Spinner
 * @description Loading spinner SVG
 * @example
 * <Spinner
 *   size={2}
 * />
 */

export default function Spinner ({ size }) {
  return (
    <Container size={size}>
      <svg viewBox='0 0 64 64' style={{ stroke: 'currentColor' }}>
        <g>
          <defs>
            <linearGradient id='ciq9uumrn0001jdej3u6urofu' gradientUnits='userSpaceOnUse' x1='55' y1='46' x2='2' y2='46'>
              <stop
                offset='0.1'
                style={{
                  stopColor: 'currentColor',
                  stopOpacity: 0
                }}
              />

              <stop
                offset='0.1'
                style={{
                  stopColor: 'currentColor'
                }}
              />
            </linearGradient>
          </defs>
          <g strokeWidth='8' strokeLinecap='round' fill='none' transform='rotate(245.637 32 32)'>
            <path stroke='url(#ciq9uumrn0001jdej3u6urofu)' d='M4,32 c0,15,12,28,28,28c8,0,16-4,21-9' />
            <path d='M60,32 C60,16,47.464,4,32,4S4,16,4,32' />
          </g>
        </g>
      </svg>
    </Container>
  )
}

Spinner.defaultProps = {
  size: 2
}

Spinner.propTypes = {
  /** Sets the width and height in rems **/
  size: number
}
