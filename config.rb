# Middleman Config

require "arcgis-framework"

module GruntJS
    class << self
        def registered(app)
            app.after_build do |builder|
                # exec('node r.js -o build/javascripts/app.build.js');
            end
        end
        alias :included :registered
    end
end

::Middleman::Extensions.register(:run_grunt, GruntJS)

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

configure :build do

activate :minify_css
activate :run_grunt

activate :relative_assets

end