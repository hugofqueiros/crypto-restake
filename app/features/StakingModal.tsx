import { Button } from "@/components";
import {
    Button as MuiButton,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";
import { useState } from "react";

interface StakingModalProps {
    openModal: boolean;
    handleCloseModal: () => void;
    data: {
        name: string;
        staked: number;
        available: number;
        shortName: string;
    };
}

export const StakingModal = ({
    openModal,
    handleCloseModal,
    data,
}: StakingModalProps) => {
    const [textFieldValue, setTextFieldValue] = useState(0);
    const [error, setError] = useState(false);

    const handleFillMax = () => {
        console.log('came to handle fill max', data.available);
        setTextFieldValue(data.available);
    };

    const handleStake = () => {
        if (textFieldValue > 0) {
            alert(`Staked ${textFieldValue}`)
            handleCloseModal();
        }
    }

    const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        console.log('change text field', value);
        // Only allow numeric input
        if (parseFloat(value) < data.available) { // /^\d*$/.test(value) && 
            setError(false);
            setTextFieldValue(parseFloat(value));
        } else {
            setError(true);
        }
    };

    return (
        <Dialog open={openModal} onClose={handleCloseModal}>
            <DialogTitle>{data.name}</DialogTitle>
            <DialogContent
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <TextField
                    error={error}
                    id="standard-helperText"
                    label={`Available ${data.available} ${data.shortName}`}
                    defaultValue={textFieldValue}
                    variant="standard"
                    onChange={handleTextFieldChange}
                    inputProps={{
                        inputMode: 'numeric',
                        pattern: '[0-9]*',
                    }}
                />
                <MuiButton onClick={handleFillMax}>Max</MuiButton>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleStake} disabled={(textFieldValue > 0 && !error ? false : true)}>Stake</Button>
                <MuiButton onClick={handleCloseModal}>Close</MuiButton>
            </DialogActions>
        </Dialog>
    );
};
