import { Cloudinary } from 'cloudinary-core';

const oldBucket = 'ameinfo-bucket|ameinfo-images';
const oldBucketRe = new RegExp(oldBucket);
const newBucket = 'https://d1tchxdm4w0h28.cloudfront.net';
const imageRe = new RegExp(/\/[^.]*?\.(jpg|png|gif)/i);

const cloudinary = new Cloudinary({ cloud_name: 'ameinfomailservice' });

const ci = (url, width, height) => {
  let imgUrl = url;
  // check if using old bucket
  if (oldBucketRe.test(url)) {
    // extract image
    const m = url.match(imageRe);
    if (m && m[0]) {
      // build image url with query strings
      imgUrl = newBucket + m[0];
      if (width || height) {
        imgUrl += '?';
        if (width) imgUrl += `width=${width}&`;
        if (height) imgUrl += `height=${height}&`;
        // remove the last &
        imgUrl = imgUrl.slice(0, -1);
      }
    }
  }
  return imgUrl;
};

export { ci };

export default cloudinary;
