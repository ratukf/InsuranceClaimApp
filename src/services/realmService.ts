import Realm from "realm";
import { Claim, ClaimStatus, ClaimType } from "../types";

// Kelas bawaan Realm yang punya fitur simpan, auto update, query, filter, dll.
class ClaimSchema extends Realm.Object<Claim> {
  id!: string;
  claimNumber!: string;
  claimType!: ClaimType;
  policyNumber!: string;
  claimantName!: string;
  claimAmount!: number;
  description!: string;
  status!: ClaimStatus;
  dateSubmitted!: Date;
  dateApproved?: Date;
  notes?: string;

  //   Definisi struktur database
  static schema = {
    name: "Claim",
    primaryKey: "id",
    properties: {
      id: "string",
      claimNumber: "string",
      claimType: "string",
      policyNumber: "string",
      claimantName: "string",
      claimAmount: "double",
      description: "string",
      status: "string",
      dateSubmitted: "date",
      dateApproved: "date?",
      notes: "string?",
    },
  };
}

// ======================================================

let realm: Realm | null = null;

// Inisialisasi realm
export const initializeRealm = async () => {
  try {
    realm = await Realm.open({
      // Realm.open() adalah operasi async
      schema: [ClaimSchema], // register schema
      schemaVersion: 0, // versi database
    });
    console.log("Realm initialized");
  } catch (error) {
    console.log("Failed to initialize Realm: ", error);
  }
};

// Get realm
export const getRealm = () => {
  if (!realm) {
    throw new Error("Realm not initialized");
  }
  return realm;
};

// Close realm
export const closeRealm = () => {
  if (realm) {
    realm.close();
    realm = null;
  }
};
