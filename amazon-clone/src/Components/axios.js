import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:10000",
	// baseURL: "https://zealous-twill-pig.cyclic.app/",
});

export default instance;
