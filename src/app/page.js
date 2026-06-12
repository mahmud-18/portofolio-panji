import PortfolioExperience from "@/components/PortfolioExperience";
import { portfolioContent } from "@/data/content";

export default function Home() {
  return <PortfolioExperience content={portfolioContent} />;
}
