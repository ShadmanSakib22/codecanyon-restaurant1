"use client";
import React from "react";
import { User, Users, Calendar, Timer, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const ReservationForm = () => (
  <Card className="shadow-2xl border-foreground/10">
    <CardHeader>
      <CardTitle className="text-3xl font-bold text-foreground">
        Book a Table
      </CardTitle>
      <CardDescription className="text-foreground/70">
        Secure your spot for an unforgettable dining experience.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form className="space-y-6">
        {/* Name and Guests */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground/70">
              Full Name
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/40" />
              <Input
                type="text"
                id="name"
                className="w-full pl-10 border-foreground/40 focus-visible:ring-foreground/40 text-foreground"
                placeholder="John Smith"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="guests" className="text-foreground/70">
              Number of Guests
            </Label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/40" />
              <select
                id="guests"
                defaultValue="2"
                className="
                  w-full pl-10 pr-10 py-2 h-9 appearance-none rounded-md border 
                  border-foreground/40 bg-background text-foreground text-sm shadow-sm 
                  focus:outline-none focus:ring-1 focus:ring-foreground/40 
                  disabled:cursor-not-allowed disabled:opacity-50
                "
              >
                {[...Array(6)].map((_, i) => (
                  <option key={i} value={`${i + 1}`}>
                    {i + 1} {i === 0 ? "Person" : "People"}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/70 pointer-events-none" />
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              Please call us directly for a larger party
            </div>
          </div>
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date" className="text-foreground/70">
              Date
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/40" />
              <Input
                type="date"
                id="date"
                className="w-full pl-10 border-foreground/40 focus-visible:ring-foreground/40 text-foreground"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="time" className="text-foreground/70">
              Time
            </Label>
            <div className="relative">
              <Timer className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/40" />
              <Input
                type="time"
                id="time"
                className="w-full pl-10 border-foreground/40 focus-visible:ring-foreground/40 text-foreground"
              />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-foreground/70">
            Special Requests (Optional)
          </Label>
          <Textarea
            id="message"
            rows={3}
            className="w-full border-foreground/40 focus-visible:ring-foreground/40 text-foreground"
            placeholder="Dietary restrictions, seating preferences, etc."
          />
        </div>

        <Button
          type="submit"
          className="w-full text-lg bg-foreground hover:bg-foreground/90"
        >
          Confirm Reservation
        </Button>
        <p className="text-xs text-center text-foreground/40 mt-3">
          We will call back to confirm your Reservation
        </p>
      </form>
    </CardContent>
  </Card>
);

export default ReservationForm;
