if(typeof $ == 'undefined'){
    alert('File Upload : Jquery is required!');
}

$('head').append(`<style>@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"); * { box-sizing: border-box; } .anteikudevs-fileupload { --file-upload-background: #fff; --file-upload-primary: #f57272; --file-upload-secondary: #fffcec; --file-upload-tertiary: #FFB68F; position: relative; user-select: none; font-family: "Poppins", sans-serif !important; max-width: 400px; } .anteikudevs-fileupload img { max-width: 100%; } .anteikudevs-fileupload .anteikudevs-fileupload\:content { background-color: var(--file-upload-background, #fff); width: 100%; display: flex; flex-direction: row; border-radius: 10px; align-items: center; padding: 0.8rem 1rem; gap: 1rem; grid-row: 2/span 2; box-shadow: 0 0 10px rgba(100, 100, 100, 0.15); transition: all 0.2s linear; animation: zoomIn; animation-duration: 0.2s; position: relative; border-image-width: 5px; overflow: hidden; flex-wrap: wrap; } .anteikudevs-fileupload .anteikudevs-fileupload\:content.drag { border-color: #FFD424; } .anteikudevs-fileupload .anteikudevs-fileupload\:content.drop { border-color: #03AC0E; } .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:icon { width: 70px; height: 70px; border-radius: 5px; background-color: var(--file-upload-secondary, #fffcec); border: 1px solid var(--file-upload-primary, #f57272); color: var(--file-upload-primary, #f57272); display: flex; align-items: center; flex-direction: column; justify-content: center; font-size: 20px; position: relative; padding: 0.8rem 0; } .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:icon .anteikudevs-fileupload\:icon_svg { width: 20px; height: 20px; margin-bottom: 5px; } .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:icon .anteikudevs-fileupload\:icon_svg svg path { fill: var(--file-upload-primary, #f57272); } .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:icon .anteikudevs-fileupload\:highlight { width: 100%; font-size: 10px; display: block; color: var(--file-upload-primary, #f57272); text-align: center; } .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:info { flex: 1; } .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:info .anteikudevs-fileupload\:info_title { margin: 0; font-size: 14px; font-weight: 600; margin-bottom: 5px; } .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:info .anteikudevs-fileupload\:info_span { font-size: 12px; color: #6c757d; display: block; } .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:action { width: 100%; text-align: right; } @media screen and (min-width: 768px) { .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:action { width: 90px; } } .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:action .anteikudevs-fileupload\:action_browse.disabled { pointer-events: none; background-color: #f8f9fa; color: #ced4da; border-color: transparent; } .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:action .anteikudevs-fileupload\:action_browse.disabled svg { fill: #ced4da; } .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:action .anteikudevs-fileupload\:action_browse { transition: all 0.2s linear; display: inline-flex; align-items: center; justify-content: center; background-color: var(--file-upload-background, #fff); border-radius: 10px; border: 1.5px solid var(--file-upload-primary, #f57272); color: var(--file-upload-primary, #f57272); padding: 10px 12px; user-select: none; cursor: pointer; width: 100%; } .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:action .anteikudevs-fileupload\:action_browse svg { width: 20px; margin-right: 0.3rem; fill: var(--file-upload-primary, #f57272); transition: fill 0.3s linear; } .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:action .anteikudevs-fileupload\:action_browse:focus, .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:action .anteikudevs-fileupload\:action_browse:hover, .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:action .anteikudevs-fileupload\:action_browse:active { border-color: transparent; background-color: var(--file-upload-primary, #f57272); color: var(--file-upload-background, #fff); } .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:action .anteikudevs-fileupload\:action_browse:focus svg, .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:action .anteikudevs-fileupload\:action_browse:hover svg, .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:action .anteikudevs-fileupload\:action_browse:active svg { fill: var(--file-upload-background, #fff); } .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:action .anteikudevs-fileupload\:action_browse.disabled:focus, .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:action .anteikudevs-fileupload\:action_browse.disabled:hover, .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:action .anteikudevs-fileupload\:action_browse.disabled:active { background-color: #f8f9fa; color: #ced4da; } .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:action .anteikudevs-fileupload\:action_browse.disabled:focus svg, .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:action .anteikudevs-fileupload\:action_browse.disabled:hover svg, .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:action .anteikudevs-fileupload\:action_browse.disabled:active svg { fill: #ced4da; } .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:loading { width: 100%; height: 100%; position: absolute; top: 0; left: 0; background-color: rgba(255, 255, 255, 0.5); display: flex; align-items: center; justify-content: center; z-index: -1; transition: all 0.2s linear; } .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:loading svg { width: 50px; height: 50px; } .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:loading svg circle { stroke: var(--file-upload-primary, #f57272); } .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:dragged { width: 100%; height: 100%; position: absolute; top: 0; left: 0; background-color: rgb(255, 255, 255); display: flex; align-items: center; justify-content: center; z-index: -1; transition: all 0.2s linear; } .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:dragged svg { width: 50px; height: 50px; } .anteikudevs-fileupload .anteikudevs-fileupload\:content .anteikudevs-fileupload\:dragged svg circle { stroke: var(--file-upload-primary, #f57272); } .anteikudevs-fileupload .anteikudevs-fileupload\:error { position: relative; width: 100%; } .anteikudevs-fileupload .anteikudevs-fileupload\:error .anteikudevs-fileupload\:error_item { font-size: 12px; color: #dc3545; display: block; margin-top: 10px; font-weight: 500; padding: 0.5rem 0.8rem; border: 1px solid var(--file-upload-danger, #dc3545); border-radius: 10px; background: var(--file-upload-sub-danger, #fcf0f1); } .anteikudevs-fileupload .anteikudevs-fileupload\:error .anteikudevs-fileupload\:error_item .anteikudevs-fileupload\:error_filename { max-width: 100px; } .anteikudevs-fileupload .anteikudevs-fileupload\:result { position: relative; width: 100%; } .anteikudevs-fileupload .anteikudevs-fileupload\:result .anteikudevs-fileupload\:result_item { width: 100%; display: flex; flex-direction: row; border-radius: 10px; align-items: center; padding: 15px; gap: 10px; margin-top: 15px; margin-bottom: 8px; box-shadow: 0 0 8px #eaeaea; animation: fadeIn; animation-duration: 0.5s; background-color: var(--file-upload-background, #fff); } .anteikudevs-fileupload .anteikudevs-fileupload\:result .anteikudevs-fileupload\:result_item .anteikudevs-fileupload\:result_image { width: 43px; height: 43px; border-radius: 5px; display: flex; align-items: center; border: 1px solid var(--file-upload-primary, #f57272); overflow: hidden; cursor: pointer; background-color: var(--file-upload-secondary, #fffcec); } .anteikudevs-fileupload .anteikudevs-fileupload\:result .anteikudevs-fileupload\:result_item .anteikudevs-fileupload\:result_image img { transition: all 0.2s linear; } .anteikudevs-fileupload .anteikudevs-fileupload\:result .anteikudevs-fileupload\:result_item .anteikudevs-fileupload\:result_image svg { width: 20px; height: 20px; margin: auto; } .anteikudevs-fileupload .anteikudevs-fileupload\:result .anteikudevs-fileupload\:result_item .anteikudevs-fileupload\:result_image svg path { fill: var(--file-upload-primary, #f57272); } .anteikudevs-fileupload .anteikudevs-fileupload\:result .anteikudevs-fileupload\:result_item .anteikudevs-fileupload\:result_image:hover img { transform: scale(1.5); } .anteikudevs-fileupload .anteikudevs-fileupload\:result .anteikudevs-fileupload\:result_item .anteikudevs-fileupload\:result_info { flex: 1; } .anteikudevs-fileupload .anteikudevs-fileupload\:result .anteikudevs-fileupload\:result_item .anteikudevs-fileupload\:result_info .anteikudevs-fileupload\:result_info_title { font-size: 14px; font-weight: 600; margin: 0; margin-bottom: 5px; display: -webkit-box; -webkit-line-clamp: 1; /* Number of lines to display */ -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; } .anteikudevs-fileupload .anteikudevs-fileupload\:result .anteikudevs-fileupload\:result_item .anteikudevs-fileupload\:result_info .file_upload_result_info_span { font-size: 12px; display: block; color: #adb5bd; } .anteikudevs-fileupload .anteikudevs-fileupload\:result .anteikudevs-fileupload\:result_item .anteikudevs-fileupload\:result_action { width: 20px; } .anteikudevs-fileupload .anteikudevs-fileupload\:result .anteikudevs-fileupload\:result_item .anteikudevs-fileupload\:result_action .anteikudevs-fileupload\:result_action_close { width: 25px; height: 25px; transition: all 0.2s linear; display: inline-flex; align-items: center; justify-content: center; background-color: var(--file-upload-primary, #f57272); border-radius: 50%; color: var(--file-upload-primary, #f57272); user-select: none; border: 0; outline: none; font-size: 12px; cursor: pointer; } .anteikudevs-fileupload .anteikudevs-fileupload\:result .anteikudevs-fileupload\:result_item .anteikudevs-fileupload\:result_action .anteikudevs-fileupload\:result_action_close svg { width: 13px; height: 13px; fill: var(--file-upload-background, #fff); } .anteikudevs-fileupload\:preview { position: fixed; top: 0; left: 0; width: 100%; height: 100%; padding: 0.5rem; display: none; z-index: 1060; max-height: 100vh; overflow: auto; transition: all 0.2s linear; } .anteikudevs-fileupload\:preview img { width: 100%; } .anteikudevs-fileupload\:preview.show { display: flex; } .anteikudevs-fileupload\:preview.show .anteikudevs-fileupload\:preview_dialog { display: block; animation: zoomIn; animation-duration: 0.3s; } .anteikudevs-fileupload\:preview.hiding .anteikudevs-fileupload\:preview_dialog { animation: zoomOut; animation-duration: 0.3s; } .anteikudevs-fileupload\:preview .anteikudevs-fileupload\:preview_dialog { position: relative; border-radius: 10px; background-color: #fff; width: 100%; margin: auto; display: none; box-shadow: 0 0 10px rgba(154, 154, 154, 0.21); } @media screen and (min-width: 768px) { .anteikudevs-fileupload\:preview .anteikudevs-fileupload\:preview_dialog { width: 500px; } } .anteikudevs-fileupload\:preview .anteikudevs-fileupload\:preview_dialog .anteikudevs-fileupload\:preview_content .anteikudevs-fileupload\:preview_header { position: relative; width: 100%; padding: 1rem; display: flex; align-items: center; justify-content: space-between; } .anteikudevs-fileupload\:preview .anteikudevs-fileupload\:preview_dialog .anteikudevs-fileupload\:preview_content .anteikudevs-fileupload\:preview_header .anteikudevs-fileupload\:preview_title { font-size: 1.6rem; margin: 0; color: var(--file-upload-primary, #f57272); } .anteikudevs-fileupload\:preview .anteikudevs-fileupload\:preview_dialog .anteikudevs-fileupload\:preview_content .anteikudevs-fileupload\:preview_header .anteikudevs-fileupload\:preview_btn_close { width: 25px; height: 25px; border-radius: 50%; background-color: var(--file-upload-primary, #f57272); display: flex; align-items: center; justify-content: center; border: 0; outline: none; cursor: pointer; } .anteikudevs-fileupload\:preview .anteikudevs-fileupload\:preview_dialog .anteikudevs-fileupload\:preview_content .anteikudevs-fileupload\:preview_header .anteikudevs-fileupload\:preview_btn_close svg { width: 15px; height: 15px; fill: var(--file-upload-background, #fff); } .anteikudevs-fileupload\:preview .anteikudevs-fileupload\:preview_dialog .anteikudevs-fileupload\:preview_content .anteikudevs-fileupload\:preview_body { width: 100%; position: relative; padding: 0.5rem 1rem; min-height: 100px; } .anteikudevs-fileupload\:preview .anteikudevs-fileupload\:preview_dialog .anteikudevs-fileupload\:preview_content .anteikudevs-fileupload\:preview_footer { width: 100%; padding: 1rem 0.8rem; display: flex; justify-content: space-between; } .anteikudevs-fileupload\:preview .anteikudevs-fileupload\:preview_dialog .anteikudevs-fileupload\:preview_content .anteikudevs-fileupload\:preview_footer .btn { display: inline-block; background-color: var(--file-upload-primary, #f57272); color: var(--file-upload-background, #fff); border: 0; border-radius: 10px; padding: 0.6rem 1rem; margin: 0 auto; cursor: pointer; outline: none; } .anteikudevs-fileupload\:preview_backdrop { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.15); z-index: 1060; display: none; } body.anteikudevs-fileupload\:show .anteikudevs-fileupload\:preview_backdrop { display: block; animation: fadeIn; animation-duration: 0.3s; } @-webkit-keyframes zoomIn { 0% { opacity: 0; -webkit-transform: scale3d(0.3, 0.3, 0.3); transform: scale3d(0.3, 0.3, 0.3); } 50% { opacity: 1; } } @keyframes zoomIn { 0% { opacity: 0; -webkit-transform: scale3d(0.3, 0.3, 0.3); transform: scale3d(0.3, 0.3, 0.3); } 50% { opacity: 1; } } @-webkit-keyframes fadeIn { 0% { opacity: 0; } to { opacity: 1; } } @keyframes fadeIn { 0% { opacity: 0; } to { opacity: 1; } } @-webkit-keyframes zoomOut { 0% { opacity: 1; } 50% { opacity: 0; -webkit-transform: scale3d(0.3, 0.3, 0.3); transform: scale3d(0.3, 0.3, 0.3); } to { opacity: 0; } } @keyframes zoomOut { 0% { opacity: 1; } 50% { opacity: 0; -webkit-transform: scale3d(0.3, 0.3, 0.3); transform: scale3d(0.3, 0.3, 0.3); } to { opacity: 0; } }/*# sourceMappingURL=file-upload.css.map */</style>`)

let file_upload_acceptedFiles = {
    "mp3" 	: {"type": "audio","format": "audio/mpeg"},
    "wav" 	: {"type": "audio","format": "audio/wav"},
    "mp4" 	: {"type": "video","format": "video/mp4"},
    "mkv" 	: {"type": "video","format": "video/mkv"},
    "gif" 	: {"type": "image","format": "image/gif"},
    "jpg" 	: {"type": "image","format": "image/jpeg"},
    "jpeg" 	: {"type": "image","format": "image/jpeg"},
    "png" 	: {"type": "image","format": "image/png"},
    "webp"  : {"type": "image","format": "image/webp"},
    "svg"   : {"type": "image","format": "image/svg+xml"},
    "xlsx" 	: {"type": "file","format": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},
    "xls" 	: {"type": "file","format": "application/vnd.ms-excel"},
    "csv" 	: {"type": "file","format": "text/csv"},
    "pdf" 	: {"type": "file","format": "application/pdf"},
    "docx" 	: {"type": "file","format": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"},
    "doc" 	: {"type": "file","format": "application/msword"},
    "ppt"   : {"type": "file","format": "application/vnd.ms-powerpoint"},
    "pptx"  : {"type": "file","format": "application/vnd.openxmlformats-officedocument.presentationml.presentation"},
};

function file_upload_GenerateRandId(length = 10) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function file_upload_createEvent(selector,event,callback) {
    $(document).on(event,selector,function(e){
        callback(e,this)
    })
}

let modalId = '__'+file_upload_GenerateRandId(17);

$('body').append(`<div class="anteikudevs-fileupload:preview_backdrop"></div>`).append(`<div class="anteikudevs-fileupload:preview" ${modalId}><div class="anteikudevs-fileupload:preview_dialog" ${modalId+'-dialog'}><div class="anteikudevs-fileupload:preview_content" ${modalId+'-content'}><div class="anteikudevs-fileupload:preview_header"><h4 class="anteikudevs-fileupload:preview_title" ${modalId+'-title'}>Preview</h4><button type="button" class="anteikudevs-fileupload:preview_btn_close" data-close="true" ${modalId+'-close'}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></button></div><div class="anteikudevs-fileupload:preview_body" ${modalId+'-body'}></div><div class="anteikudevs-fileupload:preview_footer" ${modalId+'-footer'}><button  type="button" class="btn" data-close="true">Close</button></div></div></div></div>`)

file_upload_createEvent('['+modalId+'] [data-close="true"]','click', function(e){
    $('['+modalId+']').addClass('hiding')
    setTimeout(function(){
        $('body').removeClass('anteikudevs-fileupload:show')
        $('['+modalId+'] ['+modalId+'-body]').html('')
        $('['+modalId+']').removeClass('show').removeClass('hiding')
    },230)
})

file_upload_createEvent('['+modalId+']','click', function(e,_this){
    if (e.target == _this)
    {
        $('['+modalId+']').addClass('hiding')
        setTimeout(function(){
            $('body').removeClass('anteikudevs-fileupload:show')
            $('['+modalId+'] ['+modalId+'-body]').html('')
            $('['+modalId+']').removeClass('show').removeClass('hiding')
        },230)
    }
})

class FileUpload {
    constructor(selector,config = {},log = false)
    {

        this.selector       = selector
        this.config         = config

        // config

        this.accept         = ['*']
        this.acceptInput    = ['*']
        this.title          = null
        this.maxSize        = null
        // this.minFile        = null
        this.maxFile        = null
        this.lang           = 'en'
        this.customs        = null

        // el

        this.selectorId     = ''
        this.inputId        = ''
        this.contentId      = ''
        this.resultId       = ''
        this.browseId       = ''
        this.loadingId      = ''
        this.contentDragId  = ''

        // theme
        this.theme          = 'light'

        // data
        this.data           = []
        this.currentData    = []
        this.deletedIds     = []

        this.defaultStyle = `padding: 2px 5px;
            border-radius: 4px;
            color: white; 
            background-color: #f57272`

        if(log)
        {
            this.log('Enabled')
        }
                    
        this.validateConfig()
    }

    log(...description)
    {
        console.log("%canteikudevs-file-upload",this.defaultStyle,...description)
    }

    validateConfig()
    {
        let config = this.config

        let _this = this

        if(this.selector)
        {

            if($(this.selector).length == 0)
            {
                return false
            }

            let selectorId = '__'+file_upload_GenerateRandId(9)
            const themeData = $(this.selector).attr('data-theme')

            $(this.selector).attr(selectorId,'')
            this.selectorId = '['+selectorId+']'
        }

        if(typeof config.title != 'undefined')
        {
            this.title = config.title
        }

        if(typeof config.accept != 'undefined')
        {
            if(!Array.isArray(config.accept))
            {
                this.log('Config {accept} is not array.');
                return false
            }
            

            let acceptConfig = Array.isArray(config.accept)? config.accept : ['*'];

            let acceptFiles = []

            acceptConfig.forEach((key) => {
                if(key != '*')
                {
                    let accFile = null
                    if(file_upload_acceptedFiles[key])
                    {
                        accFile = file_upload_acceptedFiles[key].format
                        acceptFiles.push(accFile)
                        // acceptFiles.push('.'+key)
                    }else{
                        this.log('Accept (.'+key+') format was not found.');
                        return false
                    }
                }
            })
            if(acceptFiles.length)
            {
                // this.acceptInput = acceptFiles.join(',')
                this.acceptInput = acceptFiles
            }
            this.accept = acceptConfig
        }

        if(typeof config.maxSize != 'undefined')
        {
            if(isNaN(config.maxSize))
            {
                this.log('Config {maxSize} is not a number.');
                return false
            }
            this.maxSize = parseInt(config.maxSize)
        }
        
        if(typeof config.maxFile != 'undefined')
        {
            if(isNaN(config.maxFile))
            {
                this.log('Config {maxFile} is not a number.');
                return false
            }
            this.maxFile = parseInt(config.maxFile)
        }
        
        if(typeof config.customs != 'undefined')
        {

            $.each(config.customs, function(i,key){
                $(_this.selectorId).get(0).style.setProperty('--file-upload-'+i,key)
                $('['+modalId+']').get(0).style.setProperty('--file-upload-'+i,key)
            })
            
        }

        // if(typeof config.minFile != 'undefined')
        // {
        //     if(isNaN(config.minFile))
        //     {
        //         this.log('Config {minFile} is not a number.');
        //         return false
        //     }
        //     this.minFile = parseInt(config.minFile)
        // }
        
        if(typeof config.lang != 'undefined')
        {
            if(!['id','en'].includes(config.lang))
            {
                this.log('Config {lang} only id and en');
                return false
            }
            this.lang = config.lang
        }

        this.draw()
    }

    // lang_id()
    // {

    // }
    
    // lang_en()
    // {

    // }

    draw()
    {
        let content = this.drawContent();

        $(this.selectorId).addClass('anteikudevs-fileupload')
        $(this.selectorId).html(content)
    }

    drawContent_info_format()
    {

        // accept File 

        let acceptConfig = Array.isArray(this.accept)? this.accept : ['*'];
        let acceptMsgArr = []
        
        acceptConfig.forEach((key) => {
            if(file_upload_acceptedFiles[key] != undefined)
            {
                acceptMsgArr.push('.'+key)
            }
        })

        let acceptMsg = acceptMsgArr.join(', ')

        let formatContent = 'All file formats';
        if(this.lang == 'id')
        {
            formatContent = 'Semua format file'
        }

        if(acceptMsg)
        {
            formatContent = 'Format : <strong>'+acceptMsg+'</strong>';
    
            if(this.lang == 'id')
            {
                formatContent = 'Format : <strong>'+acceptMsg+'</strong>'
            }
        }


        // max file size

        let maxFileSizeConfig = this.maxSize? parseInt(this.maxSize) : null;

        let maxSizeContent = ''

        if(maxFileSizeConfig != null)
        {
            maxSizeContent = `Max : <strong>${maxFileSizeConfig}MB</strong>`

            if(this.lang == 'id')
            {
                maxSizeContent = `Maksimal : <strong>${maxFileSizeConfig}MB</strong>`
            }
        }

        let content = [formatContent,maxSizeContent]

        let htmlContent = ''

        $.each(content, function(i,key){
            htmlContent += `<span class="anteikudevs-fileupload:info_span">${key}</span>`
        })

        return htmlContent
    }

    drawContent_info()
    {
        let config = this.config;

        let title = config.title ? config.title : null;

        let titleContent = ''

        if(title){
            titleContent = `<h4 class="anteikudevs-fileupload:info_title">${title}</h4>`
        }

        let content = `<div class="anteikudevs-fileupload:info">${titleContent}${this.drawContent_info_format()}</div>`

        return content
    }

    drawContent_action()
    {
        let _this = this
        let contentInputRender = '__'+file_upload_GenerateRandId(7)

        this.inputId = '['+contentInputRender+']'

        let btnInputRender = '__'+file_upload_GenerateRandId(8) 


        this.browseId = '['+btnInputRender+']'

        let inputContent = $(document.createElement('div')).append($(document.createElement('input')).attr({
            type: "file",
            accept: this.acceptInput,
            hidden: true,
            multiple: true,
            [contentInputRender]: ''
        }))

        let browseText = 'Browse'

        if(this.lang == 'id')
        {
            browseText = 'Jelajahi'
        }

        $('body').append(inputContent)

        let content = `<div class="anteikudevs-fileupload:action"><button type="button" class="anteikudevs-fileupload:action_browse" ${btnInputRender}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"/></svg> ${browseText}</button></div>`

        file_upload_createEvent('['+btnInputRender+']','click',function(e){
            $('['+contentInputRender+']').trigger('click')
        })

        file_upload_createEvent('['+contentInputRender+']','change',function(e){
            if(e.target.files.length)
            {
                _this.renderUpload(e.target.files)
            }
        })

        return content

    }

    drawContent_loading()
    {
        let contentLoading = '__'+file_upload_GenerateRandId(7)

        this.loadingId = '['+contentLoading+']'

        let content = `<div class="anteikudevs-fileupload:loading" ${contentLoading}></div>`

        return content

    }

    drawContent_dragEvent()
    {
        let contentDragId = '__'+file_upload_GenerateRandId(7)

        this.contentDragId = '['+contentDragId+']'

        let content = `<div class="anteikudevs-fileupload:dragged" ${contentDragId}></div>`

        return content
    }

    loading(action = 'show')
    {
        let content = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="32" stroke-width="8" stroke="#2b3252" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform></circle></svg>`

        if(action == 'show')
        { 
            $(this.loadingId).css('zIndex',1)
            $(this.loadingId).html(content)
        }else{
            $(this.loadingId).css('zIndex','-1')
            $(this.loadingId).html('')
        }
    }

    drawContent()
    {

        let highlightMsg = ``

        if(this.maxFile != null)
        {
            highlightMsg = `<span class="anteikudevs-fileupload:highlight">Max: ${this.maxFile} file</span>`
        }

        let contentIcon = `<div class="anteikudevs-fileupload:icon"><div class="anteikudevs-fileupload:icon_svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z"/></svg></div>${highlightMsg}</div>`
        let _contentId = '__'+file_upload_GenerateRandId(4)+'__'
        this.contentId = '['+_contentId+']'
        let content = `<div class="anteikudevs-fileupload:content" ${_contentId}>${contentIcon}${this.drawContent_info()}${this.drawContent_action()}${this.drawContent_loading()}${this.drawContent_dragEvent()}</div>${this.drawError()}${this.drawResult()}`

        if(this.flexContent == true)
        {
            content
        }

        this.renderEventDragAndDrop()

        return content
    }

    drawError()
    {
        let errorIds = '__'+file_upload_GenerateRandId(11)

        this.errorId = '['+errorIds+']'

        let content = `<div class="anteikudevs-fileupload:error" ${errorIds}></div>`

        return content
    }

    drawResult()
    {
        let resultIds = '__'+file_upload_GenerateRandId(11)

        this.resultId = '['+resultIds+']'

        let content = `<div class="anteikudevs-fileupload:result" ${resultIds}></div>`

        return content
        
    }

    renderEventDragAndDrop()
    {

        let _this = this

        file_upload_createEvent(this.contentId,'dragover', function(e,_elThis){
            e.preventDefault();

            $(_elThis).addClass('drag')
            $(_this.browseId).addClass('disabled')
        })
        file_upload_createEvent(this.contentId,'dragleave', function(e,_elThis){
            e.preventDefault();
            
            $(_elThis).removeClass('drag')
            $(_this.browseId).removeClass('disabled')
        })
        file_upload_createEvent(this.contentId,'drop', function(e,_elThis){
            e.preventDefault();
            
            var files = e.originalEvent.dataTransfer.files;
            
            $(_elThis).addClass('drop')
            _this.renderUpload(files)
            $(_this.browseId).removeClass('disabled')
        })

    }

    renderUpload(files)
    {

        let _this = this 

        let lang = _this.lang

        let errorMessages = []

        let itemRenderedCount = this.data.length

        if(this.maxFile != null)
        {
            if((itemRenderedCount + files.length + (this.currentData.length - this.deletedIds.length)) > this.maxFile)
            {
                if(lang == 'id')
                {
                    errorMessages.push(`File yang diunggah melebihi ${this.maxFile}`)
                }else{
                    errorMessages.push(`Uploaded files exceed ${this.maxFile}`)
                }
                
            }
            
        }

        this.loading('show')

        $.each(files, function(i,file){

            let fileType = file.type
            let fileSize = file.size
            let fileName = file.name

            let fileNameHighlight = fileName

            if (fileNameHighlight.length > 25) {
                fileNameHighlight = fileNameHighlight.substr(0, 10) + '....' + fileNameHighlight.substr(fileNameHighlight.length-10, fileNameHighlight.length);
            }
            
            if(_this.accept[0] != '*')
            {
                if(!_this.acceptInput.includes(fileType))
                {
                    if(lang == 'id')
                    {
                        errorMessages.push(`<strong class="anteikudevs-fileupload:error_filename">"${fileNameHighlight}"</strong> format tidak sesuai`)
                    }else{
                        errorMessages.push(`The uploaded <strong class="anteikudevs-fileupload:error_filename">"${fileNameHighlight}"</strong> file format does not match`)
                    }
                }
            }
            if(_this.maxSize != null)
            {
                if(fileSize > (_this.maxSize * 1000000))
                {
                    if(lang == 'id')
                    {
                        errorMessages.push(`Ukuran maksimal file <strong class="anteikudevs-fileupload:error_filename">"${fileNameHighlight}"</strong> harus ${_this.maxSize}MB`)
                    }else{
                        errorMessages.push(`The maximum size of the <strong class="anteikudevs-fileupload:error_filename">"${fileNameHighlight}"</strong> file must be ${_this.maxSize}MB`)
                    }
                }
            }

            if(errorMessages.length == 0)
            {
                var reader = new FileReader();
    
                reader.addEventListener("load", function(e) {
    
                    let resultData = e.target.result
    
                    let resultItemId = '__'+file_upload_GenerateRandId(13)
    
                    let fileDataUpload = {
                        id: resultItemId.toString(),
                        name: fileName,
                        size: (fileSize / 1000),
                        type: fileType,
                        fileType: _this.getAcceptFileType(fileType),
                        data: resultData
                    }
    
                    if(errorMessages.length == 0)
                    {
                        _this.drawUploadFile(fileDataUpload)
                    }
    
    
                });
                
                reader.readAsDataURL(file);
            }


            if(files.length == (i+1))
            {
                $(_this.inputId).val('')
                setTimeout(() => {
                    _this.loading('hide')
                },300)
            }
            
        })

        $(this.errorId).html('')

        if(errorMessages.length)
        {
            let errorMsgItem = ''
            $.each(errorMessages, function(i,msg){
                let errorItemIds = '--'+file_upload_GenerateRandId(9)
                errorMsgItem += `<span class="anteikudevs-fileupload:error_item" ${errorItemIds}>${msg}</span>`

                file_upload_createEvent('['+errorItemIds+']','click', function(e){
                    e.preventDefault()
                    $(e.target).remove()
                })

            })
            $(this.errorId).html(errorMsgItem)
        }

        setTimeout(function(){
            $(_this.contentId).removeClass('drop drag')
        },300)

    }

    getAcceptFileType(format)
    {
        let type = ''
        $.each(file_upload_acceptedFiles, function(i,key){
            if(key.format == format)
            {
                type = key.type
            }
        })
        return type
    }

    drawUploadFile(data)
    {
        let _this = this
        let resultImg = ''

        let previewIds = '__'+file_upload_GenerateRandId(16)

        if(this.getAcceptFileType(data.type) == 'image')
        {
            resultImg = `<div class="anteikudevs-fileupload:result_image" ${previewIds}><img src="${data.data}" alt="${data.name}"></div>`
            file_upload_createEvent('['+previewIds+']','click',function(e){
                _this.previewFile(data)
            })
        }
        if(this.getAcceptFileType(data.type) == 'video' || this.getAcceptFileType(data.type) == 'audio')
        {
            resultImg = `<div class="anteikudevs-fileupload:result_image" ${previewIds}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg></div>`
            file_upload_createEvent('['+previewIds+']','click',function(e){
                _this.previewFile(data)
            })
        }

        let closeIds = '__'+file_upload_GenerateRandId(10),
            resultItemId = '__'+file_upload_GenerateRandId(12);

        let fileNameHighlight = data.name

        if (fileNameHighlight.length > 25) {
            fileNameHighlight = fileNameHighlight.substr(0, 10) + '....' + fileNameHighlight.substr(fileNameHighlight.length-10, fileNameHighlight.length);
        }

        let content = `<div class="anteikudevs-fileupload:result_item" ${data.id}>${resultImg}<div class="anteikudevs-fileupload:result_info"><h4 class="anteikudevs-fileupload:result_info_title">${fileNameHighlight}</h4><span class="file_upload_result_info_span">${data.size} KB</span></div><div class="anteikudevs-fileupload:result_action"><button type="button" class="anteikudevs-fileupload:result_action_close" ${closeIds}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></button></div></div>`

        file_upload_createEvent('['+closeIds+']','click',function(e){
            _this.removeUploadedFile(data.id)
        })
        
        this.data.push(data)

        if(this.maxFile != null)
        {
            if((this.data.length + (this.currentData.length - this.deletedIds.length)) == this.maxFile)
            {
                $(this.browseId).addClass('disabled')
                
            }
            
        }
        $(this.resultId).append(content)
        $(this.selector).trigger('upload')

    }

    removeUploadedFile(selector)
    {
        // let dataUpdate = []
        // $.each(this.data, function(i,key){
        //     if(key.id != selector.toString())
        //     {
        //         dataUpdate.push({
        //             id: key.id,
        //             name: key.name,
        //             size: key.size,
        //             type: key.type,
        //             data: key.data
        //         })
        //     }
        // })
        // this.data = dataUpdate
        let data = this.data
        const index = data.findIndex((obj) => obj.id == selector.toString());
        if (index > -1) {
            data.splice(index, 1);
        }
        this.data = data

        $('['+selector+']').fadeOut(200)
        setTimeout(() => {
            $('['+selector+']').remove()
        },200)
        $(this.browseId).removeClass('disabled')
    }

    previewFile(data)
    {
        let previewContent = `<img src="${data.data}" alt="${data.name}">`

        if(data.fileType == 'video')
        {
            previewContent = `<video autoplay controls style="width: 100%"><source type="${data.type}" src="${data.data}"></source></video>`
        }
        if(data.fileType == 'audio')
        {
            previewContent = `<audio autoplay controls style="width: 100%"><source type="${data.type}" src="${data.data}"></source></audio>`
        }

        let modalTitle = 'Previews',
            modalCloseText = 'Close';

        if(this.lang == 'id')
        {
            modalTitle = 'Pratinjau'
            modalCloseText = 'Tutup'
        }

        $('['+modalId+'] ['+modalId+"-title]").html(modalTitle)
        $('['+modalId+'] ['+modalId+"-body]").html(previewContent)
        $('['+modalId+'] ['+modalId+"-footer] .btn").text(modalCloseText)
        $('['+modalId+']').addClass('show')
        $('body').addClass('anteikudevs-fileupload:show')

    }

    getValue(base64Only = false){
        let result = []
        $.each(this.data, function(i,key){
            if(base64Only){

                result.push(key.data)
            }else{                
                result.push(key)
            }
        })
        
        if(this.maxFile == 1){
            return result[0]?? null;
        }

        return result;

    }

    _refresh()
    {
        if(this.maxFile != null)
        {
            if((this.data.length + (this.currentData.length - this.deletedIds.length)) == this.maxFile)
            {
                $(this.browseId).addClass('disabled')
                
            }else{
                
                $(this.browseId).removeClass('disabled')
            }
        }
    }

    clear()
    {
        this.data = []
        $(this.resultId).html('')
        this._refresh();
    }

    // setCurrentData

    _refreshValue()
    {
        if(this.maxFile != null)
        {
            if((this.currentData.length - this.deletedIds.length) == this.maxFile)
            {
                $(this.browseId).addClass('disabled')
                
            }else{
                
                $(this.browseId).removeClass('disabled')
            }
        }
    }

    drawSetValue(data){

        let _this = this
        let resultImg = ''

        let previewIds = '__'+file_upload_GenerateRandId(16)

        if(this.getAcceptFileType(data.type) == 'image')
        {
            resultImg = `<div class="anteikudevs-fileupload:result_image" ${previewIds}><img src="${data.data}" alt="${data.name}"></div>`
            file_upload_createEvent('['+previewIds+']','click',function(e){
                _this.previewFile(data)
            })
        }
        if(this.getAcceptFileType(data.type) == 'video')
        {
            resultImg = `<div class="anteikudevs-fileupload:result_image" ${previewIds}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg></div>`
            file_upload_createEvent('['+previewIds+']','click',function(e){
                _this.previewFile(data)
            })
        }

        let closeIds = '__'+file_upload_GenerateRandId(10),
            resultItemId = '__'+file_upload_GenerateRandId(12),
            itemIds ='__'+file_upload_GenerateRandId(13) ;

        let content = `<div class="anteikudevs-fileupload:result_item" ${itemIds}>${resultImg}<div class="anteikudevs-fileupload:result_info"><h4 class="anteikudevs-fileupload:result_info_title">${data.name}</h4></div><div class="anteikudevs-fileupload:result_action"><button type="button" class="anteikudevs-fileupload:result_action_close" ${closeIds}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></button></div></div>`

        file_upload_createEvent('['+closeIds+']','click',function(e){
            _this.removeSetValue(itemIds,data.id)
        })
        
        if(this.maxFile != null)
        {
            if(this.data.length == this.maxFile)
            {
                $(this.browseId).addClass('disabled')
                
            }
            
        }

        $(this.resultId).append(content)

    }

    removeSetValue(selector,id){

        this.deletedIds.push(id)
        $('['+selector+']').fadeOut(200)
        setTimeout(() => {
            $('['+selector+']').remove()
        },200)
        $(this.browseId).removeClass('disabled')

    }

    setValue(data){

        let _this = this

        if(!Array.isArray(data)){
            alert('setData not in array!')
            return false;
        }
        let currentData = []
        $.each(data, function(i,key){
            
            if(key.data)
            {   
                let extension = key.data.split('.').pop()
                
                let name = key.name? key.name : key.data.split('/').pop()

                let objData = {
                    id: key.id,
                    name: name,
                    type: file_upload_acceptedFiles[extension].format,
                    data: key.data
                }

                _this.drawSetValue(objData)
                currentData.push(objData)
            }

        })

        this.currentData = currentData
        this._refreshValue()

    }

    clearValue(){
        if(this.currentData.length)
        {
            let deleteIds = [] 
            $.each(this.currentData, function(i,key){
                deleteIds.push(key.id)
            })
            this.deletedIds = deleteIds
        }

        this.data = []
        this.currentData = []
        $(this.contentId).html('')
        
    }

}