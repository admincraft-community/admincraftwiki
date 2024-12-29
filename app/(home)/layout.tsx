import { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';
import Head from 'next/head';

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <>
      <Head>
        {/* Website Title */}
        <title>Admincraft Wiki - Your Resource for Admincraft Guides & Documentation</title>

        {/* Basic Meta Tags */}
        <meta name="description" content="Admincraft Wiki is your go-to resource for all things Admincraft, including guides, tutorials, and documentation." />
        <meta name="keywords" content="Admincraft, wiki, documentation, guides, tutorials, community" />
        <meta name="author" content="blstmo" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Admincraft Wiki" />
        <meta property="og:description" content="Admincraft Wiki is your go-to resource for all things Admincraft, including guides, tutorials, and documentation." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://admincraftwiki.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Admincraft Wiki" />
        <meta name="twitter:description" content="Admincraft Wiki is your go-to resource for all things Admincraft, including guides, tutorials, and documentation." />
        <meta name="twitter:image" content="/twitter-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout {...baseOptions}>{children}</HomeLayout>
    </>
  );
}
