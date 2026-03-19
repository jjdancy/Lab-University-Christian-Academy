import {defineField, defineType} from "sanity";

export const pageHome = defineType({
  name: "page.home",
  title: "Homepage Content",
  type: "document",
  fieldsets: [
    {name: "hero", title: "Hero Section", options: {collapsible: true, collapsed: true}},
    {name: "aboutPromo", title: "About Promo Video", options: {collapsible: true, collapsed: true}},
    {
      name: "academicsPreview",
      title: "Academics Preview (Homepage)",
      options: {collapsible: true, collapsed: true},
    },
    {
      name: "athleticsPreview",
      title: "Athletics Preview (Homepage)",
      options: {collapsible: true, collapsed: true},
    },
    {
      name: "athleteCarousel",
      title: "Athlete Commitments (Shared Carousel)",
      options: {collapsible: true, collapsed: false},
    },
    {
      name: "facilitiesPreview",
      title: "Facilities Preview (Homepage)",
      options: {collapsible: true, collapsed: true},
    },
    {
      name: "admissionsCard",
      title: "Admissions Card (Homepage)",
      options: {collapsible: true, collapsed: true},
    },
  ],
  description:
    "Update the homepage section content shown on the live website. Layout and styling stay locked in code.",
  fields: [
    defineField({
      name: "athleteCommitmentsCarousel",
      title: "Shared Athlete Commitments Carousel",
      fieldset: "athleteCarousel",
      description:
        "Controls the carousel of student-athletes who have committed to the next level. This carousel is shown on both the Homepage and Athletics pages.",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Carousel heading",
          description: "Appears above the carousel.",
          type: "string",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "subtitle",
          title: "Carousel supporting text",
          description: "Optional text shown under the heading.",
          type: "string",
          validation: (Rule) => Rule.max(180),
        }),
        defineField({
          name: "items",
          title: "Athletes in carousel (in order)",
          description:
            "Pick the athletes you want to feature. The order determines what appears first.",
          type: "array",
          validation: (Rule) =>
            Rule.required().min(1).error("Select at least one athlete."),
          of: [
            {
              type: "reference",
              to: [{type: "athleteCommitment"}],
            },
          ],
        }),
      ],
      options: {
        collapsible: true,
        collapsed: false,
      },
    }),
    defineField({
      name: "hero",
      title: "Hero Section",
      fieldset: "hero",
      description:
        "Content shown at the top of the homepage (headline, supporting text, scholarship card, and trust badges).",
      type: "object",
      fields: [
        defineField({
          name: "heroEyebrow",
          title: "Hero label (small text above headline)",
          description: "Short line above the main headline.",
          type: "string",
          validation: (Rule) => Rule.max(50),
        }),
        defineField({
          name: "headlineHighlight",
          title: "Headline highlight (gold/gradient phrase)",
          description: "This phrase appears in the gold/gradient style.",
          type: "string",
          validation: (Rule) => Rule.max(60),
        }),
        defineField({
          name: "heroSupportingText",
          title: "Supporting paragraph",
          description: "The paragraph under the main headline (keep it clear and short).",
          type: "text",
          rows: 4,
          validation: (Rule) => Rule.max(700),
        }),
        defineField({
          name: "scholarshipTitle",
          title: "Scholarship card heading",
          description: "Heading inside the scholarship card.",
          type: "string",
          validation: (Rule) => Rule.max(60),
        }),
        defineField({
          name: "scholarshipBody",
          title: "Scholarship card text",
          description: "Paragraph inside the scholarship card.",
          type: "text",
          rows: 3,
          validation: (Rule) => Rule.max(250),
        }),
        defineField({
          name: "scholarshipCtaLabel",
          title: "Scholarship button text",
          description: "Text for the scholarship button link.",
          type: "string",
          validation: (Rule) => Rule.max(60),
        }),
        defineField({
          name: "scholarshipCtaHref",
          title: "Scholarship button link",
          type: "url",
        }),
        defineField({
          name: "applyNowLabel",
          title: "Apply button text",
          description: "Text for the main Apply button.",
          type: "string",
          validation: (Rule) => Rule.max(30),
        }),
        defineField({
          name: "scheduleTourLabel",
          title: "Schedule tour button text",
          description: "Text for the Schedule a Tour button.",
          type: "string",
          validation: (Rule) => Rule.max(40),
        }),
        defineField({
          name: "k12BadgeMain",
          title: "K-12 badge text (main)",
          description: "Main line inside the K–12 badge.",
          type: "string",
          validation: (Rule) => Rule.max(10),
        }),
        defineField({
          name: "k12BadgeSub",
          title: "K-12 badge text (sub)",
          description: "Second line inside the K–12 badge.",
          type: "string",
          validation: (Rule) => Rule.max(60),
        }),
        defineField({
          name: "reviewsBadgeRating",
          title: "Reviews badge number (example: 5.0)",
          description: "Number shown on the reviews badge.",
          type: "string",
          validation: (Rule) => Rule.max(10),
        }),
        defineField({
          name: "reviewsBadgeLabel",
          title: "Reviews badge label (example: Google reviews)",
          description: "Text shown under the reviews number.",
          type: "string",
          validation: (Rule) => Rule.max(40),
        }),
        defineField({
          name: "enrollmentBadgeText",
          title: "Now enrolling badge text",
          description: "Text shown on the “Now enrolling…” badge.",
          type: "string",
          validation: (Rule) => Rule.max(90),
        }),
      ],
    }),
    defineField({
      name: "promoVideoSection",
      title: "About Promo Video Section",
      fieldset: "aboutPromo",
      description:
        "The text shown above the promo video on the homepage and the button that links to the About page.",
      type: "object",
      fields: [
        defineField({
          name: "sectionLabel",
          title: "Small label above the promo text",
          type: "string",
          validation: (Rule) => Rule.max(30),
        }),
        defineField({
          name: "heading",
          title: "Promo headline",
          type: "string",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "description",
          title: "Promo description text",
          type: "text",
          rows: 3,
          validation: (Rule) => Rule.max(240),
        }),
        defineField({
          name: "ctaLabel",
          title: "Promo button text",
          type: "string",
          validation: (Rule) => Rule.max(50),
        }),
        defineField({
          name: "ctaHref",
          title: "Promo button link",
          type: "string",
          description: "Example: `/about`",
          validation: (Rule) => Rule.max(200),
        }),
        defineField({
          name: "videoSrc",
          title: "Promo video URL (optional)",
          type: "string",
          description: "Leave blank to use the current `/public` video.",
        }),
      ],
    }),
    defineField({
      name: "academicsPreview",
      title: "Academics Preview (homepage section)",
      fieldset: "academicsPreview",
      type: "object",
      fields: [
        defineField({name: "eyebrow", title: "Label above the heading", type: "string", validation: (Rule) => Rule.max(30)}),
        defineField({name: "headline", title: "Section heading", type: "string", validation: (Rule) => Rule.max(90)}),
        defineField({name: "description", title: "Supporting paragraph", type: "text", rows: 3, validation: (Rule) => Rule.max(300)}),
        defineField({name: "ctaLabel", title: "Button text", type: "string", validation: (Rule) => Rule.max(60)}),
        defineField({name: "ctaHref", title: "Button link", type: "string", description: "Example: `/academics`", validation: (Rule) => Rule.max(200)}),
        defineField({
          name: "images",
          title: "Section images",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({name: "image", title: "Image", type: "image", options: {hotspot: true}}),
                defineField({name: "imageAlt", title: "Alt text for this image", type: "string", validation: (Rule) => Rule.max(140)}),
                defineField({name: "caption", title: "Caption (optional)", type: "string", validation: (Rule) => Rule.max(40)}),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "athleticsPreview",
      title: "Athletics Preview (homepage section)",
      fieldset: "athleticsPreview",
      type: "object",
      fields: [
        defineField({name: "eyebrow", title: "Section label", type: "string", validation: (Rule) => Rule.max(30)}),
        defineField({name: "headline", title: "Headline", type: "string", validation: (Rule) => Rule.max(100)}),
        defineField({name: "description", title: "Supporting text", type: "text", rows: 3, validation: (Rule) => Rule.max(320)}),
        defineField({name: "ctaLabel", title: "Button text", type: "string", validation: (Rule) => Rule.max(60)}),
        defineField({name: "ctaHref", title: "Button link", type: "string", validation: (Rule) => Rule.max(200)}),
        defineField({
          name: "teams",
          title: "Team images (4 tiles)",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({name: "label", title: "Tile label", type: "string", validation: (Rule) => Rule.max(30)}),
                defineField({name: "image", title: "Team image", type: "image", options: {hotspot: true}}),
                defineField({name: "imageAlt", title: "Alt text for this image", type: "string", validation: (Rule) => Rule.max(140)}),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "facilitiesPreview",
      title: "Facilities Preview (homepage section)",
      fieldset: "facilitiesPreview",
      type: "object",
      fields: [
        defineField({name: "eyebrow", title: "Section label", type: "string", validation: (Rule) => Rule.max(30)}),
        defineField({name: "headline", title: "Headline", type: "string", validation: (Rule) => Rule.max(90)}),
        defineField({name: "description", title: "Supporting text", type: "text", rows: 3, validation: (Rule) => Rule.max(320)}),
        defineField({name: "ctaLabel", title: "Button text", type: "string", validation: (Rule) => Rule.max(60)}),
        defineField({name: "ctaHref", title: "Button link", type: "string", validation: (Rule) => Rule.max(200)}),
        defineField({
          name: "images",
          title: "Facility images (3 tiles)",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({name: "image", title: "Image", type: "image", options: {hotspot: true}}),
                defineField({name: "imageAlt", title: "Alt text for this image", type: "string", validation: (Rule) => Rule.max(140)}),
                defineField({name: "caption", title: "Caption", type: "string", validation: (Rule) => Rule.max(40)}),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "leadershipPreview",
      title: "Admissions Card (homepage section)",
      fieldset: "admissionsCard",
      type: "object",
      fields: [
        defineField({name: "eyebrow", title: "Eyebrow label", type: "string", validation: (Rule) => Rule.max(30)}),
        defineField({name: "heading", title: "Headline", type: "string", validation: (Rule) => Rule.max(120)}),
        defineField({name: "description", title: "Description", type: "text", rows: 4, validation: (Rule) => Rule.max(360)}),
        defineField({name: "limitedSeatsText", title: "Limited seats note", type: "string", validation: (Rule) => Rule.max(120)}),
        defineField({name: "applyLabel", title: "Apply button text", type: "string", validation: (Rule) => Rule.max(40)}),
        defineField({
          name: "applyHref",
          title: "Apply button link",
          type: "string",
          description:
            "URL for applications. Default points to Playbook registration.",
          initialValue:
            "https://labuniversityprep.playbookapi.com/programs/register/",
          validation: (Rule) => Rule.max(200),
        }),
        defineField({name: "tourLabel", title: "Schedule tour button text", type: "string", validation: (Rule) => Rule.max(60)}),
        defineField({name: "tourHref", title: "Schedule tour link", type: "string", validation: (Rule) => Rule.max(200)}),
        defineField({name: "backgroundImage", title: "Background image", type: "image", options: {hotspot: true}}),
        defineField({name: "backgroundImageAlt", title: "Background image alt text", type: "string", validation: (Rule) => Rule.max(140)}),
      ],
    }),
  ],
  preview: {
    select: {
      title: "athleteCommitmentsCarousel.title",
    },
    prepare(selection) {
      return {
        title: selection.title || "Homepage",
      };
    },
  },
});

