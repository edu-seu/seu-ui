import { Footer } from "./components/footer/footer";
import { Links } from "./components/nav/links";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative h-screen pt-20">
            <Links />
            <div className="flex flex-col h-full overflow-y-auto">
                <div className="grow w-full sm:p-8">
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    );
}
