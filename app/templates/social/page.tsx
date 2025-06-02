import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Facebook, Instagram, Twitter } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SocialTemplatesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/" className="text-sm text-blue-500 hover:underline mb-4 inline-block">
          ← Back to home
        </Link>
        <h1 className="text-3xl font-bold mb-2">Social Media Templates</h1>
        <p className="text-muted-foreground max-w-2xl">
          Ready-to-use templates for social media posts to raise awareness and advocate for Ukraine. Copy and customize
          these templates for your platforms.
        </p>
      </div>

      <Tabs defaultValue="twitter" className="max-w-4xl">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="twitter" className="flex items-center gap-2">
            <Twitter className="h-4 w-4" />
            Twitter
          </TabsTrigger>
          <TabsTrigger value="facebook" className="flex items-center gap-2">
            <Facebook className="h-4 w-4" />
            Facebook
          </TabsTrigger>
          <TabsTrigger value="instagram" className="flex items-center gap-2">
            <Instagram className="h-4 w-4" />
            Instagram
          </TabsTrigger>
        </TabsList>

        <TabsContent value="twitter" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Humanitarian Aid</span>
                  <Badge variant="outline">Awareness</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md">
                  <p className="text-sm">
                    The humanitarian situation in Ukraine remains critical. Millions of civilians need our support.
                    Here's how you can help: [link to verified aid organization] #StandWithUkraine #HumanitarianAid
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <Copy className="h-4 w-4" />
                  Copy to clipboard
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Fact Sharing</span>
                  <Badge variant="outline">Information</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md">
                  <p className="text-sm">
                    FACT: Ukraine is a sovereign nation with the right to self-determination and territorial integrity
                    under international law. For accurate information on the situation, follow @UN, @ICRC, and other
                    verified sources. #FactsMatter #StandWithUkraine
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <Copy className="h-4 w-4" />
                  Copy to clipboard
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Countering Misinformation</span>
                  <Badge variant="outline">Advocacy</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md">
                  <p className="text-sm">
                    Be aware of misinformation about Ukraine. Always verify information before sharing. Reliable sources
                    include: @BBCWorld, @Reuters, @AP, @KyivIndependent #FactCheck #MediaLiteracy #StandWithUkraine
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <Copy className="h-4 w-4" />
                  Copy to clipboard
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="facebook" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Community Support</span>
                  <Badge variant="outline">Action</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md">
                  <p className="text-sm">
                    🇺🇦 Supporting Ukraine: Ways You Can Help 🇺🇦 The people of Ukraine continue to face immense
                    challenges. Here are three concrete ways you can help today: 1️⃣ Donate to verified humanitarian
                    organizations providing direct aid 2️⃣ Support local Ukrainian businesses and communities 3️⃣ Contact
                    your representatives to advocate for continued support Every action matters. #StandWithUkraine
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <Copy className="h-4 w-4" />
                  Copy to clipboard
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Educational Post</span>
                  <Badge variant="outline">Information</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md">
                  <p className="text-sm">
                    📚 Understanding Ukraine: A Brief History 📚 Ukraine has a rich cultural heritage and history as an
                    independent nation. Its sovereignty and territorial integrity are protected under international law,
                    including the UN Charter. To learn more about Ukraine's history and the current situation, check out
                    these reliable resources: [List of educational resources] #StandWithUkraine #LearnTheHistory
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <Copy className="h-4 w-4" />
                  Copy to clipboard
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="instagram" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Caption Template</span>
                  <Badge variant="outline">Awareness</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md">
                  <p className="text-sm">
                    Standing with Ukraine today and every day 🇺🇦 The Ukrainian people continue to demonstrate incredible
                    resilience in the face of aggression. Their fight is for sovereignty, democracy, and freedom. Here's
                    how you can help: [Link in bio] #StandWithUkraine #PeaceForUkraine #SupportUkraine #HumanitarianAid
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <Copy className="h-4 w-4" />
                  Copy to clipboard
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Story Template</span>
                  <Badge variant="outline">Action</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md">
                  <p className="text-sm">
                    [For Instagram Story] Swipe up to learn how you can support Ukraine today #StandWithUkraine [Add
                    blue and yellow elements or Ukrainian flag to your story design]
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <Copy className="h-4 w-4" />
                  Copy to clipboard
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
