/**
 * Created by JFCS on 3/3/16.
 */
var counter = 0;
$(document).ready(function(){
   init();
   enable();
});
// append dom
function init () {
appendDom();
}
// add listeners
function enable(){
    $('.generator').on('click',makeButtons);
    $('.container').on('click','.delete',removeDiv);
    $('.container').on('click','.change',toggleClass);

}

function makeButtons(){
    counter ++;
    $('.container').append("<div class='test'></div>");
    $el = $('.container').children().last();
    $el.append('<button class="change"> change </button>');
    $el.append('<button class="delete"> remove </button>');
    $el.append('<p>' + counter +'</p>')
};

function appendDom(){
    $('.container').append('<button class="generator">generate</button>');


}

function removeDiv(){
    console.log('clicked');
    $(this).parent().remove();
}

function toggleClass(){
    $(this).parent().toggleClass('red');
}