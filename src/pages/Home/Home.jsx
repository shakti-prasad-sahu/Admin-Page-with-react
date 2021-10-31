import Charts from "../../Components/Charts/Charts"
import FeaturedInfo from "../../Components/FutureInfo/FeaturedInfo"
import "./home.css"
import { userData } from "../../Components/dummydata"
import WidgetSm from "../../Components/widgetSm/WidgetSm"
import WidgetLg from "../../Components/widgetLg/WidgetLg"

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Charts data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
            <WidgetSm/>
            <WidgetLg/>
            </div>
        </div>
    )
}
