<?php

	/**
	 * Redirects to the error handling page
	 * @param string $type
	 * @param object $dbhandler
	 * @return void
	 */
	function showDbError($type, $msg) {
		if (DEBUG === true) {
			switch($type) {
				case 'connect':
				case 'query':
					echo $msg;
				break;
				default:
					echo 'There was an unknown error while communicating with the database';
				break;
			}
		}
		else {
			file_put_contents(ERROR_LOG, PHP_EOL . (new DateTime())->format('Y-m-d H:i:s') . ' : ' . $msg, FILE_APPEND);
			header('location: error.php?type=db&detail=' . $type);
		}
		exit();
	}


	/**
	 * Gets the DB connection
	 * @return PDO The DB Connection
	 */
	function getDatabase() {
		try {
			$db = new PDO('mysql:host=' . DB_HOST .';dbname=' . DB_NAME . ';charset=utf8mb4', DB_USER, DB_PASS);
			$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
			return $db;
		} catch (Exception $e) {
			showDbError('connect', $e->getMessage());
		}
	}

// EOF