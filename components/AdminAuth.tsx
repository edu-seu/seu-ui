'use client'
import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const AdminAuth = ({ children }: any) => {
    const { session, loading } = useAuth();
    const isAdmin = session?.user?.role === 'admin'; // استبدل هذا بشرط المصادقة الفعلي
    const router = useRouter();

    if (!isAdmin && !loading) {
        // toast.error('Unauthorized access: User does not have admin privileges.');
        router.replace('/'); // توجيه المستخدم إلى صفحة تسجيل الدخول إذا لم يكن مصادقًا

    }

    if (!isAdmin) {
        return <div>loading...</div>; // أو عرض رسالة تحميل أو إعادة توجيه
    }

    return children; // عرض المحتوى المحمي إذا كان المستخدم مصادقًا
};

export default AdminAuth;
