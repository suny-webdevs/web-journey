import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to="/" className={(isActive) => isActive ? 'font-bold text-primary' : 'font-bold'}>Home</NavLink>
                        <NavLink to="/blogs" className={(isActive) => isActive ? 'font-bold text-primary' : 'font-bold'}>Blogs</NavLink>
                        <NavLink to="/bookmarks" className={(isActive) => isActive ? 'font-bold text-primary' : 'font-bold'}>Bookmarks</NavLink>
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1">

                    </ul>
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
