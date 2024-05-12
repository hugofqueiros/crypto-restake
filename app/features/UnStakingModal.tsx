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

interface UnStakingModalProps {
    openModal: boolean;
    handleCloseModal: () => void;
    data: {
        name: string;
        staked: number;
        available: number;
        shortName: string;
    };
}

export const UnStakingModal = ({
    openModal,
    handleCloseModal,
    data,
}: UnStakingModalProps) => {
    const [textFieldValue, setTextFieldValue] = useState(0);
    const [error, setError] = useState(false);

    const handleFillMax = () => {
        setTextFieldValue(data.staked);
    };

    const handleStake = () => {
        if (textFieldValue > 0) {
            alert(`Staked ${textFieldValue}`)
            handleCloseModal();
        }
    }

    const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        // Only allow numeric input
        if (/^\d*$/.test(value) && parseFloat(value) < data.staked) {
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
                    label={`Staked ${data.staked} ${data.shortName}`}
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
                <Button onClick={handleStake} disabled={(textFieldValue > 0 && !error ? false : true)}>Unstake</Button>
                <MuiButton onClick={handleCloseModal}>Close</MuiButton>
            </DialogActions>
        </Dialog>
    );
};
