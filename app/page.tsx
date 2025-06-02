import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileText, Globe, Mail, Share2 } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="h-16 w-16 bg-blue-500 rounded-full flex items-center justify-center">
            <Globe className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-2">Stand With Ukraine</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Tools and resources to help advocate for Ukraine's sovereignty and defense against aggression
        </p>
      </header>

      <Tabs defaultValue="templates" className="max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="actions">Take Action</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Advocacy Templates</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="bg-blue-50 dark:bg-blue-950">
                <CardTitle className="flex items-center gap-2">
                  <Share2 className="h-5 w-5" />
                  Social Media Posts
                </CardTitle>
                <CardDescription>Ready-to-use templates for social media platforms</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <span>Raising awareness about humanitarian needs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <span>Countering misinformation narratives</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <span>Sharing verified news sources</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/templates/social">View Templates</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="bg-yellow-50 dark:bg-yellow-950">
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Letters to Officials
                </CardTitle>
                <CardDescription>Templates for contacting representatives and officials</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <span>Requesting increased humanitarian aid</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <span>Supporting sanctions against aggression</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <span>Advocating for refugee support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/templates/letters">View Templates</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Verified Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Fact-Checking</CardTitle>
                <CardDescription>Tools to verify information and combat disinformation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Access reliable fact-checking resources to verify claims and identify misinformation about the
                  conflict.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Explore
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Trusted News</CardTitle>
                <CardDescription>Reliable news sources covering the situation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  A curated list of credible international and Ukrainian news sources providing accurate coverage.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Sources
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Aid Organizations</CardTitle>
                <CardDescription>Verified humanitarian organizations providing aid</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Organizations working directly to provide humanitarian assistance to affected civilians.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Support
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="actions" className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Take Action</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Digital Advocacy</CardTitle>
                <CardDescription>Ways to support Ukraine online</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm font-medium">1</span>
                    </div>
                    <p className="text-sm">Share verified information from trusted sources to counter misinformation</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm font-medium">2</span>
                    </div>
                    <p className="text-sm">Participate in digital campaigns to raise awareness about the situation</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm font-medium">3</span>
                    </div>
                    <p className="text-sm">Report misinformation when you encounter it on social platforms</p>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Involvement</CardTitle>
                <CardDescription>Local ways to make a difference</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-yellow-600 text-sm font-medium">1</span>
                    </div>
                    <p className="text-sm">Organize or join local events supporting Ukrainian sovereignty</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-yellow-600 text-sm font-medium">2</span>
                    </div>
                    <p className="text-sm">Contact your local representatives to advocate for continued support</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-yellow-600 text-sm font-medium">3</span>
                    </div>
                    <p className="text-sm">Support local Ukrainian communities and refugees in your area</p>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Find Opportunities
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="education" className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Educational Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Understanding the Conflict
                </CardTitle>
                <CardDescription>Historical context and current situation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Educational materials to help understand the historical context and current situation in Ukraine.
                </p>
                <div className="space-y-2">
                  <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-md">
                    <h3 className="text-sm font-medium">Historical Background</h3>
                  </div>
                  <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-md">
                    <h3 className="text-sm font-medium">Current Developments</h3>
                  </div>
                  <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-md">
                    <h3 className="text-sm font-medium">International Response</h3>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Information Literacy
                </CardTitle>
                <CardDescription>Tools to identify and counter misinformation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Resources to help identify propaganda, misinformation, and develop critical information literacy
                  skills.
                </p>
                <div className="space-y-2">
                  <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-md">
                    <h3 className="text-sm font-medium">Identifying Misinformation</h3>
                  </div>
                  <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-md">
                    <h3 className="text-sm font-medium">Source Verification</h3>
                  </div>
                  <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-md">
                    <h3 className="text-sm font-medium">Media Literacy Guide</h3>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Access Resources
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
