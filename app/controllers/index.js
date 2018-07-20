var localyticsHyperloop = require('localytics-hyperloop');
localyticsHyperloop.init('7a8eb22cc11b339ff8547c7-0ba94a74-263e-11e8-c2f3-007c928ca240');

var appInboxView = localyticsHyperloop.getAppInboxView();

$.index.open();
$.appInboxContainerView.add(appInboxView);

/*
 * Event Listeners
 * - General Tab
 */

function doTagEventBtnClick() {
	localyticsHyperloop.tagEvent("test_event", {
		'test_event_data': String('Hello!')
	});
	alert('Test event sent! Check Localytics dashboard for "test_event".');
}

function doTagScreenBtnClick() {
	localyticsHyperloop.tagScreen("test_screen_tag");
	alert('Test screen tagged! Check Localytics dashboard for "test_screen_tag".');
}

function doSetProfileBtnClick() {
	localyticsHyperloop.setProfileAttribute("test_profile_attribute", "This is a test attribute.");
	alert('Test profile attribute added! Check Localytics dashboard for "test_profile_attribute".');
}

function doSetCustomerIdBtnClick() {
	localyticsHyperloop.setCustomerId('123456');
	alert('Customer ID set!');
}

function doSetFirstNameBtnClick() {
	localyticsHyperloop.setFirstName('John');
	alert('First name set!');
}

function doSetLastNameBtnClick() {
	localyticsHyperloop.setLastName('Doe');
	alert('Last name set!');
}

function doSetFullNameBtnClick() {
	localyticsHyperloop.setFullName('Mr. John Doe');
	alert('Full name set!');
}

function doSetEmailAddressBtnClick() {
	localyticsHyperloop.setEmailAddress('samuel.marinov@centrevilletech.com');
	alert('Email address set!');
}

/*
 * Event Listeners
 * - App Inbox Tab
 */

function doReloadInboxBtnClick() {
	if (OS_IOS) {
		appInboxView.reload(function () {
			alert('Reloaded the AppInbox successfully!');
		});
		// appInboxView.reload();
	} else {
		appInboxView.reload(function () {
			alert('Reloaded the AppInbox successfully!');
		});
	}
}

function doUnreadCountDialogShow()
{
	alert(localyticsHyperloop.getInboxUnreadCount());
}

/*
 * Event Listeners
 * - Misc Tab
 */

function doUploadBtnClick() {
	localyticsHyperloop.upload();
	alert('Hit the Upload method!');
}

function doStartAppInboxBackgroundServiceBtnClick() {
	if (OS_IOS) {
		localyticsHyperloop.startAppInboxBackgroundService();
		alert('Started the background service!');
	} else {
		alert('Not supported on Android!');
	}
}

function doStopAppInboxBackgroundServiceBtnClick() {
	if (OS_IOS) {
		localyticsHyperloop.stopAppInboxBackgroundService();
		alert('Stopped the background service!');
	} else {
		alert('Not supported on Android!');
	}
}
