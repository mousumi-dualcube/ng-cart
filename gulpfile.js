var gulp = require( "gulp" ),
    uglify = require( "gulp-uglify" ),
    rename = require( "gulp-rename" ),
    watch = require( "gulp-watch" ),
    notify = require( "gulp-notify" ),
    sass = require( "gulp-sass" ),
    concat = require( "gulp-concat" );

var appJsPath = "./app/js/new/",
	appJsDistPath = "app/js/dest";
var appCssPath = "./app/styles/new/",
	appCssDistPath = "app/styles/dest";

var appJsFiles = [
	appJsPath + "newFn.js",
	appJsPath + "newFnN.js"
];

var appCssFiles = [
	appCssPath + "about.scss",
	appCssPath + "home.scss",
	appCssPath + "styles.scss"
];

gulp.task( "appJs", function() {
	return gulp.src( appJsFiles )
		.pipe( concat("common.js") )
		.pipe( gulp.dest( appJsDistPath ) )
		.pipe( rename({
  			suffix: ".min"
		}) )
		.pipe( uglify() )
		.pipe( gulp.dest( appJsDistPath ) )
		.pipe( notify( "CSS task completed." ) );
});


gulp.task( "appCss", function() {
	return gulp.src( appCssFiles )
		.pipe( concat( "common.min.scss" ) )
		// Use this for debugging purpose if you want check all concatenated less files
		// .pipe( gulp.dest( psCorePath + "www/Vendor/css/" ) )
		
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest( appCssDistPath ))
		.pipe( notify( "JS task completed." ) );
});

gulp.task( "watch", function() {
	gulp.watch( appJsFiles, [ "appJs" ] );
	gulp.watch( appCssFiles, [ "appCss" ] );
});
gulp.task( "default", [

	"appJs",
	"appCss",
	"watch"

]);