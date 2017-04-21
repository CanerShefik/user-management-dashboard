/**
 * Created by CSHEFIK on 20/04/2017.
 */
import React, { Component } from 'react';
import { Row} from 'react-flexbox-grid';
import styled from 'styled-components';

const Window = styled.div`
  background: #FAFAFA;
  border-radius: 2px;
  font-family: Helvetica;
  box-sizing: border-box;
  margin-bottom: 20px;
  width: 80%;
  margin: 0 auto;
`;

const Outer = styled.div`
  background: #FAFAFA;
  border-radius: 2px;
  font-family: Helvetica;
  box-sizing: border-box;
  margin-bottom: 50px;
  width: 80%;
  margin: 0 auto;

`;

const Text = styled.h2`
   color: black;
   font: 20px arial, sans-serif;
   text-align: center;
   	position: relative;
   

`;

const UserIcon = styled.img`
    height: 85px;
    width: 85px;
    display: block;
    margin: auto;
    margin-top; 20px;
    padding-top: 30px;
`;

const Button = styled.input`
    height: 50px;
    width: 50px;
    padding-bottom: 30px;
`;


class UserView extends Component {
    render() {
        return (
            <Outer>
            <UserIcon src="http://wfarm4.dataknet.com/static/resources/icons/set110/7d2f7e06.png" alt="User Icon">
            </UserIcon>
                <Window>
                    <Text>First Name: {this.props.fName}</Text>
                </Window>
                <Window>
                    <Text>Surname: {this.props.sName}</Text>
                </Window>
                <Window>
                    <Text>Date of Birth: {this.props.DoB}</Text>
                </Window>

                <Window>
                    <Text>Telephone: {this.props.tele}</Text>
                </Window>
                <Window>
                    <Text>Email: {this.props.email}</Text>
                </Window>
                <Row around="xs">
                    <Button type="image" src="https://image.flaticon.com/icons/svg/61/61456.svg"  />
                    <Button type="image" src="https://image.flaticon.com/icons/svg/63/63260.svg" />
                </Row>

            </Outer>


        );
    }
}

export default UserView;
