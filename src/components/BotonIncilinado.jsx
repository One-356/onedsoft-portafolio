import { Button } from "@mui/material";

function BotonInclinado({sx, children, ...props}) {
    return (
        <button
        variant="contained"
        disableElevation
        {...props}
        sx={{
            borderRadius: 0,
            px: 3,
            fontweight: 'bold',
            clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)', ...sx,
        }}>
            {children}
        </button>
    )
}

export default BotonInclinado