import React from 'react'
import {Grid, Icon, Segment } from 'semantic-ui-react';
import {format, parseISO} from 'date-fns';




const EventDetailedInfo = ({event}) => {
    return (
        
           <Segment.Group>
              <Segment attached="top">
                <Grid>
                  <Grid.Column width={1}>
                    <Icon size="large" color="teal" name="info" />
                  </Grid.Column>
                  <Grid.Column width={15}>
                    <p>{event.description}</p>
                  </Grid.Column>
                </Grid>
              </Segment>

              <Segment attached>
                <Grid verticalAlign="middle">
                  <Grid.Column width={1}>
                    <Icon name="calendar" size="large" color="teal" />
                  </Grid.Column>
                  <Grid.Column width={15}>
                    {
                      event.date &&
                      <span>
                        {format(parseISO(event.date), "EEEE do LLL")} às {''}
                        {format(parseISO(event.date), "h:mm a")}
                      </span>
                    } 
                  </Grid.Column>
                </Grid>
              </Segment>

              <Segment attached>
                <Grid verticalAlign="middle">
                  <Grid.Column width={1}>
                    <Icon name="marker" size="large" color="teal" />
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <span>{event.venue}</span>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    {/* <Button color="teal" size="tiny"/> */}
                  </Grid.Column>
                </Grid>
              </Segment>
            </Segment.Group>
    )
}

export default EventDetailedInfo
