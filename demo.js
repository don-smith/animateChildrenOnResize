$(function(){

    $.widget.bridge('resizable', $.lsd.animateChildrenOnResize);

    $('#Container').resizable();

});
