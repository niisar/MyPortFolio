'use strict';
// var mainDocument = $(document);

// init foundation
// $(document).foundation();

// Init all plugin when document is ready 
$(document).on('ready', function () {
	$.ajaxSetup({
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	});

	$('#submit-email').click(function () {
		var resp = grecaptcha.getResponse();
		// $.post("https://cmn.azurewebsites.net/api/ValidateReCaptcha?code=S/WIL1K7tgSlW/aCJyLLHDwPdZHYpaNGN8FKq3LX129UgNwooTenUA==", { 'gRecaptchaResponse': resp })
		// 	.done(function (data) {
		// 		console.log(data)
		// 		if (data.success) {
		// 			console.log('success')
		// 			$('form.send_email_form').submit();
		// 		}
		// 	});

		$.ajax({
			type: 'POST',
			url: 'https://cmn.azurewebsites.net/api/ValidateReCaptcha?code=S/WIL1K7tgSlW/aCJyLLHDwPdZHYpaNGN8FKq3LX129UgNwooTenUA==',
			contentType: 'application/json; charset=utf-8',
			dataType: 'json',
			data: JSON.stringify({ 'gRecaptchaResponse': resp})
		});
	});

	$('#submit-message').click(function () {
		var resp = grecaptcha.getResponse();
		$.post("https://cmn.azurewebsites.net/api/ValidateReCaptcha?code=S/WIL1K7tgSlW/aCJyLLHDwPdZHYpaNGN8FKq3LX129UgNwooTenUA==", { 'gRecaptchaResponse': resp })
			.done(function (data) {
				console.log(data)
				if (data.success) {
					console.log('success')
					$('form.send_message_form').submit();
				}
			});

	});

	// 0. Init console to avoid error
	var method;
	var noop = function () { };
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});
	var contextWindow = $(window);
	var $root = $('html, body');
	while (length--) {
		method = methods[length];
		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}

	// 1. Background image as data attribut 
	var list = $('.bg-img');
	for (var i = 0; i < list.length; i++) {
		var src = list[i].getAttribute('data-image-src');
		list[i].style.backgroundImage = "url('" + src + "')";
		list[i].style.backgroundRepeat = "no-repeat";
		list[i].style.backgroundPosition = "center";
		list[i].style.backgroundSize = "cover";
	}
	// Background color as data attribut
	var list = $('.bg-color');
	for (var i = 0; i < list.length; i++) {
		var src = list[i].getAttribute('data-bgcolor');
		list[i].style.backgroundColor = src;
	}

	// 2. Init Coutdown clock
	try {
		// check if clock is initialised
		$('.clock-countdown').downCount({
			date: $('.site-config').attr('data-date'),
			offset: +10
		});
	}
	catch (error) {
		// Clock error : clock is unavailable
		console.log("clock disabled/unavailable");
	}

	// 3. Show/hide menu when icon is clicked
	var menuItems = $('.all-menu-wrapper .nav-link');
	var menuIcon = $('.menu-icon, #navMenuIcon');
	var menuBlock = $('.all-menu-wrapper');
	var reactToMenu = $('.page-main, .navbar-sidebar, .page-cover')
	var menuLinks = $(".navbar-mainmenu a, .navbar-sidebar a");
	// Menu icon clicked
	menuIcon.on('click', function () {
		menuIcon.toggleClass('menu-visible');
		menuBlock.toggleClass('menu-visible');
		menuItems.toggleClass('menu-visible');
		reactToMenu.toggleClass('menu-visible');
		return false;
	});

	// Hide menu after a menu item clicked
	menuLinks.on('click', function () {
		menuIcon.removeClass('menu-visible');
		menuBlock.removeClass('menu-visible');
		menuItems.removeClass('menu-visible');
		reactToMenu.removeClass('menu-visible');
		return true;
	});

	// 4 Carousel Slider
	new Swiper('.carousel-swiper-beta-demo .swiper-container', {
		pagination: '.carousel-swiper-beta-demo .items-pagination',
		paginationClickable: '.carousel-beta-alpha-demo .items-pagination',
		nextButton: '.carousel-swiper-beta-demo .items-button-next',
		prevButton: '.carousel-swiper-beta-demo .items-button-prev',
		loop: true,
		grabCursor: true,
		centeredSlides: true,
		autoplay: 5000,
		autoplayDisableOnInteraction: false,
		slidesPerView: 1,
		spaceBetween: 0,
		breakpoints: {
			1024: {
				slidesPerView: 1,
			},
			800: {
				slidesPerView: 1,
				spaceBetween: 0
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 0
			},
			440: {
				slidesPerView: 1,
				spaceBetween: 0
			}
		}
	});
	// 4.1 Slideshow slider
	var imageList = $('.slide-show .img');
	var imageSlides = [];
	for (var i = 0; i < imageList.length; i++) {
		var src = imageList[i].getAttribute('data-src');
		imageSlides.push({ src: src });
	}
	$('.slide-show').vegas({
		delay: 5000,
		shuffle: true,
		slides: imageSlides,
		animation: ['kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight']
	});

	// 5. Init video background
	var videoBg = $('.video-container video, .video-container object');

	// 6. Prepare content for animation
	$('.section .content .anim.anim-wrapped').wrap("<span class='anim-wrapper'></span>");

	// 7. Init fullPage.js plugin
	var pageSectionDivs = $('.page-fullpage .section');
	var headerLogo = $('.header-top .logo');
	var bodySelector = $('body');
	var sectionSelector = $('.section');
	var headerContainer = $('.hh-header');
	var slideElem = $('.slide');
	var arrowElem = $('.p-footer .arrow-d');
	var pageElem = $('.section');
	var pageSections = [];
	var pageAnchors = [];
	var nextSectionDOM;
	var nextSection;
	var fpnavItem;
	var mainPage = $('#mainpage');
	var sendEmailForm = $('.send_email_form');
	var sendMessageForm = $('.send_message_form');
	var scrollOverflow = true;
	var css3 = true;
	// disable scroll overflow on small device
	if (contextWindow.width() < 601) {
		scrollOverflow = false;
		css3 = false;
	}
	if (contextWindow.height() < 480) {
		scrollOverflow = false;
		css3 = false;
	}
	else {
		scrollOverflow = true;
	}
	// Get sections name
	for (var i = 0; i < pageSectionDivs.length; i++) {
		pageSections.push(pageSectionDivs[i]);
	}
	window.asyncEach(pageSections, function (pageSection, cb) {
		var anchor = pageSection.getAttribute('data-section');
		pageAnchors.push(anchor + "");
		cb();
	}, function (err) {
		// Init plugin
		if (mainPage.width()) {
			// config fullpage.js
			mainPage.fullpage({
				menu: '#qmenu',
				anchors: pageAnchors,
				verticalCentered: false,
				css3: css3,
				navigation: true,
				responsiveWidth: 601,
				responsiveHeight: 480,
				scrollOverflow: scrollOverflow,
				normalScrollElements: '.section .scrollable',
				scrollOverflowOptions: {
					click: true,
					submit: true,
				},
				afterRender: function () {
					// Fix video background
					videoBg.maximage('maxcover');

					// Fix for internet explorer : adjust content height
					// Detect IE 6-11
					var isIE = /*@cc_on!@*/false || !!document.documentMode;
					if (isIE) {
						var contentColumns = $('.section .content .c-columns');
						contentColumns.height(contextWindow.height())
						for (var i = 0; i < contentColumns.length; i++) {
							if (contentColumns[i].height <= contextWindow.height()) {
								contentColumns[i].style.height = "100vh";
							}
						}
					}

					// init contact form
					// Default server url
					var newsletterServerUrl = './ajaxserver/serverfile.php';
					var messageServerUrl = './ajaxserver/serverfile.php';

					// Use form define action attribute
					if (sendEmailForm.attr('action') && (sendEmailForm.attr('action')) != '') {
						newsletterServerUrl = sendEmailForm.attr('action');
					}
					if (sendMessageForm.attr('action') && (sendMessageForm.attr('action') != '')) {
						messageServerUrl = sendMessageForm.attr('action');
					}

					sendEmailForm.initForm({
						serverUrl: newsletterServerUrl,
					});
					sendMessageForm.initForm({
						serverUrl: messageServerUrl,
					});

				},
				afterResize: function () {
					var pluginContainer = $(this);
					$.fn.fullpage.reBuild();
				},
				onLeave: function (index, nextIndex, direction) {
					// Behavior when a full page is leaved
					arrowElem.addClass('gone');
					pageElem.addClass('transition');
					slideElem.removeClass('transition');
					pageElem.removeClass('transition');
				},
				afterLoad: function (anchorLink, index) {
					// Behavior after a full page is loaded
					// hide or show clock
					if ($('.section.active').hasClass('hide-clock')) {
						headerContainer.addClass('gone');
					} else {
						headerContainer.removeClass('gone');
					}
				}
			});

		}
	});
	// Scroll to fullPage.js next/previous section
	$('.scrolldown a, .scroll.down').on('click', function () {
		try {
			// fullpage scroll
			$.fn.fullpage.moveSectionDown();
		} catch (error) {
			// normal scroll
			$root.animate({
				scrollTop: window.innerHeight
			}, 400, function () {
			});
		}

	});

	// 8. Hide some ui on scroll
	var scrollHeight = $(document).height() - contextWindow.height();
	contextWindow.on('scroll', function () {
		var scrollpos = $(this).scrollTop();
		var siteHeaderFooter = $('.page-footer, .page-header');

		// if (scrollpos > 10 && scrollpos < scrollHeight - 100) {
		if (scrollpos > 100) {
			siteHeaderFooter.addClass("scrolled");
		}
		else {
			siteHeaderFooter.removeClass("scrolled");
		}
	});


	// 9. Page Loader : hide loader when all are loaded
	contextWindow.on('load', function () {
		$('#page-loader').addClass('p-hidden');
		$('.section').addClass('anim');
	});

	// 10. cursor position
	var shadowBall = $(".cursor-ball");
	$(".body-page").mousemove(function (e) {
		shadowBall.css("transform", "translateX(" + e.pageX + "px)");
		// shadowBall.css("transform", "translate(" + e.pageX + "px," + e.pageY +"px)");
		// shadowBall.posx.value = e.pageX;
		// shadowBall.posy.value = e.pageY;
	});

});

// nisar
var config = {
	databaseURL: "https://cmsdb-e60f6.firebaseio.com"
};
Array.prototype.contains = function (obj) {
	var i = this.length;
	while (i--) {
		if (this[i].substring(0, 6) === obj) {
			return this[i];
		}
	}
	return false;
}

firebase.initializeApp(config);
function list() {
	firebase.database().ref('portfolio/nisar').once('value').then(function (snapshot) {
		snapshot.forEach(function (userSnapshot) {
			var data = userSnapshot.val();
			var domElement = document.getElementsByClassName('cmsdb');
			var domElementList = [];
			[].forEach.call(domElement, function (el) { domElementList.push(el) });
			if (domElementList) {
				domElementList.forEach(x => {
					var className = x.className.split(' ').contains('cmsdb-');
					var classNameSplit = className.split('-');
					var foundKey = '';
					var currentDataScope = '';
					if (classNameSplit.length == 2) {
						currentDataScope = data;
						foundKey = Object.keys(currentDataScope).find(x => x === classNameSplit[1])
						if (foundKey) {
							x.innerHTML = data[foundKey];
						}
					} else if (classNameSplit.length == 3) {
						currentDataScope = data[classNameSplit[1]];
						foundKey = Object.keys(currentDataScope).find(x => x === classNameSplit[2])
						if (foundKey) {
							x.innerHTML = currentDataScope[foundKey];
						}
					} else if (classNameSplit.length == 4) {
						currentDataScope = data[classNameSplit[1]][classNameSplit[2]];
						foundKey = Object.keys(currentDataScope).find(x => x === classNameSplit[3])
						if (foundKey) {
							x.innerHTML = currentDataScope[foundKey];
						}
					} else if (classNameSplit.length == 5) {
						currentDataScope = data[classNameSplit[1]][classNameSplit[2]][classNameSplit[3]];
						foundKey = Object.keys(currentDataScope).find(x => x === classNameSplit[4])
						if (foundKey) {
							x.innerHTML = currentDataScope[foundKey];
						}
					} else if (classNameSplit.length == 6) {
						currentDataScope = data[classNameSplit[1]][classNameSplit[2]][classNameSplit[3]][classNameSplit[4]];
						foundKey = Object.keys(currentDataScope).find(x => x === classNameSplit[5])
						if (foundKey) {
							x.innerHTML = currentDataScope[foundKey];
						}
					} else if (classNameSplit.length == 7) {
						currentDataScope = data[classNameSplit[1]][classNameSplit[2]][classNameSplit[3]][classNameSplit[4]][classNameSplit[5]];
						foundKey = Object.keys(currentDataScope).find(x => x === classNameSplit[6])
						if (foundKey) {
							x.innerHTML = currentDataScope[foundKey];
						}
					} else if (classNameSplit.length == 8) {
						currentDataScope = data[classNameSplit[1]][classNameSplit[2]][classNameSplit[3]][classNameSplit[4]][classNameSplit[5]][classNameSplit[6]];
						foundKey = Object.keys(currentDataScope).find(x => x === classNameSplit[7])
						if (foundKey) {
							x.innerHTML = currentDataScope[foundKey];
						}
					}



				})
			}
			console.log(data);
		});
	});
}
list();