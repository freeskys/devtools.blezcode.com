// Load external template

// Load iOS
$.get('templates/ios.html', function(data) {
    var template = _.template(data);
    $('#iOSContent').html(template);
});

// Load Android
$.get('templates/android.html', function(data) {
    var template = _.template(data);
    $('#AndroidContent').html(template);
});

// Load Windows Phone
$.get('templates/windowsphone.html', function(data) {
    var template = _.template(data);
    $('#WPContent').html(template);
});
