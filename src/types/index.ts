export type ClaimStatus = "pending" | "approved" | "rejected" | "paid";
export type ClaimType = "health" | "accident" | "disability" | "death";

export interface Claim {
  id: string;
  claimNumber: string;
  claimType: ClaimType;
  policyNumber: string;
  claimantName: string;
  claimAmount: number;
  description: string;
  status: ClaimStatus;
  dateSubmitted: Date;
  dateApproved: Date;
  notes?: string;
}

export interface ClaimFormData {
  claimType: ClaimType;
  policyNumber: string;
  claimantName: string;
  claimAmount: number;
  description: string;
}
