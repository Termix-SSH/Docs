import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "object-storage/object-storage-api",
    },
    {
      type: "category",
      label: "Object Storage",
      items: [
        {
          type: "doc",
          id: "object-storage/list-the-provider-presets-with-their-endpoint-templates",
          label: "List the provider presets with their endpoint templates",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "object-storage/totals-for-the-dashboard-card",
          label: "Totals for the dashboard card",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "object-storage/list-the-storage-logins-without-their-keys",
          label: "List the storage logins, without their keys",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "object-storage/add-a-storage-login",
          label: "Add a storage login",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "object-storage/change-a-storage-login-empty-keys-keep-the-saved-ones",
          label: "Change a storage login. Empty keys keep the saved ones.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "object-storage/remove-a-storage-login-and-its-saved-readings",
          label: "Remove a storage login and its saved readings",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "object-storage/check-that-the-keys-work",
          label: "Check that the keys work",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "object-storage/list-the-buckets-of-a-login-with-their-last-size-reading",
          label: "List the buckets of a login with their last size reading",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "object-storage/create-a-bucket",
          label: "Create a bucket",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "object-storage/delete-an-empty-bucket",
          label: "Delete an empty bucket",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "object-storage/set-the-size-and-object-limits-that-raise-an-alert",
          label: "Set the size and object limits that raise an alert",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "object-storage/the-saved-size-readings-of-a-bucket-one-per-day",
          label: "The saved size readings of a bucket, one per day",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "object-storage/count-the-objects-and-bytes-of-a-bucket-now",
          label: "Count the objects and bytes of a bucket now",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "object-storage/list-the-folders-and-objects-under-a-prefix",
          label: "List the folders and objects under a prefix",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "object-storage/size-type-and-metadata-of-one-object",
          label: "Size, type and metadata of one object",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "object-storage/stream-an-object-with-range-support",
          label: "Stream an object, with range support",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "object-storage/upload-files-as-a-multipart-form-large-files-go-in-parts",
          label: "Upload files as a multipart form, large files go in parts",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "object-storage/create-an-empty-folder",
          label: "Create an empty folder",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "object-storage/delete-objects-and-whole-folders",
          label: "Delete objects and whole folders",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "object-storage/copy-an-object-or-a-folder-or-move-it-the-same-body-at-move",
          label: "Copy an object or a folder, or move it (the same body at /move)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "object-storage/make-a-temporary-link-to-an-object",
          label: "Make a temporary link to an object",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "object-storage/read-versioning-lifecycle-cors-policy-tags-encryption-and-public-access",
          label: "Read versioning, lifecycle, CORS, policy, tags, encryption and public access",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "object-storage/save-one-bucket-setting-an-empty-list-removes-it",
          label: "Save one bucket setting. An empty list removes it.",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
