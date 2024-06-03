'use client'
import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';

const Authed = ({ children }: any) => {
  const router = useRouter();

  const { session, didLoad } = useAuth();

  if (session) {
    router.replace('/');
    return <></>
  }

  if (!didLoad) {
    return <div>loading...</div>; // أو عرض رسالة تحميل أو إعادة توجيه
  }

  return children; // عرض المحتوى المحمي إذا كان المستخدم مصادقًا
};

export default Authed;
