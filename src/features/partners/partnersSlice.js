import { PARTNERS } from "../../app/shared/PARTNERS";

export const selectAllPartners = () => {
  return PARTNERS;
};

export const selectFeaturedPartner = () =>
  PARTNERS.find((feat) => feat.featured);
