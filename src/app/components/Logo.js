import {
    Box,
    Typography,
    Divider
} from '@mui/material';

import {
    grey
} from '@mui/material/colors';

// Process ----------------------------------------------
// ---------------------------------------------- Process
// Event ------------------------------------------------
// ------------------------------------------------ Event

/**
 * Logo
 */
export function Logo(props) {
    // Data -------------------------------------------------
    /**
     * @type string
     */
    const value = props.value;
    const sx = props.sx;
    // ------------------------------------------------- Data
    // Rander -----------------------------------------------
    const element = (
        <Box
            sx={{
                mt: 2,
                color: grey[700],
                ...sx
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    ml: 3
                }}
            >
                {value.toUpperCase()}
            </Typography>
            <Divider
                sx={{
                    mt: 2
                }}
            />
        </Box>
    );
    return element;
    // ----------------------------------------------- Rander
}