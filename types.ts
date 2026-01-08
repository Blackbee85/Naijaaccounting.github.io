
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface LeadMagnetData {
  name: string;
  email: string;
}

export interface ServiceFormData {
  name: string;
  companyName: string;
  whatsapp: string;
  email: string;
  services: string[];
}
