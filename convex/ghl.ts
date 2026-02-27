"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";

export const pushLead = action({
  args: {
    leadId: v.id("leads"),
  },
  handler: async (ctx, args) => {
    const lead = await ctx.runQuery(api.leads.getById, { leadId: args.leadId });
    if (!lead) {
      console.error(`Lead ${args.leadId} not found`);
      return;
    }

    const apiKey = process.env.GHL_API_KEY;
    const locationId = process.env.GHL_LOCATION_ID;

    if (!apiKey || !locationId) {
      console.warn(
        "GHL_API_KEY or GHL_LOCATION_ID not set. Lead saved locally but not synced to GHL."
      );
      return;
    }

    try {
      const response = await fetch(
        "https://services.leadconnectorhq.com/contacts/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            Version: "2021-07-28",
          },
          body: JSON.stringify({
            firstName: lead.firstName,
            lastName: lead.lastName,
            email: lead.email,
            phone: lead.phone || "",
            locationId,
            tags: ["website-lead"],
            source: "Alifamco Website",
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`GHL API error: ${response.status} - ${errorText}`);
        await ctx.runMutation(api.leads.updateSyncStatus, {
          leadId: args.leadId,
          status: "failed",
        });
        return;
      }

      const data = await response.json();
      await ctx.runMutation(api.leads.updateSyncStatus, {
        leadId: args.leadId,
        status: "synced",
        ghlContactId: data.contact?.id,
      });
    } catch (error) {
      console.error("Failed to push lead to GHL:", error);
      await ctx.runMutation(api.leads.updateSyncStatus, {
        leadId: args.leadId,
        status: "failed",
      });
    }
  },
});
