"use client";
import React from "react";
import { Clock, Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ReservationForm from "@/components/ui/reservation-form";
import MotionReveal from "@/components/ui/motion-reveal";
import { useTranslation } from "@/lib/i18n/translation-context";

const ContactDetails = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-10">
      {/* Contact Information */}
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-6">
          {t("contact.getInTouch")}
        </h2>
        <div className="space-y-4 text-lg text-foreground">
          <p className="flex items-center text-foreground/90">
            <Phone className="w-5 h-5 mr-3 text-foreground/70" />
            {t("contact.phone")}
          </p>
          <p className="flex items-center text-foreground/90">
            <Mail className="w-5 h-5 mr-3 text-foreground/70" />
            {t("contact.email")}
          </p>
          <p className="flex items-center text-foreground/90">
            <MapPin className="w-5 h-5 mr-3 text-foreground/70" />
            {t("contact.address")}
          </p>
        </div>
      </div>

      {/* Openning hrs */}
      <div id="op-hrs">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          {t("contact.openingHours")}
        </h2>
        <Card className="shadow-lg border-foreground/10">
          <CardContent className="p-6 space-y-3 text-foreground/90">
            <p className="flex justify-between border-b border-foreground/10 pb-2">
              {/* Lunch Label and Hours */}
              <span className="font-semibold">{t("common.lunch")}:</span>{" "}
              <span>{t("contact.lunchHours")}</span>
            </p>
            <p className="flex justify-between border-b border-foreground/10 pb-2">
              {/* Dinner Weekday Label and Hours */}
              <span className="font-semibold">
                {t("common.dinner")} {t("common.weekday")}:
              </span>{" "}
              <span>{t("contact.dinnerWeekday")}</span>
            </p>
            <p className="flex justify-between border-b border-foreground/10 pb-2">
              {/* Dinner Weekend Label and Hours */}
              <span className="font-semibold">
                {t("common.dinner")} {t("common.weekend")}:
              </span>{" "}
              <span>{t("contact.dinnerWeekend")}</span>
            </p>
            <p className="flex justify-center pt-2 text-sm text-foreground/50">
              <Clock className="w-4 h-4 mr-2" />
              {/* Last Seating Note */}
              {t("common.lastSeating")}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// --- Main Contact Page ---
const Contact = () => {
  return (
    <section className="mt-10 md:mt-24 lg:mt-28 bg-secondary/95 backdrop-blur-sm">
      {/* Contact & Form Section */}
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 py-12 md:py-16">
          {/* Left: Contact Details & Hours */}
          <MotionReveal direction="left">
            <div id="contact" className="lg:order-first">
              <ContactDetails />
            </div>
          </MotionReveal>

          {/* Right: Reservation Form */}
          <MotionReveal direction="right">
            <div id="reserve" className="lg:order-last">
              <ReservationForm />
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
