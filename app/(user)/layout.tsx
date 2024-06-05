import { Footer } from "./components/footer/footer";
import { Links } from "./components/nav/links";
import Auth from "@/components/Auth";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Auth>
            <div className="relative h-screen pt-20">
                <Links />
                <div className="flex flex-col h-full overflow-y-auto">
                    <div className="grow w-full">
                        <div className="sm:p-8">
                            {children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </Auth>
    );
}