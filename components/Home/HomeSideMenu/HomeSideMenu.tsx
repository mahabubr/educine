import Link from "next/link";

function HomeSideMenu({ data }: any) {
    return (
        <div>
            {
                data.map((item: any) =>
                    <li key={item.id}><Link href={`/category/${item.id}`}>{item.name}</Link></li>
                )
            }
        </div>
    );
}

export default HomeSideMenu;