"use client";

import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { PortfolioPieChart } from "./features";


export default function IndexPage() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4}>
                    <Card>
                        <CardContent>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                Total Value Staked
                            </Typography>
                            <Typography variant="h5" component="p">
                                $12,124.83
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Card>
                        <CardContent>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                Total Rewards
                            </Typography>
                            <Typography variant="h5" component="p">
                                $1,540.13
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Card>
                        <CardContent>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                Avg APY Rate
                            </Typography>
                            <Typography variant="h5" component="p">
                                14.24%
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Card>
                        <CardContent>
                            <LineChart
                                skipAnimation
                                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                                series={[
                                    {
                                        label: "Value of your walled in $",
                                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                                    },
                                ]}
                                height={300}
                                sx={{ width: "100%" }}
                            />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Card>
                        <CardContent>
                            <PortfolioPieChart/>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}
