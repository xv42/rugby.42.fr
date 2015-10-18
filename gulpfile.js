var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('sass', function () {
	gulp.src('./styles/*.scss')
		.pipe(sass({
			outputStyle: 'compressed',
			outFile: 'style.css'
		}))
		.pipe(gulp.dest('./styles'))
})

gulp.task('sass:watch', function () {
	gulp.watch('./styles/*.scss', ['sass'])
})

gulp.task('build', ['sass'])
gulp.task('default', ['watch'])
