// Documentation for parameters;
// Width and Height default are TV based,
// so no need to send them for TV.
// For any other platform such as web, width and height MUST BE SENT

//Those Should be replaced with the designer exported size
export const designGuideWidth = 1440;
export const designGuideHeight = 900;


export const px2vhRatio = (size: number, height = designGuideHeight): number =>
  (size / height) 
export const px2vwRatio = (size: number, width = designGuideWidth): number =>
  (size / width) 

  
export const px2vh = (size: number, height = designGuideHeight): string =>
  `${(size / height) * 100}vh`;
export const px2vw = (size: number, width = designGuideWidth): string =>
  `${(size / width) * 100}vw`;

export const hToDeviceHeight = (
  size: number,
  height = designGuideHeight
): number => (size / height) * window.outerHeight;

export const wToDeviceWidth = (
  size: number,
  width = designGuideWidth
): number => (size / width) * window.outerWidth;

export const font2vw = (size: number, width = designGuideWidth): string =>
  `${(size / width) * 100}vw`;
