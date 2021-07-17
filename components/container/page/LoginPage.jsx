//import { response } from "express";
import React, { memo } from "react";
import { useState } from "react";
import { useRef } from "react";

import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

export default function LoginPage() {
  return (
    <Card className="w-25 box-shadow">
      <CardBody>
        <Form
          action="" //Check with ENV variable or Config file
          method=""
        >
          <fieldset>
            <legend className="text-primary bg-gradient-primary font-weight-bold uppercase">
              <h3 className="mt-2 ml-3 text-light text-center">Login</h3>
            </legend>
            <FormGroup>
              <Label for="exampleInputEmail3">Email address</Label>
              <Input
                type="email"
                className="form-control"
                id="exampleInputEmail3"
                aria-describedby="emailHelp"
                //ref={email}
              />
              <small id="emailHelp" className="form-text text-muted"></small>
            </FormGroup>
            <FormGroup>
              <Label for="exampleInputPassword3">Password</Label>
              <Input
                type="password"
                className="form-control"
                id="exampleInputPassword3"
                //ref={password}
              />
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck3"
              />
              <Label check for="exampleCheck3">
                Check me out
              </Label>
            </FormGroup>
          </fieldset>
          <Button
            color="primary"
            block
            size="lg"
            className="mt-2"
            //onClick={handleLogin}
          >
            Submit
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
}
