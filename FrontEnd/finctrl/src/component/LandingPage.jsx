import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Wallet, 
  PieChart, 
  ShieldCheck, 
  TrendingUp,
  Star,
  CheckCircle2,
  Lock,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      
      {/* Header / Navbar */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Wallet className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">FinCtrl</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">How it Works</a>
        </div>
        <div className="flex space-x-4">
          <Link to="/login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Log in
          </Link>
          <Link to="/signup" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-all">
            Get Started
          </Link>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative container mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12 overflow-hidden">
          <motion.div 
            className="flex-1 space-y-8 text-center lg:text-left z-10"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 text-sm text-blue-600 bg-blue-50 border border-blue-100 rounded-full">
              <Star className="w-4 h-4 fill-blue-600" />
              <span>The #1 Role-Based Finance Tracker</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white">
              Master Your Money. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                Own Your Future.
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Take complete control of your personal finances, track event budgets, and get actionable money-management guidance—all in one secure dashboard.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/signup" className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group">
                Start Tracking Free 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#features" className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-gray-700 bg-white border hover:bg-gray-50 rounded-lg shadow-sm transition-all focus:ring-2 focus:ring-blue-100">
                See How It Works
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 relative w-full max-w-xl lg:max-w-none"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Abstract Dashboard Mockup */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 relative z-10 w-full transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                <div className="space-y-1">
                  <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-8 w-48 bg-gray-300 rounded animate-pulse"></div>
                </div>
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <PieChart className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-blue-200"></div>
                      <div className="space-y-1">
                        <div className="h-3 w-24 bg-gray-300 rounded"></div>
                        <div className="h-2 w-16 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="h-4 w-16 bg-gray-300 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-full blur-3xl -z-10 opacity-70"></div>
          </motion.div>
        </section>

        {/* Features / Services Section */}
        <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900 border-y">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Everything you need to manage wealth</h2>
              <p className="text-gray-600 dark:text-gray-400">FinCtrl simplifies your financial life with intelligent tracking, secure data storage, and goal-oriented planning.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: TrendingUp, 
                  title: "Smart Tracking", 
                  desc: "Log daily expenses and income instantly. Visualize where every rupee goes with beautifully rendered radial charts.",
                  color: "bg-green-100 text-green-600"
                },
                { 
                  icon: Zap, 
                  title: "Event Budgeting", 
                  desc: "Create specific budgets for trips, weddings, or projects. Share financial clarity with involved members in real-time.",
                  color: "bg-yellow-100 text-yellow-600"
                },
                { 
                  icon: ShieldCheck, 
                  title: "Role-Based Security", 
                  desc: "Enterprise-grade JWT encryption. Ensure that only authorized admins can adjust global parameters or investment portfolios.",
                  color: "bg-blue-100 text-blue-600"
                }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.color}`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section id="about" className="py-24 container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 relative">
               <div className="absolute inset-0 bg-blue-600 rounded-3xl translate-x-4 translate-y-4 opacity-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800" 
                 alt="People discussing finances" 
                 className="relative z-10 rounded-3xl shadow-2xl object-cover h-[500px] w-full border"
               />
               
               {/* Floating Badge */}
               <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 z-20 border">
                 <div className="bg-green-100 p-3 rounded-full">
                   <Lock className="w-6 h-6 text-green-600" />
                 </div>
                 <div>
                   <p className="text-xs text-gray-500 font-medium">Security</p>
                   <p className="font-bold text-gray-900">256-bit Encrypted</p>
                 </div>
               </div>
            </div>
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                Stop wondering where your money went. <span className="text-blue-600">Tell it where to go.</span>
              </h2>
              <p className="text-lg text-gray-600">
                Traditional spreadsheets are boring and hard to maintain. We built FinCtrl to make managing capital visually engaging and highly actionable, for both individuals and organizations.
              </p>
              
              <ul className="space-y-4">
                {[
                  "One-click transaction adding and categorization",
                  "Collaborative event tracking for groups",
                  "In-app financial consulting guides",
                  "Responsive interface looks perfect on mobile or desktop"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>


        {/* Call to Action Section */}
        <section className="py-24 container mx-auto px-6">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 lg:p-16 text-center shadow-2xl relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to master your finances?</h2>
              <p className="text-xl text-gray-300">Join FinCtrl today. Registration takes less than 60 seconds.</p>
              <div className="pt-4">
                <Link to="/signup" className="inline-block px-10 py-4 text-lg font-bold text-gray-900 bg-white hover:bg-gray-100 rounded-xl shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all hover:scale-105">
                  Create Free Account
                </Link>
                <p className="mt-4 text-sm text-gray-400">No credit card required. Cancel anytime.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t py-12 text-sm text-gray-600 dark:text-gray-400">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <Wallet className="w-5 h-5 text-blue-600" />
              <span className="text-lg font-bold text-gray-900 dark:text-white">FinCtrl</span>
            </div>
            <p className="leading-relaxed">Building a secure, accessible, and deeply analytical financial future for everyone.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Features</a></li>
              <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-600">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600">Finance Guides</a></li>
              <li><a href="#" className="hover:text-blue-600">API Documentation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-12 pt-8 border-t text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} FinCtrl. All rights reserved.</p>
          <div className="flex gap-4">
             {/* Social links placeholder */}
             <div className="w-8 h-8 rounded bg-gray-200 dark:bg-gray-800 hover:bg-blue-100 transition-colors cursor-pointer"></div>
             <div className="w-8 h-8 rounded bg-gray-200 dark:bg-gray-800 hover:bg-blue-100 transition-colors cursor-pointer"></div>
             <div className="w-8 h-8 rounded bg-gray-200 dark:bg-gray-800 hover:bg-blue-100 transition-colors cursor-pointer"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
