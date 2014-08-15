var gulp    = require( 'gulp' ),
    stylus  = require( 'gulp-stylus' ),
    nib     = require( 'nib' ),
    watch   = require( 'gulp-watch' ),
    vulcan  = require( 'gulp-vulcanize' );
    
var paths = {
    style: './elements/*.styl'
}

function compileCSS( files ) {
    return files
        .pipe( stylus( { use: [ nib() ] } ) )
        .pipe( gulp.dest( './elements/' ) );
}

gulp.task( 'default', function() {

    compileCSS( gulp.src( paths.style ) );

    gulp.src( './index.html' )
        .pipe( vulcan( { 
            dest: 'build', 
            inline: true, 
            strip: true 
        } ) );


} );

gulp.task( 'watch', function() {
    watch( { glob: paths.style }, compileCSS );
} );