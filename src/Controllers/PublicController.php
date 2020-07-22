<?php

namespace JackBradford\jackbrown;
use JackBradford\Disphatch\Controllers\Controller;
use JackBradford\Disphatch\Controllers\IRequestController;
use JackBradford\Disphatch\Controllers\ControllerResponse;
use JackBradford\Disphatch\Etc\Activation;
use JackBradford\Disphatch\Etc\User as DisphatchUser;
use Illuminate\Support\Facades\DB;

class PublicController extends Controller implements IRequestController {

    /**
     * @method PublicController::home()
     * TODO; Fetch data required by the homepage.
     *
     * @return ControllerResponse
     */
    public function home() {

        $success = true;
        $message = '';
        $returnData = (object) [];
        return new ControllerResponse($success, $message, $returnData);
    }

    private function inDevMode() {

        return ($this->config->getDirective('dev') === 1) ? true : false;
    }

    private function loadSchemaFile() {

        $path = ($this->inDevMode())
            ? '/var/www/vhosts/plantlo.gg.dev/src/schema/schema.sql'
            : '/var/www/vhosts/plantlo.gg/src/schema/schema.sql';
        return file_get_contents($path);
    }

    private function getSchemaTablesByInsertOrder() {

        $schema = $this->loadSchemaFile();
        if ($schema !== false) {

            $matches = [];
            preg_match_all('/^CREATE TABLE (\S*)/msu', $schema, $matches);
            // Now $matches[1] contains a numeric array of all tables in order.
            if ($this->inDevMode()) {

                $testFile = '/var/www/vhosts/plantlo.gg.dev/array-test.txt';
                $description = 'Matches for `CREATE TABLE` in schema file.';
                file_put_contents($testFile, print_r($matches, true));
                file_put_contents($testFile, $description, FILE_APPEND);
            }
        }
        else {

            throw new \Exception('Could not load schema.');
        }
        return $matches[1];
    }

    /**
     * @method PublicController::validateInput()
     * Validate a user input.
     *
     * @param string $_POST['data']
     * A JSON-encoded object containing the following keys:
     * `validator`  The validator with which to check the input.
     * `userInput`  The user's input.
     *
     * @return ControllerResponse
     */
    public function validateInput() {

        $data = $this->getInput();
        $validator = new Validator($this->userMgr, $this->db);
        $result = $validator->validate($data->validator, $data->userInput);
        return new ControllerResponse(
            $result->success,
            $result->message,
            $result->data,
        );
    }

    /**
     * @method PublicController::testArray
     * Print the contents of an array to a file for debugging purposes.
     *
     * @param array $array
     * The array to test.
     *
     * @param str $file
     * The full path of the test file.
     *
     * @param str $desc
     * A description to be appended to the test file.
     *
     * @return void
     */
    private function testArray($array, $file, $desc) {

        if ($this->inDevMode()) {

            file_put_contents($file, print_r($array, true));
            file_put_contents($file, $desc, FILE_APPEND);
        }
    }
}

