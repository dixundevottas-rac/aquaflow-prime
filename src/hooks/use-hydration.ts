import { useState, useEffect } from "react";

export interface HydrationEntry {
  amount: number;
  timestamp: string;
}

export interface WeeklyData {
  day: string;
  date: string;
  amount: number;
}

const STORAGE_KEY = "hydration-data";
const DAILY_GOAL = 2.5; // liters

export const useHydration = () => {
  const [hydrationData, setHydrationData] = useState<HydrationEntry[]>([]);
  const dailyGoal = DAILY_GOAL;

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setHydrationData(JSON.parse(stored));
    }
  }, []);

  const addWater = (amount: number) => {
    const newEntry: HydrationEntry = {
      amount,
      timestamp: new Date().toISOString(),
    };
    const updated = [...hydrationData, newEntry];
    setHydrationData(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const getDailyProgress = () => {
    const today = new Date().toDateString();
    const todayEntries = hydrationData.filter(
      (entry) => new Date(entry.timestamp).toDateString() === today
    );
    const totalMl = todayEntries.reduce((sum, entry) => sum + entry.amount, 0);
    return totalMl / 1000; // Convert to liters
  };

  const getWeeklyData = (): WeeklyData[] => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const today = new Date();
    const currentDay = today.getDay();
    
    // Adjust to get Monday as start of week
    const monday = new Date(today);
    const diff = currentDay === 0 ? -6 : 1 - currentDay;
    monday.setDate(today.getDate() + diff);

    return days.map((day, index) => {
      const date = new Date(monday);
      date.setDate(monday.getDate() + index);
      const dateStr = date.toDateString();
      
      const dayEntries = hydrationData.filter(
        (entry) => new Date(entry.timestamp).toDateString() === dateStr
      );
      const totalMl = dayEntries.reduce((sum, entry) => sum + entry.amount, 0);
      
      return {
        day,
        date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        amount: totalMl / 1000, // Convert to liters
      };
    });
  };

  const getHealthScore = (): number => {
    const weeklyData = getWeeklyData();
    const totalDays = weeklyData.length;
    const achievedDays = weeklyData.filter(day => day.amount >= dailyGoal).length;
    
    // Calculate average achievement rate
    const achievementRate = achievedDays / totalDays;
    
    // Calculate average daily intake
    const avgIntake = weeklyData.reduce((sum, day) => sum + day.amount, 0) / totalDays;
    const intakeScore = Math.min((avgIntake / dailyGoal) * 100, 100);
    
    // Combine both metrics (70% based on intake, 30% on consistency)
    return Math.round(intakeScore * 0.7 + achievementRate * 100 * 0.3);
  };

  return {
    hydrationData,
    addWater,
    dailyGoal,
    getDailyProgress,
    getWeeklyData,
    getHealthScore,
  };
};
