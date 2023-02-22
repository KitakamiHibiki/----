(
    function () {
        var MatchTable = false;
        MatchTable = ["tools","coding"];
        addListeners();

        function addListeners() {
            var aa, bb;
            for (var a = 0; a < MatchTable.length; a += 1) {
                aa = document.getElementById(MatchTable[a]);
                aa.onmouseover = (function (a) { return function () { Show(MatchTable[a]) }; })(a);
                aa.onmouseout = (function (a) { return function () { notShow(MatchTable[a]) }; })(a);
                (function (a) { return function () { document.querySelector("#" + MatchTable[a] + " a").onmouseover = function () { Show(MatchTable[a]) }; }; })();
                bb = document.getElementById(creatExpansionBarId(MatchTable[a]));
                bb.onmouseover = (function (a) { return function () { Show(MatchTable[a]) }; })(a);
                bb.onmouseout = (function (a) { return function () { notShow(MatchTable[a]) }; })(a);
            }
        }

        function Show(str) {
            var a, ab;
            a = document.getElementById(creatExpansionBarId(str));
            ab = document.getElementById(str);
            a.style.display = "block";
            a.style.marginLeft = "150px";
            a.style.marginTop = (ab.offsetParent.offsetTop + ab.offsetTop) + "px";
        }
        
        function notShow(str) {
            var a;
            a = document.getElementById(creatExpansionBarId(str))
            a.style.display = "none";
        }

        function creatExpansionBarId(navigation) {
            return navigation + "Expansion";
        }
    }
)();
