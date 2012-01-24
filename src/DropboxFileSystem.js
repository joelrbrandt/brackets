/*
 * Copyright 2011 Adobe Systems Incorporated. All Rights Reserved.
 */
define(function(require, exports, module) {

    var lastError = 0;
    function getLastError() {
        return lastError;
    }
    exports.getLastError = getLastError;
    
    // Error values. These MUST be in sync with the error values
    // at the top of brackets_extensions.mm.
    
    /**
     * @constant No error.
     */
    var NO_ERROR                    = 0;
    exports.NO_ERROR = NO_ERROR;
    
    /**
     * @constant Unknown error occurred.
     */
    var ERR_UNKNOWN                 = 1;
    exports.ERR_UNKNOWN = ERR_UNKNOWN;
    
    /**
     * @constant Invalid parameters passed to function.
     */
    var ERR_INVALID_PARAMS          = 2;
    exports.ERR_INVALID_PARAMS = ERR_INVALID_PARAMS;

    /**
     * @constant File or directory was not found.
     */
    var ERR_NOT_FOUND               = 3;
    exports.ERR_NOT_FOUND = ERR_NOT_FOUND;
    
    /**
     * @constant File or directory could not be read.
     */
    var ERR_CANT_READ               = 4;
    exports.ERR_CANT_READ = ERR_CANT_READ;
    
    /**
     * @constant An unsupported encoding value was specified.
     */
    var ERR_UNSUPPORTED_ENCODING    = 5;
    exports.ERR_UNSUPPORTED_ENCODING = ERR_UNSUPPORTED_ENCODING;
    
    /**
     * @constant File could not be written.
     */
    var ERR_CANT_WRITE              = 6;
    exports.ERR_CANT_WRITE = ERR_CANT_WRITE;
    
    /**
     * @constant Target directory is out of space. File could not be written.
     */
    var ERR_OUT_OF_SPACE            = 7;
    exports.ERR_OUT_OF_SPACE = ERR_OUT_OF_SPACE;
    
    /**
     * @constant Specified path does not point to a file.
     */
    var ERR_NOT_FILE                = 8;
    exports.ERR_NOT_FILE = ERR_NOT_FILE;
    
    /**
     * @constant Specified path does not point to a directory.
     */
    var ERR_NOT_DIRECTORY           = 9;
    exports.ERR_NOT_DIRECTORY = ERR_NOT_DIRECTORY;
    
    /**
     * Display the OS File Open dialog, allowing the user to select
     * files or directories.
     *
     * @param {boolean} allowMultipleSelection If true, multiple files/directories can be selected.
     * @param {boolean} chooseDirectory If true, only directories can be selected. If false, only 
     *        files can be selected.
     * @param {string} title Tile of the open dialog.
     * @param {string} initialPath Initial path to display in the dialog. Pass NULL or "" to 
     *        display the last path chosen.
     * @param {Array.<string>} fileTypes Array of strings specifying the selectable file extensions. 
     *        These strings should not contain '.'. This parameter is ignored when 
     *        chooseDirectory=true.
     * @param {function(err, selection)} callback Asynchronous callback function. The callback gets two arguments 
     *        (err, selection) where selection is an array of the names of the selected files.
     *        Possible error values:
     *          NO_ERROR
     *          ERR_INVALID_PARAMS
     *
     * @return None. This is an asynchronous call that sends all return information to the callback.
     */
    function showOpenDialog(allowMultipleSelection, chooseDirectory, title, initialPath, fileTypes, callback) {
	lastError = ERR_UNKNOWN;
	result = false;
        callback(getLastError(), result);
    }
    exports.showOpenDialog = showOpenDialog;
    
    /**
     * Reads the contents of a directory. 
     *
     * @param {string} path The path of the directory to read.
     * @param {function(err, files)} callback Asynchronous callback function. The callback gets two arguments 
     *        (err, files) where files is an array of the names of the files
     *        in the directory excluding '.' and '..'.
     *        Possible error values:
     *          NO_ERROR
     *          ERR_UNKNOWN
     *          ERR_INVALID_PARAMS
     *          ERR_NOT_FOUND
     *          ERR_CANT_READ
     *                 
     * @return None. This is an asynchronous call that sends all return information to the callback.
     */
    function readdir(path, callback) {
	$.ajax({
	    url: "/fs/readdir",
	    data: {p : path},
	    dataType: "json",
	    success: function(data) { 
		lastError = NO_ERROR;
		callback(getLastError(), data);
	    },
	    error: function(jqXHR, textStatus, errorThrown) { 
		lastError = ERR_NOT_FOUND;
		callback(getLastError(), null);
	    }
	});	
    }
    exports.readdir = readdir;
    
    /**
     * Get information for the selected file or directory.
     *
     * @param {string} path The path of the file or directory to read.
     * @param {function(err, stats)} callback Asynchronous callback function. The callback gets two arguments 
     *        (err, stats) where stats is an object with isFile() and isDirectory() functions.
     *        Possible error values:
     *          NO_ERROR
     *          ERR_UNKNOWN
     *          ERR_INVALID_PARAMS
     *          ERR_NOT_FOUND
     *                 
     * @return None. This is an asynchronous call that sends all return information to the callback.
     */
    function stat(path, callback) {
	$.ajax({
	    url: "/fs/stat",
	    data: {p : path},
	    dataType: "json",
	    success: function(data) { 
		lastError = NO_ERROR; 
		var result = {
		    isFile: function() {
			console.log("checking if file: " + path);
			return !data.is_dir;
		    },
		    isDirectory: function() {
			console.log("checking if dir: " + path);
			return data.is_dir;
		    }
		}
		callback(getLastError(), result);
	    },
	    error: function(jqXHR, textStatus, errorThrown) { 
		lastError = ERR_NOT_FOUND;
		callback(getLastError(), null);
	    }
	});
    }
    exports.stat = stat;
    
    /**
     * Reads the entire contents of a file. 
     *
     * @param {string} path The path of the file to read.
     * @param {string} encoding The encoding for the file. The only supported encoding is 'utf8'.
     * @param {function(err, data)} callback Asynchronous callback function. The callback gets two arguments 
     *        (err, data) where data is the contents of the file.
     *        Possible error values:
     *          NO_ERROR
     *          ERR_UNKNOWN
     *          ERR_INVALID_PARAMS
     *          ERR_NOT_FOUND
     *          ERR_CANT_READ
     *          ERR_UNSUPPORTED_ENCODING
     *                 
     * @return None. This is an asynchronous call that sends all return information to the callback.
     */
    function readFile(path, encoding, callback) {
	$.ajax({
	    url: "/fs/readfile",
	    data: {p : path},
	    dataType: "text",
	    success: function(data) { 
		lastError = NO_ERROR;
		callback(getLastError(), data);
	    },
	    error: function(jqXHR, textStatus, errorThrown) { 
		lastError = ERR_NOT_FOUND;
		callback(getLastError(), null);
	    }
	});	
    }
    exports.readFile = readFile;
    
    /**
     * Write data to a file, replacing the file if it already exists. 
     *
     * @param {string} path The path of the file to write.
     * @param {string} filedata The data to write to the file.
     * @param {string} encoding The encoding for the file. The only supported encoding is 'utf8'.
     * @param {function(err)} callback Asynchronous callback function. The callback gets one argument (err).
     *        Possible error values:
     *          NO_ERROR
     *          ERR_UNKNOWN
     *          ERR_INVALID_PARAMS
     *          ERR_UNSUPPORTED_ENCODING
     *          ERR_CANT_WRITE
     *          ERR_OUT_OF_SPACE
     *                 
     * @return None. This is an asynchronous call that sends all return information to the callback.
     */
    function writeFile(path, filedata, encoding, callback) {
	// TODO: Maybe do something with encoding?
	// TODO: Progress bar? Make sure we don't send an enormous file?
	$.ajax({
	    url: "/fs/writefile",
	    type: "POST",
	    data: {p : path, d: filedata},
	    dataType: "json",
	    success: function(data) {
		console.log("wrote file, here's the proof:");
		console.log(data);
		lastError = NO_ERROR;
		callback(getLastError(), data);
	    },
	    error: function(jqXHR, textStatus, errorThrown) { 
		lastError = ERR_NOT_FOUND;
		callback(getLastError(), null);
	    }
	});	

    }
    exports.writeFile = writeFile;
    
    /**
     * Set permissions for a file or directory.
     *
     * @param {string} path The path of the file or directory
     * @param {number} mode The permissions for the file or directory, in numeric format (ie 0777)
     * @param {function(err)} callback Asynchronous callback function. The callback gets one argument (err).
     *        Possible error values:
     *          NO_ERROR
     *          ERR_UNKNOWN
     *          ERR_INVALID_PARAMS
     *          ERR_CANT_WRITE
     *
     * @return None. This is an asynchronous call that sends all return information to the callback.
     */
     function chmod(path, mode, callback) {
        SetPosixPermissions(path, mode);
        callback(getLastError());
    }
    exports.chmod = chmod;

    /**
     * Delete a file.
     *
     * @param {string} path The path of the file to delete
     * @param {function(err)} callback Asynchronous callback function. The callback gets one argument (err).
     *        Possible error values:
     *          NO_ERROR
     *          ERR_UNKNOWN
     *          ERR_INVALID_PARAMS
     *          ERR_NOT_FOUND
     *          ERR_NOT_FILE
     *
     * @return None. This is an asynchronous call that sends all return information to the callback.
     */
    function unlink(path, callback) {
        // Unlink can only delete files
        if (IsDirectory(path)) {
            callback(exports.ERR_NOT_FILE);
            return;
        }
        DeleteFileOrDirectory(path);
        callback(getLastError());
    }
    exports.unlink = unlink;

});
