import {
    Button as MuiButton,
} from "@mui/material";

interface ButtonProps {
    children: React.ReactNode,
    onClick?: any
    disabled?: boolean
    variant?: string
    type?: string
    width?: any
}

export const Button = ({ children, onClick, disabled = false, width = "auto"}: ButtonProps) => (
    <MuiButton sx={{
        backgroundColor: "#8ced22",
        color: "#000",
        '&:hover': {
            backgroundColor: "#68a02a",
        },
        '&.Mui-disabled': {
            backgroundColor: '#000',
        },
        width: {width}
    }}
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </MuiButton>
)