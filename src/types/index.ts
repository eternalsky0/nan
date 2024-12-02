export interface Shutdown {
    id: string;
    title: string;
    address: string;
    date: string;
    timeStart: string;
    timeEnd: string;
    details?: string[];
    type: 'water' | 'hotWater' | 'electricity' | 'gas' | 'heating';
    status: 'active' | 'scheduled' | 'completed';
  }
  
  export interface ShutdownCardProps {
    shutdown: Shutdown;
    onPress: (shutdown: Shutdown) => void;
  }