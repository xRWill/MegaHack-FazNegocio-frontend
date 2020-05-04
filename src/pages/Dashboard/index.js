import React from 'react';
import ski from '~/assets/images/products/ski.png'

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
              <span>Produto Top</span>
            </div>
            <div>
              <img src={ski} />
              <span>Produto Top</span>
            </div>
            <div>
              <img src={ski} />
              <span>Produto Top</span>
            </div>
            <div>
              <img src={ski} />
              <span>Produto Top</span>
            </div>
          </ItemList>
        </Category>

        <Category>
          <h2>Inovações</h2>
          <ItemList>
            <div>
              <img src={ski} />
              <span>Produto Top</span>
            </div>
            <div>
              <img src={ski} />
              <span>Produto Top</span>
            </div>
            <div>
              <img src={ski} />
              <span>Produto Top</span>
            </div>
            <div>
              <img src={ski} />
              <span>Produto Top</span>
            </div>
          </ItemList>
        </Category>

        <Category>
          <h2>Mais Vendidos</h2>
          <ItemList>
            <div>
              <img src={ski} />
              <span>Produto Top</span>
            </div>
            <div>
              <img src={ski} />
              <span>Produto Top</span>
            </div>
            <div>
              <img src={ski} />
              <span>Produto Top</span>
            </div>
            <div>
              <img src={ski} />
              <span>Produto Top</span>
            </div>
          </ItemList>
        </Category>


      </CategoryList>
    </Container>
  );
}
