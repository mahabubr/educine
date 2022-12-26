import { GetServerSideProps } from "next";
import HomeBody from "./HomeBody/HomeBody";
import HomeSideMenu from "./HomeSideMenu/HomeSideMenu";

function HomeContent({ data }: any) {

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  p-10 md:p-20">
                {/* <!-- Page content here --> */}
                <HomeBody data={data}></HomeBody>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    <HomeSideMenu data={data}></HomeSideMenu>
                </ul>

            </div>
        </div>
    );
}

export default HomeContent;


