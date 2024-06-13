function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DUhaqC2b.js","./CbViG2Xw.js","./Dch3xQiY.js","./CbYhyuC0.js","./DCk2z-Tu.js","./CMDmr8et.js","./BeX7Iu5M.js","./DC8MraHL.js","./CupVZNk8.js","./C5gCGmDW.js","./BVZ7Taxl.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./D5zTXdpo.js";const n={shiki:{async setup(r){await r.loadLanguage(t(()=>import("./Dch3xQiY.js"),[],import.meta.url),t(()=>import("./DC8MraHL.js"),[],import.meta.url),t(()=>import("./DUhaqC2b.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url))},transformers:async(r,i,m,e)=>{var o;if(typeof e.meta!="string"||!((o=e.meta)!=null&&o.match(/\btwoslash\b/)))return[];{const{removeTwoslashNotations:a}=await t(()=>import("./DH2kUGfc.js"),[],import.meta.url);return[{name:"twoslash:fallback",preprocess(_){return a(_)}}]}}}};export{n as default};
