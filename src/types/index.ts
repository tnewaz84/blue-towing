export interface TowRequest {
  pickup: google.maps.LatLngLiteral;
  destination?: google.maps.LatLngLiteral;
  vehicleType: string;
  description: string;
  customerName: string;
  phoneNumber: string;
}

export interface CompanyInfo {
  phone: string;
  email: string;
  address: string;
}