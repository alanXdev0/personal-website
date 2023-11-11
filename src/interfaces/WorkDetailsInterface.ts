import { month } from "@/types/month";

export default interface WorkDetailsInterface {
    title: string;
    position: string;
    companyName: string;
    companyURL: string;
    positionDetails: string;
    startYear: number;
    endYear?: number;
    lessThanYear: boolean;
    isActive: boolean;
    startMonth?: string;
    endMonth?: string;
    skills: string[];
  }