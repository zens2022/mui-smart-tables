import {
    TableContainer,
    Table as MuiTable,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
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
 * Table
 */
export function Table(props) {
    // Data -------------------------------------------------
    const columns = props.columns;
    const data = props.data;
    const sx = props.sx;
    const option = {
        size: 'small',
        ...props.option
    };// Table Props
    const name = props.name;
    // ------------------------------------------------- Data
    // Rander -----------------------------------------------
    const buildColumnsElement = () => {
        let element;
        if (columns.length > 0) {
            let cells = columns.map((column, index) => {
                let key = `column-${index}`;
                let option = {
                    sx: {
                        color: grey[700]
                    },
                    ...column.option
                };
                let value = column.value;
                return (
                    <TableCell {...option} key={key}>
                        {value}
                    </TableCell>
                );
            });
            element = <TableRow>{cells}</TableRow>;
        }
        return element;
    }

    const buildDataElement = () => {
        let element;
        if (data.length > 0) {
            element = data.map((row, rowIndex) => {
                let key = `row-${rowIndex}`;
                let cells = columns.map((column, colIndex) => {
                    let key = `cell-${rowIndex}-${colIndex}`;
                    let field = column.field;
                    let value = row[field];
                    return (
                        <TableCell key={key}>
                            {value}
                        </TableCell>
                    )
                })
                return (
                    <TableRow key={key}>
                        {cells}
                    </TableRow>
                );
            })
        }
        return element;
    }

    const element = (
        <Box
            sx={{
                my: 2,
                color: grey[700],
                ...sx
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    mb: 1,
                    ml: 3
                }}
            >
                {name}
            </Typography>
            <TableContainer
                component={Paper}
                elevation={3}
            >
                <MuiTable {...option}>
                    <TableHead>
                        {buildColumnsElement()}
                    </TableHead>
                    <TableBody>
                        {buildDataElement()}
                    </TableBody>
                </MuiTable>
            </TableContainer>
        </Box>
    );
    return element;
    // ----------------------------------------------- Rander
}