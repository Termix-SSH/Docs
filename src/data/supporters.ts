export type Tier = 'supporter' | 'major-supporter';

export type Supporter = {
  name: string;
  month: string;
  tier: Tier;
};

// Manually curated. Add an entry once a donation's transaction hash has
// been verified on-chain against the donation address. Do not publish
// exact amounts, addresses, or transaction hashes here.
export const supporters: Supporter[] = [];
