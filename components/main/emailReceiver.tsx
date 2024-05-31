import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Row,
  Column,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface KoalaWelcomeEmailProps {
  name: string;
  email: string;
  phone: string;
  type: string;
  pay: string;
  state: string;
  city: string;
  time: string;
  serv: string;
  locale: string;
}
export const EmailReceiver = ({
  name,
  email,
  phone,
  type,
  pay,
  state,
  city,
  time,
  serv,
  locale,
}: KoalaWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Nueva solicitud de cotización{" "}{type}</Preview>
    <Body style={main}>
      <Tailwind>
        <Container style={container}>
          <Text style={paragraph}>
            Hola <span style={paragraphData2}>Solarix,</span>
          </Text>
          <Text style={paragraph2}>
            Has recibido una solicitud de cotización para un proyecto{" "}
            <span style={paragraphData}>{type}</span>
          </Text>
          <Text style={paragraph}>Datos de la cotización:</Text>
          <Row style={rowStyle} className="gap-5 flex">
          <Text style={paragraph2}>
              Proyecto: <span style={paragraphData}>{type}</span>
            </Text>
            <Text style={paragraph2}>
              Pago estimado a CFE: <span style={paragraphData}>{pay}</span>
            </Text>
            <Text style={paragraph2}>
              Tiempo de planeación: <span style={paragraphData}>{time}</span>
            </Text>
            <Text style={paragraph2}>
              Estado: <span style={paragraphData}>{state}</span>
            </Text>
            <Text style={paragraph2}>
              Ciudad: <span style={paragraphData}>{city}</span>
            </Text>
            <Text style={paragraph2}>
              Núm. de servicio: <span style={paragraphData}>{serv}</span>
            </Text>
          </Row>
          <Text style={paragraph}>Datos del cliente:</Text>
          <Row style={rowStyle} className="gap-5 flex">
            <Text style={paragraph2}>
              Nombre del cliente: <span style={paragraphData}>{name}</span>
            </Text>
            <Text style={paragraph2}>
              Teléfono: <span style={paragraphData}>{phone}</span>
            </Text>
            <Text style={paragraph2}>
              Email: <span style={paragraphData}>{email}</span>
            </Text>
          </Row>
          <Row style={rowStyle} className="gap-5 flex">
            <Text style={paragraph}>Contacta al usuario:</Text>
          </Row>
          <Row style={rowStyle}>
            <Button style={button} href={`mailto:${email}`}>
              Email
            </Button>
          </Row>
          <Row style={rowStyle}>
            <Button style={button} href={`tel:${phone}`}>
              Teléfono
            </Button>
          </Row>
          <Row style={rowStyle}>
            <Button
              style={button}
              href={`https://wa.me/1${phone}`}
              target="_blank"
            >
              Whatsapp
            </Button>
          </Row>
        </Container>
      </Tailwind>
    </Body>
  </Html>
);

export default EmailReceiver;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#0a0a0a",
};

const paragraph2 = {
  fontSize: "14px",
  lineHeight: "26px",
  color: "#6A7280",
};

const paragraphData = {
  fontSize: "14px",
  lineHeight: "26px",
  color: "#F6931F",
};

const paragraphData2 = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#F6931F",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#F6931F",
  borderRadius: "50px",
  color: "#000",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#CBB0DC",
  fontSize: "12px",
};

const rowStyle = {
  width: "100%",
  height: "fit-content",
  padding: "5px 0",
};

const card = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "15px",
  border: "2px solid #6B15A0",
  borderRadius: "30px",
};
