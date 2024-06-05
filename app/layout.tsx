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
  applicationName: "SEU",
  title: "SEU",
  description: "Sudanese Electronic University",
  creator: "ITCASD",
  publisher: "ITCASD",
  authors: [{ name: 'ITCASD', url: "https://itcasd.com" }],
  keywords: ['seu', 'sudan', 'edu', 'university', 'learn', 'traine'],
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
    <html lang={locale} className="bg-white dark:bg-black overflow-hidden">
      <body className={`${inter.className} h-screen overflow-y-auto bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-100`}>
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
