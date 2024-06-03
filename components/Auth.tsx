'use client'
import { getSession } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const Auth = ({ children }: any) => {
  const router = useRouter();

  const session = getSession()
  
  const isAuthenticated = !!session; // استبدل هذا بشرط المصادقة الفعلي

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error('User is not authenticated')
      router.push('/signin'); // توجيه المستخدم إلى صفحة تسجيل الدخول إذا لم يكن مصادقًا
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return null; // عرض صفحة فارغة أو تحميل بينما يتم التوجيه
  }

  return children; // عرض المحتوى المحمي إذا كان المستخدم مصادقًا
};

export default Auth;
