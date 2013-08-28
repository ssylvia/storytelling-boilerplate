# Middleman Config

require "arcgis-framework"

module runGrunt
    class << self
        def registered(app)
            app.after_build do |builder|
                # system 'node r.js -o build/javascripts/app.build.js';
            end
        end
        alias :included :registered
    end
end

::Middleman::Extensions.register(:run_grunt, runGrunt)

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

configure :build do

activate :minify_css
activate :run_grunt

activate :relative_assets

end