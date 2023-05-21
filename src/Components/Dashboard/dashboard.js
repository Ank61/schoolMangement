import React from "react";
import Layout from "../../Common/Layout/layout";
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Icon } from '@iconify/react';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
const Iconify = forwardRef(({ icon, width = 20, sx, ...other }, ref) => (
    <Box ref={ref} component={Icon} icon={icon} sx={{ width, height: width, ...sx }} {...other} />
));

Iconify.propTypes = {
    sx: PropTypes.object,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};
function Dashboard() {
    return (
        <div class="wrapper d-flex align-items-stretch">
            <Layout />
            <Container maxWidth="xl" id="content" class="p-4 p-md-5 pt-5">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Hi, Welcome to Dashboard
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <div style={{ border: '1px solid #ef0b60', padding: '10%', borderRadius: 10 }}><h6>New Admissions</h6> <h6><b>232321</b></h6></div>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <div style={{ border: '1px solid #7fd9d1', padding: '10%', borderRadius: 10 }}><h6>New Students</h6> <h6><b>345345</b></h6></div>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <div style={{ border: '1px solid #5cb55c', padding: '10%', borderRadius: 10 }} ><h6>Teacher Attendance</h6> <h6><b>23232</b></h6></div>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <div style={{ border: '1px solid #c6b4ef', padding: '10%', borderRadius: 10 }} ><h6>Report's Generated</h6> <h6><b>2323</b></h6></div>
                    </Grid>
                </Grid>

            </Container>
        </div>
    )
}
export default Dashboard;