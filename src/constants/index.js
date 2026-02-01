import { Bell, PieChart, Shield, Users, Wallet, Zap } from "lucide-react";

// Colors for pie chart
export const COLORS = [
  "#6366f1", // Indigo 500
  "#3b82f6", // Blue 500
  "#0ea5e9", // Sky 500
  "#14b8a6", // Teal 500
  "#10b981", // Emerald 500
  "#8b5cf6", // Violet 500
  "#f43f5e", // Rose 500
  "#f59e0b", // Amber 500
];

export const problemStats = [
  {
    title: "Budgeting Chaos",
    description:
      "Struggling to plan monthly expenses and constantly running short at month-end",
    icon: Wallet,
    color: "rose",
  },
  {
    title: "Bill-Splitting Nightmares",
    description:
      "Endless WhatsApp messages trying to figure out who owes what to whom",
    icon: Users,
    color: "amber",
  },
  {
    title: "Awkward Money Talks",
    description:
      "Uncomfortable conversations about pending payments ruining friendships",
    icon: Bell,
    color: "indigo",
  },
];

export const services = [
  {
    title: "Smart Budget Planner",
    description:
      "Set monthly budgets and track category-wise spending in real-time. Know exactly where your money goes.",
    icon: PieChart,
    features: [
      "Visual expense breakdown",
      "Category tracking",
      "Monthly insights",
    ],
  },
  {
    title: "Auto Bill Splitting",
    description:
      "Add a bill, select roommates, and let us handle the math. Fair splits, zero arguments.",
    icon: Zap,
    features: [
      "Automatic calculation",
      "Multiple payers",
      "Instant notifications",
    ],
  },
  {
    title: "Polite Reminders",
    description:
      "Gentle notifications for pending payments. No more awkward confrontations.",
    icon: Bell,
    features: ["Smart reminders", "Payment tracking", "Balance visibility"],
  },
  {
    title: "Secure & Private",
    description:
      "Your financial data is encrypted and private. We never share your information.",
    icon: Shield,
    features: ["Bank-grade security", "Data encryption", "Privacy first"],
  },
];

export const htw = [
  {
    step: "01",
    title: "Add Your Room",
    description: "Create your room and invite roommates with a simple link",
  },
  {
    step: "02",
    title: "Track Expenses",
    description:
      "Add bills and expenses as they happen. We'll calculate everything",
  },
  {
    step: "03",
    title: "Stay Settled",
    description: "Get clear visibility on who owes what. Settle up hassle-free",
  },
];
