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
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.BASE_URL;

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
export const EmailUser = ({
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
    <Preview>
      {(locale == "es-MX" &&
        "Gracias por enviar tu información, en breve te contactaremos") ||
        "Thank you for submitting your information, we will contact you shortly."}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://flsqnnbcmtmltxmnygwe.supabase.co/storage/v1/object/sign/Grupo%20Expertix/sol.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHcnVwbyBFeHBlcnRpeC9zb2wucG5nIiwiaWF0IjoxNzE3MTM3NDI1LCJleHAiOjMzMjUzMTM3NDI1fQ.FkOgmUKYNq9Xszq_kA2YWYIKtwZF1za97NHq7y19wjI&t=2024-05-31T06%3A37%3A05.756Z`}
          width="244.1"
          height="50"
          alt="Solarix Logo"
          style={logo}
        />
        <Text style={paragraph}>
          {(locale == "es-MX" && "Hola") || "Hi"}{" "}
          <span style={paragraphData2}>{name},</span>
        </Text>
        {(locale == "es-MX" && (
          <Text style={paragraph2}>
            Solicitaste una cotización de proyecto{" "}
            <span style={paragraphData}>{type}</span>, en breve intentaremos
            comunicarnos al número de teléfono{" "}
            <span style={paragraphData}>{phone}</span> , en caso de no lograr
            contactarte via telefónica, intentaremos comunicarnos via email.
          </Text>
        )) || (
          <Text style={paragraph2}>
            You requested a project quote{" "}
            <span style={paragraphData}>{type}</span>, we will try to contact
            you shortly at the phone number{" "}
            <span style={paragraphData}>{phone}</span>. If we are unable to
            reach you by phone, we will try to contact you via email.
          </Text>
        )}
        <Section style={btnContainer}>
          {(locale == "es-MX" && (
            <Button style={button} href="https://solarix.mx/es-MX">
              Visita nuestro sitio web
            </Button>
          )) || (
            <Button style={button} href="https://solarix.mx/en-US">
              Visit our website
            </Button>
          )}
        </Section>
        <Hr style={hr} />
        {(locale == "es-MX" && (
          <Text style={paragraph2}>
            Lo mejor,
            <br />
            Equipo Solarix
          </Text>
        )) || (
          <Text style={paragraph2}>
            Best regards,
            <br />
            Solarix Team
          </Text>
        )}
      </Container>
    </Body>
  </Html>
);

export default EmailUser;

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
  margin: "0 auto",
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
  fontSize: "14px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "10px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#CBB0DC",
  fontSize: "12px",
  fontStyle: "italic",
};
