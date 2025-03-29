
export interface Printer {
  id: string;
  model: string;
  brand: string;
  condition: string;
  functions: string[];
  characteristics: {
    paperSize: string;
    color: string;
    speed: string;
    resolution: string;
    additionalFeatures?: {
      monthlyDutyCycle?: string;
      tonerYieldBW?: string;
      tonerYieldColor?: string;
      printSpeed?: string;
      screenSize?: string;
      warmupTime?: string;
    }
  };
  image: string;
}
