import { defineType, defineField } from "sanity";

export const projectType = defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "ID",
      type: "string",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
    }),
    defineField({
      name: "iconBg",
      title: "Icon Background",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "projectType",
      title: "Project Type",
      type: "string",
    }),
    defineField({
      name: "problemsToSolve",
      title: "Problems to Solve",
      type: "text",
    }),
    defineField({
      name: "businessOwner",
      title: "Business Owner",
      type: "string",
    }),
    defineField({
      name: "solution",
      title: "Solution",
      type: "text",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
    }),
    defineField({
      name: "githubLink",
      title: "GitHub Repository",
      type: "url",
    }),
    defineField({
      name: "liveDemo",
      title: "Live Demo",
      type: "url",
    }),
  ],
});
