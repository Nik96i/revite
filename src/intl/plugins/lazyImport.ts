/* eslint @typescript-eslint/no-unused-vars: 0 */

import type { BackendModule } from "i18next";

const lazyImport: BackendModule = {
  type: "backend",
  init: function (_services, _backendOptions, _i18nextOptions) {
    /* use services and options */
  },

  // read: function(language, namespace, callback) {
  //   /* return resources */
  //   callback(null, {
  //     key: 'value'
  //   });
  //
  //   /* if method fails/returns an error, call this: */
  //   /* callback(truthyValue, null); */
  // },

  // or new since i18next v22.1.0
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  read: async function (language, namespace) {
    return new Promise((resolve) => {
      if (namespace === "common") {
        resolve(import(`../locales/${language}/${namespace}.json`));
      } else {
        resolve(import(`../../views/${namespace}/intl/locales/${language}/translation.json`));
      }
    });
  },

  // optional
  // readMulti: function(languages, namespaces, callback) {
  //   /* return multiple resources - useful eg. for bundling loading in one xhr request */
  //   callback(null, {
  //     en: {
  //       translations: {
  //         key: 'value'
  //       }
  //     },
  //     de: {
  //       translations: {
  //         key: 'value'
  //       }
  //     }
  //   });
  //
  //   /* if method fails/returns an error, call this: */
  //   /* callback(truthyValue, null); */
  // },

  // or new since i18next-multiload-backend-adapter v2.1.0
  // readMulti: function(languages, namespaces) {
  //   return new Promise((resolve) => {
  //     resolve({
  //       en: {
  //         translations: {
  //           key: 'value'
  //         }
  //       },
  //       de: {
  //         translations: {
  //           key: 'value'
  //         }
  //       }
  //     })
  //   })
  // },

  // only used in backends acting as cache layer
  save: function (_language, _namespace, _data) {
    // store the translations
  },

  create: function (_languages, _namespace, _key, _fallbackValue) {
    /* save the missing translation */
  }
};

export default lazyImport;
