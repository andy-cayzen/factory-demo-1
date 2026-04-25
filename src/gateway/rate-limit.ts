export type RateLimitDecision = {
  allowed: boolean;
  remaining: number;
  resetAt: string;
};

export function decideRateLimit(currentCount: number, limit: number, resetAt: string): RateLimitDecision {
  const remaining = Math.max(limit - currentCount, 0);
  return {
    allowed: remaining > 0,
    remaining,
    resetAt
  };
}
