import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  RocketIcon, 
  LockClosedIcon, 
  PersonIcon, 
  DiscordLogoIcon,
  ChatBubbleIcon,
  CodeIcon,
  HeartIcon,
  GearIcon,
  Crosshair1Icon,
  QuestionMarkCircledIcon
} from '@radix-ui/react-icons';

export default function HomePage() {
  const mainFeatures = [
    {
      title: 'Getting Started',
      description: 'New to server administration? Start with our comprehensive beginner guides.',
      icon: <RocketIcon className="h-6 w-6" />,
      href: '/docs/getting-started'
    },
    {
      title: 'Security Guide',
      description: 'Learn how to protect your server from attacks and vulnerabilities.',
      icon: <LockClosedIcon className="h-6 w-6" />,
      href: '/docs/security'
    },
    {
      title: 'Plugin Essentials',
      description: 'Discover must-have plugins and configuration best practices.',
      icon: <CodeIcon className="h-6 w-6" />,
      href: '/docs/plugins'
    }
  ];

  const resourceCategories = [
    {
      title: 'Performance',
      description: 'Optimization guides and tools',
      icon: <Crosshair1Icon className="h-5 w-5" />,
      href: '/docs/performance'
    },
    {
      title: 'Administration',
      description: 'Day-to-day management tips',
      icon: <GearIcon className="h-5 w-5" />,
      href: '/docs/administration'
    },
    {
      title: 'Community',
      description: 'Building & managing communities',
      icon: <PersonIcon className="h-5 w-5" />,
      href: '/docs/community'
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and fixes',
      icon: <QuestionMarkCircledIcon className="h-5 w-5" />,
      href: '/docs/troubleshooting'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Container for Hero and Main Features */}
      <div className="bg-gradient-to-b from-pink-50 to-white dark:from-pink-950 dark:to-background pb-16">
        {/* Hero Section */}
        <div className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)] dark:[mask-image:linear-gradient(0deg,transparent,transparent)]"></div>
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl mb-6">
                <span className="text-primary">Admincraft</span> Wiki
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-300 mb-8">
                Your comprehensive guide to Minecraft server administration, built by the community for the community.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/docs">Browse Documentation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/docs/contribute">Contribute</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Features Section */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16">
          <div className="grid md:grid-cols-3 gap-6">
            {mainFeatures.map((feature) => (
              <Link href={feature.href} key={feature.title} className="group">
                <Card className="h-full transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="text-primary">{feature.icon}</div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl bg-pink-50 dark:bg-pink-950/20 p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Connect with thousands of server administrators, get help, and share your knowledge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex items-center gap-2" asChild>
                  <a href="https://discord.gg/admincraft" target="_blank" rel="noopener noreferrer">
                    <DiscordLogoIcon className="h-5 w-5" />
                    Join Discord
                  </a>
                </Button>
                <Button variant="outline" className="flex items-center gap-2" asChild>
                  <a href="https://reddit.com/r/admincraft" target="_blank" rel="noopener noreferrer">
                    <ChatBubbleIcon className="h-5 w-5" />
                    Visit Subreddit
                  </a>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/50 dark:bg-slate-800/50">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">12K+</CardTitle>
                  <CardDescription>Discord Members</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-white/50 dark:bg-slate-800/50">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">100K+</CardTitle>
                  <CardDescription>Subreddit Members</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Resource Categories Grid */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Browse by Category</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {resourceCategories.map((category) => (
            <Link href={category.href} key={category.title} className="group">
              <Card className="h-full transition-all group-hover:shadow-md group-hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-primary">{category.icon}</div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Support the Project</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Admincraft Wiki is maintained by volunteers. Consider supporting us to help keep the resources free and up-to-date.
            </p>
            <Button variant="outline" className="flex items-center gap-2 mx-auto" asChild>
              <a href="https://github.com/sponsors/admincraft" target="_blank" rel="noopener noreferrer">
                <HeartIcon className="h-5 w-5" />
                Sponsor on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

