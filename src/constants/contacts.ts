export type ContactLine = {
  id: string;
  text: string;
  href?: string;
};

export const contactsContent = {
  title: "CONTACTS",
  lines: [
    { id: "city", text: "NYC" },
    { id: "address", text: "258 ELIZABETH ST NEW YORK, NY 10012" },
    { id: "hours-week", text: "12-8 (SUN – THUR)" },
    { id: "hours-weekend", text: "12-9 (FRI – SAT)" },
    { id: "phone", text: "1-646-838-9220", href: "tel:+16468389220" },
    {
      id: "email",
      text: "INFO@BLINDREASONTATTOO.COM",
      href: "mailto:info@blindreasontattoo.com",
    },
  ] satisfies ContactLine[],
} as const;
