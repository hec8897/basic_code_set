var graph_ui = new Vue({

    el: "#app1",
    data: {
        tit: "Vue.js Graph",
        val1: "",
        val2: "",
        val3: "",
        val4: "",
        maxNum: "inputsmax",
        Val1percent: "",
        Val2percent: "",
        Val3percent: "",
        Val4percent: ""
    },
    methods: {
        val1Fn: function () {
            var maxNum = Number(graph_ui.maxNum);
            var val1Val = Number(graph_ui.val1);

            if (val1Val > maxNum) {
                alert("toomuch");
            }
            else {
                $(".val1_graph .line").animate({
                    "height": (val1Val / maxNum) * 100 + "%"
                })
            }
            graph_ui.Val1percent = ((val1Val / maxNum) * 100).toFixed(2) + "%"
        },
        val2Fn: function () {
            var maxNum = Number(graph_ui.maxNum);
            var val2Val = Number(graph_ui.val2);

            if (val2Val > maxNum) {
                alert("toomuch");
            }
            else {
                $(".val2_graph .line").animate({
                    "height": (val2Val / maxNum) * 100 + "%"
                })
            }
            graph_ui.Val2percent = ((val2Val / maxNum) * 100).toFixed(2) + "%"
        },
        val3Fn: function () {
            var maxNum = Number(graph_ui.maxNum);
            var val3Val = Number(graph_ui.val3);
            if (val3Val > maxNum) {
                alert("toomuch");
            }
            else {
                $(".val3_graph .line").animate({
                    "height": (val3Val / maxNum) * 100 + "%"
                })
            }
            graph_ui.Val3percent = ((val3Val / maxNum) * 100).toFixed(2) + "%"            
        },
        val4Fn: function () {
            var maxNum = Number(graph_ui.maxNum);
            var val4Val = Number(graph_ui.val4);

            if (val4Val > maxNum) {
                alert("toomuch");
            }
            else {
                $(".val4_graph .line").animate({
                    "height": (val4Val / maxNum) * 100 + "%"
                })
            }
            graph_ui.Val4percent = ((val4Val / maxNum) * 100).toFixed(2) + "%"
        }
    }
})


