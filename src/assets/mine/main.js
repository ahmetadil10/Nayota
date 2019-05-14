$(document).ready(function(){


  // for colors picker
  $(".basic").spectrum({
    showInput: true,
    className: "full-spectrum",
    showInitial: true,
    showPalette: true,
    showSelectionPalette: true,
    maxSelectionSize: 10,
    preferredFormat: "hex",
    localStorageKey: "spectrum.demo",

    palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ]
});

// for colors picker

var spectrumColor_A = $('#fontColor','fontBg','#strokeColor','canvasbg').spectrum({
color: "#FECF06",
showInput: true,
flat: true,
showAlpha: true,
allowAlpha: true,
showInitial: true,
showPalette: true,
showSelectionPalette: true,
maxSelectionSize: 10,
preferredFormat: "hex",
localStorageKey: "spectrum.demo",
clickoutFiresChange: true,

});

/* start canvas managment */

var canvas = new fabric.Canvas('c');

canvas.setHeight(360);
canvas.setWidth(495);

//----------------------------------------------------------------------------------------------------------

// Download invitation NEED SOME BACKEND
document.getElementById('download').addEventListener('click', function(e) {
  e.preventDefault();
  downloadCanvas(event.target, 'cImage.png');
}, false);


downloadCanvas = function(link, filename) {
var dURL = canvas.toDataURL({
format: 'png',
multiplier: 1
});
link.href = dURL;
link.download = filename;
};


//----------------------------------------------------------------------------------------------------------

// display/hide text Editor
var textEditor = document.getElementById('textEditor');
var ribbonBar = document.getElementById('ribbonBar');
canvas.on('object:selected', function(e) {
   if (e.target.type === 'textbox') {
     textEditor.style.display = 'block';
     ribbonBar.style.opacity = 0;
   }
});
canvas.on('before:selection:cleared', function(e) {
  if (e.target.type === 'textbox') {
    textEditor.style.display = 'none';
    ribbonBar.style.opacity = 1;
  }
});


//----------------------------------------------------------------------------------------------------------

// slide text editor divs
$(".btn_clickable").click(function(){
  $(this).next().toggleClass('slide_text_editor');
  $(".editor_toggle").not($(this).next()).removeClass('slide_text_editor');
});


  //--------------------------------------------------------------------------------------------------------
  // function to toggle bettwen tabs
  function selectTab (select,toggle) {

    $(select).change(function(){
      $(toggle).hide();
      $('#' + $(this).val()).show();
  });

  }

  // select invite catagory
  selectTab('#invteType','.invite_imgs');
  // select invite clip art
  selectTab('#clipArt','.invite_clips');



  //----------------------------------------------------------------------------------------------------------

//----------------------- events for  canvas and Active object----------------------------------------------


// for all canvas background
function optionscanvas(ele,prop){

  document.getElementById(ele).onchange = function() {
    canvas.set(prop, this.value);
    canvas.requestRenderAll();
};

}

// Apply selected background Color of canvas on change
optionscanvas('canvasbg',"backgroundColor");



//--------------------------------------------------------------------------------------------------------

//sizes of card

  var cardSize0 = {width:390,height:546};
  var cardSize1 = {width:288,height:576};
  var cardSize2 = {width:396,height:594};
  var cardSize3 = {width:495,height:360};

  $('#card0').click(function (e) {
    e.preventDefault();
      canvas.setHeight(cardSize0.height);
      canvas.setWidth(cardSize0.width);

  });

  $('#card1').click(function (e) {
    e.preventDefault();
      canvas.setHeight(cardSize1.height);
      canvas.setWidth(cardSize1.width);

  });

  $('#card2').click(function (e) {
    e.preventDefault();
      canvas.setHeight(cardSize2.height);
      canvas.setWidth(cardSize2.width);

  });

  $('#card3').click(function (e) {
    e.preventDefault();
      canvas.setHeight(cardSize3.height);
      canvas.setWidth(cardSize3.width);

  });

  //-------------------------------------------------------------------------------------------------------

// for Active OBjects
function optionsObj(ele,prop){

  document.getElementById(ele).onchange = function() {
    canvas.getActiveObject().set(prop, this.value);
    canvas.requestRenderAll();
};

}

// Apply selected font on change
optionsObj('fontSize',"fontSize");

// Apply selected Color on change
optionsObj('fontColor',"fill");

// Apply selected background Color on change
optionsObj('fontBg',"backgroundColor");



// Apply selected background Color on change
optionsObj('strokeColor',"stroke");

// Apply selected line Height on change
optionsObj('lineHeight',"lineHeight");

// Apply selected stroke Width on change
optionsObj('strokeWidth',"strokeWidth");
//----------------------------------------------------------------------------------------------------------

function optionsObj2(ele,prop){

    document.getElementById(ele).onclick = function() {

    canvas.getActiveObject().set(prop, this.getAttribute('title'));
    canvas.requestRenderAll();};
}

// Apply selected font Weight on click
optionsObj2('Bold',"fontWeight");
// Apply selected font Style on click
optionsObj2('Italic',"fontStyle");
// Apply selected underline on click
optionsObj2('underline',"underline");
// Apply selected line-through on click
optionsObj2('striketHrough',"linethrough");
// Apply selected font Weight on click
optionsObj2('alignLeft',"textAlign");
// Apply selected font Weight on click
optionsObj2('alignCenter',"textAlign");
// Apply selected font Weight on click
optionsObj2('alignRight',"textAlign");


//----------------------------------------------------------------------------------------------------------



//function for change canvas background

$('#bgTransparent').change(function(){

$('c').css('opacity', $(this.value));
});


function canvasBg(ImagSrc) {

  fabric.Image.fromURL(ImagSrc, function(img) {
    // add background image
    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
       scaleX: canvas.width / img.width,
       scaleY: canvas.height / img.height,
       crossOrigin: 'anonymous'
          });
  },null,{crossOrigin: 'Anonymous'});

}

  // choosing invite
  $('.invite_img').click(function (e) {
    e.preventDefault();

     canvasBg(e.target.src);

  });


  // delete backgronud imge
  $('#delBg').click(function (e) {
    e.preventDefault();

     canvasBg('');

  });

  //--------------------------------------------------------------------------------------------------------

// choosing canvas Background

$('.color_circl').click (function(e){
   e.preventDefault();

canvas.setBackgroundColor(e.target.style.backgroundColor);
   canvas.renderAll();
 });


  //--------------------------------------------------------------------------------------------------------

// choosing canvas Background options
// gradiant  (not working yet)

var rgbToHex = function (rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

var grdColor1;
var grdColor2;
$('#grdColor1').change(function(){
   grdColor1 = $(this).next($('.sp-preview-inner')).css(rgbToHex('backgroundColor'));
});
$('#grdColor2').change(function(){
   grdColor2 = $(this).next($('.sp-preview-inner')).css(rgbToHex('backgroundColor'));
});

$('#gradiantBTn').click(function(){


var rect = new fabric.Rect({
  left: 0,
  top: 0,
  width: canvas.width,
  height: canvas.height
});


rect.setGradient('fill', {
  x1: '50%' ,
  y1: '50%',
  x2: rect.width,
  y2: rect.height,
  colorStops: {
    0: grdColor1,
    1: grdColor2
  }
});

canvas.add(rect);
 canvas.renderAll();

console.log(grdColor1);
});

  //--------------------------------------------------------------------------------------------------------

//Upload img from your device

  $('#file0').change(function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(f) {
      var data = f.target.result;
      fabric.Image.fromURL(data, function(img) {
        var upImg = img.set({
          left: 0,
          top: 0,
          angle: 0,
          scaleX: canvas.width / img.width,
          scaleY: canvas.height / img.height,
        });
        canvas.add(upImg).renderAll();
        var dataURL = canvas.toDataURL({
          format: 'png',
          quality: 1,
          crossOrigin: 'anonymous'
        });
      });
    };
    reader.readAsDataURL(file);
  });




//----------------------------------------------------------------------------------------------------------
// Clip art section
function addclip(clipsrc) { fabric.Image.fromURL(clipsrc, function(img) {
  var clipArt = img.set({
    left:250,
    top:150,
    originX: 'center',
    originY: 'center',
    angle: 0,
    crossOrigin: 'Anonymous'
  });
  canvas.add(clipArt).renderAll();

},null,{crossOrigin: 'Anonymous'});}


  // choosing clip art
  $('.invite_clips').click(function (e) {
    e.preventDefault();

    addclip(e.target.src);

  });


//----------------------------------------------------------------------------------------------------------
// text & add text sections
// font size from input
var fontSize = document.getElementById('fontSize').value;

// function for text editing
function addText(text,fontSize,color){

// Define an array with all fonts
var fonts = [
  "Abel","Acme","Alfa Slab One","Amiri","Bangers","Bitter","Cabin Condensed","Cairo","Caveat","Chivo","Cinzel","Concert One","Cookie","Courgette","Dancing Script","Fredoka One","Gloria Hallelujah","Great Vibes","Handlee","Kaushan Script","Lato","Lobster","Lobster Two","Lora","Merienda","Merriweather","Monoton","Montserrat","Noto Serif","Open Sans","Open Sans Condensed:300","Orbitron","Oswald","Overpass","PT Sans","Pacifico","Patrick Hand","Permanent Marker","Playball","Poppins","Prata","Raleway","Righteous","Roboto","Roboto Condensed","Roboto Mono","Roboto Slab","Russo One","Sacramento","Satisfy","Shadows Into Light","Sigmar One","Signika Negative","Source Code Pro","Source Sans Pro","Tajawal","Tangerine","Teko","Ubuntu","Ultra","VT323","Viga"];

var textbox = new fabric.Textbox(text, {
  left: 50,
  top: 250,
  width: 400,
  fontSize: fontSize,
  cornerSize: 12,
  borderColor: '#F92672',
  cornerColor :'#F92672',
  cornerStrokeColor :'#F92672',
  transparentCorners: false,
  editingBorderColor :'#09c',
  fill: color,
  MIN_TEXT_WIDTH :100


});
canvas.add(textbox).setActiveObject(textbox);
fonts.unshift('Times New Roman');
// Populate the fontFamily select
var select = document.getElementById("font-family");
fonts.forEach(function(font) {
  var option = document.createElement('option');
  option.innerHTML = font;
  option.value = font;
  select.appendChild(option);
// change font family in font slecetor feild
option.style.fontFamily = font;

});

// Apply selected font on change
document.getElementById('font-family').onchange = function() {
  if (this.value !== 'Times New Roman') {
    loadAndUse(this.value);
  } else {
    canvas.getActiveObject().set("fontFamily", this.value);
    canvas.requestRenderAll();
  }
};

function loadAndUse(font) {
  var myfont = new FontFaceObserver(font);
  myfont.load()
    .then(function() {
      // when font is loaded, use it.
      canvas.getActiveObject().set("fontFamily", font);
      canvas.requestRenderAll();
    }).catch(function(e) {
      console.log(e);
      alert('font loading failed ' + font);
    });
}



}


  // text section
$('.random_text').click(function(e){

  e.preventDefault();
var getText = e.currentTarget.nextElementSibling.textContent;

   addText(getText,36,'#000');

});

// ADD text section
  // add heading
  $('#addHeading').click(function(){
  addText('Click and Type',36,'#000');
  });

  // add subheading
  $('#addSubHeading').click(function(){
  addText('Click and Type',30,'#000');
  });

  // add ParaText
  $('#addParaText').click(function(){
  addText('Click and Type',18,'#000');
  });


  // add from textarea
  $('#addText').click(function(){
  addText($('#addTextarea').val(),36,$('#fontColor').val());
  });


//---------------------------------------------------------------------------------------------------------

// free drawing section

$('#v-pills-drawing-tab').click(function(e) {
e.preventDefault();
  (function() {
    var $ = function(id){return document.getElementById(id);};

    canvas.isDrawingMode = true;


    fabric.Object.prototype.transparentCorners = false;

    var drawingModeEl = $('drawing-mode'),
        drawingOptionsEl = $('drawing-mode-options'),
        drawingColorEl = $('drawing-color'),
        drawingShadowColorEl = $('drawing-shadow-color'),
        drawingLineWidthEl = $('drawing-line-width'),
        drawingShadowWidth = $('drawing-shadow-width'),
        drawingShadowOffset = $('drawing-shadow-offset'),
        clearEl = $('clear-canvas');

    clearEl.onclick = function() { canvas.clear();};

    drawingModeEl.onclick = function() {
      canvas.isDrawingMode = !canvas.isDrawingMode;
      if (canvas.isDrawingMode) {
        drawingModeEl.innerHTML = 'Cancel drawing mode';
        drawingOptionsEl.style.display = '';
      }
      else {
        drawingModeEl.innerHTML = 'Enter drawing mode';
        drawingOptionsEl.style.display = 'none';
      }
    };

    if (fabric.PatternBrush) {
      var vLinePatternBrush = new fabric.PatternBrush(canvas);
      vLinePatternBrush.getPatternSrc = function() {

        var patternCanvas = fabric.document.createElement('canvas');
        patternCanvas.width = patternCanvas.height = 10;
        var ctx = patternCanvas.getContext('2d');

        ctx.strokeStyle = this.color;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(0, 5);
        ctx.lineTo(10, 5);
        ctx.closePath();
        ctx.stroke();

        return patternCanvas;
      };

      var hLinePatternBrush = new fabric.PatternBrush(canvas);
      hLinePatternBrush.getPatternSrc = function() {

        var patternCanvas = fabric.document.createElement('canvas');
        patternCanvas.width = patternCanvas.height = 10;
        var ctx = patternCanvas.getContext('2d');

        ctx.strokeStyle = this.color;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(5, 0);
        ctx.lineTo(5, 10);
        ctx.closePath();
        ctx.stroke();

        return patternCanvas;
      };

      var squarePatternBrush = new fabric.PatternBrush(canvas);
      squarePatternBrush.getPatternSrc = function() {

        var squareWidth = 10, squareDistance = 2;

        var patternCanvas = fabric.document.createElement('canvas');
        patternCanvas.width = patternCanvas.height = squareWidth + squareDistance;
        var ctx = patternCanvas.getContext('2d');

        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, squareWidth, squareWidth);

        return patternCanvas;
      };

      var diamondPatternBrush = new fabric.PatternBrush(canvas);
      diamondPatternBrush.getPatternSrc = function() {

        var squareWidth = 10, squareDistance = 5;
        var patternCanvas = fabric.document.createElement('canvas');
        var rect = new fabric.Rect({
          width: squareWidth,
          height: squareWidth,
          angle: 45,
          fill: this.color
        });

        var canvasWidth = rect.getBoundingRect().width;

        patternCanvas.width = patternCanvas.height = canvasWidth + squareDistance;
        rect.set({ left: canvasWidth / 2, top: canvasWidth / 2 });

        var ctx = patternCanvas.getContext('2d');
        rect.render(ctx);

        return patternCanvas;
      };

      var img = new Image();
      img.src = '../images/honey_im_subtle.png';

      var texturePatternBrush = new fabric.PatternBrush(canvas);
      texturePatternBrush.source = img;
    }

    $('drawing-mode-selector').onchange = function() {

      if (this.value === 'hline') {
        canvas.freeDrawingBrush = vLinePatternBrush;
      }
      else if (this.value === 'vline') {
        canvas.freeDrawingBrush = hLinePatternBrush;
      }
      else if (this.value === 'square') {
        canvas.freeDrawingBrush = squarePatternBrush;
      }
      else if (this.value === 'diamond') {
        canvas.freeDrawingBrush = diamondPatternBrush;
      }
      else if (this.value === 'texture') {
        canvas.freeDrawingBrush = texturePatternBrush;
      }
      else {
        canvas.freeDrawingBrush = new fabric[this.value + 'Brush'](canvas);
      }

      if (canvas.freeDrawingBrush) {
        canvas.freeDrawingBrush.color = drawingColorEl.value;
        canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
        canvas.freeDrawingBrush.shadow = new fabric.Shadow({
          blur: parseInt(drawingShadowWidth.value, 10) || 0,
          offsetX: 0,
          offsetY: 0,
          affectStroke: true,
          color: drawingShadowColorEl.value,
        });
      }
    };

    drawingColorEl.onchange = function() {
      canvas.freeDrawingBrush.color = this.value;
    };
    drawingShadowColorEl.onchange = function() {
      canvas.freeDrawingBrush.shadow.color = this.value;
    };
    drawingLineWidthEl.onchange = function() {
      canvas.freeDrawingBrush.width = parseInt(this.value, 10) || 1;
      this.previousSibling.innerHTML = this.value;
    };
    drawingShadowWidth.onchange = function() {
      canvas.freeDrawingBrush.shadow.blur = parseInt(this.value, 10) || 0;
      this.previousSibling.innerHTML = this.value;
    };
    drawingShadowOffset.onchange = function() {
      canvas.freeDrawingBrush.shadow.offsetX = parseInt(this.value, 10) || 0;
      canvas.freeDrawingBrush.shadow.offsetY = parseInt(this.value, 10) || 0;
      this.previousSibling.innerHTML = this.value;
    };

    if (canvas.freeDrawingBrush) {
      canvas.freeDrawingBrush.color = drawingColorEl.value;
      canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
      canvas.freeDrawingBrush.shadow = new fabric.Shadow({
        blur: parseInt(drawingShadowWidth.value, 10) || 0,
        offsetX: 0,
        offsetY: 0,
        affectStroke: true,
        color: drawingShadowColorEl.value,
      });
    }
  })();
  });
//----------------------------------------------------------------------------------------------------------
// some function to control zoom & saved canvac to Jason

var canvasScale = 1;
var SCALE_FACTOR = 1.2;
var savedJSON;


// side tools

// clear Canvas
$('#clearCanvas').click(function (e) {
  e.preventDefault();
  savedJSON = canvas.toJSON();
  console.log(JSON.stringify(savedJSON));
  console.log("data url", canvas.toDataURL());
  canvas.clear();
  canvas.renderAll();
});

// earser objects

$('#earseObj').click(function (e) {
  e.preventDefault();
 canvas.remove(canvas.getActiveObject());


});


$("#radoBtn").click(function() {
  var myJson = "";
  canvas.loadFromJSON(savedJSON, function() {
  });
  canvas.renderAll();
});

createListenersKeyboard();

function createListenersKeyboard() {
    document.onkeydown = onKeyDownHandler;
}

function onKeyDownHandler(event) {
    //event.preventDefault();

    var key;
    if(window.event){
        key = window.event.keyCode;
    }
    else{
        key = event.keyCode;
    }

    switch(key){
        //////////////
        // Shortcuts
        //////////////
        // Zoom In (Ctrl+"+")
        case 187: // Ctrl+"+"
            if(ableToShortcut()){
                if(event.ctrlKey){
                    event.preventDefault();
                    zoomIn();
                }
            }
            break;
        // Zoom Out (Ctrl+"-")
        case 189: // Ctrl+"-"
            if(ableToShortcut()){
                if(event.ctrlKey){
                    event.preventDefault();
                    zoomOut();
                }
            }
            break;
        // Reset Zoom (Ctrl+"0")
        case 48: // Ctrl+"0"
            if(ableToShortcut()){
                if(event.ctrlKey){
                    event.preventDefault();
                    resetZoom();
                }
            }
            break;
        default:
            // TODO
            break;
    }
}


function ableToShortcut(){
  /*
  TODO check all cases for this

  if($("textarea").is(":focus")){
      return false;
  }
  if($(":text").is(":focus")){
      return false;
  }
  */
  return true;
}

// Zoom In
function zoomIn() {
  // TODO limit the max canvas zoom in

  canvasScale = canvasScale * SCALE_FACTOR;

  var objects = canvas.getObjects();
  for (var i in objects) {
      var scaleX = objects[i].scaleX;
      var scaleY = objects[i].scaleY;
      var left = objects[i].left;
      var top = objects[i].top;

      var tempScaleX = scaleX * SCALE_FACTOR;
      var tempScaleY = scaleY * SCALE_FACTOR;
      var tempLeft = left * SCALE_FACTOR;
      var tempTop = top * SCALE_FACTOR;

      objects[i].scaleX = tempScaleX;
      objects[i].scaleY = tempScaleY;
      objects[i].left = tempLeft;
      objects[i].top = tempTop;

      objects[i].setCoords();
  }

  canvas.renderAll();
}

// Zoom Out
function zoomOut() {
  // TODO limit max cavas zoom out

  canvasScale = canvasScale / SCALE_FACTOR;

  var objects = canvas.getObjects();
  for (var i in objects) {
      var scaleX = objects[i].scaleX;
      var scaleY = objects[i].scaleY;
      var left = objects[i].left;
      var top = objects[i].top;

      var tempScaleX = scaleX * (1 / SCALE_FACTOR);
      var tempScaleY = scaleY * (1 / SCALE_FACTOR);
      var tempLeft = left * (1 / SCALE_FACTOR);
      var tempTop = top * (1 / SCALE_FACTOR);

      objects[i].scaleX = tempScaleX;
      objects[i].scaleY = tempScaleY;
      objects[i].left = tempLeft;
      objects[i].top = tempTop;

      objects[i].setCoords();
  }

  canvas.renderAll();
}

// Reset Zoom
function resetZoom() {

  var objects = canvas.getObjects();
  for (var i in objects) {
      var scaleX = objects[i].scaleX;
      var scaleY = objects[i].scaleY;
      var left = objects[i].left;
      var top = objects[i].top;

      var tempScaleX = scaleX * (1 / canvasScale);
      var tempScaleY = scaleY * (1 / canvasScale);
      var tempLeft = left * (1 / canvasScale);
      var tempTop = top * (1 / canvasScale);

      objects[i].scaleX = tempScaleX;
      objects[i].scaleY = tempScaleY;
      objects[i].left = tempLeft;
      objects[i].top = tempTop;

      objects[i].setCoords();
  }

  canvas.renderAll();

  canvasScale = 1;
}


$("#zoomIn").click(function(e){
  e.preventDefault();
  zoomIn();
});
// button Zoom Out
$("#zoomOut").click(function(e){
  e.preventDefault();

  zoomOut();
});
// button Reset Zoom
$("#zoomReset").click(function(e){
  e.preventDefault();

  resetZoom();
});



  });
