import { month } from "@/types/month";

export default interface WorkDetailsInterface {
    title: string;
    position: string;
    companyName: string;
    companyUrl: string;
    positionDetails: string;
    startYear: number;
    endYear?: number;
    lessThanYear: boolean;
    isActive: boolean;
    startMonth?: month;
    endMonth?: month;
    skills: [string];
  }