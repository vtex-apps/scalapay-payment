export const bodyScalapay = {
	"reference": "500128",
	"orderId": "1084452709001",
	"shopperInteraction": "ecommerce",
	"transactionId": "7EA2B84046B24D3F9D80DEFDD2E82935",
	"paymentId": "03902386FB55445EAE69E7FE0203FCC7_1",
	"paymentMethod": "Scalapay",
	"merchantName": "vtexeurope",
	"card": {
		"holder": null,
		"number": null,
		"csc": null,
		"expiration": {
			"month": null,
			"year": null
		},
		"document": null,
		"token": null
	},
	"value": 1000.0,
	"currency": "EUR",
	"installments": 1,
	"installmentsInterestRate": 0.0,
	"installmentsValue": 1000.0,
	"deviceFingerprint": null,
	"ipAddress": "186.114.166.188",
	"miniCart": {
		"buyer": {
			"id": "074e4c99-e803-4d7b-a37a-ec388becf581",
			"firstName": "camilo",
			"lastName": "camargo",
			"document": "1082981543",
			"documentType": "C.C",
			"corporateName": null,
			"tradeName": null,
			"corporateDocument": null,
			"isCorporate": false,
			"email": "camilo.camargo@vtex.com.br",
			"phone": "+573005542927",
			"createdDate": null
		},
		"shippingAddress": {
			"country": "COL",
			"street": "Calle 123",
			"number": null,
			"complement": null,
			"neighborhood": null,
			"postalCode": "08001",
			"city": "Barranquilla",
			"state": "ATLÁNTICO"
		},
		"billingAddress": {
			"country": "COL",
			"street": "Calle 123",
			"number": null,
			"complement": null,
			"neighborhood": null,
			"postalCode": "08001",
			"city": "Barranquilla",
			"state": "ATLÁNTICO"
		},
		"items": [
			{
				"id": "14",
				"name": "Rollitos paquete x12 Guayaba y arequipe",
				"price": 1000.0,
				"quantity": 1,
				"discount": -150.0,
				"deliveryType": "Normal",
				"categoryId": "9",
				"sellerId": "vtexcolseller01"
			}
		],
		"shippingValue": 900.0,
		"taxValue": 0.0
	},
	"url": "http://pcopayment--vtexcol.myvtex.com/admin/checkout/#/orders?q=1084452702723",
	"callbackUrl": "https://vtexcol.vtexpayments.com.br/api/pvt/payment-provider/transactions/7EA2B84046B24D3F9D80DEFDD2E82935/payments/CEDA61F0F6DE460EBBCDDC405BE2F98B/callback?accountName=vtexcol",
	"returnUrl": "https://vtexcol.vtexpayments.com.br/payment-provider/transactions/7EA2B84046B24D3F9D80DEFDD2E82935/payments/CEDA61F0F6DE460EBBCDDC405BE2F98B/return?accountName=vtexcol",
	"inboundRequestsUrl": "https://vtexcol.vtexpayments.com.br/payment-provider/transactions/7EA2B84046B24D3F9D80DEFDD2E82935/payments/CEDA61F0F6DE460EBBCDDC405BE2F98B/inbound-request/:action"
}