4 types of assest modules....


1 - assest/resource - put the image into the build folder and export its url to the bundle


2 - assest/inlint - creates the data:uri and sent to bundle.js


3 - assest - combination of both if( file < 8kb ) = inline else resource


4 - asset/source - for plain text file as string in bundle.js