"use client";

import {
    Autocomplete,
    Box,
    Card,
    CardContent,
    CardHeader,
    Grid,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { data } from "@/utils/data";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components";

export default function StakingV2() {
    const [value, setValue] = useState<string>();
    const [currentCoin, setCurrentCoin] = useState({
        name: '',
        staked: 0,
        available: 0,
        shortName: ''
    });
    const [textFieldValue, setTextFieldValue] = useState(0);
    const [error, setError] = useState(false);

    const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const num = event.target.value;
        console.log('change text field', num);
        // Only allow numeric input
        if (parseFloat(num) < currentCoin.available || parseFloat(num) < currentCoin.staked) { // /^\d*$/.test(value) && 
            setError(false);
            setTextFieldValue(parseFloat(num));
        } else {
            setError(true);
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader>Restaking</CardHeader>
                        <CardContent>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <TextField
                                    sx={{width: "30%"}}
                                    id="standard-number"
                                    label="Number"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="standard"
                                />
                                <Autocomplete
                                    sx={{width: "50%"}}
                                    value={value}
                                    onChange={(event: any, newValue: any) => {
                                        setCurrentCoin(newValue);
                                        setValue(newValue.shortName);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            error={error}
                                            label="Choose a crypto to restake"
                                            variant="standard"
                                            onChange={handleTextFieldChange}
                                        />
                                    )}
                                    renderOption={(props, option) => (
                                        <Box
                                            component="li"
                                            sx={{
                                                "& > img": {
                                                    mr: 2,
                                                    flexShrink: 0,
                                                },
                                            }}
                                            {...props}
                                        >
                                            <Image
                                                loading="lazy"
                                                width="20"
                                                src={option.image}
                                                alt={option.name}
                                            />
                                            {option.shortName}
                                        </Box>
                                    )}
                                    options={data}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Paper
                sx={{
                    padding: "16px",
                    marginTop: "16px"
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography>{`Available ${currentCoin.available} ${currentCoin.shortName}`}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography>{`Staked ${currentCoin.staked} ${currentCoin.shortName}`}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button
                            variant="contained"
                            width={"100%"}
                            disabled={currentCoin.available === 0 || textFieldValue < currentCoin.available}
                        >
                            Stake
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button
                            variant="contained"
                            width={"100%"}
                            disabled={currentCoin.staked === 0 || textFieldValue < currentCoin.staked}
                        >
                            Unstake
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            I understand the risks associated and accept terms & conditions.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}
