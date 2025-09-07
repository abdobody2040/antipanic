import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/hooks/use-language";
import Home from "@/pages/home";
import SOS from "@/pages/sos";
import Exercises from "@/pages/exercises";
import Journal from "@/pages/journal";
import Settings from "@/pages/settings";
import Checklist from "@/pages/checklist";
import MoodTracker from "@/pages/mood-tracker";
import Learn from "@/pages/learn";
import Affirm from "@/pages/affirm";
import Sleep from "@/pages/sleep";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sos" component={SOS} />
      <Route path="/exercises" component={Exercises} />
      <Route path="/journal" component={Journal} />
      <Route path="/settings" component={Settings} />
      <Route path="/checklist" component={Checklist} />
      <Route path="/mood-tracker" component={MoodTracker} />
      <Route path="/learn" component={Learn} />
      <Route path="/affirm" component={Affirm} />
      <Route path="/sleep" component={Sleep} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <div className="min-h-screen max-w-md mx-auto bg-white shadow-xl relative overflow-hidden">
            <Toaster />
            <Router />
          </div>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
