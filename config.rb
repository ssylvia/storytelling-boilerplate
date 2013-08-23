# Middleman Config

require "arcgis-framework"

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

configure :build do

activate :minify_html
activate :minify_css
activate :minify_javascript

activate :relative_assets

end