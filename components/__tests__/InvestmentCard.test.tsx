// __tests__/InvestmentCard.test.tsx
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import InvestmentCard from '../InvestmentCard';
import { Alert } from 'react-native';

jest.spyOn(Alert, 'alert');

describe('InvestmentCard', () => {
  it('displays the correct investment information', () => {
    const { getByText } = render(
      <>
        <InvestmentCard code="MXRF11" earnings="Rendimento: R$ 0,09" amount="R$ 11,52" date="DAQUI A 2 DIAS" />
        <InvestmentCard code="VISC11" earnings="Rendimento: R$ 0,80" amount="R$ 10,40" date="DAQUI A 2 DIAS" />
        <InvestmentCard code="RVBI11" earnings="Rendimento: R$ 0,75" amount="R$ 18,75" date="DAQUI A 3 DIAS" />
        <InvestmentCard code="CPTS11" earnings="Rendimento: R$ 0,07" amount="R$ 2,95" date="DAQUI A 5 DIAS" />
        <InvestmentCard code="MCHY11" earnings="Rendimento: NÃO INFORMADO" amount="--" date="NÃO INFORMADO" />
      </>
    );

    expect(getByText('MXRF11')).toBeTruthy();
    expect(getByText('VISC11')).toBeTruthy();
    expect(getByText('RVBI11')).toBeTruthy();
    expect(getByText('CPTS11')).toBeTruthy();
    expect(getByText('MCHY11')).toBeTruthy();
  });

  it('displays alert', () => {
    //mocks
    const mockAlert = jest.fn()
    global.alert = mockAlert;


    const {getByText} = render(
      <InvestmentCard code="MXRF11" earnings="Rendimento: R$ 0,09" amount="R$ 11,52" date="DAQUI A 2 DIAS" />
    );

    const botao_mais_detalhes = getByText("MXRF11")

    //presiona o botão
    fireEvent(getByText("Mais detalhes"), 'click')

    expect(Alert.alert).toHaveBeenCalled();
  });  
});
