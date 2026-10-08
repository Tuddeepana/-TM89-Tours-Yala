import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { D as Car, O as Calendar, a as User, g as MapPin, k as CalendarRange, p as MessageSquare, w as Clock } from "../_libs/lucide-react.mjs";
import { n as WhatsAppIcon } from "./SiteShell-ByHjhE1r.mjs";
import { i as tourMessage, n as customRideMessage, t as bookingMessage } from "./wa-BCN1mHSV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BookingForm-DnAetXB_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tourPricing = {
	"MINI CAR": 15e3,
	"SEDAN": 2e4,
	"KDH FLAT ROOF": 25e3,
	"KDH HIGH ROOF": 3e4
};
var vehicles = [
	"MINI CAR",
	"SEDAN",
	"MINI VAN",
	"KDH FLAT ROOF",
	"KDH HIGH ROOF"
];
var pickupLocations = [
	"Colombo Airport (BIA)",
	"Ella",
	"Tissamaharama"
];
var dropLocations = [
	"Colombo",
	"Negombo",
	"Sigiriya",
	"Dambulla",
	"Mount Lavinia / Dehivala",
	"Rathmalana",
	"Panadura",
	"Moratuwa",
	"Kalutara",
	"Beruwala",
	"Bentota",
	"Ahungalla",
	"Balapitiya",
	"Ambalangoda",
	"Hikkaduwa",
	"Galle",
	"Unawatuna",
	"Thalpe",
	"Habaraduwa",
	"Ahangama",
	"Weligama",
	"Mirissa",
	"Polhena",
	"Matara",
	"Thalalla",
	"Dikwella",
	"Hiriketiya",
	"Nilwella",
	"Tangalle",
	"Kalamatiya",
	"Hambantota",
	"Bundala",
	"Tissamaharama",
	"Kirinda",
	"Yala",
	"Kataragama",
	"Debarawewa",
	"Weerawila",
	"Kurunegala",
	"Kandalama",
	"Kandy",
	"Nuwara Eliya",
	"Adams Peak",
	"Awissawella",
	"Rathnapura",
	"Nanu Oya",
	"Ambewela",
	"Haputale",
	"Ella",
	"Nilaveli",
	"Trincomalee",
	"Polonnaruwa",
	"Anuradhapura",
	"Puttalam",
	"Wilpattu",
	"Sinharaja",
	"Embilipitiya",
	"Udawalawe",
	"Mattala",
	"Bandarawela",
	"Buttala",
	"Monaragala",
	"Potuvil",
	"Arugam Bay",
	"Ampara",
	"Akkaraipattu",
	"Kalmunai",
	"Batticaloa",
	"Eravur",
	"Kinniya",
	"Mutur",
	"Vavuniya",
	"Kilinochchi",
	"Jaffna",
	"Mannar",
	"Matale",
	"Balangoda",
	"Pelmadulla",
	"Godakawela",
	"Deniyaya",
	"Gal Oya",
	"Habarana",
	"Maduru Oya",
	"Badulla",
	"Bibile",
	"Kamburugamuwa",
	"Midigama",
	"Koggala",
	"Galle Fort",
	"Colombo Airport (BIA)"
];
var locations = Array.from(new Set([...pickupLocations, ...dropLocations]));
var ridePricing = {
	"Colombo Airport (BIA)": {
		"Colombo": {
			"MINI CAR": 5e3,
			"SEDAN": 6e3,
			"MINI VAN": 8e3,
			"KDH FLAT ROOF": 1e4,
			"KDH HIGH ROOF": 14e3
		},
		"Negombo": {
			"MINI CAR": 3e3,
			"SEDAN": 4e3,
			"MINI VAN": 6e3,
			"KDH FLAT ROOF": 8e3,
			"KDH HIGH ROOF": 1e4
		},
		"Sigiriya": {
			"MINI CAR": 15e3,
			"SEDAN": 18e3,
			"MINI VAN": 2e4,
			"KDH FLAT ROOF": 25e3,
			"KDH HIGH ROOF": 3e4
		},
		"Dambulla": {
			"MINI CAR": 13e3,
			"SEDAN": 15e3,
			"MINI VAN": 17e3,
			"KDH FLAT ROOF": 22e3,
			"KDH HIGH ROOF": 26e3
		},
		"Mount Lavinia / Dehivala": {
			"MINI CAR": 5e3,
			"SEDAN": 6e3,
			"MINI VAN": 7e3,
			"KDH FLAT ROOF": 9e3,
			"KDH HIGH ROOF": 12e3
		},
		"Rathmalana": {
			"MINI CAR": 5500,
			"SEDAN": 6500,
			"MINI VAN": 7e3,
			"KDH FLAT ROOF": 9e3,
			"KDH HIGH ROOF": 12e3
		},
		"Panadura": {
			"MINI CAR": 8e3,
			"SEDAN": 9e3,
			"MINI VAN": 1e4,
			"KDH FLAT ROOF": 15e3,
			"KDH HIGH ROOF": 18e3
		},
		"Moratuwa": {
			"MINI CAR": 6e3,
			"SEDAN": 7e3,
			"MINI VAN": 8e3,
			"KDH FLAT ROOF": 1e4,
			"KDH HIGH ROOF": 14e3
		},
		"Kalutara": {
			"MINI CAR": 9e3,
			"SEDAN": 1e4,
			"MINI VAN": 11e3,
			"KDH FLAT ROOF": 16e3,
			"KDH HIGH ROOF": 2e4
		},
		"Beruwala": {
			"MINI CAR": 1e4,
			"SEDAN": 12e3,
			"MINI VAN": 13e3,
			"KDH FLAT ROOF": 18e3,
			"KDH HIGH ROOF": 22e3
		},
		"Bentota": {
			"MINI CAR": 11e3,
			"SEDAN": 12e3,
			"MINI VAN": 14e3,
			"KDH FLAT ROOF": 19e3,
			"KDH HIGH ROOF": 23e3
		},
		"Ahungalla": {
			"MINI CAR": 13e3,
			"SEDAN": 14e3,
			"MINI VAN": 16e3,
			"KDH FLAT ROOF": 22e3,
			"KDH HIGH ROOF": 26e3
		},
		"Balapitiya": {
			"MINI CAR": 13e3,
			"SEDAN": 16e3,
			"MINI VAN": 17e3,
			"KDH FLAT ROOF": 24e3,
			"KDH HIGH ROOF": 28e3
		},
		"Ambalangoda": {
			"MINI CAR": 13e3,
			"SEDAN": 15e3,
			"MINI VAN": 17e3,
			"KDH FLAT ROOF": 23e3,
			"KDH HIGH ROOF": 27e3
		},
		"Hikkaduwa": {
			"MINI CAR": 14e3,
			"SEDAN": 16e3,
			"MINI VAN": 18e3,
			"KDH FLAT ROOF": 25e3,
			"KDH HIGH ROOF": 29e3
		},
		"Galle": {
			"MINI CAR": 15e3,
			"SEDAN": 18e3,
			"MINI VAN": 2e4,
			"KDH FLAT ROOF": 26e3,
			"KDH HIGH ROOF": 3e4
		},
		"Unawatuna": {
			"MINI CAR": 15e3,
			"SEDAN": 18e3,
			"MINI VAN": 2e4,
			"KDH FLAT ROOF": 26e3,
			"KDH HIGH ROOF": 3e4
		},
		"Thalpe": {
			"MINI CAR": 15e3,
			"SEDAN": 18e3,
			"MINI VAN": 2e4,
			"KDH FLAT ROOF": 26e3,
			"KDH HIGH ROOF": 3e4
		},
		"Habaraduwa": {
			"MINI CAR": 16e3,
			"SEDAN": 18e3,
			"MINI VAN": 2e4,
			"KDH FLAT ROOF": 28e3,
			"KDH HIGH ROOF": 32e3
		},
		"Ahangama": {
			"MINI CAR": 18e3,
			"SEDAN": 2e4,
			"MINI VAN": 22e3,
			"KDH FLAT ROOF": 29e3,
			"KDH HIGH ROOF": 33e3
		},
		"Weligama": {
			"MINI CAR": 18e3,
			"SEDAN": 2e4,
			"MINI VAN": 22e3,
			"KDH FLAT ROOF": 3e4,
			"KDH HIGH ROOF": 34e3
		},
		"Mirissa": {
			"MINI CAR": 18e3,
			"SEDAN": 2e4,
			"MINI VAN": 22e3,
			"KDH FLAT ROOF": 3e4,
			"KDH HIGH ROOF": 34e3
		},
		"Polhena": {
			"MINI CAR": 2e4,
			"SEDAN": 24e3,
			"MINI VAN": 25e3,
			"KDH FLAT ROOF": 32e3,
			"KDH HIGH ROOF": 36e3
		},
		"Matara": {
			"MINI CAR": 2e4,
			"SEDAN": 24e3,
			"MINI VAN": 25e3,
			"KDH FLAT ROOF": 32e3,
			"KDH HIGH ROOF": 36e3
		},
		"Thalalla": {
			"MINI CAR": 23e3,
			"SEDAN": 25e3,
			"MINI VAN": 26e3,
			"KDH FLAT ROOF": 34e3,
			"KDH HIGH ROOF": 38e3
		},
		"Dikwella": {
			"MINI CAR": 26e3,
			"SEDAN": 28e3,
			"MINI VAN": 29e3,
			"KDH FLAT ROOF": 36e3,
			"KDH HIGH ROOF": 4e4
		},
		"Hiriketiya": {
			"MINI CAR": 26e3,
			"SEDAN": 28e3,
			"MINI VAN": 29e3,
			"KDH FLAT ROOF": 36e3,
			"KDH HIGH ROOF": 4e4
		},
		"Nilwella": {
			"MINI CAR": 26e3,
			"SEDAN": 28e3,
			"MINI VAN": 29e3,
			"KDH FLAT ROOF": 36e3,
			"KDH HIGH ROOF": 4e4
		},
		"Tangalle": {
			"MINI CAR": 26e3,
			"SEDAN": 3e4,
			"MINI VAN": 31e3,
			"KDH FLAT ROOF": 37e3,
			"KDH HIGH ROOF": 4e4
		},
		"Kalamatiya": {
			"MINI CAR": 3e4,
			"SEDAN": 34e3,
			"MINI VAN": 35e3,
			"KDH FLAT ROOF": 4e4,
			"KDH HIGH ROOF": 44e3
		},
		"Hambantota": {
			"MINI CAR": 38e3,
			"SEDAN": 4e4,
			"MINI VAN": 41e3,
			"KDH FLAT ROOF": 46e3,
			"KDH HIGH ROOF": 5e4
		},
		"Bundala": {
			"MINI CAR": 4e4,
			"SEDAN": 45e3,
			"MINI VAN": 46e3,
			"KDH FLAT ROOF": 5e4,
			"KDH HIGH ROOF": 54e3
		},
		"Tissamaharama": {
			"MINI CAR": 4e4,
			"SEDAN": 45e3,
			"MINI VAN": 46e3,
			"KDH FLAT ROOF": 5e4,
			"KDH HIGH ROOF": 54e3
		},
		"Kirinda": {
			"MINI CAR": 44e3,
			"SEDAN": 46e3,
			"MINI VAN": 47e3,
			"KDH FLAT ROOF": 5e4,
			"KDH HIGH ROOF": 54e3
		},
		"Yala": {
			"MINI CAR": 45e3,
			"SEDAN": 48e3,
			"MINI VAN": 5e4,
			"KDH FLAT ROOF": 52e3,
			"KDH HIGH ROOF": 56e3
		},
		"Kataragama": {
			"MINI CAR": 4e4,
			"SEDAN": 44e3,
			"MINI VAN": 45e3,
			"KDH FLAT ROOF": 48e3,
			"KDH HIGH ROOF": 52e3
		},
		"Debarawewa": {
			"MINI CAR": 38e3,
			"SEDAN": 4e4,
			"MINI VAN": 41e3,
			"KDH FLAT ROOF": 48e3,
			"KDH HIGH ROOF": 5e4
		},
		"Weerawila": {
			"MINI CAR": 4e4,
			"SEDAN": 42e3,
			"MINI VAN": 43e3,
			"KDH FLAT ROOF": 45e3,
			"KDH HIGH ROOF": 5e4
		},
		"Kurunegala": {
			"MINI CAR": 8e3,
			"SEDAN": 9e3,
			"MINI VAN": 1e4,
			"KDH FLAT ROOF": 12e3,
			"KDH HIGH ROOF": 16e3
		},
		"Kandalama": {
			"MINI CAR": 14e3,
			"SEDAN": 16e3,
			"MINI VAN": 18e3,
			"KDH FLAT ROOF": 24e3,
			"KDH HIGH ROOF": 28e3
		},
		"Kandy": {
			"MINI CAR": 1e4,
			"SEDAN": 12e3,
			"MINI VAN": 14e3,
			"KDH FLAT ROOF": 18e3,
			"KDH HIGH ROOF": 22e3
		},
		"Nuwara Eliya": {
			"MINI CAR": 15e3,
			"SEDAN": 18e3,
			"MINI VAN": 2e4,
			"KDH FLAT ROOF": 26e3,
			"KDH HIGH ROOF": 3e4
		},
		"Adams Peak": {
			"MINI CAR": 14e3,
			"SEDAN": 16e3,
			"MINI VAN": 18e3,
			"KDH FLAT ROOF": 23e3,
			"KDH HIGH ROOF": 27e3
		},
		"Awissawella": {
			"MINI CAR": 6e3,
			"SEDAN": 8e3,
			"MINI VAN": 9e3,
			"KDH FLAT ROOF": 1e4,
			"KDH HIGH ROOF": 14e3
		},
		"Rathnapura": {
			"MINI CAR": 12e3,
			"SEDAN": 14e3,
			"MINI VAN": 16e3,
			"KDH FLAT ROOF": 2e4,
			"KDH HIGH ROOF": 24e3
		},
		"Nanu Oya": {
			"MINI CAR": 15e3,
			"SEDAN": 18e3,
			"MINI VAN": 2e4,
			"KDH FLAT ROOF": 25e3,
			"KDH HIGH ROOF": 3e4
		},
		"Ambewela": {
			"MINI CAR": 17e3,
			"SEDAN": 2e4,
			"MINI VAN": 22e3,
			"KDH FLAT ROOF": 3e4,
			"KDH HIGH ROOF": 34e3
		},
		"Haputale": {
			"MINI CAR": 26e3,
			"SEDAN": 3e4,
			"MINI VAN": 31e3,
			"KDH FLAT ROOF": 38e3,
			"KDH HIGH ROOF": 42e3
		},
		"Ella": {
			"MINI CAR": 5e4,
			"SEDAN": 55e3,
			"MINI VAN": 56e3,
			"KDH FLAT ROOF": 6e4,
			"KDH HIGH ROOF": 64e3
		},
		"Nilaveli": {
			"MINI CAR": 34e3,
			"SEDAN": 38e3,
			"MINI VAN": 39e3,
			"KDH FLAT ROOF": 43e3,
			"KDH HIGH ROOF": 47e3
		},
		"Trincomalee": {
			"MINI CAR": 31e3,
			"SEDAN": 35e3,
			"MINI VAN": 36e3,
			"KDH FLAT ROOF": 4e4,
			"KDH HIGH ROOF": 45e3
		},
		"Polonnaruwa": {
			"MINI CAR": 22e3,
			"SEDAN": 25e3,
			"MINI VAN": 26e3,
			"KDH FLAT ROOF": 34e3,
			"KDH HIGH ROOF": 38e3
		},
		"Anuradhapura": {
			"MINI CAR": 2e4,
			"SEDAN": 22e3,
			"MINI VAN": 23e3,
			"KDH FLAT ROOF": 3e4,
			"KDH HIGH ROOF": 35e3
		},
		"Puttalam": {
			"MINI CAR": 14e3,
			"SEDAN": 16e3,
			"MINI VAN": 18e3,
			"KDH FLAT ROOF": 24e3,
			"KDH HIGH ROOF": 3e4
		},
		"Wilpattu": {
			"MINI CAR": 2e4,
			"SEDAN": 23e3,
			"MINI VAN": 24e3,
			"KDH FLAT ROOF": 31e3,
			"KDH HIGH ROOF": 35e3
		},
		"Sinharaja": {
			"MINI CAR": 15e3,
			"SEDAN": 18e3,
			"MINI VAN": 2e4,
			"KDH FLAT ROOF": 28e3,
			"KDH HIGH ROOF": 32e3
		},
		"Embilipitiya": {
			"MINI CAR": 34e3,
			"SEDAN": 38e3,
			"MINI VAN": 39e3,
			"KDH FLAT ROOF": 43e3,
			"KDH HIGH ROOF": 47e3
		},
		"Udawalawe": {
			"MINI CAR": 38e3,
			"SEDAN": 43e3,
			"MINI VAN": 44e3,
			"KDH FLAT ROOF": 48e3,
			"KDH HIGH ROOF": 52e3
		},
		"Mattala": {
			"MINI CAR": 35e3,
			"SEDAN": 39e3,
			"MINI VAN": 4e4,
			"KDH FLAT ROOF": 45e3,
			"KDH HIGH ROOF": 5e4
		},
		"Bandarawela": {
			"MINI CAR": 28e3,
			"SEDAN": 3e4,
			"MINI VAN": 31e3,
			"KDH FLAT ROOF": 38e3,
			"KDH HIGH ROOF": 42e3
		},
		"Buttala": {
			"MINI CAR": 52e3,
			"SEDAN": 55e3,
			"MINI VAN": 56e3,
			"KDH FLAT ROOF": 58e3,
			"KDH HIGH ROOF": 62e3
		},
		"Monaragala": {
			"MINI CAR": 54e3,
			"SEDAN": 58e3,
			"MINI VAN": 59e3,
			"KDH FLAT ROOF": 6e4,
			"KDH HIGH ROOF": 65e3
		},
		"Potuvil": {
			"MINI CAR": 65e3,
			"SEDAN": 7e4,
			"MINI VAN": 71e3,
			"KDH FLAT ROOF": 76e3,
			"KDH HIGH ROOF": 8e4
		},
		"Arugam Bay": {
			"MINI CAR": 7e4,
			"SEDAN": 75e3,
			"MINI VAN": 76e3,
			"KDH FLAT ROOF": 78e3,
			"KDH HIGH ROOF": 8e4
		},
		"Ampara": {
			"MINI CAR": 48e3,
			"SEDAN": 54e3,
			"MINI VAN": 55e3,
			"KDH FLAT ROOF": 57e3,
			"KDH HIGH ROOF": 6e4
		},
		"Akkaraipattu": {
			"MINI CAR": 55e3,
			"SEDAN": 6e4,
			"MINI VAN": 61e3,
			"KDH FLAT ROOF": 62e3,
			"KDH HIGH ROOF": 66e3
		},
		"Kalmunai": {
			"MINI CAR": 53e3,
			"SEDAN": 58e3,
			"MINI VAN": 6e4,
			"KDH FLAT ROOF": 62e3,
			"KDH HIGH ROOF": 66e3
		},
		"Batticaloa": {
			"MINI CAR": 46e3,
			"SEDAN": 5e4,
			"MINI VAN": 51e3,
			"KDH FLAT ROOF": 56e3,
			"KDH HIGH ROOF": 6e4
		},
		"Eravur": {
			"MINI CAR": 4e4,
			"SEDAN": 45e3,
			"MINI VAN": 46e3,
			"KDH FLAT ROOF": 48e3,
			"KDH HIGH ROOF": 52e3
		},
		"Kinniya": {
			"MINI CAR": 3e4,
			"SEDAN": 35e3,
			"MINI VAN": 36e3,
			"KDH FLAT ROOF": 4e4,
			"KDH HIGH ROOF": 44e3
		},
		"Mutur": {
			"MINI CAR": 36e3,
			"SEDAN": 4e4,
			"MINI VAN": 41e3,
			"KDH FLAT ROOF": 46e3,
			"KDH HIGH ROOF": 48e3
		},
		"Vavuniya": {
			"MINI CAR": 3e4,
			"SEDAN": 35e3,
			"MINI VAN": 36e3,
			"KDH FLAT ROOF": 4e4,
			"KDH HIGH ROOF": 48e3
		},
		"Kilinochchi": {
			"MINI CAR": 46e3,
			"SEDAN": 5e4,
			"MINI VAN": 51e3,
			"KDH FLAT ROOF": 55e3,
			"KDH HIGH ROOF": 6e4
		},
		"Jaffna": {
			"MINI CAR": 6e4,
			"SEDAN": 65e3,
			"MINI VAN": 66e3,
			"KDH FLAT ROOF": 68e3,
			"KDH HIGH ROOF": 7e4
		},
		"Mannar": {
			"MINI CAR": 44e3,
			"SEDAN": 48e3,
			"MINI VAN": 49e3,
			"KDH FLAT ROOF": 5e4,
			"KDH HIGH ROOF": 55e3
		},
		"Matale": {
			"MINI CAR": 12e3,
			"SEDAN": 14e3,
			"MINI VAN": 16e3,
			"KDH FLAT ROOF": 2e4,
			"KDH HIGH ROOF": 24e3
		},
		"Balangoda": {
			"MINI CAR": 18e3,
			"SEDAN": 2e4,
			"MINI VAN": 22e3,
			"KDH FLAT ROOF": 28e3,
			"KDH HIGH ROOF": 32e3
		},
		"Pelmadulla": {
			"MINI CAR": 14e3,
			"SEDAN": 16e3,
			"MINI VAN": 18e3,
			"KDH FLAT ROOF": 24e3,
			"KDH HIGH ROOF": 28e3
		},
		"Godakawela": {
			"MINI CAR": 16e3,
			"SEDAN": 18e3,
			"MINI VAN": 2e4,
			"KDH FLAT ROOF": 28e3,
			"KDH HIGH ROOF": 32e3
		},
		"Deniyaya": {
			"MINI CAR": 2e4,
			"SEDAN": 24e3,
			"MINI VAN": 26e3,
			"KDH FLAT ROOF": 32e3,
			"KDH HIGH ROOF": 36e3
		},
		"Gal Oya": {
			"MINI CAR": 2e4,
			"SEDAN": 24e3,
			"MINI VAN": 25e3,
			"KDH FLAT ROOF": 32e3,
			"KDH HIGH ROOF": 36e3
		},
		"Habarana": {
			"MINI CAR": 15e3,
			"SEDAN": 18e3,
			"MINI VAN": 2e4,
			"KDH FLAT ROOF": 26e3,
			"KDH HIGH ROOF": 3e4
		},
		"Maduru Oya": {
			"MINI CAR": 35e3,
			"SEDAN": 38e3,
			"MINI VAN": 39e3,
			"KDH FLAT ROOF": 44e3,
			"KDH HIGH ROOF": 48e3
		},
		"Badulla": {
			"MINI CAR": 5e4,
			"SEDAN": 58e3,
			"MINI VAN": 59e3,
			"KDH FLAT ROOF": 6e4,
			"KDH HIGH ROOF": 64e3
		},
		"Bibile": {
			"MINI CAR": 36e3,
			"SEDAN": 4e4,
			"MINI VAN": 41e3,
			"KDH FLAT ROOF": 45e3,
			"KDH HIGH ROOF": 5e4
		}
	},
	"Ella": {
		"Tissamaharama": {
			"MINI CAR": 13e3,
			"SEDAN": 15e3,
			"MINI VAN": 16e3,
			"KDH FLAT ROOF": 18e3,
			"KDH HIGH ROOF": 22e3
		},
		"Kirinda": {
			"MINI CAR": 16e3,
			"SEDAN": 17e3,
			"MINI VAN": 18e3,
			"KDH FLAT ROOF": 2e4,
			"KDH HIGH ROOF": 24e3
		},
		"Yala": {
			"MINI CAR": 17e3,
			"SEDAN": 18e3,
			"MINI VAN": 19e3,
			"KDH FLAT ROOF": 2e4,
			"KDH HIGH ROOF": 26e3
		},
		"Debarawewa": {
			"MINI CAR": 13e3,
			"SEDAN": 15e3,
			"MINI VAN": 16e3,
			"KDH FLAT ROOF": 18e3,
			"KDH HIGH ROOF": 22e3
		},
		"Kataragama": {
			"MINI CAR": 14e3,
			"SEDAN": 15e3,
			"MINI VAN": 16e3,
			"KDH FLAT ROOF": 18e3,
			"KDH HIGH ROOF": 22e3
		},
		"Bundala": {
			"MINI CAR": 15e3,
			"SEDAN": 16e3,
			"MINI VAN": 17e3,
			"KDH FLAT ROOF": 18e3,
			"KDH HIGH ROOF": 22e3
		},
		"Udawalawe": {
			"MINI CAR": 18e3,
			"SEDAN": 2e4,
			"MINI VAN": 21e3,
			"KDH FLAT ROOF": 23e3,
			"KDH HIGH ROOF": 27e3
		},
		"Potuvil": {
			"MINI CAR": 2e4,
			"SEDAN": 22e3,
			"MINI VAN": 23e3,
			"KDH FLAT ROOF": 24e3,
			"KDH HIGH ROOF": 28e3
		},
		"Arugam Bay": {
			"MINI CAR": 2e4,
			"SEDAN": 22e3,
			"MINI VAN": 23e3,
			"KDH FLAT ROOF": 25e3,
			"KDH HIGH ROOF": 3e4
		},
		"Kalamatiya": {
			"MINI CAR": 2e4,
			"SEDAN": 22e3,
			"MINI VAN": 23e3,
			"KDH FLAT ROOF": 25e3,
			"KDH HIGH ROOF": 3e4
		},
		"Tangalle": {
			"MINI CAR": 22e3,
			"SEDAN": 24e3,
			"MINI VAN": 25e3,
			"KDH FLAT ROOF": 27e3,
			"KDH HIGH ROOF": 3e4
		},
		"Nilwella": {
			"MINI CAR": 24e3,
			"SEDAN": 26e3,
			"MINI VAN": 27e3,
			"KDH FLAT ROOF": 3e4,
			"KDH HIGH ROOF": 34e3
		},
		"Hiriketiya": {
			"MINI CAR": 23e3,
			"SEDAN": 25e3,
			"MINI VAN": 26e3,
			"KDH FLAT ROOF": 3e4,
			"KDH HIGH ROOF": 34e3
		},
		"Dikwella": {
			"MINI CAR": 23e3,
			"SEDAN": 25e3,
			"MINI VAN": 26e3,
			"KDH FLAT ROOF": 3e4,
			"KDH HIGH ROOF": 34e3
		},
		"Talalla": {
			"MINI CAR": 25e3,
			"SEDAN": 28e3,
			"MINI VAN": 29e3,
			"KDH FLAT ROOF": 3e4,
			"KDH HIGH ROOF": 34e3
		},
		"Matara": {
			"MINI CAR": 27e3,
			"SEDAN": 28e3,
			"MINI VAN": 29e3,
			"KDH FLAT ROOF": 31e3,
			"KDH HIGH ROOF": 35e3
		},
		"Polhena": {
			"MINI CAR": 28e3,
			"SEDAN": 3e4,
			"MINI VAN": 31e3,
			"KDH FLAT ROOF": 33e3,
			"KDH HIGH ROOF": 37e3
		},
		"Kamburugamuwa": {
			"MINI CAR": 27e3,
			"SEDAN": 29e3,
			"MINI VAN": 3e4,
			"KDH FLAT ROOF": 32e3,
			"KDH HIGH ROOF": 36e3
		},
		"Mirissa": {
			"MINI CAR": 28e3,
			"SEDAN": 3e4,
			"MINI VAN": 31e3,
			"KDH FLAT ROOF": 33e3,
			"KDH HIGH ROOF": 37e3
		},
		"Weligama": {
			"MINI CAR": 28e3,
			"SEDAN": 3e4,
			"MINI VAN": 31e3,
			"KDH FLAT ROOF": 33e3,
			"KDH HIGH ROOF": 37e3
		},
		"Ahangama": {
			"MINI CAR": 29e3,
			"SEDAN": 31e3,
			"MINI VAN": 32e3,
			"KDH FLAT ROOF": 34e3,
			"KDH HIGH ROOF": 38e3
		},
		"Midigama": {
			"MINI CAR": 29e3,
			"SEDAN": 31e3,
			"MINI VAN": 32e3,
			"KDH FLAT ROOF": 34e3,
			"KDH HIGH ROOF": 38e3
		},
		"Thalpe": {
			"MINI CAR": 3e4,
			"SEDAN": 32e3,
			"MINI VAN": 33e3,
			"KDH FLAT ROOF": 35e3,
			"KDH HIGH ROOF": 4e4
		},
		"Koggala": {
			"MINI CAR": 3e4,
			"SEDAN": 32e3,
			"MINI VAN": 33e3,
			"KDH FLAT ROOF": 35e3,
			"KDH HIGH ROOF": 4e4
		},
		"Unawatuna": {
			"MINI CAR": 32e3,
			"SEDAN": 34e3,
			"MINI VAN": 35e3,
			"KDH FLAT ROOF": 37e3,
			"KDH HIGH ROOF": 42e3
		},
		"Galle Fort": {
			"MINI CAR": 32e3,
			"SEDAN": 34e3,
			"MINI VAN": 35e3,
			"KDH FLAT ROOF": 37e3,
			"KDH HIGH ROOF": 42e3
		},
		"Colombo": {
			"MINI CAR": 5e4,
			"SEDAN": 52e3,
			"MINI VAN": 53e3,
			"KDH FLAT ROOF": 56e3,
			"KDH HIGH ROOF": 6e4
		},
		"Negombo": {
			"MINI CAR": 56e3,
			"SEDAN": 58e3,
			"MINI VAN": 59e3,
			"KDH FLAT ROOF": 63e3,
			"KDH HIGH ROOF": 67e3
		},
		"Colombo Airport (BIA)": {
			"MINI CAR": 56e3,
			"SEDAN": 58e3,
			"MINI VAN": 59e3,
			"KDH FLAT ROOF": 6e4,
			"KDH HIGH ROOF": 64e3
		}
	},
	"Tissamaharama": {
		"Udawalawe": {
			"MINI CAR": 8e3,
			"SEDAN": 9e3,
			"KDH FLAT ROOF": 11e3,
			"KDH HIGH ROOF": 13e3
		},
		"Ella": {
			"MINI CAR": 1e4,
			"SEDAN": 11e3,
			"KDH FLAT ROOF": 14e3,
			"KDH HIGH ROOF": 16e3
		},
		"Haputale": {
			"MINI CAR": 14e3,
			"SEDAN": 16e3,
			"KDH FLAT ROOF": 18e3,
			"KDH HIGH ROOF": 22e3
		},
		"Sinharaja": {
			"MINI CAR": 16e3,
			"SEDAN": 18e3,
			"KDH FLAT ROOF": 22e3,
			"KDH HIGH ROOF": 26e3
		},
		"Nuwara Eliya": {
			"MINI CAR": 18e3,
			"SEDAN": 22e3,
			"KDH FLAT ROOF": 25e3,
			"KDH HIGH ROOF": 28e3
		},
		"Kandy": {
			"MINI CAR": 3e4,
			"SEDAN": 35e3,
			"KDH FLAT ROOF": 38e3,
			"KDH HIGH ROOF": 42e3
		},
		"Sigiriya": {
			"MINI CAR": 37e3,
			"SEDAN": 42e3,
			"KDH FLAT ROOF": 45e3,
			"KDH HIGH ROOF": 5e4
		},
		"Dambulla": {
			"MINI CAR": 36e3,
			"SEDAN": 4e4,
			"KDH FLAT ROOF": 45e3,
			"KDH HIGH ROOF": 5e4
		},
		"Tangalle": {
			"MINI CAR": 9e3,
			"SEDAN": 1e4,
			"KDH FLAT ROOF": 13e3,
			"KDH HIGH ROOF": 16e3
		},
		"Dikwella": {
			"MINI CAR": 1e4,
			"SEDAN": 11e3,
			"KDH FLAT ROOF": 14e3,
			"KDH HIGH ROOF": 17e3
		},
		"Talalla": {
			"MINI CAR": 12e3,
			"SEDAN": 13e3,
			"KDH FLAT ROOF": 17e3,
			"KDH HIGH ROOF": 2e4
		},
		"Mirissa": {
			"MINI CAR": 14e3,
			"SEDAN": 15e3,
			"KDH FLAT ROOF": 21e3,
			"KDH HIGH ROOF": 25e3
		},
		"Weligama": {
			"MINI CAR": 16e3,
			"SEDAN": 17e3,
			"KDH FLAT ROOF": 23e3,
			"KDH HIGH ROOF": 26e3
		},
		"Galle": {
			"MINI CAR": 17e3,
			"SEDAN": 18e3,
			"KDH FLAT ROOF": 26e3,
			"KDH HIGH ROOF": 3e4
		},
		"Hikkaduwa": {
			"MINI CAR": 19e3,
			"SEDAN": 2e4,
			"KDH FLAT ROOF": 28e3,
			"KDH HIGH ROOF": 32e3
		},
		"Bentota": {
			"MINI CAR": 25e3,
			"SEDAN": 26e3,
			"KDH FLAT ROOF": 36e3,
			"KDH HIGH ROOF": 4e4
		},
		"Colombo": {
			"MINI CAR": 3e4,
			"SEDAN": 33e3,
			"KDH FLAT ROOF": 4e4,
			"KDH HIGH ROOF": 45e3
		},
		"Colombo Airport (BIA)": {
			"MINI CAR": 33e3,
			"SEDAN": 35e3,
			"KDH FLAT ROOF": 45e3,
			"KDH HIGH ROOF": 5e4
		},
		"Negombo": {
			"MINI CAR": 39e3,
			"SEDAN": 41e3,
			"KDH FLAT ROOF": 47e3,
			"KDH HIGH ROOF": 52e3
		},
		"Arugam Bay": {
			"MINI CAR": 17e3,
			"SEDAN": 18e3,
			"KDH FLAT ROOF": 26e3,
			"KDH HIGH ROOF": 3e4
		},
		"Trincomalee": {
			"MINI CAR": 39e3,
			"SEDAN": 4e4,
			"KDH FLAT ROOF": 56e3,
			"KDH HIGH ROOF": 6e4
		},
		"Batticaloa": {
			"MINI CAR": 29e3,
			"SEDAN": 3e4,
			"KDH FLAT ROOF": 4e4,
			"KDH HIGH ROOF": 45e3
		},
		"Anuradhapura": {
			"MINI CAR": 39e3,
			"SEDAN": 4e4,
			"KDH FLAT ROOF": 55e3,
			"KDH HIGH ROOF": 6e4
		}
	}
};
function calculateRideFare(pickup, drop, vehicle) {
	const pickupPricing = ridePricing[pickup];
	if (!pickupPricing) return null;
	const destinationPricing = pickupPricing[drop];
	if (!destinationPricing) return null;
	const price = destinationPricing[vehicle];
	if (!price) return null;
	return {
		distanceKm: null,
		ratePerKm: null,
		price
	};
}
function formatLKR(n) {
	return "Rs. " + n.toLocaleString("en-LK");
}
var INPUT_BASE = "w-full rounded-xl border border-border bg-white px-3.5 py-3 text-sm text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition";
function BookingForm({ variant = "hero" }) {
	const [activeTab, setActiveTab] = (0, import_react.useState)("ride");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: variant === "hero" ? "glass rounded-3xl p-5 sm:p-7 shadow-elegant" : "rounded-3xl border border-border bg-white p-5 sm:p-7 shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex items-baseline justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-bold text-ink",
					children: "Instant booking"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-medium text-primary",
					children: "No card required"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveTab("ride"),
						className: `flex-1 rounded-lg px-3 py-2.5 text-sm font-semibold transition sm:flex-none sm:px-4 ${activeTab === "ride" ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground hover:bg-muted/80"}`,
						children: "Book Ride"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveTab("custom"),
						className: `flex-1 rounded-lg px-3 py-2.5 text-sm font-semibold transition sm:flex-none sm:px-4 ${activeTab === "custom" ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground hover:bg-muted/80"}`,
						children: "Custom"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveTab("tour"),
						className: `flex-1 rounded-lg px-3 py-2.5 text-sm font-semibold transition sm:flex-none sm:px-4 ${activeTab === "tour" ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground hover:bg-muted/80"}`,
						children: "Book Tour"
					})
				]
			}),
			activeTab === "ride" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RideForm, {}),
			activeTab === "custom" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomRideForm, {}),
			activeTab === "tour" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TourForm, {})
		]
	});
}
function RideForm() {
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const [pickup, setPickup] = (0, import_react.useState)("Colombo Airport (BIA)");
	const [drop, setDrop] = (0, import_react.useState)("Colombo");
	const [date, setDate] = (0, import_react.useState)(today);
	const [time, setTime] = (0, import_react.useState)("10:00");
	const [vehicle, setVehicle] = (0, import_react.useState)("SEDAN");
	const price = (0, import_react.useMemo)(() => calculateRideFare(pickup, drop, vehicle)?.price ?? null, [
		pickup,
		drop,
		vehicle
	]);
	const whatsappUrl = bookingMessage({
		pickup,
		drop,
		vehicle,
		date,
		time,
		price
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }),
					label: "Pickup",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: INPUT_BASE,
						value: pickup,
						onChange: (e) => setPickup(e.target.value),
						children: pickupLocations.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: p,
							children: p
						}, p))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }),
					label: "Drop",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: INPUT_BASE,
						value: drop,
						onChange: (e) => setDrop(e.target.value),
						children: locations.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: p,
							children: p
						}, p))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4" }),
					label: "Date",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "date",
						className: INPUT_BASE,
						value: date,
						min: today,
						onChange: (e) => setDate(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" }),
					label: "Time",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "time",
						className: INPUT_BASE,
						value: time,
						onChange: (e) => setTime(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Car, { className: "h-4 w-4" }),
					label: "Vehicle",
					className: "sm:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: INPUT_BASE,
						value: vehicle,
						onChange: (e) => setVehicle(e.target.value),
						children: vehicles.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: v,
							children: v
						}, v))
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 rounded-2xl gradient-primary p-4 text-white flex items-center justify-between shadow-soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs uppercase tracking-wider text-white/80 line-clamp-1 truncate mr-2",
						children: [
							pickup,
							" → ",
							drop
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-2xl font-bold truncate",
						children: price ? formatLKR(price) : "Get quote"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-white/80 mt-0.5 truncate",
						children: "All-inclusive · fuel & driver"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden sm:block text-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-white/80",
					children: "Vehicle"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-semibold",
					children: vehicle
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: whatsappUrl,
				target: "_blank",
				rel: "noopener",
				className: "flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp px-5 py-3.5 font-semibold text-white shadow-soft hover:opacity-90 transition",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-5 w-5" }), " Book via WhatsApp"]
			})
		})
	] });
}
function CustomRideForm() {
	const [name, setName] = (0, import_react.useState)("");
	const [pickup, setPickup] = (0, import_react.useState)("");
	const [destination, setDestination] = (0, import_react.useState)("");
	const [vehicle, setVehicle] = (0, import_react.useState)("SEDAN");
	const [message, setMessage] = (0, import_react.useState)("");
	const whatsappUrl = customRideMessage({
		name,
		pickup,
		destination,
		vehicle,
		message
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" }),
				label: "Name",
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					placeholder: "Your Name",
					className: INPUT_BASE,
					value: name,
					onChange: (e) => setName(e.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }),
				label: "Pick Location",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					rows: 2,
					placeholder: "Pickup Location",
					className: `${INPUT_BASE} resize-none`,
					value: pickup,
					onChange: (e) => setPickup(e.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }),
				label: "Destination",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					rows: 2,
					placeholder: "Destination",
					className: `${INPUT_BASE} resize-none`,
					value: destination,
					onChange: (e) => setDestination(e.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Car, { className: "h-4 w-4" }),
				label: "Vehicle",
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					className: INPUT_BASE,
					value: vehicle,
					onChange: (e) => setVehicle(e.target.value),
					children: vehicles.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: v,
						children: v
					}, v))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-4 w-4" }),
				label: "Message",
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					rows: 3,
					placeholder: "Any special requests?",
					className: `${INPUT_BASE} resize-none`,
					value: message,
					onChange: (e) => setMessage(e.target.value)
				})
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: whatsappUrl,
			target: "_blank",
			rel: "noopener",
			className: "flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp px-5 py-3.5 font-semibold text-white shadow-soft hover:opacity-90 transition",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-5 w-5" }), " Send via WhatsApp"]
		})
	})] });
}
function TourForm() {
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const [startDate, setStartDate] = (0, import_react.useState)(today);
	const [endDate, setEndDate] = (0, import_react.useState)(today);
	const [vehicle, setVehicle] = (0, import_react.useState)("SEDAN");
	const tourVehicles = Object.keys(tourPricing);
	const days = (0, import_react.useMemo)(() => {
		const start = new Date(startDate).getTime();
		const diff = new Date(endDate).getTime() - start;
		return Math.max(1, Math.ceil(diff / (1e3 * 60 * 60 * 24)) + 1);
	}, [startDate, endDate]);
	const price = tourPricing[vehicle] ? tourPricing[vehicle] * days : null;
	const whatsappUrl = tourMessage({
		startDate,
		endDate,
		vehicle,
		price
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4" }),
					label: "Start Date",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "date",
						className: INPUT_BASE,
						value: startDate,
						min: today,
						onChange: (e) => setStartDate(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarRange, { className: "h-4 w-4" }),
					label: "End Date",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "date",
						className: INPUT_BASE,
						value: endDate,
						min: startDate,
						onChange: (e) => setEndDate(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Car, { className: "h-4 w-4" }),
					label: "Vehicle",
					className: "sm:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: INPUT_BASE,
						value: vehicle,
						onChange: (e) => setVehicle(e.target.value),
						children: tourVehicles.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: v,
							children: v
						}, v))
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 rounded-2xl gradient-primary p-4 text-white flex items-center justify-between shadow-soft",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs uppercase tracking-wider text-white/80 truncate",
						children: [
							days,
							" Day",
							days > 1 ? "s" : "",
							" Tour"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-2xl font-bold truncate",
						children: price ? formatLKR(price) : "Get quote"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-white/80 mt-0.5 truncate",
						children: ["Vehicle: ", vehicle]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: whatsappUrl,
				target: "_blank",
				rel: "noopener",
				className: "flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp px-5 py-3.5 font-semibold text-white shadow-soft hover:opacity-90 transition",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-5 w-5" }), " Book via WhatsApp"]
			})
		})
	] });
}
function Field({ icon, label, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `block ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-ink/70",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary",
					children: icon
				}),
				" ",
				label
			]
		}), children]
	});
}
//#endregion
export { vehicles as i, formatLKR as n, ridePricing as r, BookingForm as t };
