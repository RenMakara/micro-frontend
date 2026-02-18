"use client";

import Image from "next/image";
import { useGetIphonesQuery } from "@repo/redux/feature/iphone";

function formatPrice(price?: number) {
  if (price == null) return "-";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function IphoneZoneComponent() {
  const { data, isLoading, isError } = useGetIphonesQuery();

  // 1. LOADING STATE: Using Skeleton Shimmers
  if (isLoading) {
    return (
      <section className="grid gap-6 md:grid-cols-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="animate-pulse overflow-hidden rounded-[2rem] border border-white bg-white/50 p-5">
            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="h-44 w-full shrink-0 rounded-2xl bg-zinc-200 sm:w-44" />
              <div className="flex-1 space-y-4 py-2">
                <div className="h-6 w-3/4 rounded-lg bg-zinc-200" />
                <div className="space-y-2">
                  <div className="h-4 w-full rounded-md bg-zinc-100" />
                  <div className="h-4 w-5/6 rounded-md bg-zinc-100" />
                </div>
                <div className="mt-4 h-8 w-24 rounded-full bg-zinc-200" />
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  }

  // 2. ERROR STATE: Minimalist & Action-Oriented
  if (isError) {
    return (
      <section className="flex min-h-[400px] flex-col items-center justify-center rounded-[2.5rem] border border-red-100 bg-red-50/30 p-12 text-center backdrop-blur-sm">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-zinc-900">Connection Interrupted</h3>
        <p className="mt-2 max-w-xs text-sm text-zinc-500">
          We couldn't reach the iPhone service. Please check your network or try again.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-8 rounded-full bg-zinc-900 px-8 py-3 text-sm font-bold text-white transition-transform active:scale-95"
        >
          Retry Connection
        </button>
      </section>
    );
  }

  // 3. EMPTY STATE: Clean & Sophisticated
  if (!data || data.length === 0) {
    return (
      <section className="flex min-h-[400px] flex-col items-center justify-center rounded-[2.5rem] border-2 border-dashed border-zinc-200 bg-transparent p-12 text-center">
        <div className="mb-4 text-zinc-300">
          <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-zinc-900">No Inventory Found</h3>
        <p className="mt-2 max-w-xs text-sm text-zinc-500">
          The showroom is currently empty. Check back soon for the latest models.
        </p>
      </section>
    );
  }

  return (
    <section className="grid gap-6 md:grid-cols-2">
      {data.map((iphone, index) => (
        <article
          key={`${iphone.productName}-${iphone.productPrice}`}
          className={`group relative overflow-hidden rounded-[2rem] border transition-all duration-300 hover:shadow-2xl hover:shadow-zinc-200/50 ${index % 2 === 0
            ? "border-white bg-white/80 backdrop-blur-md"
            : "border-blue-100 bg-gradient-to-br from-blue-50/50 to-white"
            } p-5`}
        >
          <div className="flex flex-col gap-6 sm:flex-row">
            {/* Image Container */}
            <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-2xl bg-zinc-100 sm:w-44 shadow-inner">
              {iphone.productImageUrl ? (
                <Image
                  src={iphone.productImageUrl}
                  alt={iphone.productName}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 bg-zinc-50 text-zinc-400">
                  <svg className="w-8 h-8 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[10px] font-bold uppercase tracking-widest">No Image</span>
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="flex flex-1 flex-col justify-between py-1">
              <div>
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h2 className="text-xl font-bold tracking-tight text-zinc-900 group-hover:text-blue-600 transition-colors">
                    {iphone.productName}
                  </h2>
                </div>
                <p className="line-clamp-3 text-sm leading-relaxed text-zinc-500">
                  {iphone.productDescription}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-zinc-900 px-4 py-1.5 text-xs font-bold tracking-wide text-white shadow-lg shadow-zinc-900/20">
                  {formatPrice(iphone.productPrice)}
                </span>
                <div className="flex -space-x-2">
                  {/* Decorative Tech Detail */}
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-zinc-200 ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
