
function generateTicket() {
    const ticketNumber =  Math.floor(Math.random() * 100);
    if(ticketNumber%2==1){
        document.getElementById('ticket').innerHTML = 'Your Ticket Number: <span class="ticket-number1">' + 'D' +ticketNumber + '</span>';
        document.getElementById('generateButton').disabled = true; // ボタンを無効にする
    }else{
        document.getElementById('ticket').innerHTML = 'Your Ticket Number: <span class="ticket-number2">' + 'D' +ticketNumber + '</span>';
        document.getElementById('generateButton').disabled = true; // ボタンを無効にする
    }
};