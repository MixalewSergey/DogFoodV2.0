import { Link } from "react-router-dom";
import { VK, TG } from "../../env"
import pathIconVK from "../../assets/images/icons/vk.png"
import pathIconTG from "../../assets/images/icons/tg.png"
import {
	EnvelopePlusFill,
	TelephoneInboundFill,
	GeoAltFill,
} from "react-bootstrap-icons";
import SearchProd from "../search";

const Nav = ({ prodArr, setProducts, user }) => {
	return (
		<div className='navigation'>
			<Link to="mailto:info@foodi24.ru"><EnvelopePlusFill />&nbsp;<span>info@foodi24.ru</span></Link>
			<div>
				<Link to={VK} target="_blank"><img width="25px" src={pathIconVK} alt="ВКонтакте" /></Link>
				<Link to={TG} target="_blank"><img width="28px" src={pathIconTG} alt="Телеграмм" /></Link>
			</div>
			<Link to="tel:+79035034031"><TelephoneInboundFill />&nbsp;<span>+7(903)4035031</span></Link>
			<Link to="#"><GeoAltFill />&nbsp;<span>г. Ростов-на-Дону, ул. Зорге д. 9</span></Link>
			{!user && <span style={{ visibility: "hidden" }}></span>}
			{user && <span style={{ visibility: "visible" }}>
				<SearchProd prodArr={prodArr} setProducts={setProducts} />
			</span>}
		</div>
	);
}

export default Nav;
