import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Trash2, Download, User, Bell } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="min-h-screen w-full bg-background px-4 py-8 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b pb-4">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-semibold tracking-tight">Settings</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Customize your expense tracker preferences
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/avatar-placeholder.png" alt="User avatar" />
              <AvatarFallback>LK</AvatarFallback>
            </Avatar>
            <div className="text-right">
              <p className="text-sm font-medium">Lokesh</p>
              <p className="text-xs text-muted-foreground">Free account</p>
            </div>
          </div>
        </header>

        {/* Main Layout */}
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column: Account + Preferences */}
          <section className="space-y-8">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"> 
                  <User size={18} /> Account
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label className="mb-1">Display name</Label>
                    <Input value="Lokesh" readOnly />
                  </div>

                  <div>
                    <Label className="mb-1">Email</Label>
                    <Input value="lokesh@example.com" readOnly />
                  </div>

                  <div>
                    <Label className="mb-1">Currency</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Indian Rupee (₹)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="INR">Indian Rupee (₹)</SelectItem>
                        <SelectItem value="USD">US Dollar ($)</SelectItem>
                        <SelectItem value="EUR">Euro (€)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="ghost" className="hover:bg-muted">Edit profile</Button>
              </CardFooter>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Dark mode</p>
                    <p className="text-sm text-muted-foreground">Use dark theme across the app</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Compact list</p>
                    <p className="text-sm text-muted-foreground">Show transactions in a compact list</p>
                  </div>
                  <Switch />
                </div>

                <Separator />

                <div>
                  <Label className="mb-1">First day of week</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sunday" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sunday">Sunday</SelectItem>
                      <SelectItem value="monday">Monday</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Right column: Notifications + Export + Danger */}
          <section className="lg:col-span-2 space-y-8">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"> 
                  <Bell size={18} /> Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Monthly summary</p>
                      <p className="text-sm text-muted-foreground">Receive a monthly email with spending highlights</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="md:col-span-2">
                    <Label className="mb-1">Notification email</Label>
                    <Input value="lokesh@example.com" readOnly />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="ghost" className="hover:bg-muted">Save preferences</Button>
              </CardFooter>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"> 
                  <Download size={18} /> Data & export
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <p className="font-medium">Export transactions</p>
                    <p className="text-sm text-muted-foreground">Download your transactions as CSV or JSON</p>
                  </div>
                  <div className="flex gap-2">
                    <Button>Export CSV</Button>
                    <Button variant="outline">Export JSON</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-destructive/30 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">Danger zone</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-sm text-muted-foreground">
                  Deleting your account will remove all your local data and cannot be undone.
                </p>
                <div className="flex flex-col sm:flex-row items-center sm:justify-end gap-3">
                  <Button variant="outline">Deactivate account</Button>
                  <Button className="flex items-center gap-2" variant="destructive">
                    <Trash2 size={16} /> Delete account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
}