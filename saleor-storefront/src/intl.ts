import { defineMessages, IntlShape } from "react-intl";

export const commonMessages = defineMessages({
  search: {
    defaultMessage: "szukaj",
  },
  outOfStock: {
    defaultMessage: "Brak w magazynie",
  },
  lowStock: {
    defaultMessage: "Niska ilość",
  },
  noItemsAvailable: {
    defaultMessage: "Brak dostępnych przedmiotów",
  },
  noPurchaseAvailable: {
    defaultMessage: "Niedostępne",
  },
  purchaseAvailableOn: {
    defaultMessage: `Będzie dostępne {date} o {time}`,
  },
  youMightLike: {
    defaultMessage: "Myślimy że Ci się spodoba",
  },
  choosePaymentMethod: {
    defaultMessage: "Proszę wybrać metodę płatności",
  },
  provideEmailAddress: {
    defaultMessage: "Proszę podać adres email.",
  },
  account: {
    defaultMessage: "Konto",
  },
  myAccount: {
    defaultMessage: "Moje Konto",
  },
  orderHistory: {
    defaultMessage: "Historia zamówień",
  },
  addressBook: {
    defaultMessage: "Adresy",
  },
  logOut: {
    defaultMessage: "Wyloguj",
  },
  firstName: {
    defaultMessage: "Imię",
  },
  lastName: {
    defaultMessage: "Nazwisko",
  },
  password: {
    defaultMessage: "Hasło",
  },
  quantity: {
    defaultMessage: "Ilość",
  },
  sku: {
    defaultMessage: "SKU",
  },
  maxQtyIs: {
    defaultMessage: "Maksymalna ilość to {maxQuantity}",
  },
  qty: {
    defaultMessage: "Ilość",
  },
  subtotal: {
    defaultMessage: "Razem",
  },
  shipping: {
    defaultMessage: "Wysyłka",
  },
  promoCode: {
    defaultMessage: "Kod promocyjny",
  },
  total: {
    defaultMessage: "Razem",
  },
  totalPrice: {
    defaultMessage: "Cena za całość",
  },
  checkout: {
    defaultMessage: "Checkout",
  },
  eMail: {
    defaultMessage: "Adres email",
  },
  shortEmail: {
    defaultMessage: "Email",
  },
  loading: {
    defaultMessage: "Ładowanie",
  },
  products: {
    defaultMessage: "Produkty",
  },
  price: {
    defaultMessage: "Cena",
  },
  variant: {
    defaultMessage: "Wariant",
  },
  phone: {
    defaultMessage: "Telefon",
  },
  phoneNumber: {
    defaultMessage: "Numer telefonu: {phone}",
  },
  showEmail: {
    defaultMessage: "Email: {email}",
  },
  save: {
    defaultMessage: "Zapisz",
  },
  add: {
    defaultMessage: "Dodaj",
  },
  filterHeader: {
    defaultMessage: "FILTRY",
  },
  clearFilterHeader: {
    defaultMessage: "WYCZYŚĆ FILTRY",
  },
  status: {
    defaultMessage: "Status",
  },
  cancel: {
    defaultMessage: "Anuluj",
  },
  home: {
    defaultMessage: "Strona główna",
  },
});

export const checkoutMessages = defineMessages({
  stepNameAddress: {
    defaultMessage: "Adres",
  },
  stepNameShipping: {
    defaultMessage: "Wysyłka",
  },
  stepNamePayment: {
    defaultMessage: "Płatność",
  },
  stepNameReview: {
    defaultMessage: "Ocena zamówienia",
  },
  addressNextActionName: {
    defaultMessage: "Wysyłka",
  },
  shippingNextActionName: {
    defaultMessage: "Płatność",
  },
  paymentNextActionName: {
    defaultMessage: "Ocena",
  },
  reviewNextActionName: {
    defaultMessage: "Kup",
  },
  addNewAddress: {
    defaultMessage: "Dodaj nowy adres",
  },
  shippingMethod: {
    defaultMessage: "METODA WYSYŁKI",
  },
  billingAddress: {
    defaultMessage: "ADRES PŁATNOŚCI",
  },
  paymentMethod: {
    defaultMessage: "METODA PŁATNOŚCI",
  },
  reviewOrder: {
    defaultMessage: "OCENA ZAMÓWIENIA",
  },
  shippingAddress: {
    defaultMessage: "ADRES WYSYŁKI",
  },
  continueShopping: {
    defaultMessage: "KONTYNUUJ ZAKUPY",
  },
});

export const prodListHeaderCommonMsg = defineMessages({
  sortOptionsClear: {
    defaultMessage: "Wyczyść...",
  },
  sortOptionsPrice: {
    defaultMessage: "Cena Nisko-Wysoko",
  },
  sortOptionsPriceDsc: {
    defaultMessage: "Cena Wysoko-Nisko",
  },
  sortOptionsName: {
    defaultMessage: "Nazwa od A",
  },
  sortOptionsNameDsc: {
    defaultMessage: "Nazwy od Z",
  },
  sortOptionsUpdatedAt: {
    defaultMessage: "Ostatnio zaktualizowane (rosnąco)",
  },
  sortOptionsUpdatedAtDsc: {
    defaultMessage: "Ostatnio zaktualizowane (malejąco)",
  },
});

export const paymentStatusMessages = defineMessages({
  notCharged: {
    defaultMessage: "Nie obciążono",
  },
  partiallyCharged: {
    defaultMessage: "Częściowo obciążono",
  },
  fullyCharged: {
    defaultMessage: "Obciążono",
  },
  partiallyRefunded: {
    defaultMessage: "Zwrócono część kwoty",
  },
  fullyRefunded: {
    defaultMessage: "Zwrócono pełną kwotę",
  },
});

export const orderStatusMessages = defineMessages({
  draft: {
    defaultMessage: "Szkic",
  },
  unfulfilled: {
    defaultMessage: "W kolejce",
  },
  partiallyFulfilled: {
    defaultMessage: "W trakcie",
  },
  fulfilled: {
    defaultMessage: "Wysłano",
  },
  canceled: {
    defaultMessage: "Anulowano",
  },
});

export function translatePaymentStatus(
  status: string,
  intl: IntlShape
): string {
  switch (status) {
    case "Not charged":
      return intl.formatMessage(paymentStatusMessages.notCharged);
    case "Partially charged":
      return intl.formatMessage(paymentStatusMessages.partiallyCharged);
    case "Fully charged":
      return intl.formatMessage(paymentStatusMessages.fullyCharged);
    case "Partially refunded":
      return intl.formatMessage(paymentStatusMessages.partiallyRefunded);
    case "Fully refunded":
      return intl.formatMessage(paymentStatusMessages.fullyRefunded);
    default:
      return status;
  }
}

export function translateOrderStatus(status: string, intl: IntlShape): string {
  switch (status) {
    case "Draft":
      return intl.formatMessage(orderStatusMessages.draft);
    case "Unfulfilled":
      return intl.formatMessage(orderStatusMessages.unfulfilled);
    case "Partially fulfilled":
      return intl.formatMessage(orderStatusMessages.partiallyFulfilled);
    case "Fulfilled":
      return intl.formatMessage(orderStatusMessages.fulfilled);
    case "Canceled":
      return intl.formatMessage(orderStatusMessages.canceled);
    default:
      return status;
  }
}
