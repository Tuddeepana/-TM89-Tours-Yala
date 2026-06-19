// All route pricing in one place. Currency: LKR.
export type VehicleType = "Mini Car" | "Sedan" | "KDH Flat Roof" | "KDH High Roof";

export interface PriceRoute {
  pickup: string;
  drop: string;
  vehicle: VehicleType;
  price: number;
}

export const popularPickups = [
  "Bandaranaike Airport",
  "Colombo",
  "Negombo",
  "Kandy",
  "Galle",
  "Ella",
  "Yala",
  "Tissamaharama",
  "Mirissa",
  "Sigiriya",
];

export const vehicles: {
  type: VehicleType;
  passengers: number;
  luggage: number;
  features: string[];
}[] = [
  { type: "Mini Car", passengers: 3, luggage: 2, features: ["Air conditioning", "Fuel efficient", "City rides"] },
  { type: "Sedan", passengers: 4, luggage: 3, features: ["Air conditioning", "Leather interior", "Long distance"] },
  { type: "KDH Flat Roof", passengers: 9, luggage: 8, features: ["Air conditioning", "Reclining seats", "Group travel"] },
  { type: "KDH High Roof", passengers: 12, luggage: 12, features: ["Air conditioning", "Stand-up cabin", "Premium tours"] },
];

export const pricing: PriceRoute[] = [
  // Bandaranaike Airport
  { pickup: "Bandaranaike Airport", drop: "Colombo", vehicle: "Mini Car", price: 9500 },
  { pickup: "Bandaranaike Airport", drop: "Colombo", vehicle: "Sedan", price: 17000 },
  { pickup: "Bandaranaike Airport", drop: "Colombo", vehicle: "KDH Flat Roof", price: 22000 },
  { pickup: "Bandaranaike Airport", drop: "Colombo", vehicle: "KDH High Roof", price: 26000 },

  { pickup: "Bandaranaike Airport", drop: "Negombo", vehicle: "Mini Car", price: 4500 },
  { pickup: "Bandaranaike Airport", drop: "Negombo", vehicle: "Sedan", price: 7500 },
  { pickup: "Bandaranaike Airport", drop: "Negombo", vehicle: "KDH Flat Roof", price: 10000 },
  { pickup: "Bandaranaike Airport", drop: "Negombo", vehicle: "KDH High Roof", price: 12500 },

  { pickup: "Bandaranaike Airport", drop: "Kandy", vehicle: "Mini Car", price: 18500 },
  { pickup: "Bandaranaike Airport", drop: "Kandy", vehicle: "Sedan", price: 24500 },
  { pickup: "Bandaranaike Airport", drop: "Kandy", vehicle: "KDH Flat Roof", price: 31000 },
  { pickup: "Bandaranaike Airport", drop: "Kandy", vehicle: "KDH High Roof", price: 36000 },

  { pickup: "Bandaranaike Airport", drop: "Galle", vehicle: "Mini Car", price: 22000 },
  { pickup: "Bandaranaike Airport", drop: "Galle", vehicle: "Sedan", price: 28000 },
  { pickup: "Bandaranaike Airport", drop: "Galle", vehicle: "KDH Flat Roof", price: 36000 },
  { pickup: "Bandaranaike Airport", drop: "Galle", vehicle: "KDH High Roof", price: 42000 },

  { pickup: "Bandaranaike Airport", drop: "Ella", vehicle: "Mini Car", price: 34000 },
  { pickup: "Bandaranaike Airport", drop: "Ella", vehicle: "Sedan", price: 42000 },
  { pickup: "Bandaranaike Airport", drop: "Ella", vehicle: "KDH Flat Roof", price: 52000 },
  { pickup: "Bandaranaike Airport", drop: "Ella", vehicle: "KDH High Roof", price: 60000 },

  { pickup: "Bandaranaike Airport", drop: "Yala", vehicle: "Mini Car", price: 36000 },
  { pickup: "Bandaranaike Airport", drop: "Yala", vehicle: "Sedan", price: 44000 },
  { pickup: "Bandaranaike Airport", drop: "Yala", vehicle: "KDH Flat Roof", price: 54000 },
  { pickup: "Bandaranaike Airport", drop: "Yala", vehicle: "KDH High Roof", price: 62000 },

  { pickup: "Bandaranaike Airport", drop: "Tissamaharama", vehicle: "Mini Car", price: 34000 },
  { pickup: "Bandaranaike Airport", drop: "Tissamaharama", vehicle: "Sedan", price: 42000 },
  { pickup: "Bandaranaike Airport", drop: "Tissamaharama", vehicle: "KDH Flat Roof", price: 52000 },
  { pickup: "Bandaranaike Airport", drop: "Tissamaharama", vehicle: "KDH High Roof", price: 60000 },

  { pickup: "Bandaranaike Airport", drop: "Mirissa", vehicle: "Mini Car", price: 26000 },
  { pickup: "Bandaranaike Airport", drop: "Mirissa", vehicle: "Sedan", price: 32000 },
  { pickup: "Bandaranaike Airport", drop: "Mirissa", vehicle: "KDH Flat Roof", price: 40000 },
  { pickup: "Bandaranaike Airport", drop: "Mirissa", vehicle: "KDH High Roof", price: 46000 },

  { pickup: "Bandaranaike Airport", drop: "Sigiriya", vehicle: "Mini Car", price: 24000 },
  { pickup: "Bandaranaike Airport", drop: "Sigiriya", vehicle: "Sedan", price: 30000 },
  { pickup: "Bandaranaike Airport", drop: "Sigiriya", vehicle: "KDH Flat Roof", price: 38000 },
  { pickup: "Bandaranaike Airport", drop: "Sigiriya", vehicle: "KDH High Roof", price: 44000 },

  // Colombo originating
  { pickup: "Colombo", drop: "Yala", vehicle: "Sedan", price: 38000 },
  { pickup: "Colombo", drop: "Yala", vehicle: "KDH High Roof", price: 56000 },
  { pickup: "Colombo", drop: "Ella", vehicle: "Sedan", price: 36000 },
  { pickup: "Colombo", drop: "Kandy", vehicle: "Sedan", price: 18000 },
  { pickup: "Colombo", drop: "Galle", vehicle: "Sedan", price: 14000 },
];

export function findPrice(pickup: string, drop: string, vehicle: VehicleType): number | null {
  const found = pricing.find(
    (r) =>
      r.pickup.toLowerCase() === pickup.toLowerCase() &&
      r.drop.toLowerCase() === drop.toLowerCase() &&
      r.vehicle === vehicle,
  );
  return found?.price ?? null;
}

export function formatLKR(n: number): string {
  return "Rs. " + n.toLocaleString("en-LK");
}
