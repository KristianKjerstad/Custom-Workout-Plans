/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/8hrRIgq7Vcy
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "./Header"
import Footer from "./Footer"

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-12 md:py-24 lg:py-32">
          <div className="container px-8 md:px-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl">
                    Personalized Workout Plans
                  </h1>
                  <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                    Get custom workout routines tailored to your fitness goals and experience level.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#customize-workout"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mb-8"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <img
                src="/hero.jpg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24 lg:py-32" id="customize-workout">
          <div className="container px-8 md:px-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                    Customize Your Workout
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Tell us about your fitness goals, experience level, and preferences, and we will find the
                    workout plan that fits best for you.
                  </p>
                </div>
                <form className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input type="number" placeholder="Age" />
                  </div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Fitness Goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weight-loss">Weight Loss</SelectItem>
                      <SelectItem value="strength">Strength</SelectItem>
                      <SelectItem value="hypertrophy">Hypertrophy</SelectItem>
                      <SelectItem value="mixed">Mixed</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Experience Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="grid grid-cols-2 gap-4">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Workout Days" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3 Days</SelectItem>
                        <SelectItem value="4">4 Days</SelectItem>
                        <SelectItem value="5">5 Days</SelectItem>
                        <SelectItem value="6">6 Days</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Workout Duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 Minutes</SelectItem>
                        <SelectItem value="45">45 Minutes</SelectItem>
                        <SelectItem value="60">60 Minutes</SelectItem>
                        <SelectItem value="90">90 Minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <p className="prose text-muted-foreground">(When using this service you agree to our <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>)</p>
                  <Button type="submit" className="w-full mb-8 mt-4">
                    Get My Workout Plan
                  </Button>
                </form>
              </div>
              <img
                src="/customize.jpg"
                width="550"
                height="310"
                alt="Customize"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="bg-background py-12 md:py-24 lg:py-32">
          <div className="container px-8 md:px-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <img
                src="/experts.jpg"
                width="550"
                height="310"
                alt="Experts"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                    Trusted by Fitness Experts
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our workout plans are designed by experienced fitness professionals to help you achieve your goals.
                  </p>
                </div>
                <div className="grid gap-6">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">John Doe</h3>
                      <p className="text-muted-foreground">Certified Personal Trainer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="Jane Smith" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">Jane Smith</h3>
                      <p className="text-muted-foreground">Registered Dietitian</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="Jane Smith" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">x x</h3>
                      <p className="text-muted-foreground">cool guy</p>
                    </div>
                  </div>
                  <div>
                    <p> And more!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from real people who have transformed their fitness with our custom workout plans.
                </p>
              </div>
              <div className="grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-12">
                <Card className="p-6 shadow-sm max-w-[450px]">
                  <CardContent>
                    <blockquote className="text-lg font-semibold leading-snug">
                      &apos;&apos;I&apos;ve been using Custom Workout Plans for the past 6 months  and it&apos;s completely transformed my
                      fitness. The workouts are challenging but effective, and I&apos;ve seen amazing  results.&apos;&apos;
                    </blockquote>
                    <div className="mt-4 flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="Sarah Johnson" />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">Fitness Enthusiast</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="p-6 shadow-sm max-w-[450px]">
                  <CardContent>
                    <blockquote className="text-lg font-semibold leading-snug">
                      &apos;&apos;As someone who has struggled with consistency in the past, Custom Workout Plans has been a
                      game-changer. The app makes it so easy to stick to my routine and see real progress.&apos;&apos;
                    </blockquote>
                    <div className="mt-4 flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="Michael Lee" />
                        <AvatarFallback>ML</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Michael Lee</p>
                        <p className="text-sm text-muted-foreground">Busy Professional</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div >
  )
}


