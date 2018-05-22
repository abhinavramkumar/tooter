import React from "react";
import Icon from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/fontawesome-free-solid";
import { faCalendarAlt } from "@fortawesome/fontawesome-free-regular";
import {
  Wrapper,
  Name,
  Username,
  Description,
  Location,
  JoinDate
} from "./styles";

const Bio = props => {
  return (
    <Wrapper>
      <Name>Abhinav Ramkumar</Name>
      <Username>@rabhinav</Username>
      <Description>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
        molestias dignissimos suscipit, neque velit voluptatum dolorem.
      </Description>
      <Location>
        <Icon icon={faMapMarkerAlt} size="lg" />
        Bangalore, Karnataka
      </Location>
      <JoinDate>
        <Icon icon={faCalendarAlt} size="lg" />
        12th June, 2008
      </JoinDate>
    </Wrapper>
  );
};

export default Bio;
