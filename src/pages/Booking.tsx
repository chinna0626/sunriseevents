
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Sent",
      description: "We'll confirm your booking shortly.",
    });
  };

  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair text-gray-900 mb-4">
            Book an Event
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select your preferred date and tell us about your event.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-8" />
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Event Details</h3>
                <div className="space-y-2">
                  <label htmlFor="event-type" className="text-sm font-medium">
                    Event Type
                  </label>
                  <select
                    id="event-type"
                    className="w-full p-2 border rounded-md"
                    required
                  >
                    <option value="">Select an event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="reception">Reception</option>
                    <option value="sangeet">Sangeet</option>
                    <option value="haldi">Haldi</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Select Date</h3>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-gold hover:bg-gold-dark">
              Request Booking
            </Button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
