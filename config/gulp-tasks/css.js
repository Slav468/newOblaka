import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import webpcss from 'gulp-webpcss';

export const css = () => {
	return (
		app.gulp
			.src(`${app.path.build.css}style.css`, {})
			.pipe(
				app.plugins.plumber(
					app.plugins.notify.onError({
						title: 'CSS',
						message: 'Error: <%= error.message %>',
					})
				)
			)
			.pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
			.pipe(
				app.plugins.if(
					app.isBuild,
					autoprefixer({
						grid: false,
						overrideBrowserslist: ['last 5 versions', '> 0.5%'],
						cascade: true,
					})
				)
			)
			/*
		.pipe(
			app.plugins.if(
				app.isWebP,
				app.plugins.if(
					app.isBuild,
					webpcss(
						{
							webpClass: ".webp",
							noWebpClass: ".no-webp"
						}
					)
				)
			)
		)
		*/
			.pipe(
				app.plugins.if(
					app.isBuild,
					cleanCss({
						format: 'beautify',
						level: {
							1: {
								tidySelectors: false,
							},
						},
					})
				)
			)
			.pipe(app.gulp.dest(app.path.build.css))
			.pipe(
				app.plugins.if(
					app.isBuild,
					cleanCss({
						level: {
							1: {
								tidySelectors: false,
							},
						},
					})
				)
			)
			.pipe(app.plugins.rename({ suffix: '.min' }))
			.pipe(app.gulp.dest(app.path.build.css))
	);
};