'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QuestionMarkCircledIcon, HomeIcon } from '@radix-ui/react-icons';
import { BookOpen, Blocks } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(5%); }
        }
        
        @keyframes slide-up {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float 8s ease-in-out infinite; }
        .animate-float-slower { animation: float 10s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 0.5s ease-out forwards; }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-600 { animation-delay: 600ms; }
      `}</style>

      <main className="min-h-screen">
        <div className="bg-gradient-to-b from-pink-50 to-white dark:from-pink-950 dark:to-background relative">
          {/* Animated background grid */}
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)] dark:[mask-image:linear-gradient(0deg,transparent,transparent)]" />
          
          {/* Floating blocks animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -left-4 top-1/4 animate-float-slow">
              <Blocks className="h-12 w-12 text-primary/20 rotate-12" />
            </div>
            <div className="absolute right-1/4 top-1/3 animate-float-slower">
              <Blocks className="h-8 w-8 text-primary/30 -rotate-12" />
            </div>
            <div className="absolute left-1/3 bottom-1/4 animate-float">
              <Blocks className="h-10 w-10 text-primary/25 rotate-45" />
            </div>
          </div>

          <div className="relative overflow-hidden pt-20 pb-16">
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                {/* Animated question mark icon */}
                <div className="flex justify-center mb-6">
                  <div className="animate-bounce-slow">
                    <QuestionMarkCircledIcon className="h-24 w-24 text-primary animate-pulse" />
                  </div>
                </div>

                {/* Main content */}
                <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl mb-6 animate-fade-in">
                  <span className="inline-block animate-slide-up">404</span>
                  <span className="inline-block mx-4">-</span>
                  <span className="inline-block animate-slide-up animation-delay-200">Page Not Found</span>
                </h1>

                <div className="relative">
                  <p className="mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-300 mb-8 animate-fade-in animation-delay-400">
                    Looks like this page got lost in the Nether! Don&apos;t worry though,
                    <br />you can find your way back using the portals below.
                  </p>

                  {/* Portal effect behind buttons */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse-slow" />
                </div>

                {/* Animated buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animation-delay-600">
                  <Button 
                    size="lg" 
                    className="flex items-center gap-2 transition-transform hover:scale-105 hover:shadow-lg group"
                    asChild
                  >
                    <Link href="/">
                      <HomeIcon className="h-5 w-5 transition-transform group-hover:rotate-12" />
                      <span className="relative">
                        Return Home
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform" />
                      </span>
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="flex items-center gap-2 transition-transform hover:scale-105 hover:shadow-lg group"
                    asChild
                  >
                    <Link href="/docs">
                      <BookOpen className="h-5 w-5 transition-transform group-hover:rotate-12" />
                      <span className="relative">
                        Browse Documentation
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/40 scale-x-0 group-hover:scale-x-100 transition-transform" />
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}