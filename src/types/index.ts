// Типы для системы контроля безопасности

export type AccessStatus = 'green' | 'blue' | 'yellow' | 'red';
export type AccessType = 'permanent' | 'temporary';
export type AccessLevel = 'full' | 'limited';
export type PassType = 'permanent' | 'temporary' | 'single';
export type VehicleType = 'car' | 'truck' | 'crane' | 'other';
export type AssetStatus = 'temporary' | 'permanent';
export type InvestigationStatus = 'open' | 'in_progress' | 'closed';

export interface Employee {
  id: string;
  fullName: string;
  position: string;
  company: string;
  contactInfo: string;
  photo?: string;
  documents: DocumentFile[];
  violations: Violation[];
  safetyTraining: SafetyTraining[];
  accessStatus: AccessStatus;
  accessType: AccessType;
  accessLevel: AccessLevel;
  accessLocations: string[];
  accessHistory: AccessHistory[];
  movementHistory: MovementRecord[];
}

export interface Vehicle {
  id: string;
  plateNumber: string;
  type: VehicleType;
  driver: Employee;
  company: Company;
  accessLocations: string[];
  movementHistory: MovementRecord[];
  violations: Violation[];
}

export interface Company {
  id: string;
  name: string;
  bin: string;
  type: 'contractor' | 'subcontractor';
  employees: Employee[];
  vehicles: Vehicle[];
}

export interface Asset {
  id: string;
  name: string;
  quantity: number;
  responsible: Employee;
  status: AssetStatus;
  documents: DocumentFile[];
  movementHistory: AssetMovement[];
  vehicle?: Vehicle;
}

export interface Pass {
  id: string;
  type: PassType;
  employee?: Employee;
  vehicle?: Vehicle;
  visitor?: Visitor;
  accessLevel: string;
  accessZones: string[];
  validFrom: string;
  validUntil: string;
  isActive: boolean;
  history: PassHistory[];
}

export interface Visitor {
  id: string;
  fullName: string;
  photo?: string;
  passportData: string;
  purpose: string;
  arrivalTime: string;
  departureTime?: string;
}

export interface Investigation {
  id: string;
  title: string;
  status: InvestigationStatus;
  relatedPersons: Employee[];
  relatedVehicles: Vehicle[];
  relatedCompanies: Company[];
  documents: DocumentFile[];
  photos: string[];
  videos: string[];
  findings: string;
  decisions: string;
  createdAt: string;
  updatedAt: string;
}

export interface EventLog {
  id: string;
  action: string;
  user: string;
  module: string;
  entityType: string;
  entityId: string;
  timestamp: string;
  details: string;
}

export interface DocumentFile {
  id: string;
  name: string;
  type: string;
  url: string;
  uploadedAt: string;
}

export interface Violation {
  id: string;
  type: string;
  description: string;
  date: string;
  severity: 'low' | 'medium' | 'high';
}

export interface SafetyTraining {
  id: string;
  name: string;
  completedAt: string;
  expiresAt: string;
  certificate?: string;
}

export interface AccessHistory {
  id: string;
  action: string;
  locations: string[];
  changedBy: string;
  changedAt: string;
  reason: string;
}

export interface MovementRecord {
  id: string;
  location: string;
  zone: string;
  timestamp: string;
  photo?: string;
  direction: 'entry' | 'exit';
}

export interface AssetMovement {
  id: string;
  type: 'import' | 'export';
  location: string;
  timestamp: string;
  responsible: Employee;
  document: DocumentFile;
}

export interface PassHistory {
  id: string;
  action: string;
  changedBy: string;
  changedAt: string;
  reason: string;
}
