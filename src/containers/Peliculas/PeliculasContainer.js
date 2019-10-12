import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';
class PeliculasContainer extends Component {

  goProductos = () => {
    this.props.navigation.navigate('Productos')
}
  render() {
    return (
      <Container>
       
        <Content>
        <Card>
            <CardItem header bordered>
              <Text>Peliculas</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Aquí las Peliculas
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button primary onPress={this.goProductos}>
                <Text> Productos </Text>
              </Button>
            </CardItem>
          </Card>       
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
export default PeliculasContainer;