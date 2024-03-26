import { useContext } from "react"
import { AssetContext } from "../Grandpa/Grandpa"

const Wife = () => {
  const AssetGold = useContext(AssetContext)
  return (
    <div className="border-2 border-orange-600 p-5">
      <h2>Wife</h2>
      <p>Take: {AssetGold}</p>
    </div>
  )
}

export default Wife
