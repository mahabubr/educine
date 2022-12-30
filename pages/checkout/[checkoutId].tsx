import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

function CheckoutId({ data }: any) {

    const { name, image, description } = data

    const { user }: any = useContext(AuthContext)

    return (
        <div className='lg:w-5/12 w-8/12 mx-auto mt-12 mb-24'>
            {
                user &&
                <div className='text-center mb-12 font-semibold bg-sky-300 rounded-2xl p-8'>
                    <h1 className='text-2xl text-black'>Name: {user?.displayName}</h1>
                    <p className='text-sm'>Email : {user?.email}</p>
                    <p className='text-lg text-white'>Verified : {user?.emailVerified ? "True" : "False"}</p>
                </div>
            }
            <div className='md:flex justify-center items-center'>
                <div className='md:w-6/12 w-10/12 p-4'>
                    <h2 className='text-2xl text-black font-bold'>{name}</h2>
                    <p>{description}</p>
                </div>
                <div className='md:w-6/12 w-10/12'>
                    <img className='rounded-xl' src={image} alt="" />
                </div>
            </div>
            <div className='mt-8 border-2 p-8 text-violet-500 border-violet-500 font-semibold rounded-2xl'>
                <p>Subtotal : $500</p>
                <p>Total: $520</p>
                <input className='p-2 rounded-lg mt-2 w-full border-b-2 border-violet-500' type="text" placeholder='Credit Card Number' />
                <br />
                <input className='p-2 rounded-lg mt-2 w-full border-b-2 border-violet-500' type="text" placeholder='Secret Key' />
                <br />
                <input onClick={() => toast.success('Payment Implement Soon')} type="submit" className='btn btn-primary mt-4 w-full' value="Proceed" />
            </div>
        </div>
    );
}

export const getStaticProps = async (context: any) => {

    const id = context.params.checkoutId

    const res = await fetch(`https://session-solutions-server.vercel.app/checkout/${id}`);
    const data = await res.json();

    return {
        props: {
            data
        },
    };
};


export const getStaticPaths = async () => {
    const res = await fetch('https://session-solutions-server.vercel.app/checkout')
    const data = await res.json()

    const paths = data.map((item: any) => {
        return {
            params: {
                checkoutId: item.id.toString(),
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export default CheckoutId;