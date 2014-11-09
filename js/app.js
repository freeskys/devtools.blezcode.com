/***************************************************
 * Created by Harditya Rahmat Ramadhan
 ***************************************************/

(function($) {

    var ItemView = Backbone.View.extend({
        el: $('body'),

        templateLocation: [
            'templates/frontend/css/frameworks.html',
            'templates/frontend/js/frameworks.html',
            'templates/frontend/js/libraries.html',
            'templates/frontend/js/ui_frameworks.html',
            'templates/frontend/testing.html',
            'templates/frontend/another.html',
            'templates/backend/java/frameworks.html',
            'templates/backend/java/micro_frameworks.html',
            'templates/backend/nodejs/cms.html',
            'templates/backend/nodejs/libraries.html',
            'templates/backend/nodejs/micro_frameworks.html',
            'templates/backend/nodejs/networking.html',
            'templates/backend/php/cms.html',
            'templates/backend/php/frameworks.html',
            'templates/backend/php/micro_frameworks.html',
            'templates/backend/python/frameworks.html',
            'templates/backend/python/micro_frameworks.html',
            'templates/backend/ruby/frameworks.html',
            'templates/backend/ruby/micro_frameworks.html',
            'templates/backend/wordpress.html',
            'templates/ios.html',
            'templates/android.html',
            'templates/windows_phone.html'
        ],
        templateElement: [
            '#CSSFrameworksContent',
            '#JSFrameworksContent',
            '#JSLibrariesContent',
            '#JSUIFrameworksContent',
            '#TestingFrameworksContent',
            '#AnotherFrontendToolsContent',
            '#JavaFrameworksContent',
            '#JavaMicroFrameworksContent',
            '#NodejsCMSContent',
            '#NodejsLibrariesContent',
            '#NodejsMicroFrameworksContent',
            '#NodejsNetworkingContent',
            '#PHPCMSContent',
            '#PHPFrameworksContent',
            '#PHPMicroFrameworksContent',
            '#PythonFrameworksContent',
            '#PythonMicroFrameworksContent',
            '#RubyFrameworksContent',
            '#RubyMicroFrameworksContent',
            '#WordPressContent',
            '#iOSContent',
            '#AndroidContent',
            '#WPContent'
        ],

        initialize: function() {
            _.bindAll(this, 'render');

            // Render view
            this.render();
        },

        render: function() {
            // Render data into view
            for (var i=0; i<this.templateLocation.length; i++) {
                this.loadExternalTemplate(this.templateLocation[i], this.templateElement[i]);
            }
        },

        loadExternalTemplate: function(files, dom) {
            $.get(files, function(data) {
                var template = _.template(data);
                $(dom).html(template);
            });
        }
    });

    var itemView = new ItemView();

})(jQuery);