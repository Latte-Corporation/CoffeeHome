import type { NextResponse } from "next/server";
import { LRUCache } from "lru-cache";

type Options = {
  uniqueTokenPerInterval?: number;
  interval?: number;
};

export default function rateLimit(options?: Options) {
  const tokenCache = new LRUCache({
    max: options?.uniqueTokenPerInterval || 500,
    ttl: options?.interval || 60000,
  });

  return {
    check: (res: NextResponse, limit: number, token: string) =>
      new Promise<void>((resolve, reject) => {
        const tokenCount = (tokenCache.get(token) as number[]) || [0];
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount);
        }
        tokenCount[0] += 1;

        const currentUsage = tokenCount[0];
        const isRateLimited = currentUsage >= limit;
        const resetTime = Math.ceil(
          (tokenCache.getRemainingTTL(token) || 0) / 1000,
        );

        res.headers.set("X-RateLimit-Limit", limit.toString());
        res.headers.set(
          "X-RateLimit-Remaining",
          isRateLimited ? "0" : (limit - currentUsage).toString(),
        );
        res.headers.set("X-RateLimit-Reset", resetTime.toString());

        return isRateLimited
          ? reject(new Error("Rate limit exceeded"))
          : resolve();
      }),
  };
}
