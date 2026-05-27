import { BookingForm } from "@/components/sections/BookingForm";
import { BookingInfoCard } from "@/components/sections/BookingInfoCard";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { booking } from "@/constants/classes";
import { bookingContent } from "@/constants/booking";

export function Booking() {
  return (
    <SectionContainer id="book" className={booking.section}>
      <SectionTitle as="h2" size="section" className={booking.sectionTitle}>
        {bookingContent.sectionTitle}
      </SectionTitle>

      <div className={booking.layout}>
        <div className={booking.leftCol}>
          <div className={booking.leftPanel}>
            <p className={booking.intro}>{bookingContent.intro}</p>

            <div className={booking.infoList}>
              {bookingContent.infoItems.map((item) => (
                <BookingInfoCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className={booking.rightCol}>
          <BookingForm />
        </div>
      </div>
    </SectionContainer>
  );
}
