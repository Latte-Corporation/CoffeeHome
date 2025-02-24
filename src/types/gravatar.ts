type VerifiedAccount = {
  service_type: string;
  service_label: string;
  service_icon: string;
  url: string;
  is_hidden: boolean;
};

type UserProfile = {
  hash: string;
  display_name: string;
  profile_url: string;
  avatar_url: string;
  avatar_alt_text: string;
  location: string;
  description: string;
  job_title: string;
  company: string;
  verified_accounts: VerifiedAccount[];
  pronunciation: string;
  pronouns: string;
  background_color: string;
};

export type { UserProfile, VerifiedAccount };
