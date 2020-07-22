<?php
/**
 * @file htdocs/index.php
 * This file is the entry point for all requests.
 *
 */
ini_set('error_reporting', E_ALL);
ini_set('log_errors', 1);
ini_set('error_log', '/var/www/vhosts/jackbrown.io/error.log');

require_once '/var/www/vhosts/jackbrown.io/vendor/autoload.php';
require_once '/var/www/vhosts/jackbrown.io/src/Controllers/PublicController.php';

use JackBradford\Disphatch\Router\Router;
use Illuminate\Database\Capsule\Manager as Capsule;

$config = '/var/www/vhosts/jackbrown.io/disphatch.conf.json';
$router = Router::init($config);
$router->routeAndExecuteRequest();
error_log('Done.');

