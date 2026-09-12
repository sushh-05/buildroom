import { useMemo, useState } from "react";
import { disruptedBookings } from "../../data/missions";
import type { DisruptedBooking, Itinerary } from "../../types";

function rankAlternatives(alternatives: Itinerary[]): Itinerary[] {
    const minPrice = Math.min(...alternatives.map((a) => a.price));
    const maxPrice = Math.max(...alternatives.map((a) => a.price));
    const priceRange = maxPrice - minPrice || 1;

    const scored = alternatives.map((alt) => {
        const priceScore = 1 - (alt.price - minPrice) / priceRange;
        const connectionScore = alt.connections === 0 ? 1 : 0.5;
        const score = priceScore * 0.6 + connectionScore * 0.4;
        return { ...alt, rank: score };
    });

    return scored.sort((a, b) => b.rank - a.rank);
}

export function NavigateDemo() {
    const [bookings, setBookings] = useState<DisruptedBooking[]>(disruptedBookings);
    const [expandedId, setExpandedId] = useState<string | null>(bookings[0]?.id ?? null);

    const rankedBookings = useMemo(
        () =>
            bookings.map((booking) => ({
                ...booking,
                alternatives: rankAlternatives(booking.alternatives),
            })),
        [bookings]
    );

    const rebook = (bookingId: string) => {
        setBookings((current) =>
            current.map((b) => (b.id === bookingId ? { ...b, resolved: true } : b))
        );
    };

    return (
        <div className="mt-14 border-t border-[#171713]/10 pt-14">
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#2b6bd9]">
                Live preview
            </p>
            <h3 className="text-xl font-bold tracking-[-0.01em]">
                A working slice of the Navigate mission
            </h3>
            <p className="mt-2 max-w-lg leading-6 text-[#5c5a50]">
                Alternatives are ranked live by a scoring rule that weighs price
                against number of connections — expand a booking to see it work.
            </p>

            <div className="mt-8 space-y-3">
                {rankedBookings.map((booking) => {
                    const isOpen = expandedId === booking.id;
                    const best = booking.alternatives[0];

                    return (
                        <div key={booking.id} className="border border-[#171713]/10 bg-white">
                            <button
                                type="button"
                                onClick={() =>
                                    setExpandedId((current) =>
                                        current === booking.id ? null : booking.id
                                    )
                                }
                                className="flex min-h-11 w-full items-center justify-between gap-4 px-4 py-4 text-left"
                            >
                                <div>
                                    <p className="font-semibold">{booking.traveler}</p>
                                    <p className="text-sm text-[#5c5a50]">
                                        {booking.originalRoute} · {booking.reason}
                                    </p>
                                </div>
                                <span
                                    className={`flex-shrink-0 text-xs font-semibold ${booking.resolved ? "text-[#3d9a5c]" : "text-[#2b6bd9]"
                                        }`}
                                >
                                    {booking.resolved ? "Rebooked" : `Best: ₹${best.price.toLocaleString("en-IN")}`}
                                </span>
                            </button>

                            {isOpen && (
                                <div className="border-t border-[#171713]/8 px-4 py-4">
                                    <ul className="space-y-2">
                                        {booking.alternatives.map((alt, index) => (
                                            <li
                                                key={alt.id}
                                                className={`flex flex-wrap items-center justify-between gap-3 border px-3 py-2.5 text-sm ${index === 0
                                                        ? "border-[#2b6bd9]/30 bg-[#2b6bd9]/5"
                                                        : "border-[#171713]/10"
                                                    }`}
                                            >
                                                <div>
                                                    <p className="font-medium">{alt.route}</p>
                                                    <p className="text-xs text-[#5c5a50]">
                                                        Departs {alt.departure} ·{" "}
                                                        {alt.connections === 0 ? "Direct" : `${alt.connections} stop`}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="tabular-nums font-semibold">
                                                        ₹{alt.price.toLocaleString("en-IN")}
                                                    </span>
                                                    {index === 0 && !booking.resolved && (
                                                        <button
                                                            type="button"
                                                            onClick={() => rebook(booking.id)}
                                                            className="min-h-8 bg-[#171713] px-3 text-xs font-semibold text-white"
                                                        >
                                                            Confirm rebooking
                                                        </button>
                                                    )}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}