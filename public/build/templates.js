angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("controller/view.html","<ion-view view-title=\"Dashboard\">\r\n  <ion-content scroll=\"false\" style=\"width: 100%; height: 100%;\">\r\n    <div gamepad gamepad-id=\"1\" class=\"controller\">\r\n    	<div class=\"controller-body\">\r\n    		<div class=\"d-pad-circle\">\r\n    			<div class=\"d-pad-vert\">\r\n    				<div class=\"top arrow\"></div>\r\n    				<div class=\"d-pad-middle-circle\"></div>\r\n    				<div class=\"bottom arrow\"></div>\r\n    			</div>\r\n    			<div class=\"d-pad-hor\">\r\n    				<div class=\"left arrow\"></div>\r\n    				<div class=\"right arrow\"></div>\r\n    			</div>\r\n    		</div>\r\n    		<div class=\"button-circle\">\r\n    			<div class=\"button-group top\">\r\n    				<div class=\"blue action press\" data-gamepad-button=\"1\">\r\n\r\n    				</div>\r\n    				<div class=\"green action press\" data-gamepad-button=\"2\">\r\n\r\n    				</div>\r\n    			</div>\r\n    			<div class=\"button-group bottom\">\r\n    				<div class=\"yellow action press\" data-gamepad-button=\"3\">\r\n\r\n    				</div>\r\n    				<div class=\"red action press\" data-gamepad-button=\"4\">\r\n\r\n    				</div>\r\n    			</div>\r\n    		</div>\r\n    		<div class=\"select-button\">\r\n    			<div class=\"diag-button press\" data-gamepad-button=\"5\">\r\n\r\n    			</div>\r\n    		</div>\r\n    		<div class=\"start-button\">\r\n    			<div class=\"diag-button press\" data-gamepad-button=\"6\">\r\n\r\n    			</div>\r\n    		</div>\r\n    		<div class=\"logo\">\r\n    			<div class=\"icon\">\r\n    				<div class=\"top set\"></div>\r\n    				<div class=\"bottom set\"></div>\r\n    			</div>\r\n    			<div class=\"text\">\r\n    				<span class=\"main\">SUPER NINTENDO</span>\r\n    				<span class=\"sub\">ENTERTAINMENT SYSTEM</span>\r\n    				<span class=\"sub-bg\"></span>\r\n    			</div>\r\n    		</div>\r\n    	</div>\r\n    	<div class=\"lb bumper press\" data-gamepad-button=\"7\">\r\n    	</div>\r\n    	<div class=\"rb bumper press\" data-gamepad-button=\"8\"></div>\r\n    	<div class=\"controller-shine\"></div>\r\n    </div>\r\n\r\n    <div virtual-joystick style=\"height: 100%; width: 100%; position: relative\">test</div>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("dashboard/main.html","<ion-view view-title=\"Dashboard\">\r\n  <ion-content>\r\n    <div class=\"row dashboard\">\r\n      <div class=\"col\">\r\n        <button class=\"button button-light\">\r\n          <i class=\"ion-wrench\"></i><br>\r\n          Settings\r\n        </button>\r\n\r\n      </div>\r\n      <div class=\"col\">\r\n        <button class=\"button button-light\" ui-sref=\"controller\">\r\n          <i class=\"ion-ios-game-controller-b\"></i><br>\r\n          Controller\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n");}]);