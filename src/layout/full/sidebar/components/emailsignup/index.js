import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Main } from '../../../../../constant'
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material'
import CustomMenu from '../../../../../components/selectitem'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const EmailSignup = props => {
      const [data , setData ] = useState(Main().Email.menu)
    return (
      <div>
          <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-ImageBanner"
          >
            <Typography component="span">Email</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Grid container>
                <CustomMenu id={props.id}  data={data} />
              </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
    )
}

EmailSignup.propTypes = {}

export default EmailSignup