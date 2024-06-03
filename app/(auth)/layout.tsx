import Authed from "@/components/Authed";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <Authed>
            <div className="bg-gray-100 w-screen h-screen flex items-center justify-center">
                {children}
            </div>
        </Authed>
    );
}
