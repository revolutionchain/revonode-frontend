import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect, useState } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"


const TipsDataWidget = props => {

    
useEffect(()=>{        
})

const icons = []

    return (
        <React.Fragment>
            <Row>
                    <Col md={12} xl={12} className="">
                        <Col xl={12} >
                        <Card>
                            <CardBody>
        <h4 className="card-title mb-2">Most useful tips for your node</h4>
        <hr />
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Description list alignment</h4>
              <p class="card-title-desc">Align terms and descriptions horizontally by using our grid system’s predefined classes (or semantic mixins). For longer terms, you can optionally add a <code class="highlighter-rouge">.text-truncate</code> class to truncate the text with an ellipsis. </p>
              <dl class="row mb-0">
                <dt class="col-sm-3">Description lists</dt>
                <dd class="col-sm-9">A description list is perfect for defining terms.</dd>
                <dt class="col-sm-3">Euismod</dt>
                <dd class="col-sm-9">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                <dd class="col-sm-9 offset-sm-3">Donec id elit non mi porta gravida at eget metus.</dd>
                <dt class="col-sm-3">Malesuada porta</dt>
                <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
                <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
                <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
                <dt class="col-sm-3">Nesting</dt>
                <dd class="col-sm-9 mb-0">
                  <dl class="row mb-0">
                    <dt class="col-sm-4">Nested definition list</dt>
                    <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                  </dl>
                </dd>
              </dl>
            </div>
          </div>
        </div>        
          

          </CardBody>
          </Card>
          </Col>
          </Col>
            </Row>
        </React.Fragment>
    );
}

export default TipsDataWidget;
