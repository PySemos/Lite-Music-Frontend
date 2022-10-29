function createSVGdelete(){
    const SVG = document.createElement("img")
    SVG.height = "48"
    SVG.width = "48"
    const path = document.createElement("path")
    path.d = "M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z"
    SVG.appendChild(path)
    return SVG
}

function createFileDiv(filename){
    const div = document.createElement("div")
    const checkbox = document.createElement("input")
    checkbox.type='checkbox'
    checkbox.filename = filename
    checkbox.id = filename
    checkbox.div = div
    checkbox.addEventListener("click",function(){
        if(this.checked){
            this.div.del = document.createElement("button")
            this.div.del.classList.add("button")
            this.div.del.innerHTML = '<?xml version="1.0" ?><svg height="24" viewBox="0 0 48 48" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4v-24h-24v24zm26-30h-7l-2-2h-10l-2 2h-7v4h28v-4z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>'
            this.div.rename = document.createElement("button")
            this.div.rename.innerHTML = '<?xml version="1.0" ?><svg height="24" id="svg8" version="1.1" viewBox="0 0 6.3499998 6.3499998" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs2"/><path d="M 4.5135398,1.4550781 2.9354148,3.0351563 A 0.26460978,0.26460978 0 0 0 2.8592429,3.1972657 L 2.7791649,4.0664063 A 0.26460978,0.26460978 0 0 0 3.0662742,4.3535157 L 3.9354149,4.2753906 A 0.26460978,0.26460978 0 0 0 4.0994775,4.1992187 L 5.6776024,2.6191405 c 0.1878881,-0.1878871 0.1878873,-0.5015659 0,-0.6894532 L 5.2029929,1.4550781 c -0.187887,-0.1878881 -0.5015659,-0.1878873 -0.6894531,0 z M 4.8592428,1.859375 5.2733054,2.2753906 3.7928368,3.7558595 3.3358053,3.7968751 3.376821,3.3398439 Z" id="rect2398" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#ff2876;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.52916664;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers fill stroke;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/><path d="m 0.76744594,4.498047 a 0.26495279,0.26495279 0 0 0 0.0253906,0.5292968 H 3.4393209 a 0.26464844,0.26464844 0 1 0 0,-0.5292968 H 0.79283657 a 0.26460978,0.26460978 0 0 0 -0.0253906,0 z" id="path2401" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#00001d;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.52916664;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers fill stroke;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/></svg>'
            this.div.rename.classList.add("button")
            this.div.appendChild(
                this.div.del
            )
            this.div.appendChild(
                this.div.rename
            )
        }
        else{
            this.div.del.remove()
            this.div.rename.remove()
        }
    })
    div.appendChild(checkbox)
    const file = document.createElement("a")
    file.href = `/editor/open?file=${filename}`
    file.innerHTML = filename
    div.appendChild(file)
    return div
}

window.onload = async ()=>{
    //const files = await (await fetch("api/files")).json()
    const files = {
    	"success":true,
    	"files":[
    	"text.text",
    	"hola_mundo.py",
    	"Mi-info.doc"
    	]
    }
    const contenedor = document.querySelector(".contenedor-archivos")
    if (files.success==true){
        for(let i = 0;i<files.files.length;i++){
            contenedor.appendChild(
                createFileDiv(files.files[i])
            )
        }
    }
}