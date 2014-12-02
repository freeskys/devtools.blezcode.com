/***************************************************
 * Created by Harditya Rahmat Ramadhan
 ***************************************************/

(function($) {

    var ItemView = Backbone.View.extend({
        el: $('body'),

        //source: '<div class="col-lg-4 col-md-4">'+
        //        '<div class="panel panel-danger">'+
        //        '<div class="panel-heading">'+
        //        '<h2 class="panel-title text-center">{{title}}</h2>'+
        //        '</div>'+
        //        '<div class="panel-body">'+
        //        '<p class="text-center">{{Description}}</p>'+
        //        '<p><a class="btn btn-primary btn-block" href="{{website}}" target="_blank">Visit Website</a></p>'+
        //        '</div>'+
        //        '</div>'+
        //        '</div>',

        templateLocation: [
            'templates/frontend/css/frameworks.html',
            'templates/frontend/css/libraries.html',

            'templates/frontend/js/design.html',
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
            'templates/backend/php/backend.html',
            'templates/backend/php/cms.html',
            'templates/backend/php/frameworks.html',
            'templates/backend/php/micro_frameworks.html',
            'templates/backend/python/frameworks.html',
            'templates/backend/python/micro_frameworks.html',
            'templates/backend/ruby/frameworks.html',
            'templates/backend/ruby/libraries.html',
            'templates/backend/ruby/micro_frameworks.html',

            'templates/web/cloud.html',
            'templates/web/cloud_ide.html',

            'templates/backend/wordpress.html',
            'templates/backend/wordpress/themes.html',

            'templates/ios/networking.html',

            'templates/android/libraries.html',

            'templates/windows_phone.html',

            'templates/firefoxos/libraries.html'
        ],
        templateElement: [
            '#CSSFrameworksContent',
            '#CSSLibrariesContent',

            '#JSDesignContent',
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
            '#PHPBackendContent',
            '#PHPCMSContent',
            '#PHPFrameworksContent',
            '#PHPMicroFrameworksContent',
            '#PythonFrameworksContent',
            '#PythonMicroFrameworksContent',
            '#RubyFrameworksContent',
            '#RubyLibrariesContent',
            '#RubyMicroFrameworksContent',

            '#CloudContent',
            '#CloudIDEContent',

            '#WordPressContent',
            '#WordpressThemesContent',

            '#iOSNetworkingContent',

            '#AndroidLibrariesContent',

            '#WPContent',

            '#FirefoxOSLibrariesContent'
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