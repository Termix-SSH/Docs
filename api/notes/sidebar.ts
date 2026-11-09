import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "notes/notes-api",
    },
    {
      type: "category",
      label: "Notes",
      items: [
        {
          type: "doc",
          id: "notes/list-notes",
          label: "List notes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "notes/create-a-note",
          label: "Create a note",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "notes/search-all-notes",
          label: "Search all notes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "notes/folders-with-hosts-the-caller-can-open",
          label: "Folders with hosts the caller can open",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "notes/read-a-note",
          label: "Read a note",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "notes/update-a-note",
          label: "Update a note",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "notes/delete-a-note",
          label: "Delete a note",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
