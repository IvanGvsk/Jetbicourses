sap.ui.define([
		"zjblessons/MarketplaceWorklist/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("zjblessons.MarketplaceWorklist.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);