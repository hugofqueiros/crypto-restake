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
} from "@mui/material";
import { data } from "@/utils/data";
import Image from "next/image";
import { useState } from "react";

export default function StakingV2() {
    const [value, setValue] = useState<string | null>("");

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
                                        setValue(newValue.shortName);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Choose a crypto to restake"
                                            inputProps={{
                                                ...params.inputProps,
                                                autoComplete: "new-password", // disable autocomplete and autofill
                                            }}
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
            <Paper></Paper>
        </Box>
    );
}
