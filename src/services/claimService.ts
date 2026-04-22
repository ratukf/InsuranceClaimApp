import { v4 as uuidv4 } from "uuid";
import { Claim, ClaimFormData } from "../types";
import { getRealm } from "./realmService";

const generateClaimNumber = (): string => {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");
  return `CLM-${timestamp}-${random}`;
};

export const submitClaim = (data: ClaimFormData): Claim => {
  const realm = getRealm();
  const newClaim: Claim = {
    id: uuidv4(),
    claimNumber: generateClaimNumber(),
    ...data,
    status: "pending",
    dateSubmitted: new Date(),
  };

  realm.write(() => {
    realm.create("Claim", newClaim);
  });

  return newClaim;
};
