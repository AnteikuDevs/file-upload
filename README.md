
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/AnteikuDevs/file-upload">
    <img src="src/logo.png" alt="Logo" width="200">
  </a>

  <h3 align="center">File Upload Plugin by <a href="https://github.com/AnteikuDevs">anteikudevs</a></h3>

  <p align="center">
    FileUpload
    <br />
    <a href="#getting-started"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://anteikudevs.github.io/file-upload/demo/index.html">View Demo</a>
    ·
    <a href="https://github.com/AnteikuDevs/file-upload/issues">Report Bug</a>
    ·
    <a href="https://github.com/AnteikuDevs/file-upload/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Preview][product-screenshot]](https://example.com)

Plugins that might be useful for a developer -- I think this is it.

Here's why:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like creating a README from scratch
* You should implement DRY principles to the rest of your life :smile:

Of course, no one plugin will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this plugin!

Use the `README.md` to get started.



### Built With

this plugin is made using:

![Javascript][javascript.com]
![Css3][css3.com]
![Sass][sass-lang.com]
![Jquery][jquery.com]



<!-- GETTING STARTED -->
## Getting Started

This plugin is specifically used in html not framework and is made to make it easier for users.<br>

### Installation and Usage

_This is how to install and use this plugin._

### Install from git

1. Clone the repo

   ```sh
   git clone https://github.com/AnteikuDevs/file-uploads.git
   ```
2. Load css

   ```html
   <link rel="stylesheet" href="./file-upload/file-upload.min.css"/>
   ```
2. Load script

   ```html
   <script src="./jquery.min.js"></script>
   <script src="./file-upload/file-upload.min.js"></script>
   ```
3. Use plugin

   ```js
   let FileData = new FileUpload('#selector');
   ```
4. Use Config

   ```js
   // while there are only a few custom config
   {
        accept: [ // not required
            "*",// default
            // other extension support
            "mp3"
            "wav"
            "mp4"
            "mkv"
            "gif"
            "jpg"
            "jpeg"
            "png"
            "webp"
            "svg"
            "xlsx"
            "xls"
            "csv"
            "pdf"
            "docx"
            "doc"
            "ppt"
            "pptx"
        ],
        // optional value
        maxSize: 5,// not required
        maxFile: 10,// not required, on MB
        lang: 'en',// no required, default en value is en and id only
        customs: { // not required, for the custom color
            primary: '#FF5900',
            secondary: '#FFF1EA',
            background: '#fff'
        }
    }
   ```
5. Get result data

   ```js
   // get all data attribute
   FileData.getValue()
   /*
      result: [
         {
            data:"data:image/png;base64,...", // base64 data
            fileType: "image", // type of file
            id: "__fQQeANSCgBuDP", // id generated
            name: "anteikudevs.png", // filename
            size: 258.71, // file size
            type: "image/png" // type of file format
         }
      ]
   */

   // get all data base64 only
   FileData.getValue(base64Only = true)
   
   /*
      result: [
         "data:image/png;base64,...",
         "data:image/jpg;base64,...",
      ]
   */
   ```
   
6. Set current data

   ```js
   FileData.setValue([
      {
         id: 1,
         data: 'https://../image.jpg'
      }
   ])
   ```
7. Clear data

   ```js
   // delete all uploaded files or preview files on set value
   FileData.clearValue()
   ```
8. Get deleted data from setValue()

   ```js
   // this will generate the data id that has been set previously
   FileData.deletedIds
   /*
      result: [
         1,
         2,
      ]
   */
   ```
### Install from npm

1. Install from npm

   ```sh
   npm install anteikudevs-file-upload
   ```
2. Use plugin

   ```js
   let FileData = new FileUpload('#selector');
   ```
3. Use Config

   ```js
   // while there are only a few custom config
   {
        accept: [ // not required
            "*",// default
            // other extension support
            "mp3"
            "wav"
            "mp4"
            "mkv"
            "gif"
            "jpg"
            "jpeg"
            "png"
            "webp"
            "svg"
            "xlsx"
            "xls"
            "csv"
            "pdf"
            "docx"
            "doc"
            "ppt"
            "pptx"
        ],
        // optional value
        maxSize: 5,// not required
        maxFile: 10,// not required, on MB
        lang: 'en',// no required, default en value is en and id only
        customs: { // not required, for the custom color
            primary: '#FF5900',
            secondary: '#FFF1EA',
            background: '#fff'
        }
    }
   ```
4. Get result data

   ```js
   // get all data attribute
   FileData.getValue()
   /*
      result: [
         {
            data:"data:image/png;base64,...", // base64 data
            fileType: "image", // type of file
            id: "__fQQeANSCgBuDP", // id generated
            name: "anteikudevs.png", // filename
            size: 258.71, // file size
            type: "image/png" // type of file format
         }
      ]
   */

   // get all data base64 only
   FileData.getValue(base64Only = true)
   
   /*
      result: [
         "data:image/png;base64,...",
         "data:image/jpg;base64,...",
      ]
   */
   ```
   
5. Set current data

   ```js
   FileData.setValue([
      {
         id: 1,
         data: 'https://../image.jpg'
      }
   ])
   ```
6. Clear data

   ```js
   // delete all uploaded files or preview files on set value
   FileData.clearValue()
   ```
7. Get deleted data from setValue()

   ```js
   // this will generate the data id that has been set previously
   FileData.deletedIds
   /*
      result: [
         1,
         2,
      ]
   */
   ```

<!-- ROADMAP -->
## Roadmap

- [x] Add README.md
- [x] Upload Files
- [x] Upgrade Version

See the [open issues](https://github.com/AnteikuDevs/file-upload/issues) for a full list of proposed features (and known issues).

<!-- CONTACT -->
## Contact

Teguh Sugiarto - [@teguhdevs](https://instagram.com/teguhdevs) <br>
AnteikuDevs - [@anteikudevs](https://instagram.com/anteikudevs)

Project Link: [https://github.com/AnteikuDevs/file-uploads](https://github.com/AnteikuDevs/file-upload)


[product-screenshot]: src/preview.png
[javascript.com]: https://img.shields.io/badge/javascript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black
[css3.com]: https://img.shields.io/badge/css-2299F8?style=for-the-badge&logo=css3&logoColor=white
[sass-lang.com]: https://img.shields.io/badge/sass-D989B2?style=for-the-badge&logo=sass&logoColor=white
[jquery.com]: https://img.shields.io/badge/jquery-1161A0?style=for-the-badge&logo=jquery&logoColor=white