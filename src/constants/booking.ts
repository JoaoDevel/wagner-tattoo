export type BookingInfoItem = {
  id: string;
  title: string;
  value: string;
  icon: "mail" | "instagram" | "location";
};

export const bookingContent = {
  sectionTitle: "BOOK APPOINTMENT",
  intro:
    "Custom tattoos are available by appointment only. Share your idea and I'll create a design made to last a lifetime.",
  infoItems: [
    {
      id: "mail",
      title: "Email me at",
      value: "wagner@wagnerblacktattoo.com",
      icon: "mail",
    },
    {
      id: "ig",
      title: "Follow me on Instagram",
      value: "@wagnerblack_ink",
      icon: "instagram",
    },
    {
      id: "location",
      title: "Tattooing at",
      value: "Private Studio - Queen Street West, Toronto, ON",
      icon: "location",
    },
  ] satisfies BookingInfoItem[],
} as const;

