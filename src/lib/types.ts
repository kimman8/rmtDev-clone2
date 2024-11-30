export type JobItem = {
  id: number;
  badgeLetters: string;
  title: string;
  company: string;
  daysAgo: number;
  relevanceScore: number;
};

export type JobItemExpanded = JobItem & {
  description: string;
  duration: string;
  salary: string;
  location: string;
  qualifications: string[];
  reviews: string[];
  coverImgURL: string;
  companyURL: string;
};
