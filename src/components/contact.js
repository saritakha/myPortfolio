import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import mee from './../images/about/mee.jpg'

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={7}>
            <img
              src={mee}
              alt='mee'
              style={{height: '600px', width: '600px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}><i>Will feel happy to know how you feel</i></p>
          </Cell>
          <Cell col={5}>
            <h2>Contact Details</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '23px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    +358442313341
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '23px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                  saritakhanal533@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
