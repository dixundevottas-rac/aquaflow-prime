import { useNavigate } from "react-router-dom";
import { Droplet, Shield, TrendingDown, Award, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 animate-float">
            <div className="p-4 rounded-full aqua-gradient">
              <Droplet className="w-16 h-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient">Smart Hydration</span>
            <br />
            Insurance System
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Stay hydrated, save money. Where health meets incentives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button
              size="lg"
              onClick={() => navigate("/dashboard")}
              className="text-lg px-8 py-6 aqua-gradient hover:opacity-90 transition-opacity"
            >
              Start Tracking
              <Droplet className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/about")}
              className="text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg">Simple tracking, smart rewards</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 glass-card hover:scale-105 transition-transform">
            <div className="p-4 rounded-full bg-primary/10 w-fit mb-4">
              <Droplet className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Track Hydration</h3>
            <p className="text-muted-foreground">
              Log your water intake during weekdays with our simple 250ml button. Build healthy
              habits that stick.
            </p>
          </Card>

          <Card className="p-8 glass-card hover:scale-105 transition-transform">
            <div className="p-4 rounded-full bg-accent/10 w-fit mb-4">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Earn Health Score</h3>
            <p className="text-muted-foreground">
              Consistent hydration builds your health score from 0-100. Higher scores mean better
              benefits.
            </p>
          </Card>

          <Card className="p-8 glass-card hover:scale-105 transition-transform">
            <div className="p-4 rounded-full bg-secondary/10 w-fit mb-4">
              <TrendingDown className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Lower Premiums</h3>
            <p className="text-muted-foreground">
              Better health scores = lower insurance premiums. Save up to ₹500/month by staying
              hydrated!
            </p>
          </Card>

          <Card className="p-8 glass-card hover:scale-105 transition-transform">
            <div className="p-4 rounded-full bg-primary/10 w-fit mb-4">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Smart Reminders</h3>
            <p className="text-muted-foreground">
              Get timely reminders during work hours (9 AM - 6 PM) only on weekdays. Never miss a
              hydration break.
            </p>
          </Card>

          <Card className="p-8 glass-card hover:scale-105 transition-transform">
            <div className="p-4 rounded-full bg-accent/10 w-fit mb-4">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Health Benefits</h3>
            <p className="text-muted-foreground">
              Improve energy, skin health, digestion, and overall wellbeing. Your body is 80%
              water!
            </p>
          </Card>

          <Card className="p-8 glass-card hover:scale-105 transition-transform">
            <div className="p-4 rounded-full bg-secondary/10 w-fit mb-4">
              <Shield className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Weekly Reports</h3>
            <p className="text-muted-foreground">
              Track your progress with detailed weekly reports and visualizations. See your health
              journey.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="p-12 glass-card max-w-4xl mx-auto text-center aqua-gradient">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Start Your Hydration Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of users who are staying healthy and saving money
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/dashboard")}
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
          >
            Get Started Free
            <Droplet className="ml-2 h-5 w-5" />
          </Button>
        </Card>
      </section>
    </div>
  );
};

export default Index;
