import type { ReactNode } from "react";
import { booking } from "@/constants/classes";
import type { BookingInfoItem } from "@/constants/booking";

type BookingInfoCardProps = {
  item: BookingInfoItem;
};

export function BookingInfoCard({ item }: BookingInfoCardProps) {
  return (
    <article className={booking.infoCard}>
      <div className={booking.infoIconWrap}>{getIcon(item.icon)}</div>
      <div>
        <h3 className={booking.infoTitle}>{item.title}</h3>
        <p className={booking.infoValue}>{item.value}</p>
      </div>
    </article>
  );
}

function getIcon(type: BookingInfoItem["icon"]): ReactNode {
  if (type === "mail") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 text-white">
        <path
          d="M3.75 6.75h16.5v10.5H3.75z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="m4.5 7.5 7.5 6 7.5-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 text-white">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="12"
          cy="12"
          r="3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 text-white">
      <path
        d="M12 20s6-5.6 6-10a6 6 0 1 0-12 0c0 4.4 6 10 6 10Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="12"
        cy="10"
        r="2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

