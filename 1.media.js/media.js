//Media Query 관련 전역 변수 선언
var matchScreen = window.matchMedia;
var maxWidth = 1024;
var meidumWidth = 787;
var LargeScreen = '(min-width: 1025px)';
var MediumScreen = '(max-width: 1024px) and (min-width:787px)';
var smallScreen = '(max-width:786px)';
var LagreQuery = matchScreen(LargeScreen).matches;
var MediumQuery = matchScreen(MediumQuery).matches;
var smallQuery = matchScreen(smallQuery).matches;

//LagerSize MediaQuery
if (LagreQuery) {
}

else if (MediumQuery){

}
else if (smallQuery){
}
$(window).resize(function(){

    var $theWindowSize = $(this).width();
    if($theWindowSize > 1024){

        HeaderEventMethod.headerLoadEvent();
    }
    else if($theWindowSize < 1024){

        HeaderEventMethod.ReloadMethods();        

    }
})
