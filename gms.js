/*
Credits to Polymations for the expansion algorithm code:
https://googology.fandom.com/wiki/User_blog:DaVinci103/Powerful_ordinal_notation_I_made?commentId=4400000000000044414&replyId=4400000000000130111
*/

function GMS(M, n) {
    let [c, b, a] = M[M.length - 1];
    
    let A = M.slice(0, a);
    let B = M.slice(a, b);
    let C = M.slice(b, c);
    
    let k, D;
    if (b === c) {
        k = b - a;
        D = B;
    } else {
        k = c - a - 1;
        D = [...B.slice(1), ...C];
    }
    
    De = i => D.map(col => col.map(x =>
        x < a ? x :
        x === a ? k * i + x + b - a :
        k * i + x + k));

    return [...A, ...B, ...C, ...Array(n).fill().map((_, i) => De(i)).flat()];
}

function calc() {
    let M = $("#M").val().slice(1, val.length - 1).split(")(").map(col => col.split(",").map(x => Number(x)));
    let n = Number($("#n").val());
    $("#expanded").text(GMS(M, s).map(col => "(" + col.join(",") + ")"));
}

$(document).ready(function () {
    $("#calc-button").click(calc);
});
