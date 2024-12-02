export type ReportFormType = {
  type: 'water' | 'electricity' | 'other';
  location: 'apartment' | 'building';
  apartmentNumber?: string;
  phone: string;
  description?: string;
};

export type ReportStackParamList = {
  ReportMain: undefined;
  ReportDetails: {
    type: ReportFormType['type'];
  };
  ReportSuccess: undefined;
};
