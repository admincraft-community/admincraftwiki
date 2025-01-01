import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Callout } from 'fumadocs-ui/components/callout';
import { Steps } from 'fumadocs-ui/components/steps';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { FolderIcon, FileIcon, MessageCircleIcon, UsersIcon, LifeBuoyIcon, GitPullRequestIcon, ShieldIcon, BookOpenText, Server } from 'lucide-react';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { TypeTable } from '@/components/tyep-table-auto';


export const runtime = 'edge';
export const dynamic = 'auto';
export const dynamicParams = true;

async function getLastModifiedTime(path: string) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/admincraft-community/admincraftwiki/commits?path=${path}&per_page=1`
    );
    
    if (!response.ok) return null;
    
    const [latestCommit] = await response.json();
    return latestCommit?.commit?.committer?.date || null;
  } catch {
    return null;
  }
}

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  
  const filePath = `content/docs/${page.file.path}`;
  const lastModifiedTime = await getLastModifiedTime(filePath);

  const githubConfig = {
    owner: 'admincraft-community',
    repo: 'admincraftwiki',
    sha: 'main',
    path: filePath,
  };

  return (
    <DocsPage 
      toc={page.data.toc} 
      full={page.data.full}
      lastUpdate={lastModifiedTime ? new Date(lastModifiedTime) : undefined}
      editOnGithub={githubConfig}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ 
          ...defaultMdxComponents,
          Callout,
          Steps,
          Tabs,
          Card,
          Cards,
          Tab,
          Accordion,
          TypeTable,
          Server,
          BookOpenText,
          Accordions,
          LifeBuoyIcon,
          ShieldIcon,
          FolderIcon,
          FileIcon,
          MessageCircleIcon,
          UsersIcon,
          GitPullRequestIcon
        }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: `${page.data.title} - Admincraft Wiki`,
    description: page.data.description,
  };
}