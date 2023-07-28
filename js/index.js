import { initReserve } from "./modules/initReserve.js";
import { initSlider } from "./modules/initSlider.js";
import { initService } from "./modules/initService.js";


const init = () => {
	initSlider();
	initService();
	initReserve();
}

window.addEventListener('DOMContentLoaded', init)