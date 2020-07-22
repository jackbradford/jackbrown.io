#!/bin/bash

# This script is responsible for deploying the app to the production
# server after a push via git.


# TODO:
# The index.php file needs to be updated
# The disphatch config file needs to be updated.
#   -paths
#   -dev mode

cd /var/www/vhosts/jackbrown.io
sass --update /var/www/vhosts/jackbrown.io/htdocs/css/scss/style.scss:/var/www/vhosts/jackbrown.io/htdocs/css/style.css
sudo cp /var/www/vhosts/jackbrown.io/config/jackbrown.io.conf /etc/apache2/sites-available/jackbrown.io.conf
sudo cp /var/www/vhosts/jackbrown.io/config/jackbrown.io-le-ssl.conf /etc/apache2/sites-available/jackbrown.io-le-ssl.conf
sudo systemctl restart apache2
npm run build-prod

