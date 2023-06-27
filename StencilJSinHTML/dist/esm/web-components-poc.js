import { p as promiseResolve, b as bootstrapLazy } from './index-1a4e0165.js';

/*
 Stencil Client Patch Browser v2.17.4 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["drc-side-drawer",[[1,"drc-side-drawer",{"title":[513],"opened":[1540],"showContactInfo":[32],"open":[64]}]]],["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
