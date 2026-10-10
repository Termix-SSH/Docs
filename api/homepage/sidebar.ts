import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "homepage/homepage-api",
    },
    {
      type: "category",
      label: "Homepage",
      items: [
        {
          type: "doc",
          id: "homepage/get-homepage-items",
          label: "Get homepage items",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "homepage/create-homepage-item",
          label: "Create homepage item",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "homepage/update-homepage-item",
          label: "Update homepage item",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "homepage/delete-homepage-item",
          label: "Delete homepage item",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "homepage/get-homepage-layout",
          label: "Get homepage layout",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "homepage/save-homepage-layout",
          label: "Save homepage layout",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "homepage/get-service-links",
          label: "Get service links",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "homepage/create-service-link",
          label: "Create service link",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "homepage/update-service-link",
          label: "Update service link",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "homepage/delete-service-link",
          label: "Delete service link",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "homepage/proxy-favicon-fetch",
          label: "Proxy favicon fetch",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "homepage/proxy-and-parse-an-rss-atom-feed",
          label: "Proxy and parse an RSS/Atom feed",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "homepage/check-the-http-reachability-and-latency-of-a-url",
          label: "Check the HTTP reachability and latency of a URL",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "homepage/proxy-a-json-api-url-and-return-the-parsed-response",
          label: "Proxy a JSON API URL and return the parsed response",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
