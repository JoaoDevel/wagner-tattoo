import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { contacts } from "@/constants/classes";
import { contactsContent } from "@/constants/contacts";
import { jetbrainsMono } from "@/lib/fonts";
import { cn } from "@/lib/cn";

export function Contacts() {
  return (
    <SectionContainer id="contacts" className={contacts.section}>
      <SectionTitle as="h2" size="section" className={contacts.title}>
        {contactsContent.title}
      </SectionTitle>

      <address
        className={cn(jetbrainsMono.className, contacts.details, "not-italic")}
      >
        {contactsContent.lines.map((line) => {
          if (line.href) {
            return (
              <a
                key={line.id}
                href={line.href}
                className={cn(contacts.line, contacts.link, "block w-fit")}
              >
                {line.text}
              </a>
            );
          }

          return (
            <p key={line.id} className={contacts.line}>
              {line.text}
            </p>
          );
        })}
      </address>
    </SectionContainer>
  );
}
