import {
    Container,
    Box
} from "@mui/material";
import { Logo } from "../components/Logo";
import { Table } from "../components/Table";

// Process ----------------------------------------------
// ---------------------------------------------- Process
// Event ------------------------------------------------
// ------------------------------------------------ Event

/**
 * DemoPage
 */
export function DemoPage(props) {
    // Data -------------------------------------------------
    let columns = [{
        value: 'col1',
        field: 'col1',
        option: {
            align:'left'
        }
    }, {
        value: 'col2',
        field: 'col2',
        option: {}
    }, {
        value: 'col3',
        field: 'col3',
        option: {}
    }, {
        value: 'col4',
        field: 'col4',
        option: {}
    }];

    let data = [{
        col1: 'value1',
        col2: 'value2',
        col3: 'value3',
        col4: 'value4',
    }, {
        col1: 'value1-1',
        col2: 'value2-1',
        col3: 'value3-1',
        col4: 'value4-1',
    }, {
        col1: 'value1-2',
        col2: 'value2-2',
        col3: 'value3-2',
        col4: 'value4-2',
    }];
    // ------------------------------------------------- Data
    // Rander -----------------------------------------------
    /**
     * Logo element
     */
    const logoElt = (
        <Logo
            value="MUI Smart Talbes"
        />
    );

    /**
     * Final output
     */
    const element = (
        <Container
            maxWidth="xl"
        >
            {logoElt}
            <Box
                sx={{
                    width: 600
                }}
            >
                <Table
                    name="Basic Table"
                    columns={columns}
                    data={data}
                />
            </Box>
        </Container>
    );
    return element;
    // ----------------------------------------------- Rander
}