import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Droplet, Shield, TrendingDown, Heart, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-gradient">About Smart Hydration</h1>
            <p className="text-xl text-muted-foreground">
              Where health meets incentives
            </p>
          </div>

          <Card className="p-8 glass-card mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Smart Hydration Insurance System is revolutionizing healthcare by making preventive
              health practices rewarding. We believe that staying hydrated is one of the simplest
              yet most effective ways to maintain good health, and we want to reward you for it.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 glass-card">
              <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                <Droplet className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Hydration</h3>
              <p className="text-muted-foreground">
                Easy-to-use tracking system that monitors your daily water intake during weekdays,
                helping you build healthy habits.
              </p>
            </Card>

            <Card className="p-6 glass-card">
              <div className="p-3 rounded-full bg-secondary/10 w-fit mb-4">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lower Premiums</h3>
              <p className="text-muted-foreground">
                Maintain good hydration habits and watch your insurance premiums decrease. Better
                health = better rates.
              </p>
            </Card>

            <Card className="p-6 glass-card">
              <div className="p-3 rounded-full bg-accent/10 w-fit mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Health Benefits</h3>
              <p className="text-muted-foreground">
                Proper hydration improves energy, skin health, digestion, and overall wellbeing.
                Your body will thank you!
              </p>
            </Card>

            <Card className="p-6 glass-card">
              <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Reminders</h3>
              <p className="text-muted-foreground">
                Receive intelligent reminders during work hours (9 AM - 6 PM) to help you stay on
                track with your hydration goals.
              </p>
            </Card>
          </div>

          <Card className="p-8 glass-card">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10 mt-1">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">1. Set Your Goal</h3>
                  <p className="text-muted-foreground">
                    Start with a daily goal of 2.5L of water during weekdays (Monday-Friday).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-secondary/10 mt-1">
                  <Droplet className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">2. Track Your Intake</h3>
                  <p className="text-muted-foreground">
                    Log your water intake throughout the day using our simple 250ml button.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-accent/10 mt-1">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">3. Build Your Score</h3>
                  <p className="text-muted-foreground">
                    Consistent hydration builds your health score from 0-100, reflecting your habits.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10 mt-1">
                  <TrendingDown className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">4. Save Money</h3>
                  <p className="text-muted-foreground">
                    Higher health scores mean lower premiums. Start at ₹3000/month and save up to
                    ₹500 with excellent hydration!
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default About;
