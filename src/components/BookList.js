import React, { Component } from "react";
import "../styles/BookList.css";
import "antd/dist/antd.css";
import { Card, Button, Col } from "antd";

const { Meta } = Card;

function BookList(props) {
  const { tl, image, description, price } = props;
  return (
    <Col xs={24} sm={12} md={12} lg={8} xl={6}>
      <div className="col-car">
        <Card
          hoverable
          style={{ width: 320 }}
          cover={<img alt="example" src={image} />}
        >
          <Meta title={tl} description={description} />
          <div className="book-list">
            <div className="price-detail">
              <span>{price}</span>
              <a href="#">Detail</a>
            </div>
            <div className="button-cart">
              <Button type="primary"> Add Cart</Button>
            </div>
          </div>
        </Card>
      </div>
    </Col>
  );
}

export default BookList;
