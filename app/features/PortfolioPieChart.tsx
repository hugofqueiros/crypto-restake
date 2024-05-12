import { PieChart } from "@mui/x-charts";
import { data } from "@/utils/data";
import { Title } from "@/components";

const constructSeries = () => {
    return data.map((item, i) => {
        return {
            id: i,
            value: item.staked,
            label: item.shortName,
        };
    });
};

export const PortfolioPieChart = () => {
    const data = constructSeries();

    return (
        <PieChart
            series={[
                {
                    data,
                    innerRadius: 20,
                    outerRadius: 100,
                    paddingAngle: 5,
                    cornerRadius: 5,
                },
            ]}
            // width={400}
            height={300}
        />
    );
};
