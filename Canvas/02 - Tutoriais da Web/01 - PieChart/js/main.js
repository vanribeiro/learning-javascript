function pieChart() {  
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    let status = document.getElementById('status');

    let days = 57;
    status.textContent = days;
    let axisX = canvas.width/2;
    let axisY = canvas.height/2;
    let radius = 100;
    
    context.beginPath();
    context.arc(axisX, axisY, radius, 0, 2 * Math.PI);
    context.lineWidth = 50;
    context.strokeStyle = '#cccccc';
    context.stroke();

    context.beginPath();
    context.arc(axisX, axisY, radius, Math.PI * 0, ((days/100)*2) * Math.PI);
    context.lineWidth = 50;
    context.strokeStyle = '#B56A7A';
    context.stroke();
}

window.onload = pieChart();