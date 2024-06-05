export default function ProfileLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="rounded-md  bg-white dark:bg-white/5 shadow dark:shadow-white/10 my-auto p-8">
            {children}
        </div>
    );
}
