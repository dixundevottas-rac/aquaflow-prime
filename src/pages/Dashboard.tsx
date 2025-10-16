import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Droplet, TrendingDown, TrendingUp, Award, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useHydration } from "@/hooks/use-hydration";
import { useReminders } from "@/hooks/use-reminders";
import { AIAssistant } from "@/components/AIAssistant";
import { Navigation } from "@/components/Navigation";

const Dashboard = () => {
  const navigate = useNavigate();
  const { hydrationData, addWater, dailyGoal, getDailyProgress, getHealthScore } = useHydration();
  const { requestPermission } = useReminders();
  
  const today = new Date();
  const isWeekday = today.getDay() >= 1 && today.getDay() <= 5;
  const dailyProgress = getDailyProgress();
  const healthScore = getHealthScore();
  const basePremium = 3000;
  const premium = Math.round(basePremium - (healthScore - 50) * 10);

  useEffect(() => {
    requestPermission();
  }, [requestPermission]);

  const handleAddWater = () => {
    addWater(250);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-gradient">Hydration Dashboard</h1>
          <p className="text-muted-foreground">Track your daily water intake and earn rewards</p>
        </div>

        {!isWeekday && (
          <Card className="mb-6 p-4 bg-muted/50 border-dashed">
            <p className="text-center text-muted-foreground">
              🌴 Weekend mode - Tracking resumes Monday
            </p>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Today's Progress */}
          <Card className="p-6 glass-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Droplet className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Today's Progress</p>
                <p className="text-2xl font-bold">{dailyProgress.toFixed(1)}L</p>
              </div>
            </div>
            <Progress value={(dailyProgress / dailyGoal) * 100} className="h-3 mb-2" />
            <p className="text-xs text-muted-foreground">
              Goal: {dailyGoal}L {isWeekday ? "(Weekday)" : "(Weekend)"}
            </p>
          </Card>

          {/* Health Score */}
          <Card className="p-6 glass-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-accent/10">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Health Score</p>
                <p className="text-2xl font-bold">{healthScore}/100</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {healthScore >= 70 ? (
                <>
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-500">Excellent!</span>
                </>
              ) : (
                <>
                  <TrendingDown className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-orange-500">Needs improvement</span>
                </>
              )}
            </div>
          </Card>

          {/* Insurance Premium */}
          <Card className="p-6 glass-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-secondary/10">
                <Bell className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Monthly Premium</p>
                <p className="text-2xl font-bold">₹{premium}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              {healthScore >= 70
                ? "🎉 You're saving money!"
                : "💪 Stay hydrated to reduce premium"}
            </p>
          </Card>
        </div>

        {/* Log Water Button */}
        <div className="flex justify-center mb-8">
          <Button
            size="lg"
            onClick={handleAddWater}
            disabled={!isWeekday}
            className="text-lg px-8 py-6 aqua-gradient hover:opacity-90 transition-opacity"
          >
            <Droplet className="mr-2 h-6 w-6 animate-wave" />
            Log 250ml
          </Button>
        </div>

        {/* Recent Activity */}
        <Card className="p-6 glass-card">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {hydrationData.slice(-5).reverse().map((entry, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
              >
                <div className="flex items-center gap-3">
                  <Droplet className="w-5 h-5 text-primary" />
                  <span className="font-medium">{entry.amount}ml</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {new Date(entry.timestamp).toLocaleTimeString()}
                </span>
              </div>
            ))}
            {hydrationData.length === 0 && (
              <p className="text-center text-muted-foreground py-4">
                No activity yet. Start logging your water intake!
              </p>
            )}
          </div>
        </Card>

        <AIAssistant healthScore={healthScore} dailyProgress={dailyProgress} dailyGoal={dailyGoal} />
      </main>
    </div>
  );
};

export default Dashboard;
