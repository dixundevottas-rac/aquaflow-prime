import { useEffect, useCallback } from "react";
import { toast } from "sonner";

const REMINDER_INTERVAL = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
const START_HOUR = 9; // 9 AM
const END_HOUR = 18; // 6 PM

export const useReminders = () => {
  const isWorkingHours = useCallback(() => {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();
    
    // Check if it's a weekday (1-5) and within working hours
    return day >= 1 && day <= 5 && hour >= START_HOUR && hour < END_HOUR;
  }, []);

  const showReminder = useCallback(() => {
    if (isWorkingHours()) {
      const messages = [
        "💧 Time to hydrate! Stay healthy, hero!",
        "🌊 Don't forget your water! You're 80% water, don't dry out!",
        "💪 Stay hydrated, stay strong!",
        "✨ Water break! Your body will thank you!",
        "🎯 Hydration checkpoint! Keep that health score up!",
      ];
      
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      
      toast(randomMessage, {
        duration: 5000,
        position: "top-center",
      });

      // Try to show browser notification if permission granted
      if ("Notification" in window && Notification.permission === "granted") {
        new Notification("Hydration Reminder", {
          body: randomMessage,
          icon: "/favicon.ico",
        });
      }
    }
  }, [isWorkingHours]);

  const requestPermission = useCallback(async () => {
    if ("Notification" in window && Notification.permission === "default") {
      await Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    // Set up interval for reminders
    const intervalId = setInterval(showReminder, REMINDER_INTERVAL);
    
    // Show first reminder after 2 hours
    const timeoutId = setTimeout(showReminder, REMINDER_INTERVAL);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [showReminder]);

  return {
    requestPermission,
    showReminder,
  };
};
