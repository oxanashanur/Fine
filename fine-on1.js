import React, { Component } from "react";
import ItemList from "../itemList";
import ItemDetails, { Field } from "../";
import fineService from "../../services/gotService";
import RowBlock from "../rowBlock";

export default class FineOn extends Component {
  gotService = new fineService();

  state = {
    selectedFine: null,
    error: false,
  };

  onItemSelected = (id) => {
    this.setState({
      selectedFine: id,
    });
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.fineService.getAllFines}
        renderItem={({ name, certificate }) => `${name} (${certificate})`}
      />
    );

    const itemDetails = (
      <ItemDetails
        itemId={this.state.selectedFine}
        getData={this.fineService.getFine}
      >
        <Field field="decree" label="Постановление" />
        <Field field="certificate" label="Свидетельство о регистрации:" />
        <Field field="data" label="Дата постановления:" />
        <Field field="violation" label="Нарушение:" />
        <Field field="surname" label="Получатель платежа:" />
        <Field field="inn" label="ИНН:" />
        <Field field="kpp" label="КПП:" />
        <Field field="score" label="Расчетный счет:" />
        <Field field="bank" label="Банк получателя:" />
        <Field field="bik" label="БИК:" />
        <Field field="okato" label="ОКТМО(ОКАТО):" />
        <Field field="kbk" label="КБК:" />
        <Field field="sum" label="Сумма штафа:" />
        <Field field="discount" label="Скидка:" />
        <Field field="toPay" label="К оплате:" />
      </ItemDetails>
    );

    return <RowBlock left={itemList} right={itemDetails} />;
  }
}
