# Middleman Config

require "arcgis-framework"

module GruntJS
    class << self
        def registered(app)
            app.after_build do |builder|
                system 'grunt';
            end
        end
        alias :included :registered
    end
end

::Middleman::Extensions.register(:run_grunt, GruntJS)

set :css_dir, 'app/stylesheets'
set :js_dir, 'app/javascript'
set :images_dir, 'resources/images'
set :fonts_dir, 'resources/fonts'


configure :build do

activate :minify_css
activate :run_grunt

activate :relative_assets

end