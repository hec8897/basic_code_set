var xmlhttp = new XMLHttpRequest();
//XMLHttpRequset 객체 선언
var url = "json.txt";
xmlhttp.open("GET", url, true);
xmlhttp.send();

xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        console.log(xmlhttp.status);
        if (xmlhttp.status === 200) {

            //xmlhttp.status = 200 일때 동작//

            /*==========================
            xmlhrrpRequset state
            0: request not initialized 
            1: server connection established
            2: request received 
            3: processing request 
            4: request finished and response is ready 

            200: "OK"
            403: "Forbidden"
            404: "Page not found"
            For a complete list go to the Http Messages Reference

            ※requset state == 4 & 200 일때 ajax 응답이 준비된 상태
            ============================*/

            var arr = xmlhttp.responseText;
            //http 통신으로 가져온 text 파일 가져옴            
                var jsonobj = JSON.parse(arr);
            //가져온 파일 json obj로 파싱          
                var SelectBtn = document.querySelector(".vnbtn");
                SelectBtn.addEventListener("click", function () {                
                console.log(jsonobj.test)
                var outside = document.querySelector(".vnjs");
                outside.innerHTML += "<p>" + jsonobj.test + "</p>";
            })
        }
    }
}




//jquery Json ajax
$(".jqbtn").click(function () {
    $.ajax({
        type: "GET",
        url: "json.txt",
        dataType: "JSON",
        success: function (data) {
            $(".jq").html("<p>" + data.test + "</p>");
        },
        complete: function (data) {
        },
        error: function () {
        }
    })
})