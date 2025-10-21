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
import { useTranslation } from "@/lib/i18n/translation-context";

const ReservationForm = () => {
  const { t } = useTranslation();
  return (
    <Card className="shadow-2xl border-foreground/10">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-foreground">
          {t("reservation.bookTable")}
        </CardTitle>
        <CardDescription className="text-foreground/70">
          {t("reservation.bookTableSubtitle")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          {/* Name and Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground/70">
                {t("reservation.fullName")}
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/40" />
                <Input
                  type="text"
                  id="name"
                  className="w-full pl-10 border-foreground/40 focus-visible:ring-foreground/40 text-foreground"
                  placeholder={t("reservation.namePlaceholder")}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="guests" className="text-foreground/70">
                {t("reservation.numberOfGuests")}
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
                      {i + 1}{" "}
                      {i === 0 ? t("common.person") : t("common.people")}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/70 pointer-events-none" />
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                {t("reservation.largerPartyNote")}
              </div>
            </div>
          </div>

          {/* {t("reservation.date")} and {t("reservation.time")} */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="text-foreground/70">
                {t("reservation.date")}
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
                {t("reservation.time")}
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
              {t("reservation.specialRequests")}
            </Label>
            <Textarea
              id="message"
              rows={3}
              className="w-full border-foreground/40 focus-visible:ring-foreground/40 text-foreground"
              placeholder={t("reservation.specialRequestsPlaceholder")}
            />
          </div>

          <Button
            type="submit"
            className="w-full text-lg bg-foreground hover:bg-foreground/90"
          >
            {t("reservation.confirmReservation")}
          </Button>
          <p className="text-xs text-center text-foreground/40 mt-3">
            {t("reservation.confirmationNote")}
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default ReservationForm;
