import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import vectorSignUp from '../Assets/vector/signup.jpg'
import { AuthContext } from "../contexts/AuthProvider";
import { FaFacebook, FaGithub, FaGoogle, FaYahoo } from 'react-icons/fa';


function SignUp() {

    const {
        signUp,
        updateSignUpProfile,
        verifyEmail,
        googleSignUp,
        facebookSignUp,
        yahooSignUp,
        githubSignUp
    }: any
        = useContext(AuthContext)

    const navigate = useRouter()

    const handleSignUp = (e: any) => {
        e.preventDefault()

        const form = e.target

        const name = form.name.value
        const image = form.image.value
        const email = form.email.value
        const password = form.password.value

        signUp(email, password)
            .then((result: any) => {
                const user = result.user
                toast.success('Your Account Create Successfully');
                updateSignUpProfile(name, image)
                    .then(() => {
                        toast.success('profile update done');
                        navigate.push('/')
                        verifyEmail()
                            .then(() => {
                                toast.success("Please Verify Your Email")
                            })
                    })
                    .catch((e: any) => {
                        toast.error(e)
                    })
            })
            .catch((e: any) => toast.error(e))

    }


    const handleGoogleLogin = () => {
        googleSignUp()
            .then((result: any) => {
                toast.success("Google Login Successful")
                navigate.push('/')
            })
            .catch((e: any) => console.log(e))
    }
    const handleGithubLogin = () => {
        githubSignUp()
            .then((result: any) => {
                toast.success("Google Login Successful")
                navigate.push('/')
            })
            .catch((e: any) => console.log(e))
    }
    const handleYahooLogin = () => {
        yahooSignUp()
            .then((result: any) => {
                toast.success("Google Login Successful")
                navigate.push('/')
            })
            .catch((e: any) => console.log(e))
    }
    const handleFacebookLogin = () => {
        facebookSignUp()
            .then((result: any) => {
                toast.success("Google Login Successful")
                navigate.push('/')
            })
            .catch((e: any) => console.log(e))
    }



    return (
        <>
            <Head>
                <title>Educine - Sign Up</title>
            </Head>
            <div className="w-10/12 mx-auto my-20 lg:flex justify-between items-center">
                <div className='lg:w-6/12'>
                    <Image src={vectorSignUp} alt=""></Image>
                </div>
                <div className='lg:w-6/12'>
                    <div className='mb-10'>
                        <h2 className='text-center font-bold text-3xl mb-4'>Login</h2>
                        <p className='text-center text-blue-600'>Old? <Link href='/login' className='font-semibold underline text-pink-600'>Login</Link></p>
                    </div>
                    <form onSubmit={handleSignUp}>
                        <input type="text" placeholder="Your Full Name" name='name' className="input input-bordered w-full bg-slate-200 font-semibold mt-4" required />
                        <input type="text" placeholder="Your Image Url" name='image' className="input input-bordered w-full bg-slate-200 font-semibold mt-4" required />
                        <input type="email" placeholder="Your Email" name='email' className="input input-bordered w-full bg-slate-200 font-semibold mt-4" required />
                        <input type="password" placeholder="********" name='password' className="input input-bordered w-full bg-slate-200 font-semibold mt-4" required />
                        <input type="submit" value="Sign Up"
                            className="inline-block px-6 py-4 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-500 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-400 active:shadow-lg transition duration-150 ease-in-out mr-4 sm:mb-4 lg:mb-0 cursor-pointer mt-4 w-full"
                        />
                    </form>
                    <div className="divider mt-10 text-indigo-700">OR LOGIN WITH</div>
                    <div className='flex justify-around items-center mt-10'>
                        <FaGoogle onClick={handleGoogleLogin} className='text-5xl border border-l-4 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white duration-300 hover:rounded-md p-2 cursor-pointer' />
                        <FaGithub onClick={handleGithubLogin} className='text-5xl border border-l-4 border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white duration-300 hover:rounded-md p-2 cursor-pointer' />
                        <FaFacebook onClick={handleFacebookLogin} className='text-5xl border border-l-4 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white duration-300 hover:rounded-md p-2 cursor-pointer' />
                        <FaYahoo onClick={handleYahooLogin} className='text-5xl border border-l-4 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white duration-300 hover:rounded-md p-2 cursor-pointer' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;