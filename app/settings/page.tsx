"use client"

import React, { useState } from 'react';
import { Paper, Box, TextField } from '@mui/material';
import { Button } from '@/components';

interface SettingsFormProps {
    initialSettings: {
        appName: string;
        appTheme: string;
        userName: string;
        userEmail: string;
    };
}

const SettingsForm: React.FC<SettingsFormProps> = ({ initialSettings }) => {
    const [settings, setSettings] = useState(initialSettings);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setSettings(prevSettings => ({
            ...prevSettings,
            [name]: value
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // we can send the updated settings through an API
        console.log('Updated settings:', settings);
    };

    return (
        <Paper>
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                    id="app-name"
                    name="appName"
                    label="App Name"
                    value={settings.appName}
                    onChange={handleChange}
                />
                <TextField
                    id="app-theme"
                    name="appTheme"
                    label="App Theme"
                    value={settings.appTheme}
                    onChange={handleChange}
                />
                <TextField
                    id="user-name"
                    name="userName"
                    label="User Name"
                    value={settings.userName}
                    onChange={handleChange}
                />
                <TextField
                    id="user-email"
                    name="userEmail"
                    type="email"
                    label="User Email"
                    value={settings.userEmail}
                    onChange={handleChange}
                />
                <Button variant="contained" type="submit">Save Settings</Button>
            </Box>
            </form>
        </Paper>
    );
};

const initialSettings = {
    appName: 'My App',
    appTheme: 'Light',
    userName: 'John Doe',
    userEmail: 'john.doe@example.com'
};

export default function Settings() {
    return (
        <SettingsForm initialSettings={initialSettings} />
    );
}