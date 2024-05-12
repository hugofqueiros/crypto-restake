"use client";

import { useContext, useEffect, useState } from "react";
import {
    Toolbar,
    Typography,
    Box,
    IconButton,
    Container,
    Badge,
    Paper,
} from "@mui/material";
import { Menu, ChevronLeft, Wallet, Mail } from "@mui/icons-material";

import { Drawer } from "./Drawer";
import { AppBar } from "./AppBar";
import { Nav } from "./Nav";

import { Button, RandomAvatar } from "@/components";

export const Dashboard = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar position="absolute" open={open}>
                <Toolbar
                    sx={{
                        pr: "24px", // keep right padding when drawer closed
                    }}
                >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: "36px",
                            ...(open && { display: "none" }),
                        }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        Restacking
                    </Typography>
                    <Button>
                        <Wallet />
                        <Typography
                            component="span"
                            variant="button"
                            noWrap
                        >
                            Connect Wallet
                        </Typography>
                    </Button>
                    <Paper variant="outlined" sx={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "0 10px"}}>
                        <Typography
                            component="span"
                            variant="body2"
                            sx={{padding: "0 10px"}}
                        >
                            0x9522...C4BAfe5
                        </Typography>
                        <RandomAvatar/>
                    </Paper>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <Toolbar
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        px: [1],
                    }}
                >
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeft />
                    </IconButton>
                </Toolbar>
                <Nav />
            </Drawer>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === "dark"
                            ? theme.palette.grey[900]
                            : theme.palette.grey[100],
                    flexGrow: 1,
                    paddingTop: "64px",
                    height: "100vh",
                    overflow: "auto",
                }}
            >
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    {children}
                </Container>
            </Box>
        </Box>
    );
};
