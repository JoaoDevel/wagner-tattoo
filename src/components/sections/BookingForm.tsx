import { booking } from "@/constants/classes";
import { cn } from "@/lib/cn";

export function BookingForm() {
  return (
    <form className={booking.formCard}>
      <div className="flex min-h-0 flex-1 flex-col gap-4 sm:gap-5">
        <label className="shrink-0">
          <span className={booking.label}>Full Name</span>
          <input type="text" name="fullName" className={booking.input} />
        </label>

        <label className="shrink-0">
          <span className={booking.label}>Phone Number</span>
          <input type="tel" name="phone" className={booking.input} />
        </label>

        <label className={booking.textareaField}>
          <span className={booking.label}>Tattoo Idea</span>
          <textarea name="idea" className={booking.textarea} />
        </label>
      </div>

      <button type="submit" className={cn(booking.submit, "mt-4 shrink-0 sm:mt-5")}>
        Submit Information
      </button>
    </form>
  );
}
