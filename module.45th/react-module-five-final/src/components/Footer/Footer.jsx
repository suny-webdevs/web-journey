import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="w-full fixed bottom-0">
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>
            Copyright © 2024 - All right reserved by{" "}
            <Link
              to="https://github.com/suny-webdevs"
              className="text-primary"
            >
              suny-webdevs
            </Link>{" "}
          </p>
        </aside>
      </footer>
    </div>
  )
}

export default Footer
