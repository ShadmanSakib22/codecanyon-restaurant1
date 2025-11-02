"use client";

import React, { useState, useEffect } from "react";
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
import { useTranslations } from "next-intl";

const ReservationForm = () => {
  const t = useTranslations("reservation");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  // Auto-hide messages after 4 seconds
  useEffect(() => {
    if (statusMessage.type) {
      const timer = setTimeout(
        () => setStatusMessage({ type: null, text: "" }),
        4000
      );
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const guests = formData.get("guests") as string;
    const date = formData.get("date") as string;
    const time = formData.get("time") as string;
    const message = formData.get("message") as string;

    if (!name || !phone || !date || !time) {
      setStatusMessage({
        type: "error",
        text:
          t("validation.missingFields") || "Please fill all required fields.",
      });
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          guests: Number(guests),
          date,
          time,
          message,
          status: "pending",
        }),
      });

      if (!res.ok) throw new Error("Failed to submit reservation");

      setStatusMessage({
        type: "success",
        text: t("success.message") || "Reservation submitted successfully!",
      });
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setStatusMessage({
        type: "error",
        text: t("error.message") || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="shadow-2xl border-foreground/10">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-foreground">
          {t("bookTable")}
        </CardTitle>
        <CardDescription className="text-foreground/70">
          {t("bookTableSubtitle")}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name and Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground/70">
                {t("fullName")}
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
                <Input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full pl-10 border-foreground/40 focus-visible:ring-foreground/40 text-foreground"
                  placeholder={t("namePlaceholder")}
                  required
                />
              </div>
            </div>

            {/* Guests */}
            <div className="space-y-2">
              <Label htmlFor="guests" className="text-foreground/70">
                {t("numberOfGuests")}
              </Label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
                <select
                  id="guests"
                  name="guests"
                  defaultValue="2"
                  className="appearance-none w-full pl-10 pr-10 py-2 h-9 rounded-md border border-foreground/40 bg-background text-foreground text-sm shadow-sm focus:ring-1 focus:ring-foreground/40"
                >
                  {[...Array(6)].map((_, i) => (
                    <option key={i} value={`${i + 1}`}>
                      {i + 1} {i === 0 ? t("person") : t("people")}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/70 pointer-events-none" />
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                {t("largerPartyNote")}
              </div>
            </div>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="text-foreground/70">
                {t("date")}
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
                <Input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full pl-10 border-foreground/40 focus-visible:ring-foreground/40 text-foreground"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="time" className="text-foreground/70">
                {t("time")}
              </Label>
              <div className="relative">
                <Timer className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
                <Input
                  type="time"
                  id="time"
                  name="time"
                  className="w-full pl-10 border-foreground/40 focus-visible:ring-foreground/40 text-foreground"
                  required
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground/70">
              {t("specialRequests")}
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={3}
              className="w-full border-foreground/40 focus-visible:ring-foreground/40 text-foreground"
              placeholder={t("specialRequestsPlaceholder")}
            />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full text-lg bg-foreground hover:bg-foreground/90"
          >
            {loading ? t("submitting") : t("confirmReservation")}
          </Button>

          {/* Inline status message */}
          {statusMessage.type && (
            <div
              className={`mt-4 text-center text-sm font-medium transition-opacity duration-500 ${
                statusMessage.type === "success"
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {statusMessage.text}
            </div>
          )}

          <p className="text-xs text-center text-foreground/40 mt-3">
            {t("confirmationNote")}
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default ReservationForm;
