'use client'

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslations } from 'next-intl';
import Link from "next/link"
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useAuth } from '@/context/authContext';

interface FormValues {
  email: string;
  password: string;
  remember_me: Boolean;
}

const SignInForm: React.FC = () => {
  const { signIn, loading, error } = useAuth();

  const t = useTranslations();

  useEffect(() => {
    if (error)
      toast.error(t('SignIn.failed'));
  }, [error, t])

  // تعريف مخطط التحقق باستخدام Yup
  const validationSchema = Yup.object({
    email: Yup.string().email(t('Auth.invalid_email')).required(t('Validation.required')),
    password: Yup.string().min(6, t('Auth.invalid_password')).required(t('Validation.required')),
  });

  // القيم الابتدائية
  const initialValues: FormValues = {
    email: '',
    password: '',
    remember_me: false,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await signIn(values.email, values.password);
          setSubmitting(false);
        } catch (e) {
          console.error(e);
          toast.error(t('SignIn.failed'));
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col items-center justify-center space-y-8 w-full">
          <div className="flex flex-col items-center space-y-3 w-full">
            <div className='w-full'>
              <Field type="email" name="email" placeholder="Email" className="border-2 rounded-md px-4 py-2.5 w-full" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className='w-full'>
              <Field type="password" name="password" placeholder="Password" className="border-2 rounded-md px-4 py-2.5 w-full" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div className="flex items-center justify-between w-full">
              <label className="flex items-center space-s-2">
                <Field type="checkbox" name="remember_me" className="appearance-none border rounded p-2 checked:border-[#0DCA78]  checked:border-[5px] checked:p-1" />
                <div>{"Remember me"}</div>
              </label>
              <Link href={``}>{t('SignIn.forgot_password')}</Link>
            </div>
          </div>
          <button type='submit' disabled={isSubmitting} className="bg-[#0DCA78] text-white rounded-full px-12 py-2 font-bold disabled:bg-[#0DCA78]/50">{t('SignIn.title')}</button>

        </Form>
      )}
    </Formik>)
}

export default SignInForm;