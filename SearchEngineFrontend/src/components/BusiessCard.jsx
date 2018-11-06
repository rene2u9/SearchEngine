import React, { Component } from 'react';
import {Card, Col, Row, Collection, CollectionItem, Chip} from 'react-materialize';
import Map from './Map'


class BusinessCard extends Component {

  constructor(props){
    super(props);
    this.state = this.props.data;
  }
 
  render() {
    return (
        <Card 
          title={this.state.name}
          actions={this.state.categories.map( (e, i) => <Chip key={i}>{e}</Chip>)}
          header={<Map lat={parseFloat(this.state.latitude)} lng={parseFloat(this.state.longitude)}/>}
          style={{margin:"20px", zIndex: "-1"}}
          >
            <Row>       
              <Col s={4}>
                <p>{this.state.address}</p>
                <p>{this.state.postalcode} {this.state.city}, {this.state.state}</p>
                <p>{this.state.neigborhood}</p>
                <p>{this.state.stars} / 5 Stars ({this.state.review_count} reviews)</p>
                <br/>
                <p><b> your awesome businessdescription here</b></p> 
                <br/> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </Col>
              {
                  Object.keys(this.state.hours).length > 0?
                    <Col s={4}>
                        <Collection header="Hours">
                            {                            
                                Object.keys(this.state.hours).map( (resf, i) => {
                                    return (
                                        <CollectionItem key={i}>{resf} {this.state.hours[resf]}</CollectionItem>
                                    )
                                })
                            }
                        </Collection>
                    </Col> 
                    :
                    null
              }
              {
                  Object.keys(this.state.attributes).length >= 0?        
                    <Col s={4}>
                        <Collection header="Attributes">
                            {                            
                                Object.keys(this.state.attributes).map( (resf, i) => {
                                    return (
                                        <CollectionItem key={i}>{resf} {this.state.attributes[resf]}</CollectionItem>
                                    )
                                })
                            }
                        </Collection>
                    </Col>
                    :
                    null
              }
          </Row>
        </Card>
    );
  }
}

export default BusinessCard;