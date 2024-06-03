import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Inter } from "next/font/google";
import "./globals.css";
import RootProviders from "./root-providers";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEU",
  description: "Sudanese Electronic University",
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }]
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <RootProviders>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </RootProviders>
        <ToastContainer />
      </body>
    </html>
  );
}
