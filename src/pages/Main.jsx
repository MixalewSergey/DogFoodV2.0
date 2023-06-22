import Promo from "../components/promo/Promo"
import { PROMOARR } from "../env"
import Card from "../components/Card"

const Main = ({ dogToken }) => {
	const discountArr = JSON.parse(localStorage.getItem("discountProducts"))
	const newArr = JSON.parse(localStorage.getItem("newProducts"))
	const saleArr = JSON.parse(localStorage.getItem("saleProducts"))
	return (<>
		<Promo {...PROMOARR[0]} />
		{newArr?.map((e, i) =>
			i < 8
				?
				<Card img={e.pictures} key={i} {...e} dogToken={dogToken} />
				: <></>
		)}
		<div className="promoGroup"><Promo {...PROMOARR[1]} />
			<Promo {...PROMOARR[2]} />
		</div>
		{discountArr?.map((e, i) =>
			i < 12
				?
				<Card img={e.pictures} key={i} {...e} dogToken={dogToken} />
				: <></>
		)}
	</>
	);
}
//
export default Main;
