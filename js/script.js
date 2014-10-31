// Load external template
function loadExternalTemplate(files, dom) {
    $.get(files, function(data) {
        var template = _.template(data);
        $(dom).html(template);
    });
}

// Load Frontend
    // Load CSS Frameworks
    loadExternalTemplate('templates/frontend/css/frameworks.html', '#CSSFrameworksContent');

    // Load Javascript
        // Load Javascript Frameworks
        loadExternalTemplate('templates/frontend/js/frameworks.html', '#JSFrameworksContent');

        // Load Javascript Libraries
        loadExternalTemplate('templates/frontend/js/libraries.html', '#JSLibrariesContent');

        // Load Javascript UI Frameworks
        loadExternalTemplate('templates/frontend/js/ui_frameworks.html', '#JSUIFrameworksContent');

    // Load Testing Frameworks
    loadExternalTemplate('templates/frontend/testing.html', '#TestingFrameworksContent');

    // Load Another Front-End Tools
    loadExternalTemplate('templates/frontend/another.html', '#AnotherFrontendToolsContent');

// Load Backend
    // Load Java
        // Load Java Frameworks
        loadExternalTemplate('templates/backend/java/frameworks.html', '#JavaFrameworksContent');

    // Load Node.js
        // Load Node.js Micro Frameworks
        loadExternalTemplate('templates/backend/nodejs/micro_frameworks.html', '#NodejsMicroFrameworksContent');

    // Load PHP
        // Load PHP CMS
        loadExternalTemplate('templates/backend/php/cms.html', '#PHPCMSContent');

        // Load PHP Frameworks
        loadExternalTemplate('templates/backend/php/frameworks.html', '#PHPFrameworksContent');

        // Load PHP Micro Frameworks
        loadExternalTemplate('templates/backend/php/micro_frameworks.html', '#PHPMicroFrameworksContent');

    // Load Python
        // Load Python Frameworks
        loadExternalTemplate('templates/backend/python/frameworks.html', '#PythonFrameworksContent');

        // Load Python Micro Frameworks
        loadExternalTemplate('templates/backend/python/micro_frameworks.html', '#PythonMicroFrameworksContent');

    // Load Ruby
        // Load Ruby Frameworks
        loadExternalTemplate('templates/backend/ruby/frameworks.html', '#RubyFrameworksContent');

        // Load Ruby Micro Frameworks
        loadExternalTemplate('templates/backend/ruby/micro_frameworks.html', '#RubyMicroFrameworksContent');

    // Load Wordpress
    loadExternalTemplate('templates/backend/wordpress.html', '#WordPressContent');

// Load iOS
loadExternalTemplate('templates/ios.html', '#iOSContent');

// Load Android
loadExternalTemplate('templates/android.html', '#AndroidContent');

// Load Windows Phone
loadExternalTemplate('templates/windows_phone.html', '#WPContent');