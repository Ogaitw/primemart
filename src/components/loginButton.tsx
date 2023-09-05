import React, { useState } from 'react';
import { Button, Modal, Form, Grid, Segment, Divider } from 'semantic-ui-react';
import * as styles from '../utils/theme'; // Importe os estilos do arquivo styles.ts

const LoginButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleLoginButtonClick = () => {
    setIsOpen(true);
    setShowLoginForm(true);
    setShowSignUpForm(false);
  };

  const handleSignUpButtonClick = () => {
    setIsOpen(true);
    setShowLoginForm(false);
    setShowSignUpForm(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowLoginForm(false);
    setShowSignUpForm(false);
  };

  return (
    <div>
      <Button
        icon="user"
        content={showLoginForm ? 'Login' : 'Sign Up'}
        onClick={showLoginForm ? handleLoginButtonClick : handleSignUpButtonClick}
        className={`${styles.loginButtonStyle.toString()} ${
          showLoginForm ? styles.loginStyle.toString() : styles.signUpStyle.toString()
        } ${styles.removeFocusOutline.toString()}`}
      />
      <Modal open={isOpen} onClose={handleClose}>
        <Modal.Header>{showLoginForm ? 'Login' : 'Sign Up'}</Modal.Header>
        <Modal.Content>
          {showLoginForm && (
            <Segment placeholder>
              <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                  <Form>
                    <Form.Input
                      icon='user'
                      iconPosition='left'
                      label='Username'
                      placeholder='Username'
                    />
                    <Form.Input
                      icon='lock'
                      iconPosition='left'
                      label='Password'
                      type='password'
                    />

                    <Button content='Login' primary />
                  </Form>
                </Grid.Column>

                <Grid.Column verticalAlign='middle'>
                  <Button
                    content='Sign up'
                    icon='signup'
                    size='big'
                    onClick={handleSignUpButtonClick}
                    className={`${styles.loginButtonStyle.toString()} ${styles.signUpStyle.toString()}`}
                  />
                </Grid.Column>
              </Grid>

              <Divider vertical>Or</Divider>
            </Segment>
          )}

          {showSignUpForm && (
            <Segment placeholder>
              <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                  <Form>
                    <Form.Input
                      icon='user'
                      iconPosition='left'
                      label='Username'
                      placeholder='Username'
                    />
                    <Form.Input
                      icon='lock'
                      iconPosition='left'
                      label='Password'
                      type='password'
                    />

                    <Button content='Sign Up' primary className="customSignUp" />
                  </Form>
                </Grid.Column>

                <Grid.Column verticalAlign='middle'>
                  <Button
                    content='Login'
                    icon='user'
                    size='big'
                    onClick={handleLoginButtonClick}
                    className={`${styles.loginButtonStyle.toString()} ${styles.loginStyle.toString()}`}
                  />
                </Grid.Column>
              </Grid>

              <Divider vertical>Or</Divider>
            </Segment>
          )}
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default LoginButton;
