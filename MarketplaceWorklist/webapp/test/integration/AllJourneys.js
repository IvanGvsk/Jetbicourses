/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"zjblessons/MarketplaceWorklist/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zjblessons/MarketplaceWorklist/test/integration/pages/Worklist",
	"zjblessons/MarketplaceWorklist/test/integration/pages/Object",
	"zjblessons/MarketplaceWorklist/test/integration/pages/NotFound",
	"zjblessons/MarketplaceWorklist/test/integration/pages/Browser",
	"zjblessons/MarketplaceWorklist/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zjblessons.MarketplaceWorklist.view."
	});

	sap.ui.require([
		"zjblessons/MarketplaceWorklist/test/integration/WorklistJourney",
		"zjblessons/MarketplaceWorklist/test/integration/ObjectJourney",
		"zjblessons/MarketplaceWorklist/test/integration/NavigationJourney",
		"zjblessons/MarketplaceWorklist/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});