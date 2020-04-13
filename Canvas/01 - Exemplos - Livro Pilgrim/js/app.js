/**
 * Exemplo implantado a partir do livro:
 * "HTML5, Entendendo e Executando", Mark Pilgrim
 * Editora O'Reilly/AltaBooks
 */

function draw_b() {
    var c_canvas = document.getElementById('c');
    var context = c_canvas.getContext("2d");
    for(var x=0.5; x < 500; x += 10){
        context.moveTo(x, 0);
        context.lineTo(x, 375);
    }
    for (var y = 0; y < 375; y += 10) {
        context.moveTo(0, y);
        context.lineTo(500, y);    
    }
    context.strokeStyle = "#eee";
    context.stroke();
    /**
     * Horizontal
     */
    context.beginPath();
    context.moveTo(0, 40);
    context.lineTo(240, 40);
    context.moveTo(260, 40);
    context.lineTo(500, 40);
    context.moveTo(495, 35);
    context.lineTo(500, 40);
    context.lineTo(495, 45);

    /**
     * Vertical
     */
    context.moveTo(60, 0);
    context.lineTo(60, 153);
    context.moveTo(60, 173);
    context.lineTo(60, 375);
    context.moveTo(65, 370);
    context.lineTo(60, 375);
    context.lineTo(55, 370);

    context.strokeStyle = "#000";
    context.stroke();
}


window.load = draw_b();