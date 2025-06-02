import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function LetterTemplatesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/" className="text-sm text-blue-500 hover:underline mb-4 inline-block">
          ← Back to home
        </Link>
        <h1 className="text-3xl font-bold mb-2">Letter Templates</h1>
        <p className="text-muted-foreground max-w-2xl">
          Ready-to-use templates for letters to officials and representatives to advocate for Ukraine. Copy and
          customize these templates for your specific needs.
        </p>
      </div>

      <Tabs defaultValue="congress" className="max-w-4xl">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="congress">Congress/Parliament</TabsTrigger>
          <TabsTrigger value="local">Local Officials</TabsTrigger>
          <TabsTrigger value="international">International Bodies</TabsTrigger>
        </TabsList>

        <TabsContent value="congress" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Humanitarian Aid Support
                </span>
                <Badge variant="outline">Template</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md whitespace-pre-line">
                <p className="text-sm">
                  [Your Name] [Your Address] [City, State ZIP] [Email] [Phone] [Date] The Honorable [Representative's
                  Name] [Office Address] [City, State ZIP] Dear Representative [Last Name], I am writing to express my
                  concern about the ongoing situation in Ukraine and to urge you to support increased humanitarian aid
                  for the Ukrainian people. The humanitarian crisis resulting from Russia's aggression against Ukraine
                  has displaced millions of people and created urgent needs for food, shelter, medical care, and other
                  essentials. As your constituent, I believe our country has a moral obligation to support the Ukrainian
                  people in their time of need. Specifically, I urge you to: 1. Support legislation that increases
                  humanitarian aid to Ukraine and Ukrainian refugees 2. Advocate for continued diplomatic efforts to end
                  the conflict 3. Ensure that aid reaches those most in need through reputable international
                  organizations Ukraine is fighting not just for its sovereignty but for democratic values that we
                  share. Supporting Ukraine with humanitarian aid is not only the right thing to do morally but also
                  aligns with our strategic interests in promoting democracy and international law. Thank you for your
                  attention to this important matter. I look forward to your response outlining your position and
                  actions on this issue. Sincerely, [Your Name]
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
                <span className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Support for Ukraine's Defense
                </span>
                <Badge variant="outline">Template</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md whitespace-pre-line">
                <p className="text-sm">
                  [Your Name] [Your Address] [City, State ZIP] [Email] [Phone] [Date] The Honorable [Senator's Name]
                  [Office Address] [City, State ZIP] Dear Senator [Last Name], I am writing as your constituent to
                  express my strong support for Ukraine's right to defend itself against Russian aggression and to urge
                  you to support continued assistance for Ukraine's defense needs. Ukraine is defending not only its
                  territorial integrity and sovereignty but also the principles of international law and the rules-based
                  international order that has maintained peace and stability for decades. The outcome of this conflict
                  will have far-reaching implications for global security and the future of democracy. I urge you to: 1.
                  Support continued security assistance to Ukraine to enable it to defend its territory and people 2.
                  Maintain strong sanctions against Russia until it ceases its aggression and withdraws from Ukrainian
                  territory 3. Work with our allies to ensure a coordinated and effective response to this crisis
                  Supporting Ukraine's defense is not only a moral imperative but also serves our national security
                  interests by upholding the principle that borders cannot be changed by force and deterring future
                  aggression. Thank you for your consideration. I would appreciate hearing your views on this important
                  issue. Sincerely, [Your Name]
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
        </TabsContent>

        <TabsContent value="local" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Local Community Support
                </span>
                <Badge variant="outline">Template</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md whitespace-pre-line">
                <p className="text-sm">
                  [Your Name] [Your Address] [City, State ZIP] [Email] [Phone] [Date] [Mayor/Council Member's Name]
                  [City Hall Address] [City, State ZIP] Dear [Mayor/Council Member] [Last Name], I am writing to request
                  your support for Ukrainian refugees and displaced persons who have settled in our community. As the
                  war in Ukraine continues, many families have been forced to flee their homes and seek safety abroad,
                  including in our city. As a concerned resident, I believe our community has both the capacity and
                  responsibility to welcome these newcomers and help them rebuild their lives. I would like to propose
                  the following initiatives for your consideration: 1. Establish a local Ukrainian support network to
                  coordinate resources, housing assistance, and employment opportunities 2. Create a dedicated point of
                  contact within city government to help Ukrainian refugees navigate local services 3. Organize
                  community events to foster integration and cultural exchange These initiatives would not only help
                  those in need but would also enrich our community through cultural diversity and demonstrate our
                  city's commitment to humanitarian values. I would welcome the opportunity to discuss these ideas
                  further and to learn about any existing programs our city may have to support refugees. Thank you for
                  your consideration and leadership on this important issue. Sincerely, [Your Name]
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
        </TabsContent>

        <TabsContent value="international" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  United Nations Appeal
                </span>
                <Badge variant="outline">Template</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md whitespace-pre-line">
                <p className="text-sm">
                  [Your Name] [Your Address] [City, State ZIP] [Email] [Phone] [Date] Office of the Secretary-General
                  United Nations Headquarters 405 East 42nd Street New York, NY 10017 Dear Mr. Secretary-General, I am
                  writing to express my deep concern about the ongoing situation in Ukraine and to urge the United
                  Nations to take stronger action to protect civilians, uphold international law, and work toward a just
                  and lasting peace. The Russian aggression against Ukraine represents a clear violation of the UN
                  Charter and the principles of territorial integrity and sovereignty that the United Nations was
                  established to protect. The humanitarian consequences have been devastating, with millions displaced
                  and essential infrastructure destroyed. I respectfully urge the United Nations to: 1. Strengthen
                  humanitarian assistance to civilians affected by the conflict 2. Continue to document and investigate
                  violations of international humanitarian law 3. Use all available diplomatic tools to work toward a
                  just peace that respects Ukraine's sovereignty and territorial integrity The United Nations has a
                  crucial role to play in upholding the rules-based international order and ensuring that aggression is
                  not rewarded. The response to this crisis will have implications for global security and the
                  credibility of international institutions for years to come. Thank you for your attention to this
                  urgent matter. Respectfully, [Your Name]
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
        </TabsContent>
      </Tabs>
    </div>
  )
}
