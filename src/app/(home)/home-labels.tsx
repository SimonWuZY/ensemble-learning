import Link from "next/link";

export const HomeLabels = () => {
    const tabs = [
        { title: "前端", href: "/frontend" },
        { title: "后端", href: "/backend" },
        { title: "数据库", href: "/database" },
        { title: "运维", href: "/devops" },
        { title: "设计", href: "/design" },
        { title: "产品", href: "/product" },
        { title: "测试", href: "/testing" },
        { title: "安全", href: "/security" },
        { title: "管理", href: "/management" },
        { title: "其他", href: "/others" },
    ];

    return (
        <div className="flex flex-wrap w-screen h-[30px] bg-slate-100">
            {tabs.map((tab) => (
                <Link key={tab.title} href={tab.href} passHref legacyBehavior>
                    <a className="flex-1 text-center p-2 hover:bg-slate-200">
                        {tab.title}
                    </a>
                </Link>
            ))}
        </div>
    );
};