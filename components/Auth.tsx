'use client'
import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const Auth = ({ children }: any) => {
  const router = useRouter();

  const { session, loading } = useAuth();



  if (!session && !loading) {
    // toast.error('User is not authenticated')
    router.replace('/signin');
  }

  if (!session) {
    return <div>loading...</div>; // أو عرض رسالة تحميل أو إعادة توجيه
  }

  return children; // عرض المحتوى المحمي إذا كان المستخدم مصادقًا
};

export default Auth;
