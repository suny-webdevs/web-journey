import Brother from "../Brother/Brother"
import Myself from "../Myself/Myself"
import Sister from "../Sister/Sister"

const Dad = () => {
  return (
    <div>
      <h2>Dad</h2>
      <div className="flex justify-around gap-10 border-2 border-orange-600 p-5">
        <Myself />
        <Brother />
        <Sister />
      </div>
    </div>
  )
}

export default Dad
