import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface AIAssistantProps {
  healthScore: number;
  dailyProgress: number;
  dailyGoal: number;
}

export const AIAssistant = ({ healthScore, dailyProgress, dailyGoal }: AIAssistantProps) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const messages = {
      excellent: [
        "Stay hydrated, hero! 💪 You're crushing it!",
        "Amazing work! You're 80% water, and you're keeping it that way! 💧",
        "Keep up the fantastic hydration habits! Your body loves you! ✨",
        "You're a hydration champion! Keep that streak going! 🏆",
      ],
      good: [
        "Great progress! Just a little more to hit your goal! 💪",
        "You're doing well! Stay consistent! 🌊",
        "Nice work! Your health score is looking good! ⭐",
        "Keep it up! You're on the right track! 💙",
      ],
      needsImprovement: [
        "Don't forget to drink water throughout the day! 💧",
        "You're 80% water, don't dry out! Time to hydrate! 🌊",
        "Your health score could use a boost! Drink up! 💪",
        "Remember: small sips throughout the day make a big difference! ✨",
      ],
    };

    let category: keyof typeof messages;
    const progress = dailyProgress / dailyGoal;

    if (healthScore >= 80 || progress >= 0.9) {
      category = "excellent";
    } else if (healthScore >= 60 || progress >= 0.6) {
      category = "good";
    } else {
      category = "needsImprovement";
    }

    const categoryMessages = messages[category];
    const randomMessage = categoryMessages[Math.floor(Math.random() * categoryMessages.length)];
    setMessage(randomMessage);
  }, [healthScore, dailyProgress, dailyGoal]);

  return (
    <Card className="mt-8 p-6 glass-card border-2 border-primary/20">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full aqua-gradient animate-pulse-slow">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-lg">Your AI Hydration Assistant</h3>
          <p className="text-muted-foreground">{message}</p>
        </div>
      </div>
    </Card>
  );
};
