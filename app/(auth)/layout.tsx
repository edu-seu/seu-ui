import Authed from "@/components/Authed";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <Authed>
            <div className="min-h-screen place-content-center md:p-8 lg:px-16 ">
                {children}
            </div>
        </Authed>
    );
}
