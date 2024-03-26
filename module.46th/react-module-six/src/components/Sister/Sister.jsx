import { useContext } from "react"
import { AssetContext } from "../Grandpa/Grandpa"

const Sister = () => {
  const AssetGold = useContext(AssetContext)
  return (
    <div className="border-2 border-orange-600 p-5">
      <h2>Sister</h2>
      <p>Take: half {AssetGold}</p>
    </div>
  )
}

export default Sister
