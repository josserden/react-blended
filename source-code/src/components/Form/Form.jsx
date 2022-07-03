import React, { Component } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineMessage } from 'react-icons/ai';

import {
  Button,
  LabelText,
  BaseForm,
  Label,
  Input,
  Section,
  Container,
} from 'components';

export class Form extends Component {
  state = {
    name: '',
    age: '',
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      age: '',
    });
  };

  render() {
    return (
      <>
        <Section>
          <Container>
            <BaseForm onSubmit={this.handleSubmit}>
              <Label>
                <LabelText>
                  <BsFillPersonFill />
                  Name
                </LabelText>
                <Input
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={this.state.name}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  onChange={this.handleChange}
                />
              </Label>

              <Label>
                <LabelText>
                  <AiOutlineMessage />
                  Age
                </LabelText>

                <Input
                  placeholder="Age"
                  type="number"
                  name="age"
                  value={this.state.age}
                  pattern="^[0-9]"
                  title="Only integer number"
                  min="1"
                  step="1"
                  required
                  onChange={this.handleChange}
                />
              </Label>

              <Button type="submit">add contact</Button>
            </BaseForm>
          </Container>
        </Section>
      </>
    );
  }
}
