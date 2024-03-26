import { createContext, useContext } from "react"
import Aunty from "../Aunty/Aunty"
import Dad from "../Dad/Dad"
import Uncle from "../Uncle/Uncle"

export const AssetContext = createContext("gold")

const Grandpa = () => {
  const AssetGold = useContext(AssetContext)
  return (
    <div>
      <h2>Grandpa</h2>
      <p>Give: {AssetGold}</p>
      <AssetContext.Provider value="gold">
        <div className="w-full flex justify-around border-2 border-orange-600 p-5">
          <Dad />
          <Uncle />
          <Aunty />
        </div>
      </AssetContext.Provider>
    </div>
  )
}

export default Grandpa
