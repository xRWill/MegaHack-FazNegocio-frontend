import React from 'react';
import ski from '~/assets/images/products/ski.png'

import alcool from '~/assets/images/products/alcool.png'
import carga from '~/assets/images/products/carga.png'
import colchonete from '~/assets/images/products/colchonete.png'
import lenco from '~/assets/images/products/lenco.png'
import luva from '~/assets/images/products/luva.png'
import peso from '~/assets/images/products/peso.png'
import plataforma from '~/assets/images/products/plataforma.png'
import remo from '~/assets/images/products/remo.png'
import whey from '~/assets/images/products/whey.png'

import { Container, CategoryList, Category, ItemList } from './styles';

export default function Dashboard() {
  return (
    <Container>

      <h1>Academia </h1>

      <CategoryList>
        <Category>
          <h2>Tendencias</h2>
          <ItemList>
            <div>
              <img src={ski} />
              <span>Equipamento de Ski</span>
            </div>
            <div>
              <img src={colchonete} />
              <span>Colchonete Antiviral</span>
            </div>
            <div>
              <img src={lenco} />
              <span>Lenço Álcool 70%</span>
            </div>
            <div>
              <img src={peso} />
              <span>Altere Emborrachado</span>
            </div>
          </ItemList>
        </Category>

        <Category>
          <h2>Inovações</h2>
          <ItemList>
            <div>
              <img src={carga} />
              <span>Carga Eletrônica</span>
            </div>
            <div>
              <img src={remo} />
              <span>Remo Digital</span>
            </div>
            <div>
              <img src={luva} />
              <span>Luvas Especiais</span>
            </div>
            <div>
              <img src={plataforma} />
              <span>Plataforma Giratória</span>
            </div>
          </ItemList>
        </Category>

        <Category>
          <h2>Mais Vendidos</h2>
          <ItemList>
            <div>
              <img src={alcool} />
              <span>Álcool Gel</span>
            </div>
            <div>
              <img src={whey } />
              <span>Whey</span>
            </div>
            <div>
              <img src={lenco } />
              <span>Lenço Álcool 70%</span>
            </div>
            <div>
              <img src={colchonete} />
              <span>Colchonete Antiviral</span>
            </div>
          </ItemList>
        </Category>


      </CategoryList>
    </Container>
  );
}
