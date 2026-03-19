import {defineField, defineType} from "sanity";

export const pageAdmissions = defineType({
  name: "page.admissions",
  title: "Admissions Page Content",
  type: "document",
  description:
    "Edit the content shown on the Admissions page. Layout and design stay locked in code.",
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({name: "eyebrow", title: "Hero label", type: "string", validation: (Rule) => Rule.max(40)}),
        defineField({name: "title", title: "Main headline", type: "string", validation: (Rule) => Rule.required().max(90)}),
        defineField({name: "lead", title: "Intro paragraph", type: "text", rows: 5, validation: (Rule) => Rule.required()}),
        defineField({name: "backgroundImage", title: "Background image", type: "image", options: {hotspot: true}, validation: (Rule) => Rule.required()}),
        defineField({name: "backgroundImageAlt", title: "Alt text for background image", type: "string", validation: (Rule) => Rule.required().max(140)}),
      ],
    }),
    defineField({
      name: "enrollmentOverview",
      title: "Enrollment overview",
      type: "object",
      fields: [
        defineField({name: "title", title: "Overview heading", type: "string", validation: (Rule) => Rule.required().max(90)}),
        defineField({name: "body", title: "Overview paragraph", type: "text", rows: 6, validation: (Rule) => Rule.required()}),
        defineField({name: "bullets", title: "Key highlights", type: "array", of: [{type: "string"}]}),
      ],
    }),
    defineField({
      name: "fit",
      title: "Who it's for",
      type: "object",
      fields: [
        defineField({name: "title", title: "Audience heading", type: "string", validation: (Rule) => Rule.required().max(90)}),
        defineField({name: "body", title: "Audience paragraph", type: "text", rows: 5, validation: (Rule) => Rule.required()}),
        defineField({
          name: "cards",
          title: "Audience cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({name: "text", title: "Card text", type: "text", rows: 3, validation: (Rule) => Rule.required().max(220)}),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "processSteps",
      title: "Admissions process steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({name: "stepNumber", title: "Step order", type: "number", validation: (Rule) => Rule.required()}),
            defineField({name: "title", title: "Step title", type: "string", validation: (Rule) => Rule.required().max(90)}),
            defineField({name: "body", title: "Step description", type: "text", rows: 4, validation: (Rule) => Rule.required()}),
          ],
        },
      ],
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({name: "question", title: "Question", type: "string", validation: (Rule) => Rule.required().max(140)}),
            defineField({name: "answer", title: "Answer", type: "text", rows: 4, validation: (Rule) => Rule.required()}),
          ],
        },
      ],
    }),
    defineField({
      name: "ctas",
      title: "Call-to-action buttons",
      type: "object",
      fields: [
        defineField({name: "applyLabel", title: "Apply button text", type: "string", validation: (Rule) => Rule.required().max(50)}),
        defineField({
          name: "applyHref",
          title: "Apply button link",
          description:
            "Defaults to the Playbook registration page. Keep this as the link editors use for applications.",
          type: "url",
          initialValue:
            "https://labuniversityprep.playbookapi.com/programs/register/",
          validation: (Rule) => Rule.required(),
        }),
        defineField({name: "tourLabel", title: "Schedule tour button text", type: "string", validation: (Rule) => Rule.required().max(60)}),
        defineField({name: "tourHref", title: "Schedule tour button link", type: "url", validation: (Rule) => Rule.required()}),
      ],
    }),
  ],
});

