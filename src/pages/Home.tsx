import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const loggedIn = true; // Dummy logged-in flag
  const navigate = useNavigate();

  return (
    <main
      className="min-h-screen relative flex flex-col items-center justify-center p-8"
      style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(34, 197, 94, 0.12) 20px, rgba(34, 197, 94, 0.12) 21px),
          repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(16, 185, 129, 0.10) 30px, rgba(16, 185, 129, 0.10) 31px),
          repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(59, 130, 246, 0.08) 40px, rgba(59, 130, 246, 0.08) 41px),
          repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(147, 51, 234, 0.06) 35px, rgba(147, 51, 234, 0.06) 36px)
        `,
        backgroundColor: "inherit",
      }}
    >
      {/* Top Right Title */}
      <div className="absolute top-4 left-4 text-xl font-bold">
        Expense Tracker
      </div>

      {/* Hero Section */}
      <section className="max-w-4xl text-center mb-20">
        <h1 className="text-5xl font-extrabold mb-4 ">
          Track Your Expenses Easily
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Stay on top of your finances with the easy-to-use expense tracker app.
          Manage your budget, monitor spending, and plan your savings smarter.
        </p>

        {loggedIn ? (
          <Button size="lg" onClick={() => navigate("/dashboard")}>
            Go to Dashboard
          </Button>
        ) : (
          <div className="flex justify-center gap-4">
            <Button size="lg" onClick={() => navigate("/signup")}>
              Sign Up
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/login")}>
              Log In
            </Button>
          </div>
        )}
      </section>

    </main>
  );
}
