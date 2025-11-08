import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Wallet, TrendingDown, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className="p-6 lg:p-12 h-full w-full bg-background transition-all duration-300">
      <div className="max-w-4xl mx-auto space-y-8 pb-10">
        {/* Profile Header */}
        <Card className="shadow-sm border border-border/50">
          <CardContent className="py-8 flex flex-col items-center text-center space-y-5 relative">
            <Avatar className="h-24 w-24 shadow-md ring-2 ring-primary/20">
              <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
              <AvatarFallback>LK</AvatarFallback>
            </Avatar>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Lokesh</h2>
              <p className="text-sm text-muted-foreground">
                Managing finances smartly since 2022
              </p>
            </div>

            {/* Edit Profile Button */}
            <Button
              variant="outline"
              className=" top-4 right-4 text-sm px-3 py-1.5 rounded-full"
            >
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Spending Overview */}
        <Card className="shadow-sm border border-border/50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold tracking-tight">
              Spending Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border/40 p-5 text-center hover:bg-muted/50 transition">
                <Wallet className="mx-auto mb-2 text-primary" size={22} />
                <h3 className="text-xl font-semibold">₹42,500</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  This Month’s Expense
                </p>
              </div>

              <div className="rounded-xl border border-border/40 p-5 text-center hover:bg-muted/50 transition">
                <TrendingDown className="mx-auto mb-2 text-primary" size={22} />
                <h3 className="text-xl font-semibold">₹1,20,000</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Yearly Expense
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Details */}
        <Card className="shadow-sm border border-border/50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold tracking-tight">
              Account Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Separator />
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Email</span>
                <span className="font-medium">lokesh@example.com</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Location</span>
                <span className="font-medium flex items-center gap-1">
                  <MapPin size={14} /> India
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Member Since</span>
                <span className="font-medium flex items-center gap-1">
                  <Calendar size={14} /> Jan 2022
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
