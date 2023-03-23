import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/app1"],
});

registerApplication({
  name: "@gv/react-single",
  app: () =>
    System.import("@gv/react-single"),
  activeWhen: ["/app2"],
});

registerApplication({
  name: "@gv/platform-routes",
  app: () =>
    System.import("@gv/platform-routes"),
  activeWhen: ["/platform-routes"],
});

registerApplication({
  name: "@gv/navbar",
  app: () =>
    System.import("@gv/navbar"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
