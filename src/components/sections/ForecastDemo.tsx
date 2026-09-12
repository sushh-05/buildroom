import { useMemo, useState } from "react";
import { products } from "../../data/missions";
import type { Product } from "../../types";

function averageWeeklyDemand(sales: number[]): number {
    return sales.reduce((sum, value) => sum + value, 0) / sales.length;
}

function daysUntilStockout(product: Product): number {
    const dailyDemand = averageWeeklyDemand(product.weeklySales) / 7;
    if (dailyDemand <= 0) return Infinity;
    return Math.round(product.stock / dailyDemand);
}

function isLowStock(product: Product): boolean {
    return product.stock <= product.reorderThreshold;
}

function SparkBars({ data }: { data: number[] }) {
    const max = Math.max(...data);
    return (
        <div className="flex h-10 items-end gap-1" aria-hidden="true">
            {data.map((value, index) => (
                <div
                    key={index}
                    className="w-2.5 bg-[#3d9a5c]/60"
                    style={{ height: `${Math.max(8, (value / max) * 100)}%` }}
                />
            ))}
        </div>
    );
}

type FilterMode = "all" | "low";

export function ForecastDemo() {
    const [filter, setFilter] = useState<FilterMode>("all");

    const enriched = useMemo(
        () =>
            products
                .map((product) => ({
                    product,
                    daysLeft: daysUntilStockout(product),
                    low: isLowStock(product),
                }))
                .sort((a, b) => a.daysLeft - b.daysLeft),
        []
    );

    const visible = useMemo(
        () => (filter === "low" ? enriched.filter((item) => item.low) : enriched),
        [enriched, filter]
    );

    const lowStockCount = enriched.filter((item) => item.low).length;

    return (
        <div className="mt-14 border-t border-[#171713]/10 pt-14">
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#3d9a5c]">
                Live preview
            </p>
            <h3 className="text-xl font-bold tracking-[-0.01em]">
                A working slice of the Forecast mission
            </h3>
            <p className="mt-2 max-w-lg leading-6 text-[#5c5a50]">
                Days-until-stockout is calculated live from each product&apos;s
                6-week sales trend — sorted with the most urgent item first.
            </p>

            <div className="mt-6 flex gap-2">
                <button
                    type="button"
                    onClick={() => setFilter("all")}
                    className={`min-h-9 px-3 text-xs font-semibold ${filter === "all"
                            ? "bg-[#171713] text-white"
                            : "border border-[#171713]/15 text-[#171713]/70"
                        }`}
                >
                    All products ({enriched.length})
                </button>
                <button
                    type="button"
                    onClick={() => setFilter("low")}
                    className={`min-h-9 px-3 text-xs font-semibold ${filter === "low"
                            ? "bg-[#171713] text-white"
                            : "border border-[#171713]/15 text-[#171713]/70"
                        }`}
                >
                    Low stock only ({lowStockCount})
                </button>
            </div>

            <div className="mt-6 space-y-3">
                {visible.map(({ product, daysLeft, low }) => (
                    <div
                        key={product.id}
                        className="flex flex-col gap-4 border border-[#171713]/10 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                        <div className="flex items-center gap-4">
                            <SparkBars data={product.weeklySales} />
                            <div>
                                <p className="font-semibold">{product.name}</p>
                                <p className="text-sm text-[#5c5a50]">
                                    {product.stock} in stock · reorder at {product.reorderThreshold}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <span
                                className={`text-sm font-semibold tabular-nums ${low ? "text-[#d9522b]" : "text-[#171713]/60"
                                    }`}
                            >
                                {Number.isFinite(daysLeft) ? `${daysLeft} days left` : "No demand"}
                            </span>
                            <span
                                className={`px-2.5 py-1 text-xs font-semibold ${low
                                        ? "bg-[#d9522b]/12 text-[#d9522b]"
                                        : "bg-[#3d9a5c]/12 text-[#3d9a5c]"
                                    }`}
                            >
                                {low ? "Reorder soon" : "Healthy"}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}