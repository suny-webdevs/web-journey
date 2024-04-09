import AdsCard from "../AdsCard/AdsCard"
import AutoLogin from "../AutoLogin/AutoLogin"
import FindUs from "../FindUs/FindUs"
import QZone from "../QZone/QZone"

const RightSideNavbar = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-2xl font-semibold">Login With</h2>
        <AutoLogin />
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Find Us On</h2>
        <FindUs />
      </div>
      <div className="bg-gray-300 p-5">
        <h2 className="text-2xl font-semibold">Q-Zone</h2>
        <QZone />
      </div>
      <div>
        <AdsCard />
      </div>
    </div>
  )
}

export default RightSideNavbar
