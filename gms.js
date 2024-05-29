function GMS(M, n) {
    let [c, b, a] = M[M.length - 1];
    
    let A = M.slice(0, a);
    let B = M.slice(a, b);
    let C = M.slice(b, c);
    
    let D;
    if (b === c) D = B;
    else D = [B[B.length - 1], ...C];
    let k = D.length;
    
    De = i => D.map(col => col.map(x =>
        x < a ? x :
        x < b - 1 ? k * i + x + b - a :
        k * i + x + k));

    return [...A, ...B, ...C, ...Array(n).fill().map((_, i) => De(i)).flat()];
}

function calc() {
    let val = $("#M").val();
    let M = val.slice(1, val.length - 1).split(")(").map(col => col.split(",").map(x => Number(x)));
    let n = Number($("#n").val());
    $("#expanded").text(GMS(M, n).map(col => "(" + col.join(",") + ")").join(""));
}

$(document).ready(function () {
    $("#calc-button").click(calc);
});
