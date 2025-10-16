import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { WeeklyChart } from "@/components/WeeklyChart";
import { useHydration } from "@/hooks/use-hydration";
import { TrendingUp, Award, Calendar } from "lucide-react";

const Reports = () => {
  const { getWeeklyData, getHealthScore, dailyGoal } = useHydration();
  const weeklyData = getWeeklyData();
  const healthScore = getHealthScore();
  
  const weeklyAverage = weeklyData.reduce((sum, day) => sum + day.amount, 0) / weeklyData.length;
  const daysAchieved = weeklyData.filter(day => day.amount >= dailyGoal).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-gradient">Weekly Reports</h1>
          <p className="text-muted-foreground">Track your hydration progress over time</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 glass-card">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 rounded-full bg-primary/10">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Weekly Average</p>
                <p className="text-2xl font-bold">{weeklyAverage.toFixed(1)}L</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 glass-card">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 rounded-full bg-accent/10">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Health Score</p>
                <p className="text-2xl font-bold">{healthScore}/100</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 glass-card">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 rounded-full bg-secondary/10">
                <Calendar className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Goals Achieved</p>
                <p className="text-2xl font-bold">{daysAchieved}/5</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6 glass-card">
          <h2 className="text-xl font-semibold mb-6">Weekly Hydration Trend</h2>
          <WeeklyChart data={weeklyData} goal={dailyGoal} />
        </Card>

        <Card className="p-6 glass-card mt-6">
          <h2 className="text-xl font-semibold mb-4">Daily Breakdown</h2>
          <div className="space-y-3">
            {weeklyData.map((day, index) => {
              const achieved = day.amount >= dailyGoal;
              return (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-lg ${
                    achieved ? "bg-green-500/10 border border-green-500/20" : "bg-red-500/10 border border-red-500/20"
                  }`}
                >
                  <div>
                    <p className="font-semibold">{day.day}</p>
                    <p className="text-sm text-muted-foreground">{day.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">{day.amount.toFixed(1)}L</p>
                    <p className={`text-sm ${achieved ? "text-green-500" : "text-red-500"}`}>
                      {achieved ? "Goal achieved ✓" : "Missed goal"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Reports;
