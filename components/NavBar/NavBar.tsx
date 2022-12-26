import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../Assets/logo.png";
import { AuthContext } from "../../contexts/AuthProvider";

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const { user, logOutUser }: any = useContext(AuthContext)

  const navigate = useRouter()


  const handleLogOut = () => {
    logOutUser()
      .then(() => toast.success("Log Our Successfully"))
      .catch((e: string) => toast.error(e))
    navigate.push('/')
  }

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/" className="flex justify-center items-center">
            <Image src={logo} alt="" width="64" height="80" />
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent flex items-center lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <GiHamburgerMenu className="text-black" />

            <label htmlFor="my-drawer-2" className="btn btn-secondary drawer-button ml-4 lg:hidden">
              <GiHamburgerMenu className="text-black" />
            </label>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <Link
              href="/"
              type="button"
              className="inline-block px-6 py-4 bg-orange-600 text-white text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out mr-4 sm:mb-4 lg:mb-0 font-semibold"
            >
              <p>Lectures</p>
            </Link>
            <Link
              href="/faq"
              type="button"
              className="inline-block px-6 py-4 bg-orange-600 text-white text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out mr-4 sm:mb-4 lg:mb-0 font-semibold"
            >
              <p>FAQ</p>
            </Link>
            {
              user
                ?
                <>
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full"  >
                        <img src={user?.photoURL} data-tip="hello" className="tooltip" />
                      </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                      <li>
                        <Link href='/profile' className="justify-between">
                          Profile
                          <span className="badge">New</span>
                        </Link>
                      </li>
                      <li><a>Settings</a></li>
                      <li><button onClick={handleLogOut}>Logout</button></li>
                    </ul>
                  </div>
                </>
                :
                <Link
                  href="/login"
                  type="button"
                  className="inline-block px-6 py-4 bg-pink-600 text-white text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out mr-4 sm:mb-4 lg:mb-0 font-semibold"
                >
                  <p>Login</p>
                </Link>
            }

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
