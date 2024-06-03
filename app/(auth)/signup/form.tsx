'use client'

import useAuth from '@/hooks/useAuth';
import { Field, Form, Formik } from 'formik';
import { useTranslations } from 'next-intl';
import Link from "next/link"
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

export default function SignUpForm() {
  const { signUp, loading, error } = useAuth();

  const t = useTranslations();

  useEffect(() => {
    if (error)
      toast.error(t('SignIn.failed'));
  }, [error])

  // تعريف مخطط التحقق باستخدام Yup
  const validationSchema = Yup.object({
    name: Yup.string().required(t('Validation.required')),
    email: Yup.string().email(t('Auth.invalid_email')).required(t('Validation.required')),
    password: Yup.string().min(6, t('Auth.invalid_password')).required(t('Validation.required')),
  });

  // القيم الابتدائية
  const initialValues: FormValues = {
    name: '',
    email: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await signUp(values.name, values.email, values.password);
          setSubmitting(false);
        } catch (e) {
          console.error(e);
          toast.error(t('SignUp.failed'));
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col items-center justify-center space-y-8 w-full">
          <div className="flex flex-col items-center space-y-3 w-full">
            <Field type="text" name="name" placeholder="Name" className="border-2 rounded-md px-4 py-2.5 w-full" />
            <Field type="email" name="email" placeholder="Email" className="border-2 rounded-md px-4 py-2.5 w-full" />
            <Field type="password" name="password" placeholder="Password" className="border-2 rounded-md px-4 py-2.5 w-full" />
          </div>
          <button type='submit' disabled={isSubmitting} className="bg-[#0DCA78] text-white rounded-full px-12 py-2 font-bold disabled:bg-[#0DCA78]/50">{t('SignUp.title')}</button>

        </Form>
      )}
    </Formik>)
}