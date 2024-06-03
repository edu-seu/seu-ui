import { Footer } from "./components/footer/footer";
import { Links } from "./components/nav/links";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative h-screen bg-gray-100 text-slate-700 pt-20">
            <Links />
            <div className="flex flex-col h-full overflow-y-auto">
                <div className="grow w-full">
                    <div className="py-8">
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
