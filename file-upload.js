if(typeof $ == 'undefined'){
    alert('File Upload : Jquery is required!');
}


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

$('body').append(`<div class="file__upload_preview_backdrop"></div>`).append(`<div class="file__upload_preview" ${modalId}><div class="file__upload_preview_dialog"><div class="file__upload_preview_content"><div class="file__upload_preview_header"><h4 class="file__upload_preview_title">Preview</h4><button class="file__upload_preview_btn_close" data-close="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></button></div><div class="file__upload_preview_body"></div><div class="file__upload_preview_footer"><button class="btn" data-close="true">Close</button></div></div></div></div>`)

file_upload_createEvent('['+modalId+'] [data-close="true"]','click', function(e){
    $('['+modalId+']').addClass('hiding')
    setTimeout(function(){
        $('body').removeClass('file__upload_show')
        $('['+modalId+'] .file__upload_preview_body').html('')
        $('['+modalId+']').removeClass('show').removeClass('hiding')
    },230)
})

file_upload_createEvent('['+modalId+']','click', function(e,_this){
    if (e.target == _this)
    {
        $('['+modalId+']').addClass('hiding')
        setTimeout(function(){
            $('body').removeClass('file__upload_show')
            $('['+modalId+'] .file__upload_preview_body').html('')
            $('['+modalId+']').removeClass('show').removeClass('hiding')
        },230)
    }
})

class FileUpload {
    constructor(selector,config = {})
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

        // data
        this.data           = []
        this.deletedIds     = []
        
        this.validateConfig()
    }

    validateConfig()
    {
        let config = this.config

        let _this = this

        if(this.selector)
        {
            let selectorId = '__'+file_upload_GenerateRandId(9)
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
                console.log('Config {accept} is not array.');
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
                        console.log('Accept (.'+key+') format was not found.');
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
                console.log('Config {maxSize} is not a number.');
                return false
            }
            this.maxSize = parseInt(config.maxSize)
        }
        
        if(typeof config.maxFile != 'undefined')
        {
            if(isNaN(config.maxFile))
            {
                console.log('Config {maxFile} is not a number.');
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
        //         console.log('Config {minFile} is not a number.');
        //         return false
        //     }
        //     this.minFile = parseInt(config.minFile)
        // }
        
        if(typeof config.lang != 'undefined')
        {
            if(!['id','en'].includes(config.lang))
            {
                console.log('Config {lang} only id and en');
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

        $(this.selectorId).addClass('file__upload')
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
            htmlContent += `<span class="file__upload_info_span">${key}</span>`
        })

        return htmlContent
    }

    drawContent_info()
    {
        let config = this.config;

        let title = config.title ? config.title : null;

        let titleContent = ''

        if(title){
            titleContent = `<h4 class="file__upload_info_title">${title}</h4>`
        }

        let content = `<div class="file__upload_info">${titleContent}${this.drawContent_info_format()}</div>`

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

        let content = `<div class="file__upload_action"><button class="file__upload_action_browse" ${btnInputRender}>${browseText}</button></div>`

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

        let content = `<div class="file__upload_loading" ${contentLoading}></div>`

        return content

    }

    drawContent_dragEvent()
    {
        let contentDragId = '__'+file_upload_GenerateRandId(7)

        this.contentDragId = '['+contentDragId+']'

        let content = `<div class="file__upload_dragged" ${contentDragId}></div>`

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

    dragged(action = 'show')
    {
        let content = `<svg xml:space="preserve" viewBox="0 0 100 100" y="0px" x="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="圖層_1" version="1.1" width="200px" height="200px"
        style="background-size:initial;background-repeat-y:initial;background-repeat-x:initial; -position-y:initial;background-position-x:initial;background-origin:initial;background-color:initial;background-clip:initial; -attachment:initial;animation-play-state:paused"><g class="ldl-scale" style="transform-origin:50% 50%;transform:rotate(0deg) scale(1, 1);animation-play-state:paused"><g style="animation-play-state:paused"><path d="M83,25H50v-3c0-3.866028-3.134033-7-7-7H17c-3.865967,0-7,3.133972-7,7v3v53c0,3.865967,3.134033,7,7,7h66 c3.865967,0,7-3.134033,7-7V32C90,28.133972,86.865967,25,83,25z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="3.5" stroke="#333435" fill="#F5E169" style="stroke:rgb(253, 253, 253);fill:rgb(187, 206, 221);animation-play-state:paused"></path> <path d="M83,85H17c-3.865993,0-7-3.13401-7-7V42c0-3.865993,3.134007-7,7-7h66c3.86599,0,7,3.134007,7,7v36C90,81.86599,86.86599,85,83,85z" stroke-miterlimit="10" stroke-linejoin="round" -linecap="round" stroke-width="3.5" stroke="#333435" fill="#F7B26A" style="stroke:rgb(253, 253, 253);fill:rgb(133, 162, 182); -play-state:paused"></path></g> <path d="M64.475098,62.475098 c-1.367188,1.366211-3.583008,1.366211-4.950195,0L53.5,56.450195V73c0,1.933105-1.566895,3.5-3.5,3.5s-3.5-1.566895-3.5-3.5 V56.450195l-6.024902,6.024902c-1.367188,1.366211-3.583008,1.366211-4.950195,0c-1.366699-1.367188-1.366699-3.583008,0-4.950195 l12-12c0.011902-0.011902,0.026245-0.019531,0.038269-0.03125c0.152893-0.148682,0.317322-0.285278,0.495239-0.404236 c0.086853-0.058044,0.18103-0.097961,0.271667-0.147461c0.109619-0.060059,0.215027-0.126099,0.33136-0.174316 c0.114624-0.047424,0.234314-0.074707,0.352417-0.109375c0.100525-0.029724,0.196838-0.068481,0.300903-0.089172 C49.540894,44.524109,49.770325,44.5,50,44.5s0.459106,0.024109,0.685242,0.069092 c0.104065,0.020691,0.200378,0.059448,0.300903,0.089172c0.118103,0.034668,0.237793,0.061951,0.352417,0.109375 c0.116333,0.048218,0.221741,0.114258,0.33136,0.174316c0.090637,0.0495,0.184814,0.089417,0.271667,0.147461 c0.177917,0.118958,0.342346,0.255554,0.495239,0.404236c0.012024,0.011719,0.026367,0.019348,0.038269,0.03125l12,12 C65.841797,58.89209,65.841797,61.10791,64.475098,62.475098z" stroke-miterlimit="10" stroke-linecap="round" stroke-width="3.5" stroke="#333435" fill="#ACBD81" style="stroke:rgb(253, 253, 253);fill:rgb(220, 228, 235);animation-play-state:paused"></path></g></svg>`

        if(action == 'show')
        { 
            $(this.contentDragId).css('zIndex',1)
            $(this.contentDragId).html(content)
        }else{
            $(this.contentDragId).css('zIndex','-1')
            $(this.contentDragId).html('')
        }
    }

    drawContent()
    {

        let highlightMsg = ``

        if(this.maxFile != null)
        {
            highlightMsg = `<span class="file__upload_highlight">Max: ${this.maxFile} file</span>`
        }

        let contentIcon = `<div class="file__upload_icon"><div class="file__upload_icon_svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z"/></svg></div>${highlightMsg}</div>`
        let _contentId = '__'+file_upload_GenerateRandId(4)+'__'
        this.contentId = '['+_contentId+']'
        let content = `<div class="file__upload_content" ${_contentId}>${contentIcon}${this.drawContent_info()}${this.drawContent_action()}${this.drawContent_loading()}${this.drawContent_dragEvent()}</div>
        ${this.drawError()}
        ${this.drawResult()}
        `

        this.renderEventDragAndDrop()

        return content
    }

    drawError()
    {
        let errorIds = '__'+file_upload_GenerateRandId(11)

        this.errorId = '['+errorIds+']'

        let content = `<div class="file__upload_error" ${errorIds}></div>`

        return content
    }

    drawResult()
    {
        let resultIds = '__'+file_upload_GenerateRandId(11)

        this.resultId = '['+resultIds+']'

        let content = `<div class="file__upload_result" ${resultIds}></div>`

        return content
        
    }

    renderEventDragAndDrop()
    {

        let _this = this

        file_upload_createEvent(this.contentId,'dragover', function(e,_elThis){
            e.preventDefault();
            _this.dragged('show')
            $(_elThis).addClass('drag')
            $(_this.browseId).addClass('disabled')
        })
        file_upload_createEvent(this.contentId,'dragleave', function(e,_elThis){
            e.preventDefault();
            
            $(_elThis).removeClass('drag')
            _this.dragged('hide')
            $(_this.browseId).removeClass('disabled')
        })
        file_upload_createEvent(this.contentId,'drop', function(e,_elThis){
            e.preventDefault();
            
            var files = e.originalEvent.dataTransfer.files;
            
            $(_elThis).addClass('drop')
            _this.renderUpload(files)
            $(_this.browseId).removeClass('disabled')
            _this.dragged('hide')
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
            if((itemRenderedCount + files.length) > this.maxFile)
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
                        errorMessages.push(`<strong class="file__upload_error_filename">"${fileNameHighlight}"</strong> format tidak sesuai`)
                    }else{
                        errorMessages.push(`The uploaded <strong class="file__upload_error_filename">"${fileNameHighlight}"</strong> file format does not match`)
                    }
                }
            }
            if(_this.maxSize != null)
            {
                if(fileSize > (_this.maxSize * 1000000))
                {
                    if(lang == 'id')
                    {
                        errorMessages.push(`Ukuran maksimal file <strong class="file__upload_error_filename">"${fileNameHighlight}"</strong> harus ${_this.maxSize}MB`)
                    }else{
                        errorMessages.push(`The maximum size of the <strong class="file__upload_error_filename">"${fileNameHighlight}"</strong> file must be ${_this.maxSize}MB`)
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
                errorMsgItem += `<span class="file__upload_error_item" ${errorItemIds}>${msg}</span>`

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
            resultImg = `<div class="file__upload_result_image" ${previewIds}><img src="${data.data}" alt="${data.name}"></div>`
            file_upload_createEvent('['+previewIds+']','click',function(e){
                _this.previewFile(data)
            })
        }
        if(this.getAcceptFileType(data.type) == 'video' || this.getAcceptFileType(data.type) == 'audio')
        {
            resultImg = `<div class="file__upload_result_image" ${previewIds}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg></div>`
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

        let content = `<div class="file__upload_result_item" ${data.id}>${resultImg}<div class="file__upload_result_info"><h4 class="file__upload_result_info_title">${fileNameHighlight}</h4><span class="file_upload_result_info_span">${data.size} KB</span></div><div class="file__upload_result_action"><button class="file__upload_result_action_close" ${closeIds}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></button></div></div>`

        file_upload_createEvent('['+closeIds+']','click',function(e){
            _this.removeUploadedFile(data.id)
        })
        
        this.data.push(data)

        if(this.maxFile != null)
        {
            if(this.data.length == this.maxFile)
            {
                $(this.browseId).addClass('disabled')
                
            }
            
        }
        $(this.resultId).append(content)

    }

    removeUploadedFile(selector)
    {
        let dataUpdate = []
        $.each(this.data, function(i,key){
            if(key.id != selector.toString())
            {
                dataUpdate.push({
                    id: key.id,
                    name: key.name,
                    size: key.size,
                    type: key.type,
                    data: key.data
                })
            }
        })

        this.data = dataUpdate
        $('['+selector+']').fadeOut(200)
        setTimeout(() => {
            $('['+selector+']').remove()
        },200)
        $(this.browseId).removeClass('disabled')
    }

    previewFile(data)
    {
        let previewContent = `
            <img src="${data.data}" alt="${data.anme}">
        `

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

        $('['+modalId+']').find('.file__upload_preview_title').html(modalTitle)
        $('['+modalId+']').find('.file__upload_preview_body').html(previewContent)
        $('['+modalId+']').find('.file__upload_preview_footer .btn').text(modalCloseText)
        $('['+modalId+']').addClass('show')
        $('body').addClass('file__upload_show')

    }

    getValue(base64Only = false){
        if(base64Only == false)
        {
            return this.data
        }

        let result = []
        
        $.each(this.data, function(i,key){
            result.push(key.data)
        })

        return result;

    }

    // setCurrentData

    drawSetValue(data){

        let _this = this
        let resultImg = ''

        let previewIds = '__'+file_upload_GenerateRandId(16)

        if(this.getAcceptFileType(data.type) == 'image')
        {
            resultImg = `<div class="file__upload_result_image" ${previewIds}><img src="${data.data}" alt="${data.name}"></div>`
            file_upload_createEvent('['+previewIds+']','click',function(e){
                _this.previewFile(data)
            })
        }
        if(this.getAcceptFileType(data.type) == 'video')
        {
            resultImg = `<div class="file__upload_result_image" ${previewIds}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg></div>`
            file_upload_createEvent('['+previewIds+']','click',function(e){
                _this.previewFile(data)
            })
        }

        let closeIds = '__'+file_upload_GenerateRandId(10),
            resultItemId = '__'+file_upload_GenerateRandId(12),
            itemIds ='__'+file_upload_GenerateRandId(13) ;

        let content = `<div class="file__upload_result_item" ${itemIds}>${resultImg}<div class="file__upload_result_info"><h4 class="file__upload_result_info_title">${data.name}</h4></div><div class="file__upload_result_action"><button class="file__upload_result_action_close" ${closeIds}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></button></div></div>`

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
        $(this.contentId).html('')
        
    }

}