import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "reverse-proxy/reverse-proxy-api",
    },
    {
      type: "category",
      label: "Reverse Proxy",
      items: [
        {
          type: "doc",
          id: "reverse-proxy/list-the-routes-the-user-can-see-certificates-and-listener-ports",
          label: "List the routes the user can see, certificates and listener ports",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reverse-proxy/add-a-route-to-a-host",
          label: "Add a route to a host",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reverse-proxy/turn-a-route-on-or-off",
          label: "Turn a route on or off",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "reverse-proxy/change-a-route",
          label: "Change a route",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "reverse-proxy/remove-a-route",
          label: "Remove a route",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "reverse-proxy/make-a-self-signed-certificate",
          label: "Make a self-signed certificate",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reverse-proxy/add-your-own-certificate-and-private-key",
          label: "Add your own certificate and private key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reverse-proxy/request-a-lets-encrypt-certificate-again",
          label: "Request a Let's Encrypt certificate again",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reverse-proxy/delete-a-certificate-that-no-route-uses",
          label: "Delete a certificate that no route uses",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "reverse-proxy/sign-in-page-for-a-protected-route-hands-off-to-the-termix-login",
          label: "Sign in page for a protected route, hands off to the Termix login",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reverse-proxy/check-the-signed-in-user-can-open-a-route-and-return-its-sign-in-link",
          label: "Check the signed-in user can open a route and return its sign in link",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
