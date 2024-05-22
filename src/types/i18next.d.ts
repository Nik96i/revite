// import the original type declarations
import "i18next";

// import all namespaces (for the default language, only)
import type nsCommon from "../intl/locales/en/common.json";
import type nsAuth from "../views/auth/intl/locales/en/translation.json";
import type nsHome from "../views/home/intl/locales/en/translation.json";
import type nsNotFound from "../views/notFound/intl/locales/en/translation.json";
import type nsUsers from "../views/users/intl/locales/en/translation.json";

declare module "i18next" {

  // Extend CustomTypeOptions
  interface CustomTypeOptions {

    // custom namespace type, if you changed it
    defaultNS: "common";

    // custom resources type
    resources: {
      common: typeof nsCommon;
      auth: typeof nsAuth;
      home: typeof nsHome;
      notFound: typeof nsNotFound;
      users: typeof nsUsers;
    };

    // other
  }
}
