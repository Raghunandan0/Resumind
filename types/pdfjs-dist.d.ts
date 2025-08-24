// declare module "pdfjs-dist/build/pdf.worker.entry" {
//     const worker: any;
//     export default worker;
// }

// declare module "pdfjs-dist" {
//     export const getDocument: any;
//     export const GlobalWorkerOptions: any;
// }








// import * as pdfjsLib from "pdfjs-dist/build/pdf";
// import pdfWorker from "pdfjs-dist/build/pdf.worker.entry";

// (pdfjsLib as any).GlobalWorkerOptions.workerSrc = pdfWorker;







// declare module "pdfjs-dist/build/pdf.worker.entry" {
//     const worker: any;
//     export default worker;
// }

// declare module "pdfjs-dist/build/pdf" {
//     export const getDocument: any;
//     export const GlobalWorkerOptions: any;
// }




// types/pdfjs-dist.d.ts

declare module "pdfjs-dist" {
  export const getDocument: any;
  export const GlobalWorkerOptions: any;
}

declare module "pdfjs-dist/build/pdf.worker.mjs" {
  const worker: any;
  export default worker;
}
