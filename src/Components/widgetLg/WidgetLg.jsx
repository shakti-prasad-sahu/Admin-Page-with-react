import  './widgetLg.css'

export default function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    };
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
              <table className="widgetLgTable">
               <tr className="widgetLgTr">
                  <th className="widgetLgTh">Customer</th>
                  <th className="widgetLgTh">Date</th>
                  <th className="widgetLgTh">Amount</th>
                  <th className="widgetLgTh">Status</th>
               </tr>
               <tr className="widgetLgtr">
                  <td className="widgetLgUser">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2V5MvwfgDo_iDRUGqbYMjz3nwmvBaXivT6A&usqp=CAU" alt="" className="widgetLgImg"/>
                     <span className="widgetLgName">Susan carol</span>
                  </td>
                  <td className="widgetDate">2 jun 2021</td>
                  <td className="widgetAmount">$122.00</td>
                  <td className="widgetStatus"><Button type="Approved"/></td>
               </tr>
               <tr className="widgetLgtr">
                  <td className="widgetLgUser">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2V5MvwfgDo_iDRUGqbYMjz3nwmvBaXivT6A&usqp=CAU" alt="" className="widgetLgImg"/>
                     <span className="widgetLgName">Susan carol</span>
                  </td>
                  <td className="widgetDate">2 jun 2021</td>
                  <td className="widgetAmount">$122.00</td>
                  <td className="widgetStatus"><Button type="Declined"/></td>
               </tr>
               <tr className="widgetLgtr">
                  <td className="widgetLgUser">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2V5MvwfgDo_iDRUGqbYMjz3nwmvBaXivT6A&usqp=CAU" alt="" className="widgetLgImg"/>
                     <span className="widgetLgName">Susan carol</span>
                  </td>
                  <td className="widgetDate">2 jun 2021</td>
                  <td className="widgetAmount">$122.00</td>
                  <td className="widgetStatus"><Button type="Pending"/></td>
               </tr>
               <tr className="widgetLgtr">
                  <td className="widgetLgUser">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2V5MvwfgDo_iDRUGqbYMjz3nwmvBaXivT6A&usqp=CAU" alt="" className="widgetLgImg"/>
                     <span className="widgetLgName">Susan carol</span>
                  </td>
                  <td className="widgetDate">2 jun 2021</td>
                  <td className="widgetAmount">$122.00</td>
                  <td className="widgetStatus"><Button type="Approved"/></td>
               </tr>
              </table>
        </div>
    )
}
