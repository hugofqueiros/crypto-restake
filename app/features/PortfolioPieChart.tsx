import { PieChart } from "@mui/x-charts"
import { data } from "@/utils/data";

const constructSeries = () => {
    return data.map((item, i) => {
        return {
            id: i,
            value: item.staked,
            label: item.shortName
        }
    })
}

export const PortfolioPieChart = () => {
     
    const data = constructSeries();

    return (
    <PieChart
    series={[
        {
            data
        },
    ]}
    // width={400}
            height={300}
        />
)
}