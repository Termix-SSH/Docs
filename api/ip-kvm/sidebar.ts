import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "ip-kvm/ip-kvm-api",
    },
    {
      type: "category",
      label: "IP-KVM",
      items: [
        {
          type: "doc",
          id: "ip-kvm/list-the-kvm-types-and-the-login-each-one-needs",
          label: "List the KVM types and the login each one needs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ip-kvm/list-kv-ms-with-their-last-reading",
          label: "List KVMs with their last reading",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ip-kvm/add-a-kvm",
          label: "Add a KVM",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ip-kvm/get-the-kvm-linked-to-a-host",
          label: "Get the KVM linked to a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ip-kvm/try-a-kvm-address-and-login-without-saving-it",
          label: "Try a KVM address and login without saving it",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ip-kvm/read-the-certificate-a-kvm-shows-so-it-can-be-pinned",
          label: "Read the certificate a KVM shows, so it can be pinned",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ip-kvm/change-a-kvm-the-login-is-replaced-only-when-sent",
          label: "Change a KVM. The login is replaced only when sent.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "ip-kvm/remove-a-kvm",
          label: "Remove a KVM",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "ip-kvm/read-the-kvm-now",
          label: "Read the KVM now",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ip-kvm/change-the-power-of-the-machine-behind-a-kvm",
          label: "Change the power of the machine behind a KVM",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ip-kvm/send-a-wake-on-lan-packet-for-the-machine-behind-a-kvm",
          label: "Send a Wake-on-LAN packet for the machine behind a KVM",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ip-kvm/a-jpeg-of-the-current-screen",
          label: "A JPEG of the current screen",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ip-kvm/type-text-on-the-machine-behind-a-kvm",
          label: "Type text on the machine behind a KVM",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ip-kvm/pass-a-browser-web-rtc-offer-to-a-jet-kvm-and-return-its-answer",
          label: "Pass a browser WebRTC offer to a JetKVM and return its answer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ip-kvm/list-the-images-on-a-kvm-and-what-is-mounted",
          label: "List the images on a KVM and what is mounted",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ip-kvm/mount-an-image-as-a-usb-drive-or-cd",
          label: "Mount an image as a USB drive or CD",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ip-kvm/eject-the-mounted-image",
          label: "Eject the mounted image",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ip-kvm/make-the-kvm-download-an-image-from-a-web-address",
          label: "Make the KVM download an image from a web address",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
