import React, { useEffect, useState } from 'react'
import Card from './card'
import "./style.css"
import Google from "../../Assets/GOOGL.png"
import FB from "../../Assets/FB.png"
import Amazon from "../../Assets/AMZN.svg"
import TableComponent from './TableComponent'
const HomeComponent = () => {

    const [data, setdata] = useState()
    const [dataAvail, setdataAvail] = useState(false);
    const getData = async () => {
        const res = await fetch("http://api.coinlayer.com/api/list?access_key=d729903f7530345cab5933e2d0dcf465");
        const result = await res.json();
        console.log("Result", result);
        setdata(result)
        setdataAvail(true);
    }
    useEffect(() => {
        getData()
    }, [])



    return (
        <div className='home_page'>
            <div className="home_header">
                <Card name={"Google"} image={Google} main={"1515 USD"} />
                <Card name={"FB"} image={FB} main={"1515 USD"} />
                <Card name={"AMAZON"} image={Amazon} main={"1515 USD"} />
            </div>

            <div className="home_body">
                <TableComponent data={data} dataAvail={dataAvail} />
            </div>

        </div>
    )
}

export default HomeComponent