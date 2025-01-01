import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader} from '@/components/ui/card';
import { DiscordLogoIcon } from '@radix-ui/react-icons';
import { 
  ArrowLeft,
  Clock,
  Github,
  ShieldCheck,
  Puzzle,
  Gauge,
  Construction,
  Heart
} from 'lucide-react';

export default function ComingSoonPage() {
  const upcomingFeatures = [
    {
      title: "Security Documentation",
      description: "Comprehensive guides on server security, anti-cheat configuration, and vulnerability prevention.",
      eta: "February 2025",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: "Plugin Guides",
      description: "Detailed tutorials and best practices for essential Minecraft server plugins.",
      eta: "March 2025",
      icon: <Puzzle className="w-5 h-5" />
    },
    {
      title: "Performance Optimization",
      description: "In-depth guides on server optimization, lag reduction, and performance monitoring.",
      eta: "April 2025",
      icon: <Gauge className="w-5 h-5" />
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white dark:from-pink-950 dark:to-background pt-12 pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          size="sm"
          className="mb-12 group hover:bg-transparent"
          asChild
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </Button>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-8 mb-8 rounded-full bg-pink-100/50 dark:bg-pink-950/30">
            <Construction className="w-12 h-12 text-primary" />
          </div>
          <div className="flex justify-center mb-4">
            <Badge variant="secondary" className="px-4 py-1">
              <Clock className="mr-2 h-4 w-4" />
              Under Development
            </Badge>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            This Section is Coming Soon
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We&apos;re working hard to bring you high-quality, comprehensive documentation. Join our community to get notified when new content is available.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4">Development Timeline</h2>
            <p className="text-muted-foreground">Here&apos;s what we&apos;re working on and when to expect it</p>
          </div>
          <div className="space-y-6">
            {upcomingFeatures.map((feature, index) => (
              <Card key={index} className="relative group hover:shadow-md transition-all duration-200">
                <div className="absolute top-0 left-8 bottom-0 w-px bg-border -mt-3 mb-3" 
                     style={{ display: index === 0 ? 'none' : 'block' }}>
                </div>
                <CardHeader className="relative">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-pink-100 dark:bg-pink-950 flex items-center justify-center shrink-0">
                      <div className="text-primary">{feature.icon}</div>
                    </div>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="mb-2">
                        {feature.eta}
                      </Badge>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Get Involved Section */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center p-6 mb-6 rounded-full bg-pink-100/50 dark:bg-pink-950/30">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Want to Contribute?</h2>
          <p className="text-muted-foreground mb-8">
            We welcome contributions from the community! Help us build better documentation for everyone by joining our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <a 
                href="https://github.com/admincraft-community/admincraftwiki" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                Contribute on GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a 
                href="https://discord.gg/admincraft" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <DiscordLogoIcon className="h-5 w-5" />
                Join our Discord
              </a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}