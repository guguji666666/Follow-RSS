import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface RocketCuteFiIconProps {
  width?: number
  height?: number
  color?: string
}

export const RocketCuteFiIcon = ({
  width = 24,
  height = 24,
  color = "#10161F",
}: RocketCuteFiIconProps) => {
  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 24 24">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M18.643 2.483c-2.614-.39-7.535-.174-11.769 5.146-.255.32-.627.466-.957.418a2.922 2.922 0 0 0-3.07 1.675l-.474 1.037c-.558 1.216.177 2.581 1.398 2.902.496.13 1.086.301 1.688.513a3.19 3.19 0 0 0-.107.102c-.41.41-.692 1.073-.887 1.61a18.588 18.588 0 0 0-.536 1.822 1.948 1.948 0 0 0 2.368 2.368c.567-.14 1.23-.322 1.82-.536.539-.195 1.203-.478 1.612-.887.035-.035.069-.07.102-.107.206.588.375 1.165.504 1.654.327 1.24 1.729 1.973 2.95 1.375l1.03-.503a2.92 2.92 0 0 0 1.615-2.963c-.038-.329.114-.695.438-.944 5.458-4.175 5.604-9.184 5.173-11.822a3.426 3.426 0 0 0-2.898-2.86M6.766 15.69a1.095 1.095 0 1 1 1.549 1.549c-.234.188-.54.299-.822.4l-.056.02c-.476.172-1.032.329-1.549.458.129-.517.285-1.074.457-1.55l.02-.056c.102-.281.213-.588.4-.821m5.94-7.223a2 2 0 1 1 2.829 2.828 2 2 0 0 1-2.829-2.828"
        clipRule="evenodd"
      />
    </Svg>
  )
}
