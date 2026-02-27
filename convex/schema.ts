import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leads: defineTable({
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    message: v.string(),
    ghlSyncStatus: v.union(
      v.literal("pending"),
      v.literal("synced"),
      v.literal("failed")
    ),
    ghlContactId: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_email", ["email"])
    .index("by_sync_status", ["ghlSyncStatus"]),
});
