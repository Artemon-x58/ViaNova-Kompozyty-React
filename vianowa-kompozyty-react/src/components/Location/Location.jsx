import { Address } from "../Address/Address";
import { Container } from "../Container/Container";
import {
  LocationGoogleMap,
  LocationTitle,
  LocationWrapper,
} from "./Location.styled";

export const Location = () => {
  return (
    <Container>
      <LocationWrapper>
        <div>
          <LocationTitle>Chcesz o coś zapytać?</LocationTitle>
          <Address />
        </div>
        <LocationGoogleMap
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75324.00174865704!2d22.927492225461894!3d53.84508615356122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e0505609dd208d%3A0xea806f10b88a9f4a!2z0JDQstCz0YPRgdGC0L7Qsg!5e0!3m2!1sru!2spl!4v1737840163116!5m2!1sru!2spl"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </LocationWrapper>
    </Container>
  );
};
