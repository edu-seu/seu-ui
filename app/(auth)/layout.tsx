export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="bg-gray-100 w-screen h-screen flex items-center justify-center">
            {children}
        </div>
    );
}
