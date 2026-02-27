import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";

export const submit = mutation({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const leadId = await ctx.db.insert("leads", {
      firstName: args.firstName,
      lastName: args.lastName,
      email: args.email,
      phone: args.phone,
      message: args.message,
      ghlSyncStatus: "pending",
      createdAt: Date.now(),
    });

    // Schedule the GHL sync action in the background
    await ctx.scheduler.runAfter(0, api.ghl.pushLead, { leadId });

    return { success: true, leadId };
  },
});

export const getById = query({
  args: { leadId: v.id("leads") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.leadId);
  },
});

export const updateSyncStatus = mutation({
  args: {
    leadId: v.id("leads"),
    status: v.union(
      v.literal("pending"),
      v.literal("synced"),
      v.literal("failed")
    ),
    ghlContactId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.leadId, {
      ghlSyncStatus: args.status,
      ...(args.ghlContactId ? { ghlContactId: args.ghlContactId } : {}),
    });
  },
});
