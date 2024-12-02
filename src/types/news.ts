export type ShutdownType = {
  id: string;
  title: string;
  address: string;
  date: string;
  timeStart: string;
  timeEnd: string;
  type: 'water' | 'electricity' | 'other';
  status: 'scheduled' | 'active' | 'completed';
  details?: string[];
  description?: string;
};
