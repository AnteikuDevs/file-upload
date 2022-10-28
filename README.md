
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/AnteikuDevsOrg/file-uploads">
    <img src="src/logo.png" alt="Logo" width="200">
  </a>

  <h3 align="center">FileUpload Plugin by <a href="https://github.com/AnteikuDevs">anteikudevs</a></h3>

  <p align="center">
    FileUpload
    <br />
    <a href="#getting-started"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/AnteikuDevsOrg/file-uploads/demo">View Demo</a>
    ·
    <a href="https://github.com/AnteikuDevsOrg/file-uploads/issues">Report Bug</a>
    ·
    <a href="https://github.com/AnteikuDevsOrg/file-uploads/issues">Request Feature</a>
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

* [![Javascript][javascript.com]][Javascript-url]



<!-- GETTING STARTED -->
## Getting Started

This plugin is specifically used in html not framework and is made to make it easier for users.<br>

### Installation and Usage

_This is how to install and use this plugin._

1. Clone the repo

   ```sh
   git clone https://github.com/AnteikuDevsOrg/file-uploads.git
   ```
2. Load css

   ```html
   <link rel="stylesheet" href="./file-upload/file-upload.min.css"/>
   ```
2. Load script

   ```html
   <script src="./file-upload/file-upload.js"></script>
   ```
3. Use plugin

   ```js
   let FileData = new FileUpload('#selector',{
        accept: [
            'png',
            'jpg'
        ],
        maxSize: 3,
        maxFile: 1
    });
   ```
4. Use Config

   ```js
   // while there are only a few custom files
   {
        // accept config is required
        accept: [
            '*',//this is for all extensions
            'gif',
            'gif',
            'jpg',
            'jpeg',
            'png',
            'webp',
            'xlsx',
            'xls',
            'pdf',
            'docx',
            'doc',
            'ppt',
            'pptx',
        ],
        // optional value
        maxSize: 5,// default 100 in mb
        maxFile: 10,// default 100 files
    }
   ```
5. Get result data

   ```js
   // only base64 result data
   FileData.data()
   // result: [base64:file,base64:file,...]

   // only files result data
   FileData.file()// comming soon
   // result: 
   ```
   <!-- beta -->
6. Set current data

   ```js
   FileData.set([
    {
        id: 1,
        data: 'https://../image.jpg'
    }
   ])
   ```
7. Clear data

   ```js
   // delete all uploaded files
   FileData.clear()
   ```
8. Get deleted data

   ```js
   // this will generate the data id that has been set previously
   FileData.deletedData()
   ```


<!-- ROADMAP -->
## Roadmap

- [x] Add README.md
- [ ] Upload Plugin
- [ ] Upgrade Version

See the [open issues](https://github.com/AnteikuDevsOrg/file-uploads/issues) for a full list of proposed features (and known issues).

<!-- CONTACT -->
## Contact

Teguh Sugiarto - [@teguhdevs](https://instagram.com/teguhdevs)

Project Link: [https://github.com/AnteikuDevsOrg/file-uploads](https://github.com/AnteikuDevsOrg/file-uploads)


[product-screenshot]: src/highlight.png