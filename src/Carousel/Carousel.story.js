import React from 'react';
import { storiesOf } from '@storybook/react';
import { GROUPS } from '../../.storybook/hierarchySeparators';
import { Slide } from './Slide';
import { AutoRotatingCarousel } from './AutoRotatingCarousel';

storiesOf(`${GROUPS.COMPONENTS}|Carousel`, module)
  .add('carousel single', () => (
    <div style={{ width: '700px', height: '400px' }}>
      <AutoRotatingCarousel>
        <Slide
          title="Seja bem-vindo ao novo Portal"
          titleVariant="h4"
          titleColor="#f69322"
          subtitle="Com novos recursos e design mais atrativo e fácil de usar. Aproveite as novidades!<br/>Dúvidas? Acesse a Central de Relacionamentos, HelpTec."
          subtitleVariant="subtitle2"
          backgroundImage="https://ak6.picdn.net/shutterstock/videos/21643606/thumb/1.jpg"
          buttonTitle="ACESSAR HELPTEC"
          buttonLink="https://helpdesk.portaltecsinapse.com.br/"
          target="blank"
        />
      </AutoRotatingCarousel>
    </div>
  ))
  .add('carousel multiple', () => (
    <div style={{ width: '700px', height: '400px' }}>
      <AutoRotatingCarousel autoplay>
        <Slide
          link="http://www.google.com.br"
          title="Relatório de Manuntenção BMW 2019"
          subtitle="Já estão disponíveis todos os relatórios de manuntenção de 2019 com todas as informações técnicas de recall"
          backgroundImage="https://www.sokolovelaw.com/wp-content/uploads/automotive-mechanics.jpg"
          target="blank"
        />
        <Slide
          link="http://www.google.com.br"
          title="Comitê Geral Seleciona Integrantes"
          subtitle="O comitê geral elegeu os novos membros para o Premium Selection"
          backgroundImage="https://autonesian.com/wp-content/uploads/2017/02/astra-autoprima-bmw-2-700x400.jpg"
          target="blank"
        />
      </AutoRotatingCarousel>
    </div>
  ))
  .add('carousel mobile', () => (
    <div style={{ width: '100vw', height: '300px' }}>
      <AutoRotatingCarousel variant="mobile">
        <Slide
          link="http://www.google.com.br"
          title="Relatório de Manuntenção BMW 2019"
          subtitle="Já estão disponíveis todos os relatórios de manuntenção de 2019 com todas as informações técnicas de recall"
          backgroundImage="http://b.static.trunity.net/files/299501_299600/299598/vertical-farming-chris-jacobs.jpg"
          target="blank"
        />
        <Slide
          link="http://www.google.com.br"
          title="Comitê Geral Seleciona Integrantes"
          subtitle="O comitê geral elegeu os novos membros para o Premium Selection"
          backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmUxJNtEYiYWD1z2-cCmBdhG4ODYGuZhEJISBcTJTcTg9UIeX7"
          target="blank"
        />
      </AutoRotatingCarousel>
    </div>
  ));
