'use client'
import { getSession } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const AdminAuth = ({ children }: any) => {
    const router = useRouter();

    const session = getSession()

    const isAdmin = session?.user?.role === 'admin'; // استبدل هذا بشرط المصادقة الفعلي

    useEffect(() => {
        if (!isAdmin) {
            // Check if the user has the 'admin' role
            toast.error('Unauthorized access: User does not have admin privileges.');
            router.push('/'); // توجيه المستخدم إلى صفحة تسجيل الدخول إذا لم يكن مصادقًا
        }
    }, [isAdmin]);

    if (!isAdmin) {
        return null; // عرض صفحة فارغة أو تحميل بينما يتم التوجيه
    }

    return children; // عرض المحتوى المحمي إذا كان المستخدم مصادقًا
};

export default AdminAuth;
