'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-85d86a10.js');

/*
 Stencil Client Patch Esm v2.17.4 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["drc-side-drawer.cjs",[[1,"drc-side-drawer",{"title":[513],"opened":[1540],"showContactInfo":[32],"open":[64]}]]],["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
