import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  QuestionMarkCircledIcon,
  GitHubLogoIcon,
  ArrowRightIcon,
  StarIcon
} from '@radix-ui/react-icons';

export default function HomePage() {
  const mainFeatures = [
    {
      title: 'Getting Started',
      description: 'Launch your first server with confidence using our step-by-step guides and best practices.',
      icon: <RocketIcon className="h-6 w-6" />,
      href: '/docs/getting-started',
      status: 'available',
      badge: 'New'
    },
    {
      title: 'Security Guide',
      description: 'Protect your server with industry-standard security practices, anti-cheat configurations, and vulnerability prevention.',
      icon: <LockClosedIcon className="h-6 w-6" />,
      href: '/coming-soon',
      status: 'coming-soon'
    },
    {
      title: 'Plugin Essentials',
      description: 'Discover and configure must-have plugins that will enhance your servers functionality and player experience.',
      icon: <CodeIcon className="h-6 w-6" />,
      href: '/coming-soon',
      status: 'coming-soon'
    }
  ];

  const resourceCategories = [
    {
      title: 'Performance',
      description: 'Server optimization guides and performance tuning tools',
      icon: <Crosshair1Icon className="h-5 w-5" />,
      stats: '50+ Guides'
    },
    {
      title: 'Administration',
      description: 'Server management and maintenance best practices',
      icon: <GearIcon className="h-5 w-5" />,
      stats: '100+ Articles'
    },
    {
      title: 'Community',
      description: 'Build and manage thriving player communities',
      icon: <PersonIcon className="h-5 w-5" />,
      stats: '30+ Resources'
    },
    {
      title: 'Troubleshooting',
      description: 'Solutions for common server issues and errors',
      icon: <QuestionMarkCircledIcon className="h-5 w-5" />,
      stats: '200+ Solutions'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section with Enhanced Background */}
      <div className="bg-gradient-to-b from-pink-50 via-pink-50/50 to-white dark:from-pink-950 dark:via-pink-950/50 dark:to-background">
        <div className="relative overflow-hidden pt-24 pb-20">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)] dark:[mask-image:linear-gradient(0deg,transparent,transparent)]"></div>
          
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Badge variant="secondary" className="text-sm px-4 py-1">
                  <StarIcon className="h-4 w-4 mr-1" /> Community Maintained
                </Badge>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl mb-6">
                The <span className="text-primary">Ultimate Guide</span> to<br />
                Minecraft Server Administration
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-300 mb-8">
                Join thousands of server administrators in building better Minecraft communities with our comprehensive, community-driven resources.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/docs/getting-started">
                    Start Learning
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <Link href="/docs/getting-started/contribution">
                    <HeartIcon className="h-4 w-4" />
                    Contribute
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Features Section */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className="grid md:grid-cols-3 gap-6">
            {mainFeatures.map((feature) => (
              <Link 
                href={feature.href} 
                key={feature.title} 
                className={`group ${feature.status === 'coming-soon' ? 'relative' : ''}`}
              >
                <Card className="h-full transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                  {feature.status === 'coming-soon' && (
                    <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] z-10 flex items-center justify-center rounded-lg border border-border">
                      <Badge variant="secondary" className="text-lg py-1.5 px-4">Coming Soon</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-4">
                        <div className="text-primary">{feature.icon}</div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </div>
                      {feature.status === 'available' && (
                        <Badge variant="secondary">{feature.badge}</Badge>
                      )}
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

      {/* Community Section with Enhanced Stats */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl bg-pink-50 dark:bg-pink-950/20 p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Growing Community</Badge>
              <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Connect with thousands of server administrators, get help with your issues, and contribute your knowledge back to the community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex items-center gap-2" asChild>
                  <a href="https://discord.gg/NFBPR7j8Aq" target="_blank" rel="noopener noreferrer">
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
                  <CardDescription>Active Discord Members</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">24/7 Community Support</p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 dark:bg-slate-800/50">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">100K+</CardTitle>
                  <CardDescription>Subreddit Members</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Daily Discussions & Help</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Resource Categories Grid */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Resources</Badge>
          <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Find exactly what you need with our organized collection of guides, tutorials, and resources.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {resourceCategories.map((category) => (
            <Link href="/coming-soon" key={category.title} className="group relative">
              <Card className="h-full transition-all group-hover:shadow-md group-hover:-translate-y-1">
                <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] z-10 flex items-center justify-center rounded-lg border border-border">
                  <Badge variant="secondary" className="text-lg py-1.5 px-4">Coming Soon</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="text-primary">{category.icon}</div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{category.stats}</Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="border-t border-border bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Open Source</Badge>
            <h2 className="text-3xl font-bold mb-4">Support the Project</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Admincraft Wiki is maintained by volunteers dedicated to helping server administrators worldwide. Your support helps keep our resources free and up-to-date.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="default" className="flex items-center gap-2" asChild>
                <a href="https://github.com/admincraft-community" target="_blank" rel="noopener noreferrer">
                  <GitHubLogoIcon className="h-5 w-5" />
                  Star on GitHub
                </a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <a href="https://github.com/admincraft-community" target="_blank" rel="noopener noreferrer">
                  <HeartIcon className="h-5 w-5" />
                  Become a Sponsor
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}