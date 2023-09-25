import React, { useState } from 'react';
import { Button, Modal, Form, Grid, Segment, Divider } from 'semantic-ui-react';
import * as styles from '../utils/theme';

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
        content={showLoginForm ? 'Entrar' : 'Entrar'}
        onClick={showLoginForm ? handleLoginButtonClick : handleSignUpButtonClick}
        className={`${styles.loginButtonStyle.toString()} ${
          showLoginForm ? styles.loginStyle.toString() : styles.signUpStyle.toString()
        } ${styles.removeFocusOutline.toString()}`}
      />
      <Modal open={isOpen} onClose={handleClose}>
        <Modal.Header>{showLoginForm ? 'Login' : 'Recuperar Senha'}</Modal.Header>
        <Modal.Content>
          {showLoginForm && (
            <Segment placeholder>
              <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                  <Form>
                    <Form.Input
                      icon='user'
                      iconPosition='left'
                      label='Usuário'
                      placeholder='Usuário'
                    />
                    <Form.Input
                      icon='lock'
                      iconPosition='left'
                      label='Senha'
                      type='Senha'
                    />

                    <Button content='Entrar' primary />
                  </Form>
                </Grid.Column>

                <Grid.Column verticalAlign='middle'>
                  <Button
                    content='Esqueceu a senha?'
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
                      label='Usuário'
                      placeholder='Usuário'
                    />
                    

                    <Button content='Entrar' primary className="customSignUp" />
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
