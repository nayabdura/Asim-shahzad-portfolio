import SearchIcon from "./icons/SearchLogo";
import MessageSquareIcon from "./icons/MessageSquareIcon";
import LineChartIcon from "./icons/LineChartIcon";
import PenToolIcon from "./icons/PenToolIcon";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Named export for the icons in case you need them elsewhere
export { ChevronLeft, ChevronRight };

// Named export for the STEPS array
export const STEPS = [
  {
    id: "step-1",
    label: "Step 1",
    title: "Deep Niche Research",
    description: "We don't rely on guesswork. We map out the highest-authority websites and competitor backlink profiles in your specific niche to identify opportunities that drive real power to your domain.",
    icon: SearchIcon, // Passing the component reference is cleaner than <SearchIcon />
  },
  {
    id: "step-2",
    label: "Step 2",
    title: "100% Manual Outreach",
    description: "No bots and no spammy templates. We pitch original, topic-relevant ideas directly to real editors and journalists. This personalized approach secures genuine placements on trusted sites.",
    icon: MessageSquareIcon,
  },
  {
    id: "step-3",
    label: "Step 3",
    title: "Authority-First Strategy",
    description: "We focus on impact, not just volume. Our strategy is designed to build sustainable Domain Authority (DA) and improve your organic search rankings through high-quality link equity.",
    icon: LineChartIcon,
  },
  {
    id: "step-4",
    label: "Step 4",
    title: "SEO-Optimized Content",
    description: "Content is king, but context is queen. We write high-value, SEO-safe articles that align with your brand’s goals while satisfying the strict editorial guidelines of top-tier publications.",
    icon: PenToolIcon,
  },
];