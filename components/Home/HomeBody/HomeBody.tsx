import Image from "next/image";
import Link from "next/link";

function HomeBody({ data }: any) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {
                data.map((category: any) =>
                    <div key={category.id}>
                        <div className="card bg-base-100 shadow-xl">

                            <img src={category.image} alt="" className="w-full rounded-t-xl" />

                            <div className="card-body">

                                <div className="grid grid-cols-3 gap-2 font-semibold">
                                    <div className="badge badge-secondary">
                                        {category.video} Videos
                                    </div>
                                    <div className="badge badge-secondary">
                                        {category.quiz} Quiz
                                    </div>
                                    <div className="badge badge-secondary">
                                        {category.support} Support
                                    </div>
                                    <div className="badge badge-secondary">
                                        {category.duration} Length
                                    </div>
                                    <div className="badge badge-secondary">
                                        {category.live_class} Live
                                    </div>
                                </div>

                                <h2 className="card-title font-semibold">
                                    {category.name}
                                </h2>
                                <p className="text-justify mb-4">
                                    {category.description.slice(0, 80)}...
                                </p>
                                <div className="card-actions">
                                    <Link
                                        href={`/category/${category.id}`}
                                        className="inline-block px-6 py-4 bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-400 active:shadow-lg transition duration-150 ease-in-out sm:mb-4 lg:mb-0 w-full text-center"
                                    >
                                        See More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default HomeBody;