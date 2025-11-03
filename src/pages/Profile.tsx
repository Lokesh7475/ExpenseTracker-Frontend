import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Wallet, TrendingDown, Calendar, MapPin } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full shadow-lg border">

        <CardHeader className="flex items-center flex-col gap-4 text-center">
          <Avatar className="h-24 w-24 shadow border">
            <AvatarImage src="https://github.com/shadcn.png" alt="profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          <CardTitle className="text-2xl font-bold">Lokesh</CardTitle>
          <Badge className="px-3 py-1 text-sm">Premium Member</Badge>

          <p className="text-sm text-muted-foreground">
            Managing finances smartly since 2022
          </p>
        </CardHeader>

        <CardContent className="mt-6 space-y-6">
          <Separator className="-mt-6" />
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-4 bg-muted/50 rounded-xl">
              <Wallet className="mx-auto mb-1" size={22} />
              <p className="text-lg font-bold">₹42,500</p>
              <p className="text-xs text-muted-foreground">This Month Spent</p>
            </div>

            <div className="p-4 bg-muted/50 rounded-xl">
              <TrendingDown className="mx-auto mb-1" size={22} />
              <p className="text-lg font-bold">₹1,20,000</p>
              <p className="text-xs text-muted-foreground">Yearly Expense</p>
            </div>
          </div>

          <Separator />

          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Email</span>
              <span className="font-medium">lokesh@example.com</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Location</span>
              <span className="font-medium flex gap-1">
                <MapPin size={14}/> India
              </span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Member Since</span>
              <span className="font-medium flex gap-1">
                <Calendar size={14}/> Jan 2022
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
