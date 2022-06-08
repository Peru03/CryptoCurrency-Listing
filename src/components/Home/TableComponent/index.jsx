import React, { useState } from 'react'
import "./style.css"
import { Link } from "react-router-dom";
const TableComponent = ({ data, dataAvail }) => {

    const [searchInput, setsearchInput] = useState("Search by Company Name")
    const [responseData, setresponseData] = useState()

    const renderData = [
        {
            companyName: "141 Capital",
            symbol: "ONCP",
            marketCap: "$145.4k",
            action: "view",
            currentPrice: "$0.001 USD"
        },
        {
            companyName: "Cardllytics Inc",
            symbol: "CDLX",
            marketCap: "$1.8B",
            action: "Save",
            currentPrice: "$66 USD"
        },
        {
            companyName: "Cardlytics Inc",
            symbol: "BCOV",
            marketCap: "$394M",
            action: "Save",
            currentPrice: "$0.10 USD"
        }, {
            companyName: "Brightcove Inc",
            symbol: "BSGC",
            marketCap: "$543k",
            action: "view",
            currentPrice: "$0.003 USD"
        },
        {
            companyName: "Akamai TEchnlogies Inc",
            symbol: "AKAM",
            marketCap: "$145.4k",
            action: "Save",
            currentPrice: "$106 USD"
        },


    ]

    return (
        <div className="table">
            <div className="table_header">
                <div className="table_title">
                    Stock Details Table
                </div>
                <div className="table_search">
                    <i class="fa-solid fa-magnifying-glass search_icon"></i>
                    <input type="text" value={searchInput} onChange={(e) => setsearchInput(e.target.value)} />
                </div>
            </div>


            <div className="table_data_container">
                <div className="table_cont_header">
                    <div className="fields">
                        Company Name
                    </div>
                    <div className="fields">
                        Symbol
                    </div>
                    <div className="fields">
                        Market CAP
                    </div>
                    <div className="fields">

                    </div>
                    <div className="fields">
                        Current Price
                    </div>
                </div>
                {
                    renderData.map((val, ind) => {
                        return (
                            <div className="table_cont_body" key={ind}>
                                <div className="fields">
                                    {val.companyName}
                                </div>
                                <div className="fields">
                                    <span className="symbol">
                                        {val.symbol}
                                    </span>
                                </div>
                                <div className="fields">
                                    {val.marketCap}
                                </div>
                                <div className="fields">


                                    {
                                        val.action === "view" ? <Link to="/view"> <button className="btn_view">VIEW</button>   </Link> :
                                            <button className="btn_send_data">SEND DATA</button>
                                    }

                                </div>
                                <div className="fields">
                                    {val.currentPrice}
                                </div>
                            </div>

                        )
                    })
                }


            </div>
            <div className="table_footer">
                <div className="pagination_text">1-1 of 10</div>
                <div className="icon_left"><i className="fa-solid fa-angle-left"></i></div>
                <div className="icon_right"><i className="fa-solid fa-angle-right"></i></div>
            </div>
        </div >
    )

}

export default TableComponent