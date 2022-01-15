import styled from "styled-components";

const Section = styled.section`
  padding: 0;
`;

const SectionTitle = styled.h1`
  margin: 0 0 0.2em;
  font-size: 2em;
  font-weight: 500;
  border-bottom: 2px solid black;
`;

const SectionSubTitle = styled.h3`
  margin: 0;
  font-weight: 400;
  font-size: 1.2em;
`;

const ItemContainer = styled.section`
  display: grid;
  gap: 0.6em;
  padding: 2em 0 0;
`;

const Item = styled.p`
  margin: 0;
  font-weight: 300;
  font-size: 1.2em;
  line-height: 1.2em;
  text-align: center;
`;

const FormItem = styled.fieldset`
  display: grid;
  margin: 0;
`;

const Form = styled.form`
  display: grid;
  gap: 1em;
  padding: 2em 0 0;
`;
const Label = styled.label`
  font-weight: 300;
  font-size: 1.2em;
  line-height: 1.2em;
`;
const Input = styled.input`
  height: 2rem;
`;
const TextArea = styled.textarea`
  height: 6rem;
`;
const Button = styled.button`
  justify-self: right;
`;

function KeyRequired() {
  return (
    <Section>
      <SectionTitle>Valid Access Key Required</SectionTitle>
      <SectionSubTitle>Request a key</SectionSubTitle>
      <Form
        name="Key Request"
        method="POST"
        action="resume?keyRequested=true"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="Key Request" />
        <FormItem>
          <Label>Name:</Label>
          <Input type="text" name="name" />
        </FormItem>
        <FormItem>
          <Label>Your Email:</Label>
          <Input type="email" name="email" />
        </FormItem>
        <FormItem>
          <Label>Message:</Label>
          <TextArea name="message" />
        </FormItem>
        <Button type="submit">Send Request</Button>
      </Form>
    </Section>
  );
}

export default KeyRequired;
