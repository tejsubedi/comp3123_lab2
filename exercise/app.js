// var ft = require('./sportsteam');

// //set module property
// ft.teamname = 'Tej';
// ft.booname = 'Cow dolly';

// //call module method
// ft.cheer();
// ft.boo();
var events = require('events');
var evenEmitter = new events.EventEmitter();


var fn=function(){
    console.log('call me');
}
evenEmitter.on('call', fn);
evenEmitter.emit('call');