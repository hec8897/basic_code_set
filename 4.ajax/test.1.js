var XmlHttp = new XMLHttpRequest();
var url = "tree.json";
XmlHttp.open("GET", url, true);
XmlHttp.send();

XmlHttp.onreadystatechange = function () {
    if (XmlHttp.readyState == XMLHttpRequest.DONE) {
        console.log(XmlHttp.status);
        if (XmlHttp.status === 200) {
            var treeString = XmlHttp.responseText;
            //ajax 로 가져온 JSON text
            var treeObj = JSON.parse(treeString);
            //Json text를 객체형식으로 파싱
            console.log(treeObj);
            var treeSelect = document.querySelectorAll(".trees");
            //trees의 모든 태그 가져옴

            for (i = 0; i <= treeSelect.length; i++) {
                var list1ClickNumber = 0;
                var list2ClickNumber = 0;
                var list3ClickNumber = 0;
                //각 tree 클릭횟수 넘버링               
                
                treeSelect[i].addEventListener("click", function () {
                    thisId = this.id;
                    //클릭한 태그의 아이디 
                    var treeArray = [treeObj.tree1, treeObj.tree2, treeObj.tree3];
                    //JSON 파싱된 객체 배열 선언
                    if (thisId == 'tree1') {
                        list1ClickNumber++;
                        //ID가 tree1 인것을 클릭 했을때
                        var rootText = document.querySelector(".tree1_li")
                        rootText.innerHTML += "<h2>" + treeArray[0][0] + "</h2>"
                        rootText.innerHTML += "<div><a href=''>" + treeArray[0][1] + "</a></div>"
                        rootText.innerHTML += "<a href=''>" + treeArray[0][2] + "</a>"
                        if (list1ClickNumber > 1) {
                            rootText.innerHTML = "";
                            return list1ClickNumber = 0;
                        }
                    }
                    else if (thisId == 'tree2') {
                        list2ClickNumber++;
                        var rootText = document.querySelector(".tree2_li")
                        rootText.innerHTML += "<h2>" + treeArray[1][0] + "</h2>"
                        rootText.innerHTML += "<div><a href=''>" + treeArray[1][1] + "</a></div>"
                        rootText.innerHTML += "<a href=''>" + treeArray[1][2] + "</a>"

                        if (list2ClickNumber > 1) {
                            rootText.innerHTML = "";
                            return list2ClickNumber = 0;
                        }
                    }
                    else if (thisId == 'tree3') {
                        list3ClickNumber++;
                        var rootText = document.querySelector(".tree3_li")
                        rootText.innerHTML += "<h2>" + treeArray[2][0] + "</h2>"
                        rootText.innerHTML += "<div><a href=''>" + treeArray[2][1] + "</a></div>"
                        rootText.innerHTML += "<a href=''>" + treeArray[2][2] + "</a>"
                        if (list3ClickNumber > 1) {
                            rootText.innerHTML = "";
                            return list3ClickNumber = 0;
                        }
                    }
                    // console.log(treeObj.test);
                })
            }
        }
    }
}

