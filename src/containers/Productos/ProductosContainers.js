
import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';
class ProductosContainer extends Component {

    goPeliculas = () => {
        this.props.navigation.navigate('Peliculas')
    }

  render() {
    return (
      <Container>
       
        <Content>
        <Card>
            <CardItem header bordered>
                    <Text> Productos </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Aquí los productos
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button success onPress={this.goPeliculas}>
                <Text> Películas </Text>
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
export default ProductosContainer;