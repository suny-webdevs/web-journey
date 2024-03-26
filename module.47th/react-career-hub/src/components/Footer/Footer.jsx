import Styles from "../Style"
import SocialIcons from "../../assets/icons/social.png"

const Footer = () => {
  const { footerTitle } = Styles
  return (
    <div className="bg-[#191919] w-full">
      <footer className="footer p-10 text-base-content">
        <aside>
          <h1 className="text-3xl text-white">CareerHub</h1>
          <p className="text-[#FFFFFFB3]">
            Navigate Your Career Journey with <br /> Confidence: Welcome to
            Career Hub, <br /> Where Opportunities Await!
          </p>
          <a href="">
            <img
              src={SocialIcons}
              className="mt-3"
            />
          </a>
        </aside>
        <nav>
          <h6 className={footerTitle}>Company</h6>
          <a className="link link-hover text-[#FFFFFFB3]">About Us</a>
          <a className="link link-hover text-[#FFFFFFB3]">Work</a>
          <a className="link link-hover text-[#FFFFFFB3]">Latest News</a>
          <a className="link link-hover text-[#FFFFFFB3]">Careers</a>
        </nav>
        <nav>
          <h6 className={footerTitle}>Product</h6>
          <a className="link link-hover text-[#FFFFFFB3]">Prototype</a>
          <a className="link link-hover text-[#FFFFFFB3]">Plans & Pricing</a>
          <a className="link link-hover text-[#FFFFFFB3]">Customers</a>
          <a className="link link-hover text-[#FFFFFFB3]">Integrations</a>
        </nav>
        <nav>
          <h6 className={footerTitle}>Support</h6>
          <a className="link link-hover text-[#FFFFFFB3]">Help Desk</a>
          <a className="link link-hover text-[#FFFFFFB3]">Sales</a>
          <a className="link link-hover text-[#FFFFFFB3]">Become a Partner</a>
          <a className="link link-hover text-[#FFFFFFB3]">Developers</a>
        </nav>
        <nav>
          <h6 className={footerTitle}>Contact</h6>
          <p className="text-[#FFFFFFB3]">524 Broadway , NYC</p>
          <p className="text-[#FFFFFFB3]">+1 777 - 978 - 5570</p>
        </nav>
      </footer>
      <hr className="text-white px-5" />
      <footer className="footer items-center p-4 text-neutral-content pb-4">
        <aside className="items-center grid-flow-col">
          <p className="font-inter">
            @2023 <span className="font-semibold">CareerHub</span>. All Rights
            Reserved
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a className="font-inter">
            Powered by <span className="font-semibold">CareerHub</span>
          </a>
        </nav>
      </footer>
    </div>
  )
}

export default Footer
