import "./Footer.css"
import FooterLeft from "./FooterLeft"
import FooterRight from "./FooterRight"

const Footer = () => {
  return (
    <div className="bg-footer-lg mx-auto">
      <div className="md:px-28 pt-14 md:pt-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-2">
          <FooterLeft />
        </div>
        <div className="col-span-2 mt-5 pl-5 md:mt-0 md:pl-0">
          <FooterRight />
        </div>
      </div>
      <div className="bg-footer-img py-1 flex justify-center items-center">
        <span className="text-white text-xl tracking-wide font-rancho">
          &copy; Copyright Espresso Emporium ! All Rights Reserved
        </span>
      </div>
    </div>
  )
}

export default Footer
