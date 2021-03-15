var Client = require('ftp');
const fs = require('fs');
export async function upFTP(myHost, myUser, myPass, fromDisk, toFTP) {
    var c = new Client();
    // c.on('ready', function() {
    //     c.put(fromDisk, toFTP, function(err) {
    //         if (err) console.log(err);
    //         c.end();
    //     });
    // });
    c.on('ready', function() {
        // c.list(function(err, list) {
        //     if (err) throw err;
        //     console.dir(list);
        //     c.end();
        // });
        c.put(fromDisk, toFTP, function(err) {
            // c.put(toFTP, fromDisk, function(err) {
            if (err) console.log(err);
            console.log('downloaded')
            c.end();
        });
    });
    // connect to localhost:21 as anonymous
    c.connect({
        host: myHost,
        user: myUser,
        password: myPass,
        port: 21
    });

}