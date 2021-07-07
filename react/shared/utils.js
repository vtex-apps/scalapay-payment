import { config } from '../config/configScalapay'

export async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function retry(ms, fn, object) {
  await sleep(ms)
  return fn(...object)
}

export const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, (c) => {
      let r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
    .replace(/-/g, '')
    .toUpperCase()
}

export const getOrderData = () => {
  const body = {}
  const orderForm = vtexjs.checkout.orderForm
  const countryCode = orderForm.shippingData.address.country.slice(0, 2)
  const currency = 'EUR'

  body.merchantReference = orderForm.orderGroup
  body.orderExpiryMilliseconds = 1800000

  body.merchant = {
    redirectConfirmUrl: config.redirectUrl(),
    redirectCancelUrl: config.redirectUrl(),
  }

  body.totalAmount = {
    amount: String(orderForm.value / 100),
    currency,
  }

  body.consumer = {
    phoneNumber: orderForm.clientProfileData.phone,
    givenNames: orderForm.clientProfileData.firstName,
    surname: orderForm.clientProfileData.lastName,
    email: orderForm.clientProfileData.email,
  }

  body.shipping = {
    name: orderForm.shippingData.address.receiverName,
    line1: orderForm.shippingData.address.street,
    suburb: orderForm.shippingData.address.city,
    postcode: orderForm.shippingData.address.postalCode,
    countryCode,
    phoneNumber: orderForm.clientProfileData.phone,
  }

  body.items = orderForm.items.map((item) => {
    const productCategoryIds = item.productCategoryIds
      .split('/')
      .filter((x) => x)
    const subcategories = item.productCategories

    delete subcategories[productCategoryIds[0]]

    const category =
      item.productCategories[productCategoryIds[0]] || 'MainCategory'
    const subcategory = Object.values(subcategories)

    return {
      name: item.name,
      category,
      subcategory: subcategory.length ? subcategory : ['MainCategory'],
      brand: item.additionalInfo.brandName,
      gtin: String(item.ean | item.refId | item.id),
      sku: item.id,
      quantity: item.quantity,
      price: {
        amount: String(item.price / 100),
        currency,
      },
    }
  })

  return body
}

export const backdrop = (active = true) => {
  const $div = $('#scalapay-background')

  if (active && !$div.length) {
    const el = document.createElement('div')

    $(el)
      .attr('id', 'scalapay-background')
      .css({
        'background-color': 'rgba(0,0,0,0.8)',
        position: 'fixed',
        width: '100%',
        height: '100vh',
        top: 0,
        'z-index': '100',
      })
      .appendTo($('body'))
  }

  if (!active && $div.length) {
    $div.remove()
  }
}
