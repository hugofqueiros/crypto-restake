import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import {
    List,
    Divider,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { CurrencyBitcoin, Foundation, Settings, Message} from "@mui/icons-material";
import canaryprotocol from "./canaryprotocol.svg";

export const Nav = () => {
    const [activeRoute, setActiveRoute] = useState('/');

    const handleRouteChange = (route: any) => {
        setActiveRoute(route);
    };

    return (
        <>
            <Image
                src={canaryprotocol}
                className="canaryprotocol logo"
                alt="canary protocol logo"
            />
            <List component="nav">
                <ListItemButton
                    component={Link}
                    href="/"
                    selected={activeRoute === '/'}
                    onClick={() => handleRouteChange('/')}
                    sx={{ '&.Mui-selected': { backgroundColor: '#8ced22', color: '#000' } }}
                >
                    <ListItemIcon>
                        <Foundation />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    href="/staking"
                    selected={activeRoute === '/staking'}
                    onClick={() => handleRouteChange('/staking')}
                    sx={{ '&.Mui-selected': { backgroundColor: '#8ced22', color: '#000' } }}
                >
                    <ListItemIcon>
                        <CurrencyBitcoin />
                    </ListItemIcon>
                    <ListItemText primary="Staking" />
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    href="/settings"
                    selected={activeRoute === '/settings'}
                    onClick={() => handleRouteChange('/settings')}
                    sx={{ '&.Mui-selected': { backgroundColor: '#8ced22', color: '#000' } }}
                >
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    href="/messages"
                    selected={activeRoute === '/messages'}
                    onClick={() => handleRouteChange('/messages')}
                    sx={{ '&.Mui-selected': { backgroundColor: '#8ced22', color: '#000' } }}
                >
                    <ListItemIcon>
                        <Message />
                    </ListItemIcon>
                    <ListItemText primary="Messages" />
                </ListItemButton>
                <Divider sx={{ my: 1 }} />
            </List>
        </>
    );
};
