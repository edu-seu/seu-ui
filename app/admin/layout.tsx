import AdminAuth from "@/components/AdminAuth";
import Auth from "@/components/Auth";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Auth>
      <AdminAuth>
        <div className="relative h-screen">
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="grow w-full">
              <div className="py-8">
                {children}
              </div>
            </div>
          </div>
        </div>
      </AdminAuth>
    </Auth>
  );
}