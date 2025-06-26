import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Hr,
  Img,
} from "@react-email/components";

export const EReceiptEmail = () => (
  <Html>
    <Head />
    <Preview>Your E-Receipt from MyFood</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={{ textAlign: "center" }}>
          <Text style={logo}>
            🍴 <strong style={{ color: "#B00020" }}>My Food</strong>
          </Text>
          <Text style={heading}>E-Receipt</Text>
          <Text style={subText}>Order Code: #POS-2025062329400</Text>
        </Section>

        <Hr style={hr} />
        <Section>
          <Text style={sectionHeading}>Customer Information</Text>
          <Text>
            <strong>Table:</strong> 5A
          </Text>
          <Text>
            <strong>Name:</strong> Muhammad Al Biruni
          </Text>
          <Text>
            <strong>Email:</strong> mmalbiruni83@gmail.com
          </Text>
          <Text>
            <strong>Phone:</strong> 08816065792
          </Text>
          <Text>
            <strong>Additional Notes:</strong> adsad
          </Text>
        </Section>

        <Hr style={hr} />
        <Section>
          <Text style={sectionHeading}>Order Information</Text>
          <Text>
            <strong>Order Date:</strong> 2025-06-23 02:58:59
          </Text>
          <Text>
            <strong>Paid Date:</strong> 2025-06-23 03:00:46
          </Text>
          <Text>
            <strong>Payment Status:</strong> PAID
          </Text>
        </Section>

        <Hr style={hr} />
        <Section>
          <Text style={sectionHeading}>Product Details</Text>
          <ProductItem
            name="Spinach Artichoke Dip – 1x"
            price="Rp 165.000"
            image="https://via.placeholder.com/50"
          />
          <ProductItem
            name="Calamari Rings – 1x"
            price="Rp 210.000"
            image="https://via.placeholder.com/50"
          />
        </Section>

        <Hr style={hr} />
        <Section>
          <Text>
            <strong>Sub Total:</strong> Rp 375.000
          </Text>
          <Text>
            <strong>Tax (10%):</strong> Rp 41.250
          </Text>
          <Text>
            <strong>Grand Total:</strong> Rp 416.250
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const ProductItem = ({
  name,
  price,
  image,
}: {
  name: string;
  price: string;
  image: string;
}) => (
  <Section style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
    <Img src={image} width="50" height="50" style={{ marginRight: 12 }} />
    <div style={{ flexGrow: 1 }}>
      <Text style={{ margin: 0 }}>{name}</Text>
    </div>
    <Text style={{ margin: 0 }}>{price}</Text>
  </Section>
);

const main = {
  backgroundColor: "#fff",
  fontFamily: "Arial, sans-serif",
};

const container = {
  padding: "24px",
  maxWidth: "500px",
  margin: "0 auto",
  border: "1px solid #eee",
};

const heading = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: 0,
};

const subText = {
  fontSize: "12px",
  color: "#666",
  marginTop: 0,
};

const logo = {
  fontSize: "20px",
};

const sectionHeading = {
  fontSize: "14px",
  fontWeight: "bold",
  margin: "12px 0 4px",
};

const hr = {
  borderTop: "1px solid #eee",
  margin: "16px 0",
};

export default EReceiptEmail;
