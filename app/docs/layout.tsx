import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { Banner } from 'fumadocs-ui/components/banner';
import { docsOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Banner 
        variant="rainbow" 
        id="admincraft-welcome"
      >
        Welcome to the Admincraft Wiki! This is a community-driven Minecraft server administration guide. Feel free to contribute!
      </Banner>
      <DocsLayout tree={source.pageTree} {...docsOptions}>
        {children}
      </DocsLayout>
    </>
  );
}