var socket = io();

socket.on('connect', function(){
    console.log("Connected to socket.io server!")
})

socket.on('message', function(message){
    console.log(`New message:
    ${message.text}`)
})

socket.emit('message', {
    text: "Welcome to chat application!"
})

//Handle submitting new message
var $form = jQuery('#message-form');

$form.on('submit', function(event){
    event.preventDefault();

    var $inputMessage = $form.find('input[name=message]');

    socket.emit('message', {
        text:$inputMessage.val()
    })

    $inputMessage.val("");
})